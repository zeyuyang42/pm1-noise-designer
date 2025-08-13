"use client";
import { useEffect, useRef, useState } from "react";
// import pm1Top from "./components/pm1-top";
import NoiseSynth from "./components/noise-synth";

import Image from "next/image";
import Pm1Top from "./components/pm1-top";


function SliderTwoPages({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0); // 0 = first page, 1 = second page
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Keyboard and wheel fallbacks
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 20) return;
      setActive((prev) => {
        if (e.deltaY > 0) return Math.min(1, prev + 1);
        return Math.max(0, prev - 1);
      });
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown") setActive((p) => Math.min(1, p + 1));
      if (e.key === "ArrowUp" || e.key === "PageUp") setActive((p) => Math.max(0, p - 1));
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel as any);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const translate = -active * 100;
  const transition = "transform 800ms cubic-bezier(0.22, 1, 0.36, 1)";

  // Children: expect exactly two sections (but we won't enforce); stack vertically
  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
    >
      <div
        className="h-full w-full"
        style={{ transform: `translateY(${translate}vh)`, transition }}
      >
        <div className="h-screen w-screen">{Array.isArray(children) ? children[0] : children}</div>
        <div className="h-screen w-screen">{Array.isArray(children) ? children[1] : null}</div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div
      className="relative overflow-hidden h-screen w-screen"
    >
      {/* Simple two-page vertical slider with drag/slide gesture */}
      <SliderTwoPages>

        {/* Page 2: SVGs (full viewport) */}
        <section className="h-screen w-screen">
          <div className="h-full w-full flex items-center justify-center">
            {/* Option A: inline responsive SVG component */}
            {/* <div style={{ aspectRatio: "1224 / 765" }} className="relative w-full max-w-[1224px]">
              <Pm1Top className="absolute inset-0 w-full h-full" />
            </div> */}

            {/* Option B (existing images). If you prefer these, replace the block above with this grid: */}
            <div className="grid grid-cols-2 gap-6 items-center justify-center justify-items-center place-content-center place-items-center">
              <Image src="pm1.svg" alt="pm1" width={1224} height={765} unoptimized />
              <Image src="phone.svg" alt="phone" width={350} height={350} unoptimized />
            </div>

          </div>
        </section>
        {/* Page 1: NoiseSynth (full viewport) */}
        <section className="h-screen w-screen flex items-center justify-center">
          <div className="w-full max-w-6xl p-6">
            <NoiseSynth />
          </div>
        </section>

      </SliderTwoPages>
    </div>
  );
}