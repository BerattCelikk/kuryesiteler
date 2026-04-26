"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Props {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  size?: "md" | "lg";
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "left",
  size = "md",
  className,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "max-w-3xl",
        align === "center" && "text-center mx-auto",
        className
      )}
    >
      {label && (
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="section-label">{label}</span>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-px bg-blue-500"
          />
        </div>
      )}
      <h2 className={cn(size === "lg" ? "fluid-hero" : "fluid-xl", "text-text-primary")}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-muted leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}

export default SectionHeader;
