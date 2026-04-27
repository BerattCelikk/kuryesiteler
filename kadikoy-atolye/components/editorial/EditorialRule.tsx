"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  color?: "gold" | "forest" | "parchment" | "ivory";
  width?: string;
  className?: string;
  thin?: boolean;
};

const COLOR: Record<NonNullable<Props["color"]>, string> = {
  gold: "bg-gold-400",
  forest: "bg-forest-500",
  parchment: "bg-parchment",
  ivory: "bg-ivory/40",
};

export default function EditorialRule({ color = "gold", width = "48px", className, thin = false }: Props) {
  return (
    <motion.span
      aria-hidden
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ width, transformOrigin: "left", height: thin ? "0.5px" : "1px" }}
      className={cn("block", COLOR[color], className)}
    />
  );
}
