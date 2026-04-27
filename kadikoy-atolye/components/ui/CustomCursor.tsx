"use client";
import { useEffect, useState } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [onDark, setOnDark] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    setEnabled(true);
    document.body.classList.add("editorial-cursor-active");

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        '[data-cursor="hover"], a, button, input, select, textarea, label, [role="button"], [role="link"]'
      );
      setHovering(!!interactive);
      const dark = target.closest('[data-cursor-dark="true"], .section-forest, .marquee-strip');
      setOnDark(!!dark);
    };
    document.addEventListener("mouseover", onOver, true);
    return () => {
      document.removeEventListener("mouseover", onOver, true);
      document.body.classList.remove("editorial-cursor-active");
    };
  }, []);

  if (!enabled) return null;
  return (
    <div
      aria-hidden
      className={`cursor-editorial${hovering ? " hovering" : ""}${onDark ? " on-dark" : ""}`}
      style={{ transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)` }}
    />
  );
}
