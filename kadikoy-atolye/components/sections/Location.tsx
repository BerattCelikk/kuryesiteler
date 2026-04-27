"use client";
import dynamic from "next/dynamic";
import * as Icons from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import EditorialRule from "@/components/editorial/EditorialRule";
import InkReveal from "@/components/editorial/InkReveal";
import Button from "@/components/ui/Button";

const WorkshopMap = dynamic(() => import("@/components/ui/WorkshopMap"), {
  ssr: false,
  loading: () => <div className="w-full h-[420px] bg-ivory-mid border border-[var(--border-light)] rounded-lg" />,
});

type IconName = keyof typeof Icons;

export default function Location() {
  return (
    <section className="bg-ivory py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="editorial-label">Konum</div>
        <EditorialRule color="gold" className="mt-3" />
        <InkReveal as="h2" className="mt-6">
          <span className="block font-display font-medium text-[clamp(2rem,4vw,4rem)] leading-[1.05] text-ink">
            {WORKSHOP.copy.locationTitle}
          </span>
        </InkReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10">
          <div>
            <div className="editorial-card px-7 py-8">
              <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">Adres</div>
              <div className="mt-2 font-display text-[20px] font-medium text-ink leading-snug">
                {WORKSHOP.address}
              </div>
              <EditorialRule color="gold" width="40px" className="mt-3" />
              <div className="mt-4 grid gap-3">
                {WORKSHOP.transit.map((t) => {
                  const Icon = (Icons[t.icon as IconName] ?? Icons.MapPin) as React.ComponentType<{ className?: string; strokeWidth?: number }>;
                  return (
                    <div key={t.label} className="flex items-center gap-3">
                      <Icon className={`w-4 h-4 ${t.highlight ? "text-gold-500" : "text-forest-400"}`} strokeWidth={1.5} />
                      <span className="font-body text-[14px] text-text-secondary flex-1">{t.label}</span>
                      <span className="font-mono text-[12px] text-text-muted">{t.detail}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex gap-3">
                <Button href={WORKSHOP.googleMapsUrl} external variant="primary" size="sm">Yol Tarifi Alın</Button>
                <Button href={`tel:${WORKSHOP.phoneRaw}`} variant="ghost" size="sm">Arayın</Button>
              </div>
            </div>
          </div>

          <WorkshopMap height={460} />
        </div>
      </div>
    </section>
  );
}
