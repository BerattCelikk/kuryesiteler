"use client";
import { useEffect } from "react";
import { useUIStore } from "@/store/ui";

export function useScrollSection(containerRef: React.RefObject<HTMLDivElement | null>) {
  const setSection = useUIStore((s) => s.setSection);
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const sections = Array.from(c.querySelectorAll<HTMLElement>(".snap-section"));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = sections.indexOf(e.target as HTMLElement);
            if (idx >= 0) setSection(idx);
          }
        });
      },
      // Band-style detection: a section is "active" only while its midline is in the viewport center.
      { root: c, rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));

    // Initial sync pass: IntersectionObserver only fires on cross, so deep-link/refresh would otherwise stay at 0.
    const rootRect = c.getBoundingClientRect();
    let bestIdx = 0;
    let bestOverlap = -1;
    sections.forEach((s, i) => {
      const r = s.getBoundingClientRect();
      const overlap = Math.max(0, Math.min(r.bottom, rootRect.bottom) - Math.max(r.top, rootRect.top));
      if (overlap > bestOverlap) {
        bestOverlap = overlap;
        bestIdx = i;
      }
    });
    setSection(bestIdx);

    return () => observer.disconnect();
  }, [containerRef, setSection]);
}
