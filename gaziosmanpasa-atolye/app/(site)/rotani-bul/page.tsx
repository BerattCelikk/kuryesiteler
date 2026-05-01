import type { Metadata } from "next";
import { Bus, Train, Route as RouteIcon, ParkingCircle, MapPin, Phone, MessageCircle, ArrowUpRight, Clock } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import TiltCard from "@/components/ui/TiltCard";
import StatusIndicator from "@/components/ui/StatusIndicator";
import Button from "@/components/ui/Button";
import WorkshopMapIsland from "@/components/sections/WorkshopMapIsland";
import { WORKSHOP } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Atölyeyi Bul | GOP Atölye — Gaziosmanpaşa",
  description:
    "Gaziosmanpaşa'daki atölyemizin konumunu, çalışma saatlerini ve toplu taşıma seçeneklerini öğrenin.",
  openGraph: {
    title: "Atölyeyi Bul | GOP Atölye",
    description: "Gaziosmanpaşa merkez konumdaki atölyemize nasıl ulaşırsınız?",
  },
  alternates: { canonical: "https://gop.kuryeproje.com/rotani-bul" },
};

const transitIconMap: Record<string, React.ComponentType<{ className?: string }>> = { Bus, Train, Route: RouteIcon, ParkingCircle };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: WORKSHOP.name,
  description: WORKSHOP.shortDesc,
  url: "https://gop.kuryeproje.com/rotani-bul",
  telephone: WORKSHOP.phoneRaw,
  email: WORKSHOP.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: WORKSHOP.street,
    addressLocality: WORKSHOP.district,
    addressRegion: "İstanbul",
    postalCode: WORKSHOP.postalCode,
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: WORKSHOP.coordinates.lat,
    longitude: WORKSHOP.coordinates.lng,
  },
  openingHours: [
    `Mo-Fr ${WORKSHOP.hours.weekday.open}-${WORKSHOP.hours.weekday.close}`,
    `Sa-Su ${WORKSHOP.hours.weekend.open}-${WORKSHOP.hours.weekend.close}`,
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero breadcrumb="GOP → ROTANI BUL" title="Neredeyiz?" subtitle="Fevzi Çakmak Caddesi · Gaziosmanpaşa · Avrupa Yakası" />

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-12 grid lg:grid-cols-[1fr_400px] gap-8">
        <div className="h-[480px] md:h-[580px] panel overflow-hidden p-1">
          <WorkshopMapIsland />
        </div>

        <aside className="space-y-5">
          <TiltCard maxTilt={4}>
            <div className="panel-coral holo-card p-6">
              <div className="font-mono text-mono-label text-coral-300 mb-4">// İLETİŞİM</div>
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-5 h-5 text-coral-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-body font-semibold text-text-bright">{WORKSHOP.name}</div>
                  <div className="font-body text-sm text-text-secondary mt-1">{WORKSHOP.address}</div>
                </div>
              </div>

              <div className="space-y-2.5 font-mono text-[13px] mb-5">
                <div className="flex items-center gap-2 text-text-secondary">
                  <Phone className="w-3.5 h-3.5 text-coral-400" /> {WORKSHOP.phone}
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Clock className="w-3.5 h-3.5 text-coral-400" /> Hafta içi {WORKSHOP.hours.weekday.open}–{WORKSHOP.hours.weekday.close}
                </div>
                <div className="flex items-center gap-2 text-text-secondary">
                  <Clock className="w-3.5 h-3.5 text-coral-400" /> Hafta sonu {WORKSHOP.hours.weekend.open}–{WORKSHOP.hours.weekend.close}
                </div>
              </div>

              <StatusIndicator size="md" />

              <div className="mt-5 space-y-3">
                <Button href={WORKSHOP.googleMapsUrl} target="_blank" variant="primary" fullWidth>
                  Rotayı Aç <ArrowUpRight className="w-4 h-4" />
                </Button>
                <Button href={WORKSHOP.waLink} target="_blank" variant="ghost" fullWidth>
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </Button>
              </div>
            </div>
          </TiltCard>

          <div className="panel p-6">
            <div className="font-mono text-mono-label text-coral-400 mb-4">// ULAŞIM</div>
            <ul className="space-y-3">
              {WORKSHOP.transit.map((t, i) => {
                const Icon: React.ComponentType<{ className?: string }> = transitIconMap[t.icon] ?? RouteIcon;
                return (
                  <li key={i} className={cn("flex items-center gap-3 p-2 rounded-md", t.highlight && "bg-coral-500/8")}>
                    <Icon className={cn("w-4 h-4 shrink-0", t.highlight ? "text-coral-400" : "text-text-muted")} />
                    <div className="flex-1">
                      <div className={cn("font-body font-medium text-sm", t.highlight ? "text-text-bright" : "text-text-secondary")}>{t.label}</div>
                      <div className="font-mono text-[11px] text-text-muted uppercase tracking-widest">{t.detail}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}
