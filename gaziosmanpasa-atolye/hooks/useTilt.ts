"use client";
import { useSpring } from "@react-spring/web";
import { useRef } from "react";

export function useTilt(maxTilt = 8) {
  const ref = useRef<HTMLDivElement>(null);
  const [styles, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    glareX: 50,
    glareY: 50,
    config: { mass: 1, tension: 220, friction: 22 },
  }));

  const onMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    api.start({
      rotateY: (px - 0.5) * maxTilt * 2,
      rotateX: -(py - 0.5) * maxTilt * 2,
      glareX: px * 100,
      glareY: py * 100,
    });
  };
  const onMouseLeave = () =>
    api.start({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });

  return { ref, styles, onMouseMove, onMouseLeave };
}
