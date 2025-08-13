"use client";

import { useEffect, useRef, useState } from "react";

// Minimal ambient types for RNBO
declare global {
  interface Window {
    RNBO?: any;
    webkitAudioContext?: typeof AudioContext;
    guardrails?: (ctx?: any) => void;
  }
}

const PATCH_URL = "/rnbo-export/pm1.export.json";
const DEP_URL = "/rnbo-export/dependencies.json"; // optional

// Exact parameter ids based on your JSON
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

// Three channel presets for the 10 filter bands (0..1)
const PRESET_BANDS: number[][] = [
  // Channel 1: Flat (0.70 across)
  [0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7],
  // Channel 2: Pink noise
  [0.85, 0.83, 0.80, 0.78, 0.75, 0.72, 0.70, 0.68, 0.65, 0.62],
  // Channel 3: Brown noise
  [0.95, 0.90, 0.85, 0.78, 0.70, 0.62, 0.55, 0.48, 0.40, 0.35],
];

export default function NoiseSynth() {
  const [running, setRunning] = useState(false);

  // Volume binds directly to RNBO param "gain-output" (0..1)
  const [vol, setVol] = useState<number>(0);

  // 10 filter-band gains (0..1 by your JSON)
  const [bands, setBands] = useState<number[]>(Array.from({ length: 10 }, () => 0));
  const [channel, setChannel] = useState<number>(0);

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
      } catch {}
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ------ UI Handlers ------
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

  const applyPreset = (idx: number) => {
    const preset = PRESET_BANDS[idx];
    if (!preset) return;
    setBands(preset);
    filterParamRefs.current.forEach((p, i) => {
      if (p) p.value = preset[i];
    });
    setChannel(idx);
  };

  return (
    <div>
      {/* Transport */}
      <section className="rounded-2xl border border-neutral-800 p-4 mb-6">
        <h2 className="font-medium mb-2">Playback</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={toggleAudio}
            className={`px-4 py-2 rounded-2xl border border-neutral-700 ${
              running ? "bg-start-button text-neutral-900" : "bg-neutral-200 text-neutral-900"
            }`}
          >
            {running ? "Stop" : "Start"}
          </button>
          <div className="flex items-center gap-2 ml-2">
            <button
              onClick={() => applyPreset(0)}
              className={`px-3 py-1 rounded-xl border border-neutral-700 text-sm ${
                channel === 0 ? "bg-neutral-900 text-white" : "bg-neutral-200 text-neutral-900"
              }`}
              title="Channel 1: Flat preset"
            >
              Ch 1
            </button>
            <button
              onClick={() => applyPreset(1)}
              className={`px-3 py-1 rounded-xl border border-neutral-700 text-sm ${
                channel === 1 ? "bg-neutral-900 text-white" : "bg-neutral-200 text-neutral-900"
              }`}
              title="Channel 2: Pink noise preset"
            >
              Ch 2
            </button>
            <button
              onClick={() => applyPreset(2)}
              className={`px-3 py-1 rounded-xl border border-neutral-700 text-sm ${
                channel === 2 ? "bg-neutral-900 text-white" : "bg-neutral-200 text-neutral-900"
              }`}
              title="Channel 3: Brown noise preset"
            >
              Ch 3
            </button>
          </div>
          {/* <p className="text-neutral-400 text-sm">Start/Stop sets the RNBO "start/stop" param and resumes/suspends the AudioContext.</p> */}
        </div>
      </section>

      {/* Volume (gain-output) */}
      <section className="rounded-2xl border border-neutral-800 p-4 mb-6">
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
        {/* <p className="text-neutral-500 text-xs mt-2">Bound to RNBO parameter <code>{PARAM_IDS.volume}</code>.</p> */}
      </section>

      {/* Filter Bank (10 bands) */}
      <section className="rounded-2xl border border-neutral-800 p-4">
        <h2 className="font-medium mb-3">Filter Bank Gain (10 bands)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-10 gap-4">
          {bands.map((val, i) => (
            <div key={i} className="grid grid-cols-1 items-center gap-3">
              <label className="text-sm font-bold text-black" title={PARAM_IDS.filterBands[i]}>
                {/* 8 is the magic number to the center frequency suffix in the paramid */}
                {/* e.g: gain-bp-30 -> 30 */}
                {PARAM_IDS.filterBands[i].substring(8)}
              </label>

              {/* value chip */}
              {/* <div className="text-[10px] font-mono text-neutral-600">{(val * 100).toFixed(0)}%</div> */}

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
  );

  // ------------- inner helpers -------------
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
    } catch {}

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

    // ---- Apply audible defaults so the patch isn't silent ----
    const paramsArr: any[] = Array.from(device.parameters || []);
    const byId = (id: string) => paramsArr.find((p: any) => p.paramId === id || p.name === id);

    // Set output gain to a reasonable level
    const volP = byId(PARAM_IDS.volume);
    if (volP) {
      volP.value = 0.8; // default audible level
      setVol(0.8);
      volumeParamRef.current = volP;
    }

    // Give the 10 bands some gain
    const initBands: number[] = [];
    PARAM_IDS.filterBands.forEach((id, i) => {
      const p = byId(id);
      if (p) {
        p.value = 0.7;
        initBands[i] = 0.7;
      } else {
        initBands[i] = 0;
      }
    });
    setBands(initBands);

    // Start the patch's transport/state
    const startP = byId(PARAM_IDS.startStop);
    if (startP) startP.value = 1;

    // ------- Reflect internal parameter changes in the UI -------
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

    // Filter band params (in declared order)
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
