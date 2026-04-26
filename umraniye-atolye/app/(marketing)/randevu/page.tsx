import type { Metadata } from "next";
import { MapPin, Clock, MessageCircle, CheckCircle2, ExternalLink, Timer } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { InfoCard } from "@/components/ui/InfoCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { BookingForm } from "@/components/pages/BookingForm";
import { Logo } from "@/components/layout/Logo";
import { getTodayHours } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Randevu Al",
  description: "Ümraniye atölyemize randevu alın. 10 dakikada kayıt, aynı gün aktivasyon.",
  alternates: { canonical: "/randevu" },
};

const CHECKLIST = [
  "Kimlik kartı veya ehliyet",
  "Motorsiklet plakası",
  "Teslim edilecek çanta(lar)",
  "Kurumsal iseniz şirket belgesi",
];

export default function RandevuPage() {
  return (
    <>
      <PageHero
        variant="soft"
        eyebrow="RANDEVU"
        title="Randevu Al"
        subtitle="4 adımda randevunuzu onaylayın. Her adım kısa ve net."
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Randevu Al" }]}
      />

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[360px_1fr] gap-8 items-start">
          {/* Sticky info panel */}
          <aside className="lg:sticky lg:top-24 space-y-5">
            <InfoCard accent="blue" padding="md">
              <div className="flex items-center gap-3 mb-4">
                <Logo size={32} />
                <div>
                  <div className="font-display font-bold text-text-primary">
                    {WORKSHOP.name}
                  </div>
                  <div className="text-xs text-text-muted">{WORKSHOP.tagline}</div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-border-light">
                <StatusBadge size="sm" />
                <span className="text-xs font-mono text-text-muted flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Bugün {getTodayHours()}
                </span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-text-secondary">{WORKSHOP.address}</div>
                  <a
                    href={WORKSHOP.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 mt-1"
                  >
                    Haritada Göster <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </InfoCard>

            <InfoCard padding="md">
              <h4 className="section-label mb-3">NE GETİRMELİSİNİZ?</h4>
              <ul className="space-y-2 text-sm">
                {CHECKLIST.map((c) => (
                  <li key={c} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-text-secondary">{c}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-border-light flex items-center gap-2">
                <Timer className="w-4 h-4 text-blue-600" />
                <span className="text-sm text-text-secondary">
                  Ortalama bekleme: <span className="font-mono font-bold">~8 dk</span>
                </span>
              </div>
            </InfoCard>

            <InfoCard padding="md">
              <div className="text-sm text-text-secondary">
                <span className="font-semibold text-text-primary">B2B mi?</span>
                <br />
                Adım 3'te "Kurumsal / Filo Başvurusu" seçeneğini işaretleyin.
              </div>
            </InfoCard>

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
          </aside>

          <div>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
