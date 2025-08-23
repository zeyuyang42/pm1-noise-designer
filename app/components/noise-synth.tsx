"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import BlinkingPixels from "./blinking-pixels";

// Minimal ambient types for RNBO
declare global {
  interface Window {
    RNBO?: any;
    webkitAudioContext?: typeof AudioContext;
    guardrails?: (ctx?: any) => void;
  }
}

// ---------------------- Constants ----------------------
const PATCH_URL = "/rnbo-export/pm1.export.json";
const DEP_URL = "/rnbo-export/dependencies.json"; // only needed when there is dependencies like samples

// Synth Parameters based on the pm1.export.json from RNBO
const PARAM_IDS = {
  volume: "gain-output",
  startStop: "start/stop",
  filterBands: [
    "gain-bp-30",
    "gain-bp-60",
    "gain-bp-125",
    "gain-bp-250",
    "gain-bp-500",
    "gain-bp-1k",
    "gain-bp-2k",
    "gain-bp-4k",
    "gain-bp-8k",
    "gain-bp-16k",
  ],
} as const;

// Preset configurations for the synth
const DEFAULT_PRESETS = [
  {
    id: 0,
    name: "white",
    bands: [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
    vol: 0.8,
  },
  {
    id: 1,
    name: "pink",
    bands: [0.85, 0.83, 0.80, 0.78, 0.75, 0.72, 0.70, 0.68, 0.65, 0.62],
    vol: 0.8,
  },
  {
    id: 2,
    name: "brown",
    bands: [0.95, 0.90, 0.85, 0.78, 0.70, 0.62, 0.55, 0.48, 0.40, 0.35],
    vol: 0.8,
  },
  {
    id: 3,
    name: "grey",
    bands: [0.85, 0.80, 0.70, 0.60, 0.50, 0.50, 0.60, 0.70, 0.80, 0.85],
    vol: 0.8,
  },
  {
    id: 4,
    name: "airplane",
    bands: [0.95, 0.85, 0.75, 0.60, 0.45, 0.30, 0.20, 0.10, 0.05, 0.02],
    vol: 0.9,
  },
  {
    id: 5,
    name: "peak",
    bands: [0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90, 1.00, 1.00],
    vol: 0.6,
  },
] as const;


// ---------------------- Synth Engine Hook ----------------------
// Encapsulates RNBO device, AudioContext, parameter refs, and control logic.
// UI consumes this hook so engine & view are decoupled.
function NoiseSynthEngine() {

  type Parameters = {
    vol: number;
    bands: number[];
  };

  type Presets = {
    id: number;
    name: string;
    params: Parameters;
  }

  // except the preset system, each channel has its own state
  // it is isolated from the preset system
  type ChannelStatus = {
    name: string;
    sourcePresetId?: number;
    isModified?: boolean; // true if user has modified params so it's not in sync with the source preset
    params: Parameters;
  };

  const [running, setRunning] = useState(false); // indicate if the synth engine is running

  const [vol, setVol] = useState<number>(0); // the volume level
  const [bands, setBands] = useState<number[]>(Array.from({ length: 10 }, () => 0)); // the filter bank levels

  const [channel, setChannel] = useState<number>(0); // current active channel



const defaultChannelStatus: ChannelStatus[] = [
  { name: "white", sourcePresetId: 0, isModified: false, params: { vol: 0.8, bands: [...DEFAULT_PRESETS[0].bands] } },
  { name: "pink", sourcePresetId: 1, isModified: false, params: { vol: 0.8, bands: [...DEFAULT_PRESETS[1].bands] } },
  { name: "brown", sourcePresetId: 2, isModified: false, params: { vol: 0.8, bands: [...DEFAULT_PRESETS[2].bands] } }
];

const [channelStatus, setChannelStatus] = useState<ChannelStatus[]>(defaultChannelStatus);

// Load from localStorage only on client
useEffect(() => {
  const stored = window.localStorage.getItem("channelStatus");
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as ChannelStatus[];
      setChannelStatus(parsed);
    } catch (e) {
      console.warn("Failed to parse stored channelStatus:", e);
    }
  }
}, []);

  // Track the name of the most recently loaded preset (via click)
  const [loadedPresetName, setLoadedPresetName] = useState<string | null>(null);


  // Refs to audio / rnbo objects
  const ctxRef = useRef<AudioContext | null>(null);
  const deviceRef = useRef<any>(null);
  const startStopParamRef = useRef<any>(null);
  const volumeParamRef = useRef<any>(null);
  const filterParamRefs = useRef<any[]>([]);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    (async () => {
      await setup();
    })();

    return () => {
      try {
        deviceRef.current?.node?.disconnect?.();
        if (ctxRef.current?.state === "running") ctxRef.current.suspend();
      } catch { }
    };
  }, []);

  // --- Public API (UI -> Engine) ---
  const toggleAudio = async () => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    const isRunning = ctx.state === "running";
    if (isRunning) {
      await ctx.suspend();
      setRunning(false);
      if (startStopParamRef.current) startStopParamRef.current.value = 0;
    } else {
      await ctx.resume();
      setRunning(true);
      if (startStopParamRef.current) startStopParamRef.current.value = 1;
    }
  };

  // --- // -- Parameter change handlers ----
  const onVolumeChange = (v: number) => {
    setVol(v);
    if (volumeParamRef.current) {
      volumeParamRef.current.value = v;
    }
  };

  const onBandChange = (index: number, v: number) => {
    setBands((arr) => {
      const next = [...arr];
      next[index] = v;
      return next;
    });
    const param = filterParamRefs.current[index];
    if (param) param.value = v;
  };
  // ---------------------------------------

  // apply preset to current synth engine, it is not necessary to connect with a specific channel
  // but it is important to update the UI to reflect the new settings
  const applyPreset = (preset: typeof DEFAULT_PRESETS[number]) => {
    setBands([...preset.bands]);
    filterParamRefs.current.forEach((p, i) => { if (p) p.value = preset.bands[i]; });

    setVol(preset.vol);
    if (volumeParamRef.current) volumeParamRef.current.value = preset.vol;
    setLoadedPresetName(preset.name);
  };

  const applyPresetToChannel = (preset: typeof DEFAULT_PRESETS[number], channel: number) => {
    applyPreset(preset); // apply the preset to the engine as the first step

    setChannelStatus((prev) => {
      const next = [...prev];
      next[channel] = {
        name: preset.name,
        sourcePresetId: preset.id,
        params: { vol: preset.vol, bands: [...preset.bands] }
      };
      return next;
    });
  };

  // Save the current vol and bands into the current channel's state
  const savePresetToCurrentChannel = () => {
    setChannelStatus((prev) => {
      const next = [...prev];
      next[channel] = {
        ...next[channel],
        params: {
          vol,
          bands: [...bands]
        }
      };
      return next;
    });
  };

  const switchChannel = (ch: number) => {
    // Save current channel's state before switching only when not using a loaded preset
    if (!loadedPresetName) savePresetToCurrentChannel();
    setChannel(ch);
    const chStatus = channelStatus[ch];

    setBands(chStatus.params.bands);
    setVol(chStatus.params.vol);
    // Apply to audio engine
    chStatus.params.bands.forEach((v, i) => {
      filterParamRefs.current[i].value = v;
    });
    volumeParamRef.current.value = chStatus.params.vol;
    setLoadedPresetName(null);
  };

  // Persist channelStatus to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("channelStatus", JSON.stringify(channelStatus));
    }
  }, [channelStatus]);

  // Expose engine state & controls
  return {
    state: {
      running,
      vol,
      bands,
      channel,
      channelStatus,
      loadedPresetName,
    },
    controls: {
      toggleAudio,
      onVolumeChange,
      onBandChange,
      switchChannel,
      applyPreset,
      savePresetToCurrentChannel,
      setChannelStatus,
      applyPresetToChannel,
      setLoadedPresetName,
    }
  } as const;

  // ---------------------- engine internals ----------------------
  async function setup() {
    // Create AudioContext
    const WAContext: typeof AudioContext =
      (window.AudioContext as any) || window.webkitAudioContext!;
    const context = new WAContext();
    ctxRef.current = context;

    // Fetch the exported patcher
    let response: Response | undefined;
    let patcher: any;
    try {
      response = await fetch(PATCH_URL);
      patcher = await response.json();

      if (!window.RNBO) {
        await loadRNBOScript(patcher.desc.meta.rnboversion);
      }
    } catch (err) {
      const errorContext: any = { error: err };
      if (response && (response.status >= 300 || response.status < 200)) {
        errorContext.header = `Couldn't load patcher export bundle`;
        errorContext.description = `Tried to load "${PATCH_URL}". Ensure your RNBO export is in /public/rnbo-export.`;
      }
      if (typeof window.guardrails === "function") window.guardrails(errorContext);
      else console.error(err);
      return;
    }

    // Optional dependencies (e.g., samples)
    let dependencies: any[] = [];
    try {
      const depRes = await fetch(DEP_URL);
      if (depRes.ok) {
        dependencies = await depRes.json();
        dependencies = dependencies.map((d: any) =>
          d.file ? Object.assign({}, d, { file: "/rnbo-export/" + d.file }) : d
        );
      }
    } catch { }

    // Create device
    let device: any;
    try {
      device = await (window as any).RNBO.createDevice({ context, patcher });
    } catch (err) {
      if (typeof window.guardrails === "function") window.guardrails({ error: err });
      else console.error(err);
      return;
    }

    if (dependencies.length) await device.loadDataBufferDependencies(dependencies);

    // Connect device to speakers directly (no extra master gain since gain is inside the patch)
    device.node.connect(context.destination);
    deviceRef.current = device;

    // ---- Apply defaults ----
    const paramsArr: any[] = Array.from(device.parameters || []);
    const byId = (id: string) => paramsArr.find((p: any) => p.paramId === id || p.name === id);

    // Attempt to retrieve channel status from localStorage
    let savedChannelStatus: ChannelStatus[] | null = null;
    try {
      const stored = window.localStorage.getItem("channelStatus");
      if (stored) {
        savedChannelStatus = JSON.parse(stored);
      }
    } catch {
      console.warn("Failed to parse saved channelStatus from localStorage");
    }

    // Use volume and bands from active channel (0 by default)
    const savedVol = savedChannelStatus?.[0]?.params?.vol ?? 0.8;
    const savedBands = savedChannelStatus?.[0]?.params?.bands ?? Array.from({ length: 10 }, () => 0.7);

    // Set output gain
    const volP = byId(PARAM_IDS.volume);
    if (volP) {
      volP.value = savedVol;
      setVol(savedVol);
      volumeParamRef.current = volP;
    }

    // Init 10 bands
    PARAM_IDS.filterBands.forEach((id, i) => {
      const p = byId(id);
      if (p) {
        p.value = savedBands[i];
      }
    });

    // Start the patch's transport/state
    const startP = byId(PARAM_IDS.startStop);
    if (startP) startP.value = 1;

    // Reflect internal parameter changes in the UI
    device.parameterChangeEvent?.subscribe((param: any) => {
      if (param.paramId === PARAM_IDS.volume || param.name === PARAM_IDS.volume) {
        setVol(Number(param.value) || 0);
        return;
      }
      const idx = PARAM_IDS.filterBands.findIndex((id) => id === param.paramId || id === param.name);
      if (idx >= 0) {
        setBands((arr) => {
          const next = [...arr];
          next[idx] = Number(param.value) || 0;
          return next;
        });
      }
    });

    // Title in parent page (if present)
    const title = document.getElementById("patcher-title");
    if (title) {
      title.textContent = `${patcher.desc.meta?.filename || "PM1"} (v${patcher.desc.meta?.rnboversion})`;
    }

    // Resolve parameters by paramId (fall back to name if needed)
    const findParam = (id: string) =>
      device.parameters.find((p: any) => p.paramId === id || p.name === id);

    // Volume param
    const volParam = findParam(PARAM_IDS.volume);
    if (volParam) {
      volumeParamRef.current = volParam;
      setVol(Number(volParam.value) || 0);
    }

    // Start/Stop param
    startStopParamRef.current = findParam(PARAM_IDS.startStop) || null;

    // Filter band params
    filterParamRefs.current = PARAM_IDS.filterBands.map((id) => findParam(id));
    setBands(
      filterParamRefs.current.map((p) => (p ? Number(p.value) || 0 : 0))
    );

  }
}

