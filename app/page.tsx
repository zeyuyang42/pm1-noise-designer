"use client";
import { useEffect, useRef } from "react";
// import pm1Top from "./components/pm1-top";
import NoiseSynth from "./components/noise-synth";

import Image from "next/image";
import Pm1Top from "./components/pm1-top";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen ">
      <section className=" p-30  justify-center items-center">
        <NoiseSynth />
      </section>

      {/* <div style={{ aspectRatio: '1224 / 765' }} className="relative w-full max-w-[1224px] mx-auto">
        <Pm1Top className="absolute inset-0 w-full h-full" />
      </div> */}
      <section className="grid grid-cols-2">
      <Image
          // className="mx-auto my-auto"
          src="pm1-top.svg"
          alt="phone"
          width={1224}
          height={765}
          unoptimized
        />
      <Image
          // className="mx-auto my-auto"
          src="phone.svg"
          alt="phone"
          width={300}
          height={300}
          unoptimized
        />
      </section>


      {/* fixed logo */}
      <section className="static">
        <Image
          className="mx-auto my-auto fixed top-10 left-10"
          src="the-peace-company.svg"
          alt="the-peace-company"
          width={150}
          height={150}
          priority
        />
        <Image
          className="mx-auto my-auto fixed bottom-10 right-50"
          src="issue-design-logo.svg"
          alt="issue-design-logo"
          width={92}
          height={92}
          priority
        />
        <Image
          className="mx-auto my-auto fixed bottom-10 right-10"
          src="pm1-noise-designer-logo.svg"
          alt="pm1-noise-designer-logo"
          width={120}
          height={120}
          priority
        />
      </section>

    </div>
  );
}
