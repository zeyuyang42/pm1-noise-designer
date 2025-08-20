"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";


function SliderTwoPages({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0); // 0 = first page, 1 = second page
  const containerRef = useRef<HTMLDivElement | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      router.replace("/unsupported-device");
    }
  }, [router]);

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

export default SliderTwoPages;