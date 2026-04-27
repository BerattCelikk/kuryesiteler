"use client";
import Link from "next/link";
import * as Icons from "lucide-react";
import { motion } from "framer-motion";
import type { Service } from "@/lib/constants";
import { cn } from "@/lib/utils";

type IconName = keyof typeof Icons;

export default function ServiceCallout({
  service,
  index,
  variant = "standard",
}: {
  service: Service;
  index: number;
  variant?: "standard" | "featured";
}) {
  const Icon = (Icons[service.icon as IconName] ?? Icons.Sparkle) as React.ComponentType<{ className?: string; strokeWidth?: number }>;
  const indented = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.08 }}
      className={cn(
        "editorial-card relative grid gap-8 px-6 py-10 md:px-10 md:py-14 md:grid-cols-[auto_1fr_auto]",
        indented && "md:ml-[60px]"
      )}
      data-cursor="hover"
    >
      <div className="flex items-start gap-4">
        <span className="font-display font-light text-[clamp(3rem,5vw,4.5rem)] leading-none text-forest-500/[0.10]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="flex flex-col gap-4 max-w-2xl">
        <div className="flex items-center gap-3">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 px-3 py-1 rounded-md font-mono text-[11px] tracking-[0.08em]",
              service.badgeColor === "forest" && "bg-forest-100 text-forest-600",
              service.badgeColor === "gold" && "bg-[rgba(184,149,58,0.12)] text-gold-500",
              service.badgeColor === "ink" && "bg-ink text-ivory"
            )}
          >
            {service.badge}
          </span>
          <Icon className="w-5 h-5 text-forest-400" strokeWidth={1.5} />
        </div>

        <h3 className="font-display font-medium text-[clamp(1.5rem,2.5vw,2.5rem)] leading-[1.1] text-ink">
          {service.navTitle}
        </h3>

        <p className="font-body text-[16px] leading-[1.75] text-text-secondary">
          {service.desc}
        </p>

        <ul className="mt-2 grid gap-1.5 grid-cols-1 sm:grid-cols-2">
          {service.benefits.map((b) => (
            <li key={b} className="font-body text-[14px] text-text-muted flex gap-2">
              <span className="text-gold-400">—</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="self-end">
        <Link
          href={`/hizmetler/${service.slug}`}
          className="inline-flex items-center gap-1.5 font-body text-[13px] font-semibold text-forest-500 hover:text-forest-600 hover:gap-2.5 transition-all"
          data-cursor="hover"
        >
          Detay <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.article>
  );
}
