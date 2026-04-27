import Link from "next/link";
import * as Icons from "lucide-react";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ScanWidget } from "@/components/ui/ScanWidget";
import { BarcodeDecoration } from "@/components/ui/BarcodeDecoration";
import { WORKSHOP, type Service } from "@/lib/constants";

const STEPS_BY_SLUG: Record<string, { n: string; title: string; desc: string }[]> = {
  default: [
    { n: "01", title: "Atölyeye Gel", desc: "D100 üzerindeki atölyemize gel." },
    { n: "02", title: "Hizmet Talebi", desc: "Talebini ekibe ilet." },
    { n: "03", title: "İşlem", desc: "İşlemler tamamlanır, çıkışta aktifsin." },
  ],
};

export function ServiceDetailLayout({ service }: { service: Service }) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>>)[service.icon];
  const steps = STEPS_BY_SLUG[service.slug] ?? STEPS_BY_SLUG.default;
  const others = WORKSHOP.services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <section className="bg-gray-50 border-b border-gray-200 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="text-[11px] font-mono text-gray-500 mb-3 flex gap-1 flex-wrap">
            <Link href="/" className="hover:text-lime-600">Panel</Link>
            <span>/</span>
            <Link href="/hizmetler" className="hover:text-lime-600">Hizmetler</Link>
            <span>/</span>
            <span className="text-gray-700">{service.navTitle}</span>
          </nav>
          <div className="flex items-center gap-4 mb-3">
            {Icon && <Icon size={36} strokeWidth={1.6} className="text-lime-600" />}
            <span
              className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded ${
                service.badgeColor === "lime"
                  ? "bg-lime-100 text-lime-700"
                  : service.badgeColor === "dark"
                  ? "bg-gray-900 text-lime-300"
                  : "bg-gray-150 text-gray-600"
              }`}
            >
              {service.badge}
            </span>
            <BarcodeDecoration bars={10} className="ml-auto hidden md:inline-flex" />
          </div>
          <ScanWidget>
            <h1 className="font-display font-bold text-section-xl text-gray-900">
              {service.pageTitle}
            </h1>
          </ScanWidget>
          <p className="text-[17px] text-gray-600 mt-3 max-w-2xl leading-relaxed">
            {service.longDesc}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-[1fr_320px] gap-8">
          <div className="flex flex-col gap-12">
            <div>
              <span className="precision-label">Nasıl Çalışır?</span>
              <div className="grid md:grid-cols-3 gap-4 mt-4">
                {steps.map((s, i) => (
                  <ScanWidget key={i} delay={i * 80}>
                    <div className="widget p-5 h-full">
                      <div className="font-mono text-[28px] font-bold text-lime-500 leading-none">
                        {s.n}
                      </div>
                      <h4 className="font-display font-semibold text-[18px] text-gray-900 mt-2">
                        {s.title}
                      </h4>
                      <p className="text-[13px] text-gray-600 mt-1">{s.desc}</p>
                    </div>
                  </ScanWidget>
                ))}
              </div>
            </div>

            <div>
              <span className="precision-label">Gereksinimler</span>
              <ul className="mt-4 grid md:grid-cols-2 gap-2">
                {["Geçerli kimlik (T.C. veya pasaport)", "Plaka numarası", "Mevcut çantanız", "Telefon numarası"].map(
                  (req) => (
                    <li key={req} className="flex items-start gap-2 text-[14px] text-gray-700">
                      <Check size={16} className="text-lime-500 mt-0.5 shrink-0" />
                      {req}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <span className="precision-label">Avantajlar</span>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                {service.benefits.map((b, i) => (
                  <div key={b} className="widget p-5">
                    <div className="font-mono text-[12px] text-lime-600 mb-1">
                      {String(i + 1).padStart(2, "0")} /
                    </div>
                    <div className="font-display font-semibold text-[18px] text-gray-900">
                      {b}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="precision-label">İlgili Sorular</span>
              <div className="mt-4 flex flex-col widget p-5 gap-3">
                {WORKSHOP.faq.slice(0, 3).map((f, i) => (
                  <div key={i} className="border-b border-gray-150 last:border-b-0 pb-3 last:pb-0">
                    <div className="font-semibold text-[14px] text-gray-900 flex gap-2">
                      <span className="font-mono text-lime-600 text-[12px]">
                        {String(i + 1).padStart(2, "0")} /
                      </span>
                      {f.q}
                    </div>
                    <p className="text-[13px] text-gray-600 mt-1 pl-7">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="lg:sticky lg:top-20 self-start">
            <div className="widget p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                {Icon && <Icon size={32} strokeWidth={1.6} className="text-lime-600" />}
                <h3 className="font-display font-bold text-[22px] text-gray-900">
                  {service.navTitle}
                </h3>
              </div>
              <div className="text-[12px] font-mono text-gray-500">
                {service.badge.toUpperCase()} · WALK-IN ≤10 DK
              </div>
              <div className="border-t border-gray-150" />
              <div className="flex items-center justify-between">
                <StatusBadge size="sm" />
                <span className="text-[12px] font-mono text-gray-500">
                  {WORKSHOP.hours.weekday.open}–{WORKSHOP.hours.weekday.close}
                </span>
              </div>
              <div className="border-t border-gray-150" />
              <Button variant="primary" size="md" fullWidth href="/randevu">
                Randevu Al
              </Button>
              <Button variant="secondary" size="md" fullWidth href={WORKSHOP.waLink}>
                WhatsApp
              </Button>
              <div className="border-t border-gray-150" />
              <div>
                <div className="precision-label mb-2">Diğer Hizmetler</div>
                <div className="flex flex-col gap-1.5">
                  {others.map((o) => (
                    <Link
                      key={o.id}
                      href={`/hizmetler/${o.slug}`}
                      className="text-[13px] text-gray-600 hover:text-lime-600 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 rounded-full bg-lime-500" />
                      {o.navTitle}
                      <ArrowRight size={11} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
