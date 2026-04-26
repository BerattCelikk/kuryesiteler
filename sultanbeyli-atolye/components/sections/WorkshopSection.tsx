import { Train, Bus, Route, ParkingCircle, type LucideIcon } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/Button";
import { MapClient } from "@/components/ui/MapClient";
import { WORKSHOP } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = { Train, Bus, Route, ParkingCircle };

const HOURS = [
  { label: "Pzt–Cuma", value: "08:00 – 22:00", id: "weekday" },
  { label: "Cumartesi", value: "09:00 – 21:00", id: "weekend" },
  { label: "Pazar", value: "09:00 – 21:00", id: "weekend" },
];

export function WorkshopSection() {
  const todayIdx = ((new Date().getDay() + 6) % 7); // 0=Mon

  return (
    <section className="bg-cream py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader
          label="Atölyemiz"
          title={WORKSHOP.copy.workshopTitle}
          subtitle="Ankara Caddesi'ndeyiz. Park alanı önde, kapı içeride."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-10">
          <div>
            <div className="mb-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="terra-line h-5" />
                <span className="section-label">Adresimiz</span>
              </div>
              <p className="font-display text-2xl text-ink leading-snug max-w-md">
                {WORKSHOP.address}
              </p>
              <p className="mt-2 font-body text-sm text-ink-light">
                {WORKSHOP.neighborhood} ·{" "}
                <a href={WORKSHOP.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="text-terra-500 hover:text-terra-600 underline">
                  Haritada Gör
                </a>
              </p>
            </div>

            <div className="h-px bg-terra-200/40 my-6" />

            <div className="mb-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="terra-line h-5" />
                <span className="section-label">Çalışma Saatlerimiz</span>
              </div>
              <ul className="space-y-2 mb-4 max-w-md">
                {HOURS.map((h, i) => {
                  const isToday = todayIdx === i + (i === 0 ? 0 : 0);
                  // simpler: highlight first row when weekday
                  const today =
                    (i === 0 && todayIdx < 5) ||
                    (i === 1 && todayIdx === 5) ||
                    (i === 2 && todayIdx === 6);
                  return (
                    <li
                      key={h.label + i}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-2.5 font-body text-sm",
                        today
                          ? "bg-terra-100 text-terra-600 border border-terra-200 font-semibold"
                          : "text-ink-mid",
                      )}
                    >
                      <span>{h.label}</span>
                      <span className="font-mono text-mono-sm">{h.value}</span>
                    </li>
                  );
                })}
              </ul>
              <StatusBadge size="lg" showHours />
            </div>

            <div className="h-px bg-terra-200/40 my-6" />

            <div className="mb-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="terra-line h-5" />
                <span className="section-label">Ulaşım</span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {WORKSHOP.transit.map((t) => {
                  const Icon = ICONS[t.icon] ?? Bus;
                  return (
                    <li key={t.label} className="flex items-start gap-3">
                      <span className="h-10 w-10 rounded-full bg-sage-bg border border-sage-300/40 flex items-center justify-center shrink-0">
                        <Icon size={18} className="text-sage-500" />
                      </span>
                      <div>
                        <div className="font-body font-semibold text-ink text-sm">{t.label}</div>
                        <div className="font-body text-xs text-ink-light">{t.detail}</div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Button variant="primary" href={WORKSHOP.googleMapsUrl} external>
                Yol Tarifi Alın
              </Button>
              <Button variant="ghost" href={WORKSHOP.waLink} external>
                WhatsApp&apos;tan Yazın
              </Button>
            </div>
          </div>

          <MapClient height={500} />
        </div>
      </div>
    </section>
  );
}
