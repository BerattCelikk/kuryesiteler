import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { BarcodeDecoration } from "@/components/ui/BarcodeDecoration";
import { BentoCell } from "@/components/bento/BentoCell";
import { PrecisionStat } from "@/components/ui/PrecisionStat";
import { ServiceListItem } from "@/components/ui/ServiceListItem";
import { HeroTyper } from "@/components/sections/HeroTyper";
import { MapWidget } from "@/components/widgets/MapWidget";
import { ContactFormDark } from "@/components/sections/ContactFormDark";
import { HomeFAQAccordion } from "@/components/sections/HomeFAQAccordion";
import { StepStrip } from "@/components/sections/StepStrip";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8">
        {/* Compact dashboard header row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 border-b border-gray-200 pb-5 mb-5">
          <div className="flex items-center gap-4 flex-wrap">
            <h1 className="font-display font-bold text-[26px] md:text-[28px] text-gray-900 tracking-tight">
              Pendik Atölyesi
            </h1>
            <StatusBadge size="md" />
            <span className="text-[12px] font-mono text-gray-500">
              {WORKSHOP.hours.weekday.open}-{WORKSHOP.hours.weekday.close}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <BarcodeDecoration bars={10} className="hidden md:inline-flex" />
            <Button variant="primary" size="md" href="/randevu">
              Randevu Al
            </Button>
          </div>
        </div>

        {/* Bento dashboard grid */}
        <div className="bento-grid">
          {/* CELL A - Hero (8x2) */}
          <BentoCell colSpan={8} rowSpan={2} variant="dark" withSweep delay={0}>
            <div className="flex flex-col h-full justify-between gap-6 min-h-[280px]">
              <HeroTyper text="// PDK-ATÖLYE · ANADOLU YAKASI" />
              <div className="flex-1 flex flex-col justify-center">
                <h2 className="font-display font-extrabold text-hero-xl text-gray-50 leading-[0.95] tracking-[-0.02em]">
                  {WORKSHOP.copy.heroLine1}
                  <br />
                  <span className="text-lime-300">{WORKSHOP.copy.heroLine2}</span>
                </h2>
                <p className="text-gray-300 text-[16px] mt-5 max-w-md leading-relaxed">
                  {WORKSHOP.copy.heroSub}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="lg" href="/randevu">
                    Randevu Al <ArrowRight size={16} />
                  </Button>
                  <Button variant="dark-ghost" size="lg" href="/surec">
                    Süreç Nasıl?
                  </Button>
                </div>
                <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] font-mono text-lime-400">
                  <span>✓ Ücretsiz</span>
                  <span>✓ 10 dk</span>
                  <span>✓ Walk-in</span>
                  <span>✓ Kargo+Yemek</span>
                </div>
              </div>
            </div>
            <BarcodeDecoration
              bars={16}
              className="absolute bottom-3 right-4 !opacity-25"
            />
          </BentoCell>

          {/* CELL B - Status (4x1) */}
          <BentoCell colSpan={4} rowSpan={1} variant="lime" delay={0.05}>
            <div className="flex flex-col gap-2 h-full justify-center">
              <span className="font-mono text-[11px] font-medium text-gray-700 uppercase tracking-widest">
                ATÖLYE DURUMU
              </span>
              <div className="font-display font-extrabold text-[42px] leading-none text-gray-900">
                AÇIK
              </div>
              <div className="font-mono text-[13px] text-gray-700">
                {WORKSHOP.hours.weekday.open} – {WORKSHOP.hours.weekday.close}
              </div>
              <div className="text-[12px] text-gray-700 font-semibold">
                Walk-in: ≤10 dk
              </div>
            </div>
          </BentoCell>

          {/* CELL C - Quick stats (4x1) */}
          <BentoCell colSpan={4} rowSpan={1} delay={0.1}>
            <div className="grid grid-cols-2 gap-4 h-full">
              {WORKSHOP.stats.map((s) => (
                <div key={s.id} className="flex flex-col gap-1">
                  <span className="precision-label">{s.label}</span>
                  <span className="font-display font-bold text-[26px] text-gray-900 leading-none data-value">
                    {s.display}
                  </span>
                  <span className="text-[11px] text-gray-500">{s.sublabel}</span>
                </div>
              ))}
            </div>
          </BentoCell>

          {/* CELL D - Services list (5x2) */}
          <BentoCell colSpan={5} rowSpan={2} delay={0.15}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="precision-label">Ne İhtiyacın Var?</span>
                <BarcodeDecoration bars={8} />
              </div>
              <div className="flex-1 flex flex-col">
                {WORKSHOP.services.map((s, i) => (
                  <ServiceListItem key={s.id} service={s} index={i} />
                ))}
              </div>
              <Link
                href="/hizmetler"
                className="text-[13px] text-lime-600 hover:text-lime-700 font-semibold mt-3 inline-flex items-center gap-1 self-start"
              >
                Tümünü Gör <ArrowRight size={13} />
              </Link>
            </div>
          </BentoCell>

          {/* CELL E - Map (7x2) */}
          <BentoCell colSpan={7} rowSpan={2} delay={0.2} noPadding>
            <MapWidget />
          </BentoCell>

          {/* CELL F - Stat couriers (3x1) */}
          <BentoCell colSpan={3} rowSpan={1} variant="dark" delay={0.25}>
            <PrecisionStat
              stat={{
                id: "couriers",
                value: 9000,
                display: "9.000+",
                label: "AKTİF KURYE",
                sublabel: "kayıtlı",
              }}
              variant="dark"
              size="lg"
            />
          </BentoCell>

          {/* CELL G - Stat population (3x1) */}
          <BentoCell colSpan={3} rowSpan={1} variant="dark" delay={0.3}>
            <PrecisionStat
              stat={{
                id: "population",
                value: 600000,
                display: "600K+",
                label: "PENDİK NÜFUSU",
                sublabel: "kişi",
              }}
              variant="dark"
              size="lg"
            />
          </BentoCell>

          {/* CELL H - Process strip (6x1) */}
          <BentoCell colSpan={6} rowSpan={1} delay={0.35}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="precision-label">Süreç: 6 Adım</span>
                <Link
                  href="/surec"
                  className="text-[12px] text-lime-600 hover:text-lime-700 font-semibold inline-flex items-center gap-1"
                >
                  Detaylı <ArrowRight size={12} />
                </Link>
              </div>
              <StepStrip />
            </div>
          </BentoCell>

          {/* CELL I - Testimonial (6x1) */}
          <BentoCell colSpan={6} rowSpan={1} delay={0.4}>
            <div className="flex flex-col h-full justify-between gap-3">
              <div className="flex items-center justify-between">
                <span className="precision-label">{WORKSHOP.copy.testiTitle}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={12} className="fill-lime-500 text-lime-500" />
                  ))}
                </div>
              </div>
              <p className="italic text-[15px] text-gray-700 leading-relaxed flex-1">
                &ldquo;{WORKSHOP.testimonials[0].text}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <div className="font-mono text-[12px] text-gray-600">
                  <span className="font-semibold text-gray-900">
                    {WORKSHOP.testimonials[0].name}
                  </span>{" "}
                  · {WORKSHOP.testimonials[0].role}
                </div>
                <span className="text-[11px] text-lime-600 font-mono">
                  4 KURYE →
                </span>
              </div>
            </div>
          </BentoCell>

          {/* CELL J - B2B CTA (4x1) */}
          <BentoCell colSpan={4} rowSpan={1} variant="lime" delay={0.45}>
            <div className="flex flex-col h-full justify-between gap-2">
              <span className="font-mono text-[11px] font-medium text-gray-800 uppercase tracking-widest">
                B2B PROGRAMI
              </span>
              <div>
                <h3 className="font-display font-bold text-[26px] text-gray-900 leading-tight">
                  Filo Yönetimi
                </h3>
                <p className="text-[13px] text-gray-800 mt-1">
                  5+ kurye için özel program.
                </p>
              </div>
              <Button variant="dark" size="sm" href="/filo-yonetimi">
                Filo Başvurusu
              </Button>
            </div>
          </BentoCell>

          {/* CELL K - FAQ preview (8x1) */}
          <BentoCell colSpan={8} rowSpan={1} delay={0.5}>
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-3">
                <span className="precision-label">{WORKSHOP.copy.faqTitle}</span>
                <Link
                  href="/sss"
                  className="text-[12px] text-lime-600 hover:text-lime-700 font-semibold inline-flex items-center gap-1"
                >
                  Tüm Sorular <ArrowRight size={12} />
                </Link>
              </div>
              <HomeFAQAccordion />
            </div>
          </BentoCell>

          {/* CELL L - CTA bottom (12x1) */}
          <BentoCell colSpan={12} rowSpan={1} variant="dark" withSweep delay={0.55}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="precision-label">{WORKSHOP.copy.ctaTitle}</span>
                <h3 className="font-display font-bold text-section-xl text-lime-300 mt-2 leading-tight">
                  {WORKSHOP.copy.ctaTitle}
                </h3>
                <p className="text-[15px] text-gray-300 mt-2 max-w-md">
                  {WORKSHOP.copy.ctaSub} Sorularınız için aşağıdaki formu doldurun, en
                  geç 1 saat içinde dönüş yaparız.
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Button variant="primary" size="md" href="/randevu">
                    Randevu Al
                  </Button>
                  <Button variant="dark-ghost" size="md" href={WORKSHOP.waLink}>
                    WhatsApp
                  </Button>
                </div>
              </div>
              <ContactFormDark />
            </div>
          </BentoCell>
        </div>
      </div>
    </div>
  );
}
