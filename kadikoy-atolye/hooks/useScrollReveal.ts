"use client";
import { useEffect, useRef, useState } from "react";

export function useScrollReveal<T extends HTMLElement>(opts: { threshold?: number; rootMargin?: string } = {}) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: opts.threshold ?? 0.15, rootMargin: opts.rootMargin ?? "0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [opts.threshold, opts.rootMargin]);
  return { ref, visible };
}
