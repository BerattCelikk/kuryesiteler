"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ScanWidget } from "@/components/ui/ScanWidget";

interface Props {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
  rowSpan?: number;
  variant?: "light" | "dark" | "lime";
  scanReveal?: boolean;
  delay?: number;
  noPadding?: boolean;
  withSweep?: boolean;
}

const colSpanClass: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
  3: "md:col-span-3",
  4: "md:col-span-4",
  5: "md:col-span-5",
  6: "md:col-span-6",
  7: "md:col-span-7",
  8: "md:col-span-8",
  9: "md:col-span-9",
  10: "md:col-span-10",
  11: "md:col-span-11",
  12: "md:col-span-12",
};
const rowSpanClass: Record<number, string> = {
  1: "md:row-span-1",
  2: "md:row-span-2",
  3: "md:row-span-3",
};

export function BentoCell({
  children,
  className,
  colSpan = 4,
  rowSpan = 1,
  variant = "light",
  scanReveal = false,
  delay = 0,
  noPadding = false,
  withSweep = false,
}: Props) {
  const variantCls =
    variant === "dark" ? "widget-dark" : variant === "lime" ? "widget-lime" : "widget";

  const inner = (
    <div className={cn(noPadding ? "" : "p-6 lg:p-7 h-full", "relative")}>
      {withSweep && variant === "dark" && <div className="scan-sweep-overlay" aria-hidden />}
      {children}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(variantCls, colSpanClass[colSpan], rowSpanClass[rowSpan], className)}
    >
      {scanReveal ? <ScanWidget>{inner}</ScanWidget> : inner}
    </motion.div>
  );
}
