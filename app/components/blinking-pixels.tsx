// app/components/BlinkingPixels.tsx
"use client";

import { useEffect, useState } from "react";

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

export default function BlinkingPixels({
  rows = 4,
  cols = 32,
  active = true,
}: {
  rows?: number;
  cols?: number;
  active?: boolean;
}) {
const rand = seededRandom(42); 

  const [pixels, setPixels] = useState<boolean[][]>(
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => rand() > 0.2)
    )
  );

  useEffect(() => {
    if (!active) return;

    const interval = setInterval(() => {
      setPixels((prev) =>
        prev.map((row) =>
          row.map(() => Math.random() > 0.2)
        )
      );
    }, 300);
    return () => clearInterval(interval);
  }, [active]);

  return (
    <div
      className="grid gap-[4px] bg-black h-full w-full"
      style={{
        gridTemplateColumns: `repeat(${cols}, min-content)`,
        width: "fit-content",
      }}
    >
      {pixels.map((row, rowIndex) =>
        row.map((isOn, colIndex) => (
          <div
            key={`${rowIndex}-${colIndex}`}
            className={`w-[4px] h-[4px]  transition-opacity duration-200 ${
              isOn ? "bg-white opacity-100" : "bg-white opacity-10"
            }`}
          />
        ))
      )}
    </div>
  );
}