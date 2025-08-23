"use client";

import Pm1Top from "./components/pm1-top";

import { NoiseSynthEngine, NoiseSynthUI } from "./components/noise-synth";

import SliderTwoPages from "./components/slider-two-pages";



import { useState } from "react";

export default function Home() {
  // const presets: { [key: string]: string } = {
  //   Channel1: "white.",
  //   Channel2: "pink.",
  //   Channel3: "brown.",
  // };

  const engine = NoiseSynthEngine();
  const [label, setLabel] = useState(engine.state.channelStatus[engine.state.channel].name);

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
              onPeaceButtonClick={() => { 
                engine.controls.switchChannel(engine.state.channel); 
                setLabel(engine.state.channelStatus[engine.state.channel].name);
                engine.controls.toggleAudio(); 
              }}
              onChannel1ButtonClick={() => { 
                engine.controls.switchChannel(0); 
                setLabel(engine.state.channelStatus[0].name);
              }}
              onChannel2ButtonClick={() => { 
                engine.controls.switchChannel(1); 
                setLabel(engine.state.channelStatus[1].name);
              }}
              onChannel3ButtonClick={() => { 
                engine.controls.switchChannel(2); 
                setLabel(engine.state.channelStatus[2].name);
              }}
              label={label}
              isRunning={engine.state.running}
              activeChannel={engine.state.channel}
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