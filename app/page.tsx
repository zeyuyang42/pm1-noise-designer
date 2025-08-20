"use client";

import Pm1Top from "./components/pm1-top";
import NoiseSynth from "./components/noise-synth";

import SliderTwoPages from "./components/slider-two-pages";

export default function Home() {
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
              onPeaceButtonClick={() => { console.log("Peace button clicked!"); }}
              onChannel1ButtonClick={() => { console.log("Channel 1 button clicked!"); }}
              onChannel2ButtonClick={() => { console.log("Channel 2 button clicked!"); }}
              onChannel3ButtonClick={() => { console.log("Channel 3 button clicked!"); }}
              label="hello."
            />
          </div>
        </section>

        {/* Page 2: Noise Synth UI */}
        <section className="h-screen w-screen flex items-center justify-center">
          <div className="w-full max-w-6xl p-6">
            <NoiseSynth />
          </div>
        </section>

      </SliderTwoPages>
    </div>
  );
}