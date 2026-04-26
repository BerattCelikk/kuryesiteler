import type { Metadata } from "next";
import {
  Phone,
  MessageCircle,
  Camera as Instagram,
  DoorOpen,
  MapPin,
  Clock,
  Train,
  Route,
  ParkingCircle,
  ArrowRight,
} from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { InfoCard } from "@/components/ui/InfoCard";
import { WorkshopMapDynamic } from "@/components/ui/WorkshopMapDynamic";
import { ContactForm } from "@/components/pages/ContactForm";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getTodayHours } from "@/lib/utils";

export const metadata: Metadata = {
  title: "İletişim",
  description: "Ümraniye kurye atölyemize ulaşın: telefon, WhatsApp, Instagram, walk-in. Konum ve çalışma saatleri.",
  alternates: { canonical: "/iletisim" },
};

const TRANSIT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Train, Route, ParkingCircle, MapPin,
};

export default function IletisimPage() {
  const contactCards = [
    {
      icon: Phone,
      title: "Telefon",
      value: WORKSHOP.phone,
      cta: "Ara",
      href: `tel:${WORKSHOP.phoneRaw}`,
      color: "bg-blue-50 text-blue-600",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "7/24 destek",
      cta: "Yaz",
      href: WORKSHOP.waLink,
      color: "bg-teal-50 text-teal-600",
    },
    {
      icon: Instagram,
      title: "Instagram",
      value: WORKSHOP.instagram,
      cta: "Takip Et",
      href: `https://instagram.com/${WORKSHOP.instagram.replace("@", "")}`,
      color: "bg-[#F5E4F7] text-[#A83FB3]",
    },
    {
      icon: DoorOpen,
      title: "Walk-in",
      value: "Randevusuz Gel",
      cta: "Rota Al",
      href: WORKSHOP.googleMapsUrl,
      color: "bg-success-bg text-success",
    },
  ];

  return (
    <>
      <PageHero
        variant="soft"
        eyebrow="İLETİŞİM"
        title="Bize Ulaşın"
        subtitle="Kanal seçin: telefon, WhatsApp, Instagram veya atölyemize walk-in gelin. 7 gün açığız."
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "İletişim" }]}
      />

      {/* 4-col contact cards */}
      <section className="py-14 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {contactCards.map((c) => (
              <InfoCard key={c.title} padding="md">
                <div
                  className={`w-12 h-12 rounded-[12px] flex items-center justify-center mb-4 ${c.color}`}
                >
                  <c.icon className="w-5 h-5" />
                </div>
                <div className="text-xs font-mono uppercase text-text-muted tracking-wider">
                  {c.title}
                </div>
                <div className="mt-1 font-display font-semibold text-text-primary break-all">
                  {c.value}
                </div>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  {c.cta} <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width map + info */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <WorkshopMapDynamic height={500} />
          <div className="mt-6 grid md:grid-cols-3 gap-5">
            <InfoCard padding="md">
              <h4 className="section-label mb-3">ADRES</h4>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary">{WORKSHOP.address}</span>
              </div>
              <a
                href={WORKSHOP.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-sm text-blue-600 font-medium"
              >
                Rota Al <ArrowRight className="w-3 h-3" />
              </a>
            </InfoCard>
            <InfoCard padding="md">
              <h4 className="section-label mb-3">SAATLER</h4>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-text-secondary">Bugün {getTodayHours()}</span>
              </div>
              <div className="mt-3 space-y-1 text-xs text-text-muted font-mono">
                <div>Hafta içi: 08:00 – 23:00</div>
                <div>Hafta sonu: 08:00 – 23:00</div>
                <div>Tatil: 09:00 – 22:00</div>
              </div>
            </InfoCard>
            <InfoCard padding="md">
              <h4 className="section-label mb-3">ULAŞIM</h4>
              <ul className="space-y-2 text-sm">
                {WORKSHOP.transit.map((t) => {
                  const I = TRANSIT_ICONS[t.icon] ?? MapPin;
                  return (
                    <li key={t.label} className="flex items-start gap-2">
                      <I className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-text-primary font-medium">{t.label}</span>
                        <span className="text-text-muted"> · {t.detail}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Quick form */}
      <section className="pb-20">
        <div className="max-w-xl mx-auto px-6">
          <SectionHeader
            label="// HIZLI MESAJ"
            title="Mesaj Gönderin"
            subtitle="Kısa bir mesaj bırakın, size geri dönelim."
            align="center"
            className="mb-8"
          />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
