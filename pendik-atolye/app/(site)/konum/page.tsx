import * as Icons from "lucide-react";
import { ExternalLink, Phone, MapPin, Clock } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { ContactFormLight } from "@/components/sections/ContactFormLight";
import { MapBlock } from "@/components/widgets/MapBlock";

export const metadata = { title: "Konumumuz" };

export default function Page() {
  return (
    <>
      <PageHero
        label="KONUM · D100"
        title="Konumumuz."
        desc="Pendik D100 üzerinde. Pendik garından yürüme mesafesi, SAW'dan 15 dk."
        crumbs={[{ label: "Panel", href: "/" }, { label: "Konum" }]}
      />
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="widget overflow-hidden mb-8" style={{ height: 480 }}>
          <MapBlock height={480} />
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          <div className="widget p-6">
            <div className="precision-label mb-3 flex items-center gap-2">
              <MapPin size={12} /> ADRES
            </div>
            <div className="font-display font-semibold text-[18px] text-gray-900">
              {WORKSHOP.neighborhood}
            </div>
            <div className="text-[14px] text-gray-600 mt-1 leading-relaxed">
              {WORKSHOP.street}
              <br />
              {WORKSHOP.postalCode} Pendik / İstanbul
            </div>
            <a
              href={WORKSHOP.googleMapsUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[13px] text-lime-600 hover:text-lime-700 mt-4 inline-flex items-center gap-1 font-semibold"
            >
              Haritada Aç <ExternalLink size={11} />
            </a>
          </div>
          <div className="widget p-6">
            <div className="precision-label mb-3 flex items-center gap-2">
              <Clock size={12} /> ÇALIŞMA SAATLERİ
            </div>
            <div className="flex flex-col gap-2 text-[14px] text-gray-700 font-mono">
              <div className="flex justify-between">
                <span>{WORKSHOP.hours.weekday.label}</span>
                <span className="text-lime-600">
                  {WORKSHOP.hours.weekday.open}–{WORKSHOP.hours.weekday.close}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{WORKSHOP.hours.weekend.label}</span>
                <span className="text-lime-600">
                  {WORKSHOP.hours.weekend.open}–{WORKSHOP.hours.weekend.close}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{WORKSHOP.hours.holiday.label}</span>
                <span className="text-lime-600">
                  {WORKSHOP.hours.holiday.open}–{WORKSHOP.hours.holiday.close}
                </span>
              </div>
            </div>
          </div>
          <div className="widget p-6">
            <div className="precision-label mb-3">ULAŞIM</div>
            <ul className="flex flex-col gap-3">
              {WORKSHOP.transit.map((t) => {
                const Icon = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>>)[t.icon];
                return (
                  <li key={t.label} className="flex items-start gap-3">
                    {Icon && <Icon size={18} className={t.highlight ? "text-lime-600 shrink-0 mt-0.5" : "text-gray-400 shrink-0 mt-0.5"} />}
                    <div className="flex-1">
                      <div className="text-[14px] font-semibold text-gray-800">{t.label}</div>
                      <div className="text-[12px] text-gray-500">{t.detail}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-[1fr_400px] gap-8 items-start">
          <div>
            <span className="precision-label">Hızlı İletişim</span>
            <h2 className="font-display font-bold text-section-lg text-gray-900 mt-2">
              Sorunuz mu var?
            </h2>
            <p className="text-[15px] text-gray-600 mt-2">
              Mesajınızı bırakın, en geç 1 saat içinde dönüş yaparız. Ya da hemen
              arayın — atölye ekibi telefondadır.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Button variant="primary" size="md" href={`tel:${WORKSHOP.phoneRaw}`}>
                <Phone size={14} /> {WORKSHOP.phone}
              </Button>
              <Button variant="secondary" size="md" href={WORKSHOP.waLink}>
                WhatsApp
              </Button>
            </div>
          </div>
          <ContactFormLight />
        </div>
      </section>
    </>
  );
}
