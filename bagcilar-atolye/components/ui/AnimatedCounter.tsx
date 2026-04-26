"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useTransform, motion } from "framer-motion";

interface AnimatedCounterProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function AnimatedCounter({
  from = 0,
  to,
  duration = 1.6,
  suffix = "",
  prefix = "",
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString("tr-TR"));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, to, { duration, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, to, duration, count]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
