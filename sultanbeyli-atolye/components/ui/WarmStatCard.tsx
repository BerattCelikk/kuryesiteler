"use client";
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { formatStat } from "@/lib/utils";
import type { WorkshopStat } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function WarmStatCard({ stat, index = 0 }: { stat: WorkshopStat; index?: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const { value, done } = useCountUp(stat.value ?? 0, 1800, visible && stat.value !== null);

  useEffect(() => {
    /* count up triggers */
  }, [done]);

  const isCounting = stat.value !== null;
  const display = isCounting
    ? stat.value! >= 1000
      ? formatStat(value) + (stat.display.endsWith("+") ? "+" : "")
      : formatStat(value)
    : stat.display;

  const accent =
    stat.color === "terra" ? "before:bg-terra-500" : "before:bg-sage-500";

  return (
    <div
      ref={ref}
      style={{
        animationDelay: `${index * 100}ms`,
        animationPlayState: visible ? "running" : "paused",
      }}
      className={cn(
        "relative warm-card !bg-cream pt-6 pb-7 px-6 opacity-0",
        visible && "opacity-100 [animation:cardSettle_0.5s_cubic-bezier(0.22,1,0.36,1)_forwards]",
        "before:absolute before:left-5 before:top-5 before:bottom-5 before:w-[3px] before:rounded-full",
        accent,
      )}
    >
      <div className="pl-5">
        <div className="section-label mb-3">VERİ</div>
        <div
          className={cn(
            "font-display text-4xl md:text-5xl mb-3 transition-colors duration-700",
            done ? "text-terra-500" : "text-ink",
          )}
        >
          {display}
        </div>
        <div className="font-body text-sm text-ink-light leading-snug">
          {stat.label}
        </div>
      </div>
    </div>
  );
}
