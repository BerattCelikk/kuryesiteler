import type { Metadata } from "next";
import { Phone, MapPin, Mail, Clock, Instagram } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { MapClient } from "@/components/ui/MapClient";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { WORKSHOP } from "@/lib/constants";
import { getTodayHours } from "@/lib/utils";

export const metadata: Metadata = {
  title: "İletişim · Sultanbeyli Atölyesi",
  description: "Bize ulaşın — telefon, WhatsApp, e-posta veya kapıya gelin.",
};

const CHANNELS = [
  {
    icon: Phone,
    title: "Telefon",
    value: WORKSHOP.phone,
    href: `tel:${WORKSHOP.phoneRaw}`,
    cta: "Hemen Ara",
  },
  {
    icon: Mail,
    title: "E-posta",
    value: WORKSHOP.email,
    href: `mailto:${WORKSHOP.email}`,
    cta: "Mesaj Gönder",
  },
  {
    icon: MapPin,
    title: "Adres",
    value: WORKSHOP.address,
    href: WORKSHOP.googleMapsUrl,
    cta: "Yol Tarifi",
    external: true,
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: WORKSHOP.instagram,
    href: `https://instagram.com/${WORKSHOP.instagram.replace("@", "")}`,
    cta: "Takip Et",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "İletişim" }]}
        label="İletişim"
        title={WORKSHOP.copy.contactTitle}
        subtitle="Bizi bulmanın bir sürü yolu var. Her birini denemenizi memnuniyetle karşılarız."
      />

      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {CHANNELS.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className="warm-card !bg-cream-mid p-5 group"
                >
                  <span className="h-11 w-11 rounded-2xl bg-terra-100 border border-terra-200 flex items-center justify-center mb-3">
                    <c.icon size={18} className="text-terra-500" />
                  </span>
                  <div className="section-label mb-1">{c.title}</div>
                  <div className="font-body font-semibold text-ink mb-2">{c.value}</div>
                  <span className="font-body text-xs text-terra-500 group-hover:text-terra-600 font-bold">
                    {c.cta} →
                  </span>
                </a>
              ))}
            </div>

            <div className="warm-card !bg-cream p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={18} className="text-terra-500" />
                <span className="section-label">Çalışma Saatleri</span>
              </div>
              <ul className="space-y-2 mb-4 font-body text-sm text-ink-mid">
                <li className="flex justify-between"><span>Hafta içi</span><span className="font-mono">08:00 – 22:00</span></li>
                <li className="flex justify-between"><span>Cumartesi</span><span className="font-mono">09:00 – 21:00</span></li>
                <li className="flex justify-between"><span>Pazar</span><span className="font-mono">09:00 – 21:00</span></li>
              </ul>
              <div className="flex items-center gap-2">
                <StatusBadge size="md" />
                <span className="font-body text-xs text-ink-light">
                  Bugün {getTodayHours()}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button variant="whatsapp" size="lg" href={WORKSHOP.waLink} external>
                WhatsApp&apos;tan Yazın
              </Button>
              <Button variant="primary" size="lg" href="/randevu">
                Randevu Alın
              </Button>
            </div>
          </div>

          <MapClient height={560} />
        </div>
      </section>
    </>
  );
}
