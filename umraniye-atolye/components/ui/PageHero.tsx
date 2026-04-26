"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Breadcrumb } from "./Breadcrumb";
import { Button } from "./Button";
import type { BreadcrumbItem } from "@/types";
import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string | ReactNode;
  badge?: string;
  breadcrumbs: BreadcrumbItem[];
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  variant?: "white" | "soft" | "blue";
  children?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  badge,
  breadcrumbs,
  ctaLabel,
  ctaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  variant = "white",
  children,
}: Props) {
  const isBlue = variant === "blue";
  const isSoft = variant === "soft";

  return (
    <section
      className={cn(
        "relative isolate overflow-hidden",
        isBlue && "blue-gradient-bg text-white",
        isSoft && "bg-bg-soft",
        variant === "white" && "bg-white"
      )}
    >
      {isSoft && (
        <div className="absolute inset-0 dot-pattern-bg opacity-50 pointer-events-none" />
      )}
      {isBlue && (
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,.25), transparent 40%)",
          }}
        />
      )}
      <div className="relative max-w-7xl mx-auto px-6 py-16 md:py-24 min-h-[320px] flex flex-col justify-center">
        <Breadcrumb
          items={breadcrumbs}
          className={cn("mb-6", isBlue && "[&_a]:text-blue-100 [&_span]:text-white [&_svg]:text-blue-200")}
        />
        <div className="max-w-4xl">
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={cn(
                "font-mono text-[11px] font-bold uppercase tracking-[0.12em] mb-4",
                isBlue ? "text-blue-100" : "text-blue-500"
              )}
            >
              {eyebrow}
            </motion.p>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn("fluid-xl md:fluid-hero", isBlue ? "text-white" : "text-text-primary")}
          >
            {title}
            {badge && (
              <span className="ml-3 inline-block align-middle">
                <span
                  className={cn(
                    "pill",
                    isBlue ? "bg-white/15 text-white" : "pill-blue"
                  )}
                >
                  {badge}
                </span>
              </span>
            )}
          </motion.h1>
          {subtitle && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={cn(
                "mt-5 text-lg md:text-xl leading-relaxed max-w-2xl",
                isBlue ? "text-blue-50" : "text-text-muted"
              )}
            >
              {subtitle}
            </motion.div>
          )}
          {(ctaLabel || secondaryCtaLabel) && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {ctaLabel && (
                <Button
                  variant={isBlue ? "secondary" : "primary"}
                  size="lg"
                  href={ctaHref}
                  className={isBlue ? "bg-white text-blue-700 border-white hover:bg-blue-50" : ""}
                >
                  {ctaLabel}
                </Button>
              )}
              {secondaryCtaLabel && (
                <Button
                  variant="ghost"
                  size="lg"
                  href={secondaryCtaHref}
                  className={isBlue ? "text-white border-white/30 hover:bg-white/10 hover:text-white" : ""}
                >
                  {secondaryCtaLabel}
                </Button>
              )}
            </motion.div>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
