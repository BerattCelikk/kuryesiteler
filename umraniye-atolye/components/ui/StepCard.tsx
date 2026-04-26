"use client";
import { motion } from "framer-motion";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";
import type { WorkshopStep } from "@/types";

interface Props {
  step: WorkshopStep;
  position?: "left" | "right";
  index: number;
  showLongDesc?: boolean;
}

export function StepCard({ step, position = "left", index, showLongDesc }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: position === "left" ? -32 : 32 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "relative card-base p-7 overflow-hidden",
        position === "right" && "md:ml-auto"
      )}
    >
      <span
        aria-hidden
        className="absolute -top-2 -right-2 font-mono text-[120px] font-bold leading-none text-blue-50 select-none"
      >
        {step.n}
      </span>
      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-[10px] bg-blue-600 text-white flex items-center justify-center">
            <Icon name={step.icon} className="w-5 h-5" />
          </div>
          <span className="pill pill-neutral">{step.tag}</span>
        </div>
        <h3 className="font-display font-bold text-xl text-text-primary mb-2">{step.title}</h3>
        <p className="text-text-muted leading-relaxed">
          {showLongDesc && step.longDesc ? step.longDesc : step.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default StepCard;
