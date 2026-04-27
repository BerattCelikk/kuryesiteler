"use client";
import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { cn } from "@/lib/utils";

interface StatItem {
  id: string;
  value: number | null;
  display: string;
  label: string;
  sublabel: string;
}

interface Props {
  stat: StatItem;
  variant?: "light" | "dark" | "lime";
  size?: "md" | "lg";
}

export function PrecisionStat({ stat, variant = "light", size = "lg" }: Props) {
  const [ref, visible] = useScrollReveal<HTMLDivElement>(0.3);
  const { value, done } = useCountUp(stat.value, 1100, visible);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    if (done) {
      setPulse(true);
      const t = setTimeout(() => setPulse(false), 220);
      return () => clearTimeout(t);
    }
  }, [done]);

  const display =
    stat.value === null
      ? stat.display
      : visible
      ? formatTick(value, stat.display)
      : "0";

  const valueColor =
    variant === "dark" ? "text-lime-300" : variant === "lime" ? "text-gray-900" : "text-gray-900";
  const labelColor =
    variant === "dark" ? "text-gray-300" : variant === "lime" ? "text-gray-700" : "text-gray-600";

  const sizeCls = size === "lg" ? "text-stat-xl" : "text-[2rem]";

  return (
    <div ref={ref} className="flex flex-col gap-2">
      <span className="precision-label">{stat.label}</span>
      <span
        className={cn(
          "data-value font-display font-extrabold leading-none tracking-tight",
          sizeCls,
          valueColor,
          pulse && "animate-data-tick"
        )}
        style={{ transition: "transform 0.2s" }}
      >
        {display}
      </span>
      <span className={cn("text-[13px]", labelColor)}>{stat.sublabel}</span>
    </div>
  );
}

function formatTick(n: number, target: string): string {
  if (target.includes("K")) {
    if (n >= 1000) return (n / 1000).toFixed(0) + "K+";
    return n.toLocaleString("tr-TR");
  }
  if (target.includes(".")) return n.toLocaleString("tr-TR");
  return n.toString();
}
