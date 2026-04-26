"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  variant?: "horizontal" | "diagonal" | "curved";
  color?: "coral" | "cyan";
  delay?: number;
  duration?: number;
}

export default function RouteLineSVG({
  className,
  variant = "horizontal",
  color = "coral",
  delay = 0,
  duration = 1.5,
}: Props) {
  const stroke = color === "coral" ? "#E8435A" : "#22D3EE";
  const path =
    variant === "horizontal"
      ? "M 0 50 L 100 50"
      : variant === "diagonal"
        ? "M 0 80 L 100 20"
        : "M 0 50 C 30 20, 70 80, 100 50";

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={cn("w-full h-full overflow-visible", className)}
      aria-hidden
    >
      <motion.path
        d={path}
        stroke={stroke}
        strokeWidth="0.6"
        strokeDasharray="2 1.5"
        fill="none"
        opacity={0.6}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration, delay, ease: "easeOut" }}
      />
      <motion.circle
        cx="100"
        cy={variant === "diagonal" ? 20 : 50}
        r="1.4"
        fill={stroke}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + duration, duration: 0.3 }}
        viewport={{ once: true }}
      />
    </svg>
  );
}
