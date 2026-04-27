"use client";
import { useEffect, useRef, useState } from "react";

export function useInkSpread<T extends HTMLElement>(opts: { delay?: number; threshold?: number } = {}) {
  const ref = useRef<T | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setTimeout(() => setRevealed(true), opts.delay ?? 0);
            obs.disconnect();
          }
        }
      },
      { threshold: opts.threshold ?? 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [opts.delay, opts.threshold]);

  return { ref, revealed };
}
