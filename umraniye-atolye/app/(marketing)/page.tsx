import Link from "next/link";
import { ArrowRight, MapPin, Clock, Train, Route, ParkingCircle } from "lucide-react";
import * as Accordion from "@radix-ui/react-accordion";
import { WORKSHOP } from "@/lib/constants";
import { HomeHero } from "@/components/sections/HomeHero";
import { StatsBar } from "@/components/sections/StatsBar";
import { RegisterCTA } from "@/components/sections/RegisterCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { StepCard } from "@/components/ui/StepCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { FAQItem } from "@/components/ui/FAQItem";
import { InfoCard } from "@/components/ui/InfoCard";
import { WorkshopMapDynamic } from "@/components/ui/WorkshopMapDynamic";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { getTodayHours } from "@/lib/utils";

export default function HomePage() {
  const featured = WORKSHOP.services.filter((s) => s.id === "registration" || s.id === "b2b" || s.id === "swap");
  const previewSteps = WORKSHOP.steps.slice(0, 3);
  const previewFaq = WORKSHOP.faq.slice(0, 4);

  return (
    <>
      <HomeHero />
      <StatsBar />

      {/* Services Overview */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <SectionHeader
              label="// HİZMETLER"
              title="Hizmetlerimiz"
              subtitle="Kurye dünyasının tüm ihtiyaçlarına tek çatı altında çözüm."
            />
            <Link
              href="/hizmetler"
              className="text-sm font-display font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
            >
              Tümünü Gör <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {featured.map((s, i) => (
              <ServiceCard key={s.id} service={s} variant="compact" index={i} />
            ))}
          </div>

          <div className="mt-10">
            <InfoCard padding="lg" className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-xl text-text-primary">
                  Tüm hizmetlerimizi keşfedin
                </h3>
                <p className="text-text-muted mt-1 text-sm">
                  Çanta kaydı, bakım, B2B filo yönetimi ve daha fazlası.
                </p>
              </div>
              <Link
                href="/hizmetler"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-[12px] bg-blue-50 text-blue-700 hover:bg-blue-100 font-display font-semibold text-sm"
              >
                Hizmetler Sayfası <ArrowRight className="w-4 h-4" />
              </Link>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* How it works preview */}
      <section className="py-20 md:py-24 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <SectionHeader
              label="// 6 ADIM"
              title="6 Adımda Başla"
              subtitle="Kayıt çok hızlı. İşte ilk üç adım — devamını ayrıntılı sayfada görün."
            />
            <Link
              href="/nasil-calisir"
              className="text-sm font-display font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
            >
              Detaylı Bilgi <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {previewSteps.map((s, i) => (
              <StepCard key={s.n} step={s} index={i} position="left" />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/nasil-calisir"
              className="inline-flex items-center gap-2 h-12 px-6 rounded-[14px] bg-blue-600 text-white hover:bg-blue-700 font-display font-semibold"
            >
              Devamını Gör <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Workshop preview */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <SectionHeader label="// ATÖLYE" title="Atölyemiz" subtitle={WORKSHOP.tagline} />
            <Link
              href="/atolye"
              className="text-sm font-display font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
            >
              Detaylar <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <InfoCard accent="blue" padding="lg">
              <StatusBadge size="md" />
              <div className="mt-4 space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-text-secondary">{WORKSHOP.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span className="text-text-secondary">Bugün {getTodayHours()}</span>
                </div>
              </div>
              <h4 className="section-label mt-6 mb-3">ULAŞIM</h4>
              <div className="grid grid-cols-2 gap-3">
                {WORKSHOP.transit.map((t) => {
                  const I = { Train, Route, ParkingCircle }[t.icon] ?? MapPin;
                  return (
                    <div key={t.label} className="flex items-start gap-2 text-sm">
                      <I className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-medium text-text-primary">{t.label}</div>
                        <div className="text-xs text-text-muted">{t.detail}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </InfoCard>
            <WorkshopMapDynamic height={400} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-24 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="// REFERANSLAR"
            title="Kuryeler Ne Diyor?"
            subtitle="Her gün atölyemize gelen 500+ kuryenin izlenimleri."
            align="center"
            className="mb-12"
          />
          <div className="grid md:grid-cols-3 gap-5">
            {WORKSHOP.testimonials.slice(0, 3).map((t, i) => (
              <TestimonialCard key={t.name} t={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <SectionHeader label="// SSS" title="Sık Sorulan Sorular" />
            <Link
              href="/sss"
              className="text-sm font-display font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
            >
              Tüm Sorular <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
            {previewFaq.map((f, i) => (
              <FAQItem key={f.q} item={f} index={i} value={`faq-${i}`} />
            ))}
          </Accordion.Root>
        </div>
      </section>

      <RegisterCTA />
    </>
  );
}
