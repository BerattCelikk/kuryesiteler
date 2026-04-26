"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ILLUSTRATIONS } from "@/components/illustrations";
import { WORKSHOP, type Service } from "@/lib/constants";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

function ServiceRow({ service, index }: { service: Service; index: number }) {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const Illustration = ILLUSTRATIONS[service.illustrationId];
  const reverse = index % 2 === 1;
  const href =
    service.id === "b2b" ? "/ekibinizle-gelin" : `/hizmetler/${service.slug}`;

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-12 items-center py-10",
        reverse && "md:grid-cols-[1fr_200px]",
      )}
    >
      <div
        className={cn(
          "flex justify-center md:justify-start",
          reverse && "md:order-last md:justify-end",
        )}
      >
        <div
          className={cn(
            "icon-wrap !w-[180px] !h-[180px]",
            visible &&
              "[animation:iconPop_0.6s_cubic-bezier(0.34,1.56,0.64,1)_forwards]",
          )}
          style={{ opacity: visible ? 1 : 0 }}
        >
          <Illustration size={140} />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <span
          className={cn(
            "inline-flex items-center rounded-full px-3 py-1 font-body text-[11px] font-bold tracking-wider uppercase mb-3",
            service.badgeColor === "sage"
              ? "bg-sage-bg text-sage-600 border border-sage-300/50"
              : "bg-terra-100 text-terra-600 border border-terra-200",
          )}
        >
          {service.badge}
        </span>
        <h3 className="font-display text-section-lg text-ink mb-3">
          {service.navTitle}
        </h3>
        <p className="font-body text-body-lg text-ink-light max-w-xl mb-5">
          {service.desc}
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 max-w-lg">
          {service.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2 font-body text-sm text-ink-mid">
              <Check size={16} className="text-sage-500 mt-0.5 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <Link
          href={href}
          className="inline-flex items-center gap-2 font-body font-semibold text-terra-500 hover:text-terra-600 transition-colors group"
        >
          Detaylı Bilgi
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Hizmetler"
          title={WORKSHOP.copy.servicesTitle}
          subtitle="Beş ana hizmet — hepsi tek atölyede, sıcacık."
        />
        <div className="divide-y divide-terra-200/40">
          {WORKSHOP.services.map((s, i) => (
            <ServiceRow key={s.id} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
