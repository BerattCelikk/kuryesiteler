"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Icon } from "./Icon";
import { cn } from "@/lib/utils";
import type { WorkshopService } from "@/types";

interface Props {
  service: WorkshopService;
  variant?: "featured" | "compact" | "list";
  index?: number;
}

const badgeClass: Record<string, string> = {
  success: "pill-success",
  blue: "pill-blue",
  teal: "pill-teal",
  warning: "pill-warning",
  neutral: "pill-neutral",
  danger: "pill-danger",
};

export function ServiceCard({ service, variant = "compact", index = 0 }: Props) {
  const href = service.slug ? `/hizmetler/${service.slug}` : undefined;
  const badge = (
    <span className={cn("pill", badgeClass[service.badgeVariant] ?? "pill-neutral")}>
      {service.badge}
    </span>
  );

  const motionProps = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.45, delay: index * 0.06 },
  };

  if (variant === "featured") {
    return (
      <motion.div {...motionProps} className="card-base card-hover p-7 md:p-8 border-l-[3px] border-l-blue-600">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          <div className="flex-shrink-0 w-14 h-14 rounded-[14px] bg-blue-50 flex items-center justify-center">
            <Icon name={service.icon} className="w-7 h-7 text-blue-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h3 className="fluid-lg text-text-primary">{service.title}</h3>
              {badge}
            </div>
            <p className="text-text-muted leading-relaxed mb-4">{service.desc}</p>
            <div className="flex items-center justify-between flex-wrap gap-3">
              <span className="text-sm text-text-subtle font-mono">{service.detail}</span>
              {href && (
                <Link
                  href={href}
                  className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Detaylar <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  if (variant === "list") {
    return (
      <motion.div {...motionProps}>
        <Link
          href={href ?? "#"}
          className={cn(
            "flex items-center gap-3 p-3 rounded-[12px] border border-border-light bg-white transition-colors",
            href && "hover:border-blue-200 hover:bg-blue-50"
          )}
        >
          <div className="w-9 h-9 rounded-[10px] bg-blue-50 flex items-center justify-center flex-shrink-0">
            <Icon name={service.icon} className="w-4 h-4 text-blue-600" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-display font-semibold text-sm text-text-primary truncate">
              {service.title}
            </div>
            <div className="text-xs text-text-muted truncate">{service.detail}</div>
          </div>
          {href && <ArrowRight className="w-4 h-4 text-text-subtle flex-shrink-0" />}
        </Link>
      </motion.div>
    );
  }

  // compact
  return (
    <motion.div {...motionProps} className="card-base card-hover p-6 flex flex-col h-full">
      <div className="flex items-center justify-between mb-5">
        <div className="w-12 h-12 rounded-[12px] bg-blue-50 flex items-center justify-center">
          <Icon name={service.icon} className="w-6 h-6 text-blue-600" />
        </div>
        {badge}
      </div>
      <h3 className="font-display font-bold text-lg text-text-primary mb-2">{service.title}</h3>
      <p className="text-sm text-text-muted leading-relaxed flex-1">{service.desc}</p>
      <div className="flex items-center justify-between mt-5 pt-4 border-t border-border-light">
        <span className="text-xs text-text-subtle font-mono">{service.detail}</span>
        {href ? (
          <Link
            href={href}
            className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-semibold"
          >
            Detaylar <ArrowRight className="w-3 h-3" />
          </Link>
        ) : (
          <span className="text-xs text-text-subtle">—</span>
        )}
      </div>
    </motion.div>
  );
}

export default ServiceCard;
