import * as Icons from "lucide-react";
import Link from "next/link";
import type { Service } from "@/lib/constants";
import { WORKSHOP } from "@/lib/constants";
import PageHeader from "@/components/editorial/PageHeader";
import EditorialRule from "@/components/editorial/EditorialRule";
import InkReveal from "@/components/editorial/InkReveal";
import PullQuote from "@/components/editorial/PullQuote";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";

type IconName = keyof typeof Icons;

export default function ServiceDetail({ service }: { service: Service }) {
  const Icon = (Icons[service.icon as IconName] ?? Icons.Sparkle) as React.ComponentType<{ className?: string; strokeWidth?: number }>;
  const others = WORKSHOP.services.filter((s) => s.id !== service.id);

  return (
    <>
      <PageHeader
        eyebrow={`Hizmet · ${service.badge}`}
        title={service.pageTitle}
        subtitle={service.desc}
        page={`No. ${WORKSHOP.services.findIndex((s) => s.id === service.id) + 1}`}
      />

      <section className="bg-ivory py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
          <div>
            <div className="editorial-label">Detaylar</div>
            <EditorialRule color="gold" className="mt-3" />
            <InkReveal className="mt-6">
              <p className="font-body text-[18px] leading-[1.85] text-text-secondary">
                {service.longDesc}
              </p>
            </InkReveal>

            <PullQuote text={'"Kadıköy\'de en sade, en güvenilir hizmet anlayışı."'} />

            <div className="mt-10">
              <div className="editorial-label">Faydalar</div>
              <EditorialRule color="forest" width="32px" className="mt-3" />
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {service.benefits.map((b) => (
                  <li key={b} className="flex gap-3 items-start font-body text-[15px] text-text-secondary leading-[1.7]">
                    <Icon className="w-4 h-4 mt-1 text-gold-500" strokeWidth={1.5} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              <Button href="/randevu" variant="primary" size="lg">Randevu Alın</Button>
              <Button href={WORKSHOP.waLink} external variant="secondary" size="lg">Mesaj Gönderin</Button>
            </div>
          </div>

          <aside className="editorial-card px-7 py-8 self-start">
            <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-text-muted">Hızlı Bilgi</div>
            <EditorialRule color="gold" width="40px" className="mt-3" />
            <ul className="mt-5 space-y-4 font-body text-[14px] text-text-secondary">
              <li className="flex justify-between gap-3"><span>Süre</span><span className="font-mono text-text-muted">{service.badge}</span></li>
              <li className="flex justify-between gap-3"><span>Konum</span><span className="font-mono text-text-muted">Koşuyolu</span></li>
              <li className="flex justify-between gap-3"><span>Ön ödeme</span><span className="font-mono text-text-muted">Yok</span></li>
              <li className="flex justify-between gap-3"><span>Randevu</span><span className="font-mono text-text-muted">Önerilir</span></li>
            </ul>
            <div className="mt-6">
              <Button href="/randevu" variant="ghost" size="sm">Tarih Seçin</Button>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-ivory-mid py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="editorial-label">Diğer Hizmetler</div>
          <EditorialRule color="gold" className="mt-3" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {others.map((s) => (
              <Link
                key={s.id}
                href={`/hizmetler/${s.slug}`}
                className="editorial-card px-7 py-7 group"
                data-cursor="hover"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-gold-500">{s.badge}</div>
                <div className="mt-3 font-display text-[24px] font-medium text-ink">{s.navTitle}</div>
                <p className="mt-2 font-body text-[14px] text-text-muted leading-[1.7]">{s.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-forest-500 text-[13px] font-semibold">
                  Detay <span aria-hidden>→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
