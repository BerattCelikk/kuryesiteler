"use client";
import SplitFlapCounter from "./SplitFlapCounter";
import { cn } from "@/lib/utils";
import type { Stat } from "@/lib/constants";

const colorMap: Record<string, "coral" | "cyan" | "amber"> = {
  coral: "coral",
  cyan: "cyan",
  amber: "amber",
};
const dotColor: Record<string, string> = {
  coral: "bg-coral-500 shadow-[0_0_8px_rgba(232,67,90,0.6)]",
  cyan: "bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]",
  amber: "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]",
};

export default function StatPanel({ stat }: { stat: Stat }) {
  const c = stat.color as keyof typeof colorMap;
  return (
    <div className="panel holo-card p-6 md:p-8 relative h-full flex flex-col justify-between min-h-[180px]">
      <div className="flex items-start justify-between">
        <span className="font-mono text-mono-label text-text-muted">{stat.sublabel}</span>
        <span className={cn("w-2 h-2 rounded-full", dotColor[c])} />
      </div>
      <div className="my-4">
        {stat.value !== null ? (
          <SplitFlapCounter value={stat.display} color={colorMap[c]} className="text-stat-display" />
        ) : (
          <span className={cn("font-display font-extrabold text-stat-display", colorMap[c] === "coral" && "text-coral-500", colorMap[c] === "cyan" && "text-cyan-400", colorMap[c] === "amber" && "text-amber-400")}>
            {stat.display}
          </span>
        )}
      </div>
      <div className="font-body text-sm text-text-bright">{stat.label}</div>
    </div>
  );
}
