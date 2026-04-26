"use client";
import { motion } from "framer-motion";
import {
  MapPin,
  FileText,
  Package,
  CheckCircle,
  Calendar,
  Bike,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { WORKSHOP } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  MapPin, FileText, Package, CheckCircle, Calendar, Bike,
};

export function HowSection() {
  return (
    <section className="bg-cream-mid py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Süreç"
          title={WORKSHOP.copy.howitTitle}
          subtitle="Altı sade adım. Hepsi insan ölçeğinde."
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {WORKSHOP.steps.map((step, i) => {
            const Icon = ICONS[step.icon] ?? Bike;
            const isFinal = i === WORKSHOP.steps.length - 1;
            return (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "relative warm-card !bg-cream p-7 overflow-hidden",
                  isFinal && "md:col-span-2 !bg-sage-bg !border-sage-300/40",
                )}
              >
                <span
                  aria-hidden
                  className={cn(
                    "absolute -top-2 -right-3 font-display text-[120px] leading-none select-none",
                    isFinal ? "text-sage-200" : "text-terra-100",
                  )}
                >
                  {step.n}
                </span>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={cn(
                        "inline-flex items-center font-mono text-[12px] font-bold rounded-full px-3 py-1",
                        isFinal
                          ? "bg-sage-200/60 text-sage-600"
                          : "bg-terra-100 text-terra-600",
                      )}
                    >
                      {step.n}
                    </span>
                    <Icon
                      size={20}
                      className={isFinal ? "text-sage-500" : "text-terra-400"}
                    />
                  </div>
                  <h3 className="font-display text-section-lg text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-[15px] text-ink-light leading-relaxed mb-4">
                    {step.desc}
                  </p>
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-3 py-1 font-body text-xs font-semibold",
                      isFinal
                        ? "bg-sage-bg text-sage-600 border border-sage-300/40"
                        : "bg-cream-mid text-ink-mid border border-terra-200",
                    )}
                  >
                    {step.tag}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
