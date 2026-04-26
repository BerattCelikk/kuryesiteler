"use client";
import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import type { WorkshopStat } from "@/types";
import { cn } from "@/lib/utils";

interface Props {
  stat: WorkshopStat;
  index?: number;
}

export function StatCard({ stat, index = 0 }: Props) {
  const { value, ref } = useCountUp({
    target: stat.value ?? 0,
    duration: 1400,
  });

  const display =
    stat.value === null
      ? stat.display
      : stat.value >= 1000
      ? stat.value >= 100000
        ? `${Math.round(value / 1000)}K+`
        : `${(value / 1000).toFixed(value === stat.value ? 0 : 1)}K+`
      : `${value}+`;

  const colorDot: Record<string, string> = {
    blue: "bg-blue-500",
    teal: "bg-teal-500",
    green: "bg-success",
  };

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="card-base card-hover relative overflow-hidden p-6 border-t-[3px] border-t-blue-600"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className={cn("w-1.5 h-1.5 rounded-full", colorDot[stat.color] ?? "bg-blue-500")} />
        <span className="stat-label">{stat.label}</span>
      </div>
      <div className="font-stat text-text-primary">
        {stat.value === null ? stat.display : display}
      </div>
      <div className="mt-2 text-sm text-text-muted">{stat.sublabel}</div>
    </motion.div>
  );
}

export default StatCard;