function loadRNBOScript(version: string) {
  return new Promise<void>((resolve, reject) => {
    if (/^\d+\.\d+\.\d+-dev$/.test(version)) {
      reject(new Error("Debug RNBO version exported—please export with a release RNBO version."));
      return;
    }
    const el = document.createElement("script");
    el.src =
      "https://c74-public.nyc3.digitaloceanspaces.com/rnbo/" +
      encodeURIComponent(version) +
      "/rnbo.min.js";
    el.onload = () => resolve();
    el.onerror = (err) => {
      console.log(err);
      reject(new Error("Failed to load rnbo.js v" + version));
    };
    document.body.append(el);
  });
}


// ---------------------- Noise Synth UI ----------------------
// Receives engine state/handlers via props. No RNBO logic here.
function NoiseSynthUI(props: ReturnType<typeof NoiseSynthEngine>) {
  const {
    state: {
      running,
      vol,
      bands,
      channel,
      channelStatus,
      loadedPresetName
    },
    controls: {
      toggleAudio,
      onVolumeChange,
      onBandChange,
      switchChannel,
      applyPreset,
      savePresetToCurrentChannel,
      setChannelStatus,
      applyPresetToChannel,
      setLoadedPresetName
    }
  } = props;

  // --- Add state for renaming channel ---
  const [renamingChannel, setRenamingChannel] = useState<number | null>(null);
  const [tempChannelName, setTempChannelName] = useState<string>("");

  const [timeString, setTimeString] = useState<string | null>(null);
  const [isBlinking, setIsBlinking] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      setTimeString(
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      );
    };
    updateTime(); // set immediately
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          {/* Transport */}
          <div className="flex flex-cols-3 gap-4 ">
            <section className="rounded-2xl border border-neutral-800 p-4 ">
              <h2 className="font-medium mb-2">Playback</h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setIsBlinking((prev) => !prev);
                    toggleAudio();
                  }}
                  className={`px-4 py-2 w-24 rounded-2xl border border-neutral-700 hover:brightness-95 ${running ? "bg-start-button text-neutral-900" : "bg-neutral-200 text-neutral-900"
                    }`}
                >
                  {running ? "Stop" : "Start"}
                </button>
              </div>
            </section>

            <section className="bg-black h-full w-42 flex flex-col justify-between">
              <div className="flex justify-stretch px-3 py-1 text-white text-sm font-mono text-center">
                <span>{timeString ?? "--:--"}</span>
                <span className="w-full"></span>
                <span>{loadedPresetName || channelStatus[channel].name}</span>
              </div>
              <div className="flex-grow" />
              <div className="justify-center items-end">
                <BlinkingPixels rows={7} cols={21} active={isBlinking} />
              </div>
            </section>


            <section className="rounded-2xl border border-neutral-800 p-4 ">
              <h2 className="font-medium mb-2">Channel Selection</h2>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 ml-2">
                  {/* Channel 0 */}
                  {renamingChannel === 0 ? (
                    <input
                      autoFocus
                      className="w-24 px-4 py-2 rounded-2xl border border-neutral-700 text-sm text-black focus:outline-none focus:ring-0"
                      value={tempChannelName}
                      onChange={(e) => setTempChannelName(e.target.value)}
                      onBlur={() => {
                        setChannelStatus((prev) => {
                          const next = [...prev];
                          next[0] = { ...next[0], name: tempChannelName };
                          return next;
                        });
                        setRenamingChannel(null);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          setChannelStatus((prev) => {
                            const next = [...prev];
                            next[0] = { ...next[0], name: tempChannelName };
                            return next;
                          });
                          setRenamingChannel(null);
                        }
                      }}
                    />
                  ) : (
                    <button
                      onClick={() => {
                        switchChannel(0);
                        setLoadedPresetName(null);
                      }}
                      onDoubleClick={() => {
                        setTempChannelName(channelStatus[0].name);
                        setRenamingChannel(0);
                      }}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        const id = parseInt(e.dataTransfer.getData("presetId"), 10);
                        const preset = DEFAULT_PRESETS.find((p) => p.id === id);
                        if (!isNaN(id) && preset) {
                          if (channel === 0) {
                            // If dropped on selected channel, apply immediately
                            applyPresetToChannel(preset, 0);
                          } else {
                            setChannelStatus((arr) => {
                              const next = [...arr];
                              next[0] = {
                                ...next[0],
                                name: preset.name,
                                params: { vol: preset.vol, bands: [...preset.bands] },
                              };
                              return next;
                            });
                          }
                        }
                      }}
                      className={`w-24 px-4 py-2 rounded-2xl border border-neutral-700 hover:brightness-95 ${channel === 0 ? "bg-neutral-900 text-white" : "bg-neutral-200 text-neutral-900"
                        }`}
                      title="Channel 1"
                    >
                      {channelStatus[0].name}
                    </button>
                  )}
                  {/* Channel 1 */}
                  {renamingChannel === 1 ? (
                    <input
                      autoFocus
                      className="w-24 px-4 py-2 rounded-2xl  border border-neutral-700 text-sm text-black focus:outline-none focus:ring-0"
                      value={tempChannelName}
                      onChange={(e) => setTempChannelName(e.target.value)}
                      onBlur={() => {
                        setChannelStatus((prev) => {
                          const next = [...prev];
                          next[1] = { ...next[1], name: tempChannelName };
                          return next;
                        });
                        setRenamingChannel(null);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          setChannelStatus((prev) => {
                            const next = [...prev];
                            next[1] = { ...next[1], name: tempChannelName };
                            return next;
                          });
                          setRenamingChannel(null);
                        }
                      }}
                    />
                  ) : (
                    <button
                      onClick={() => {
                        switchChannel(1);
                        setLoadedPresetName(null);
                      }}
                      onDoubleClick={() => {
                        setTempChannelName(channelStatus[1].name);
                        setRenamingChannel(1);
                      }}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        const id = parseInt(e.dataTransfer.getData("presetId"), 10);
                        const preset = DEFAULT_PRESETS.find((p) => p.id === id);
                        if (!isNaN(id) && preset) {
                          if (channel === 1) {
                            applyPresetToChannel(preset, 1);
                          } else {
                            setChannelStatus((arr) => {
                              const next = [...arr];
                              next[1] = {
                                ...next[1],
                                name: preset.name,
                                params: { vol: preset.vol, bands: [...preset.bands] },
                              };
                              return next;
                            });
                          }
                        }
                      }}
                      className={`w-24 px-4 py-2 rounded-2xl border border-neutral-700 hover:brightness-95 ${channel === 1 ? "bg-neutral-900 text-white" : "bg-neutral-200 text-neutral-900"
                        }`}
                      title="Channel 2"
                    >
                      {channelStatus[1].name}
                    </button>
                  )}
                  {/* Channel 2 */}
                  {renamingChannel === 2 ? (
                    <input
                      autoFocus
                      className="w-24 px-4 py-2 rounded-2xl border border-neutral-700 text-sm text-black focus:outline-none focus:ring-0"
                      value={tempChannelName}
                      onChange={(e) => setTempChannelName(e.target.value)}
                      onBlur={() => {
                        setChannelStatus((prev) => {
                          const next = [...prev];
                          next[2] = { ...next[2], name: tempChannelName };
                          return next;
                        });
                        setRenamingChannel(null);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          setChannelStatus((prev) => {
                            const next = [...prev];
                            next[2] = { ...next[2], name: tempChannelName };
                            return next;
                          });
                          setRenamingChannel(null);
                        }
                      }}
                    />
                  ) : (
                    <button
                      onClick={() => {
                        switchChannel(2);
                        setLoadedPresetName(null);
                      }}
                      onDoubleClick={() => {
                        setTempChannelName(channelStatus[2].name);
                        setRenamingChannel(2);
                      }}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        const id = parseInt(e.dataTransfer.getData("presetId"), 10);
                        const preset = DEFAULT_PRESETS.find((p) => p.id === id);
                        if (!isNaN(id) && preset) {
                          if (channel === 2) {
                            applyPresetToChannel(preset, 2);
                          } else {
                            setChannelStatus((arr) => {
                              const next = [...arr];
                              next[2] = {
                                ...next[2],
                                name: preset.name,
                                params: { vol: preset.vol, bands: [...preset.bands] },
                              };
                              return next;
                            });
                          }
                        }
                      }}
                      className={`w-24 px-4 py-2 rounded-2xl border border-neutral-700 hover:brightness-95 ${channel === 2 ? "bg-neutral-900 text-white" : "bg-neutral-200 text-neutral-900"
                        }`}
                      title="Channel 3"
                    >
                      {channelStatus[2].name}
                    </button>
                  )}
                </div>
              </div>
            </section>
          </div>
          {/* Volume (gain-output) */}
          <section className="rounded-2xl border border-neutral-800 p-4 ">
            <h2 className="font-medium mb-2">Output Gain</h2>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={0}
                max={1}
                step={0.001}
                value={vol}
                onChange={(e) => onVolumeChange(Number(e.target.value))}
                className="w-full accent-black bg-neutral-300 rounded"
              />
              <span className="text-sm w-20 text-right">{vol.toFixed(3)}</span>
            </div>
          </section>

          {/* Filter Bank (10 bands) */}
          <section className="rounded-2xl border border-neutral-800 p-4">
            <h2 className="font-medium mb-3">Filter Bank Gain (10 bands)</h2>
            <div className="grid grid-cols-1 sm:grid-cols-10 gap-4">
              {bands.map((val, i) => (
                <div key={i} className="grid grid-cols-1 items-center gap-3">
                  <label className="text-sm font-bold text-black" title={PARAM_IDS.filterBands[i]}>
                    {PARAM_IDS.filterBands[i].substring(8)}
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.001}
                    value={val}
                    onChange={(e) => onBandChange(i, Number(e.target.value))}
                    onDoubleClick={() => onBandChange(i, 0.7)}
                    className="w-full accent-black bg-neutral-300 rounded"
                    style={{ writingMode: "vertical-rl", direction: "rtl" }}
                  />
                  <span className="text-sm w-8 text-right">{val.toFixed(3)}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Presets */}
        <section className="rounded-2xl border border-neutral-800 p-4 w-48  shadow-sm">
          <h2 className="font-medium mb-3 text-neutral-800">Presets</h2>
          <ul className="text-sm list-none space-y-2 font-normal">
            {DEFAULT_PRESETS.map((preset, i) => (
              <li key={i}>
                <button
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.setData("presetId", String(preset.id));
                  }}
                  onClick={() => {
                    applyPreset(preset);
                    setLoadedPresetName(preset.name);
                  }}
                  onDoubleClick={() => {
                    applyPresetToChannel(preset, channel);
                  }}
                  className="w-full px-3 py-2 rounded-lg border border-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-all shadow-sm flex items-center justify-between"
                >
                  <div className="flex flex-col leading-tight text-left">
                    <span className="text-xs text-neutral-500">#{i + 1}</span>
                    <span className="font-medium text-neutral-800">{preset.name}</span>
                  </div>
                  <Image
                    src="synth-icon.svg"
                    alt="synth-icon"
                    width={24}
                    height={24}
                  />
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export { NoiseSynthEngine, NoiseSynthUI };
