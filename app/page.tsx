"use client";

import Pm1Top from "./components/pm1-top";
// import NoiseSynth from "./components/noise-synth";
import { NoiseSynthEngine, NoiseSynthUI } from "./components/noise-synth";

import SliderTwoPages from "./components/slider-two-pages";

import { useState } from "react";

export default function Home() {
  const presets: { [key: string]: string } = {
    Channel1: "white.",
    Channel2: "pink.",
    Channel3: "brown.",
  };

  const [label, setLabel] = useState(presets.Channel1);

  const engine = NoiseSynthEngine();

  return (
    <div
      className="relative overflow-hidden h-screen w-screen"
    >
      {/* Simple two-page vertical slider with drag/slide gesture */}
      <SliderTwoPages>

        {/* Page 1: pm1 noise speaker top view */}
        <section className="h-screen w-screen flex items-center justify-center">
          <div className="h-full w-full justify-items-center place-content-center place-items-center">
            <Pm1Top
              className="shadow-2xl"
              onPeaceButtonClick={() => { engine.toggleAudio(); }}
              onChannel1ButtonClick={() => { engine.applyPreset(0); setLabel(presets.Channel1); }}
              onChannel2ButtonClick={() => { engine.applyPreset(1); setLabel(presets.Channel2); }}
              onChannel3ButtonClick={() => { engine.applyPreset(2); setLabel(presets.Channel3); }}
              label={label}
              isRunning={engine.running}
              activeChannel={engine.channel}
            />
          </div>
        </section>

        {/* Page 2: Noise Synth UI */}
        <section className="h-screen w-screen flex items-center justify-center">
          <div className="w-full max-w-6xl p-6">
            <NoiseSynthUI {...engine} />
          </div>
        </section>

      </SliderTwoPages>
    </div>
  );
}