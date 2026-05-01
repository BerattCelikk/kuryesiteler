"use client";
import { useEffect, useRef, useState } from "react";
import { useSpring, animated, to } from "@react-spring/web";

const INTERACTIVE_SELECTOR =
  "a, button, [data-cursor='hover'], input, textarea, select, label, [role='button']";

export default function CustomCursor() {
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  // Mirror state in a ref so the mousemove closure can compare without re-subscribing.
  const hoveringRef = useRef(false);
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
      const next = t.closest(INTERACTIVE_SELECTOR) !== null;
      // Skip setState when the value hasn't actually changed — fires per pixel otherwise.
      if (next !== hoveringRef.current) {
        hoveringRef.current = next;
        setHovering(next);
      }
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
      // to([x, y], ...) re-runs on either spring; the prior x.to(...) read y.get() imperatively and stalled on Y-only motion.
      style={{
        transform: to(
          [x, y],
          (vx, vy) => `translate(${vx}px, ${vy}px) translate(-50%, -50%)`
        ),
      }}
      aria-hidden
    />
  );
}
