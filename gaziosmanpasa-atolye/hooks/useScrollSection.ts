"use client";
import { useEffect } from "react";
import { useUIStore } from "@/store/ui";

export function useScrollSection(containerRef: React.RefObject<HTMLDivElement | null>) {
  const setSection = useUIStore((s) => s.setSection);
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const sections = Array.from(c.querySelectorAll<HTMLElement>(".snap-section"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio > 0.5) {
            const idx = sections.indexOf(e.target as HTMLElement);
            if (idx >= 0) setSection(idx);
          }
        });
      },
      { root: c, threshold: [0.5] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [containerRef, setSection]);
}
