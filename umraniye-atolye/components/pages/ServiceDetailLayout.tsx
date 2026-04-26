import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { ArrowRight, CheckCircle2, Clock, MessageCircle } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import type { WorkshopService } from "@/types";
import { PageHero } from "@/components/ui/PageHero";
import { InfoCard } from "@/components/ui/InfoCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { FAQItem } from "@/components/ui/FAQItem";
import { Icon } from "@/components/ui/Icon";
import { getTodayHours } from "@/lib/utils";

const badgeClass: Record<string, string> = {
  success: "pill-success",
  blue: "pill-blue",
  teal: "pill-teal",
  warning: "pill-warning",
  neutral: "pill-neutral",
};

interface Props {
  service: WorkshopService;
  howItWorks: { icon: string; title: string; desc: string }[];
  requirements: string[];
  relatedFaq: { q: string; a: string }[];
  priceDisplay?: string;
}

export function ServiceDetailLayout({
  service,
  howItWorks,
  requirements,
  relatedFaq,
  priceDisplay,
}: Props) {
  const otherServices = WORKSHOP.services.filter(
    (s) => s.slug && s.slug !== service.slug
  );

  return (
    <>
      <PageHero
        variant="white"
        eyebrow="HİZMET DETAYI"
        title={service.title}
        subtitle={service.longDesc ?? service.desc}
        badge={service.badge}
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetler", href: "/hizmetler" },
          { label: service.title },
        ]}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_340px] gap-10">
          {/* Main */}
          <div className="space-y-14">
            {/* How */}
            <div>
              <h3 className="section-label mb-4">NASIL İŞLER?</h3>
              <h2 className="fluid-xl text-text-primary">3 Adımda Tamamlanır</h2>
              <div className="mt-8 grid md:grid-cols-3 gap-5">
                {howItWorks.map((h, i) => (
                  <InfoCard key={h.title} padding="md">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 rounded-[8px] bg-blue-600 text-white font-mono font-bold text-sm flex items-center justify-center">
                        {i + 1}
                      </span>
                      <Icon name={h.icon} className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="font-display font-semibold text-text-primary">{h.title}</div>
                    <p className="mt-1 text-sm text-text-muted leading-relaxed">{h.desc}</p>
                  </InfoCard>
                ))}
              </div>
            </div>

            {/* Requirements */}
            <div>
              <h3 className="section-label mb-4">GEREKLİ BELGELER</h3>
              <h2 className="fluid-xl text-text-primary">Yanınızda Getirin</h2>
              <InfoCard padding="lg" className="mt-6">
                <ul className="space-y-3">
                  {requirements.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-text-secondary">
                      <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>
            </div>

            {/* Benefits */}
            {service.benefits && (
              <div>
                <h3 className="section-label mb-4">AVANTAJLAR</h3>
                <h2 className="fluid-xl text-text-primary">Neden Bu Hizmet?</h2>
                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  {service.benefits.map((b) => (
                    <InfoCard key={b} padding="md">
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-[10px] bg-blue-50 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        </div>
                        <span className="text-sm text-text-secondary pt-1">{b}</span>
                      </div>
                    </InfoCard>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ */}
            {relatedFaq.length > 0 && (
              <div>
                <h3 className="section-label mb-4">SIK SORULAN SORULAR</h3>
                <h2 className="fluid-xl text-text-primary mb-6">Bu Hizmet Hakkında</h2>
                <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
                  {relatedFaq.map((f, i) => (
                    <FAQItem key={f.q} item={f} index={i} value={`f-${i}`} />
                  ))}
                </Accordion.Root>
              </div>
            )}
          </div>

          {/* Sticky right panel */}
          <aside>
            <div className="lg:sticky lg:top-24 space-y-5">
              <InfoCard accent="blue" padding="md">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-display font-bold text-lg text-text-primary">
                    {service.title}
                  </h3>
                  <span className={`pill ${badgeClass[service.badgeVariant] ?? "pill-neutral"}`}>
                    {service.badge}
                  </span>
                </div>
                <div className="font-stat text-blue-600">{priceDisplay ?? service.badge}</div>
                <p className="text-sm text-text-muted mt-1">{service.detail}</p>
                <div className="mt-4 pt-4 border-t border-border-light flex items-center justify-between">
                  <StatusBadge size="sm" />
                  <span className="text-xs text-text-muted font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {getTodayHours()}
                  </span>
                </div>
                <div className="mt-4 space-y-2">
                  <Button variant="primary" size="md" fullWidth href="/randevu">
                    Randevu Al
                  </Button>
                  <Button
                    variant="teal"
                    size="md"
                    fullWidth
                    href={WORKSHOP.waLink}
                    icon={<MessageCircle className="w-4 h-4" />}
                    iconPosition="left"
                  >
                    WhatsApp ile Sor
                  </Button>
                </div>
              </InfoCard>

              <div className="card-base p-5">
                <h4 className="section-label mb-3">DİĞER HİZMETLER</h4>
                <ul className="space-y-1">
                  {otherServices.map((s) => (
                    <li key={s.id}>
                      <Link
                        href={`/hizmetler/${s.slug}`}
                        className="flex items-center gap-2 py-2 px-2 rounded-[8px] text-sm text-text-secondary hover:bg-blue-50 hover:text-blue-700"
                      >
                        <Icon name={s.icon} className="w-4 h-4 text-text-muted" />
                        <span className="flex-1">{s.title}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default ServiceDetailLayout;
