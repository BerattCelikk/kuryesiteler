"use client";
import { useEffect } from "react";
import { useMotionValue, useSpring, type MotionValue } from "framer-motion";

export function useMousePosition(): { x: MotionValue<number>; y: MotionValue<number> } {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 400, damping: 35 });
  const y = useSpring(my, { stiffness: 400, damping: 35 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, [mx, my]);

  return { x, y };
}
