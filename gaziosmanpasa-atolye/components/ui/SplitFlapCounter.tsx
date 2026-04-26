"use client";
import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface Props {
  value: number | string;
  duration?: number;
  color?: "coral" | "cyan" | "amber" | "bright";
  className?: string;
}

const colorClass: Record<NonNullable<Props["color"]>, string> = {
  coral: "text-coral-500",
  cyan: "text-cyan-400",
  amber: "text-amber-400",
  bright: "text-text-bright",
};

export default function SplitFlapCounter({ value, duration = 1200, color = "coral", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState<string>(typeof value === "number" ? "0" : value.replace(/[0-9]/g, "0"));

  useEffect(() => {
    if (!inView) return;
    if (typeof value !== "number") {
      // For string values, just animate by flipping through random digits then settling
      const target = value;
      let frame = 0;
      const totalFrames = Math.round(duration / 60);
      const id = setInterval(() => {
        frame++;
        if (frame >= totalFrames) {
          setDisplay(target);
          clearInterval(id);
          return;
        }
        setDisplay(
          target
            .split("")
            .map((c) => (/[0-9]/.test(c) ? String(Math.floor(Math.random() * 10)) : c))
            .join("")
        );
      }, 60);
      return () => clearInterval(id);
    }
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.floor(eased * value);
      setDisplay(String(current));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setDisplay(String(value));
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={cn("inline-flex font-display font-extrabold tabular-nums", colorClass[color], className)}>
      {String(display).split("").map((ch, i) => (
        <span key={i} className="flap-digit">
          {ch}
        </span>
      ))}
    </span>
  );
}
