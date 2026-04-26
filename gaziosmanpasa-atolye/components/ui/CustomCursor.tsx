"use client";
import { useEffect, useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [{ x, y }, api] = useSpring(() => ({
    x: 0,
    y: 0,
    config: { mass: 0.4, tension: 500, friction: 30 },
  }));

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer:fine)").matches;
    if (!fine) return;
    setVisible(true);

    const onMove = (e: MouseEvent) => {
      api.start({ x: e.clientX, y: e.clientY });
      const t = e.target as HTMLElement | null;
      if (!t) return;
      const isInteractive =
        t.closest("a, button, [data-cursor='hover'], input, textarea, select, label, [role='button']") !== null;
      setHovering(isInteractive);
    };
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [api]);

  if (!visible) return null;
  return (
    <animated.div
      className={`cursor-crosshair ${hovering ? "hovering" : ""}`}
      style={{ transform: x.to((vx) => `translate(${vx}px, ${y.get()}px) translate(-50%, -50%)`) }}
      aria-hidden
    />
  );
}
