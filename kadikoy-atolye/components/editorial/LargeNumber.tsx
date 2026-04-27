"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Color = "forest" | "gold" | "ink" | "ivory";

const HUE: Record<Color, string> = {
  forest: "text-forest-500",
  gold: "text-gold-500",
  ink: "text-ink",
  ivory: "text-ivory",
};

const GHOST: Record<Color, string> = {
  forest: "text-forest-500/[0.07]",
  gold: "text-gold-500/[0.07]",
  ink: "text-ink/[0.06]",
  ivory: "text-ivory/[0.10]",
};

export default function LargeNumber({
  value,
  label,
  color = "forest",
  ghost = false,
  size = "md",
}: {
  value: string | number;
  label?: string;
  color?: Color;
  ghost?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizeCls =
    size === "lg"
      ? "text-[clamp(3rem,7vw,7rem)]"
      : size === "sm"
        ? "text-[clamp(1.6rem,3vw,2.6rem)]"
        : "text-[clamp(2.2rem,5vw,4rem)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="flex flex-col"
    >
      <span
        className={cn(
          "font-display font-light leading-[0.95] tracking-tight",
          ghost ? GHOST[color] : HUE[color],
          sizeCls
        )}
      >
        {value}
      </span>
      {label && (
        <span className="mt-3 font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">
          {label}
        </span>
      )}
    </motion.div>
  );
}
