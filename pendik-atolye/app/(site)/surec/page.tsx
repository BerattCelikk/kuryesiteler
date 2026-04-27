import * as Icons from "lucide-react";
import { Check } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { PageHero } from "@/components/layout/PageHero";
import { ScanWidget } from "@/components/ui/ScanWidget";
import { Button } from "@/components/ui/Button";
import { BarcodeDecoration } from "@/components/ui/BarcodeDecoration";

export const metadata = { title: "Süreç: 6 Adım" };

const PLANS = [
  { name: "Günlük", price: "₺X/gün", features: ["Günlük çıkış", "Ek ücret yok", "Esnek"], featured: false, dark: false },
  { name: "Haftalık", price: "₺X/hafta", features: ["%15 indirim", "Periyodik bakım dahil", "En popüler"], featured: true, dark: false },
  { name: "Aylık", price: "₺X/ay", features: ["%30 indirim", "Tüm bakımlar dahil", "Filo programı uygun"], featured: false, dark: true },
];

const COMPARE = [
  { feature: "Sözleşme", project: false, no: false },
  { feature: "Periyodik Bakım", project: true, no: false },
  { feature: "Çanta Değişim Hakkı", project: true, no: false },
  { feature: "B2B Fatura", project: true, no: false },
  { feature: "Sigortalı Sistem", project: true, no: false },
];

export default function Page() {
  return (
    <>
      <PageHero
        label="SÜREÇ · 6 ADIM"
        title="Süreç: 6 Adım"
        desc="Atölyeye gelişten aktivasyona kadar tüm süreç. 10 dakikada sistemde ol."
        crumbs={[{ label: "Panel", href: "/" }, { label: "Süreç" }]}
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-5">
          {WORKSHOP.steps.map((s, i) => {
            const Icon = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>>)[s.icon];
            return (
              <ScanWidget key={s.n} delay={i * 80}>
                <div className="widget p-7 h-full flex gap-5">
                  <div className="font-mono font-bold text-[42px] text-lime-500 leading-none shrink-0">
                    {s.n}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      {Icon && <Icon size={20} strokeWidth={1.7} className="text-lime-600" />}
                      <h3 className="font-display font-bold text-section-lg text-gray-900">
                        {s.title}
                      </h3>
                    </div>
                    <p className="text-[14px] text-gray-700 leading-relaxed">{s.desc}</p>
                    <p className="text-[13px] text-gray-500 mt-2 leading-relaxed">
                      {s.detail}
                    </p>
                    <span className="inline-block mt-3 text-[11px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-lime-100 text-lime-700">
                      {s.tag}
                    </span>
                  </div>
                </div>
              </ScanWidget>
            );
          })}
        </div>

        <div className="mt-20">
          <div className="flex items-end justify-between mb-6">
            <div>
              <span className="precision-label">Plan Karşılaştırması</span>
              <h2 className="font-display font-bold text-section-lg text-gray-900 mt-2">
                Hangi Plan Sana Uyar?
              </h2>
            </div>
            <BarcodeDecoration bars={12} />
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {PLANS.map((p) => (
              <div
                key={p.name}
                className={
                  p.dark
                    ? "widget-dark p-7"
                    : p.featured
                    ? "widget-lime p-7 relative"
                    : "widget p-7"
                }
              >
                {p.featured && (
                  <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-gray-900 text-lime-300">
                    En Popüler
                  </span>
                )}
                <div
                  className={`text-[12px] font-mono uppercase tracking-wider ${
                    p.dark ? "text-lime-300" : p.featured ? "text-gray-800" : "text-lime-600"
                  }`}
                >
                  {p.name}
                </div>
                <div
                  className={`font-display font-bold text-[36px] mt-2 ${
                    p.dark ? "text-gray-50" : "text-gray-900"
                  }`}
                >
                  {p.price}
                </div>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-[14px] ${
                        p.dark ? "text-gray-300" : p.featured ? "text-gray-800" : "text-gray-700"
                      }`}
                    >
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          p.dark ? "text-lime-300" : p.featured ? "text-gray-900" : "text-lime-500"
                        }`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <span className="precision-label">Projeli mi, Projesizone mi?</span>
          <h2 className="font-display font-bold text-section-lg text-gray-900 mt-2 mb-6">
            Karşılaştırma
          </h2>
          <div className="widget overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-lime-500 text-gray-900">
                <tr>
                  <th className="px-5 py-3 text-[12px] font-mono uppercase tracking-wider">
                    Özellik
                  </th>
                  <th className="px-5 py-3 text-[12px] font-mono uppercase tracking-wider text-center">
                    Proje
                  </th>
                  <th className="px-5 py-3 text-[12px] font-mono uppercase tracking-wider text-center">
                    Projesizone
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="px-5 py-3 text-[14px] text-gray-800 font-semibold">
                      {row.feature}
                    </td>
                    <td className="px-5 py-3 text-center font-mono text-lime-600">
                      {row.project ? "✓" : "—"}
                    </td>
                    <td className="px-5 py-3 text-center font-mono text-gray-400">
                      {row.no ? "✓" : "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="widget-dark mt-20 p-10 md:p-12 relative overflow-hidden text-center">
          <div className="scan-sweep-overlay" aria-hidden />
          <span className="precision-label !text-lime-300">SİSTEME GİR</span>
          <h2 className="font-display font-bold text-section-xl text-gray-50 mt-2">
            Aynı Gün Aktif Ol
          </h2>
          <p className="text-[15px] text-gray-300 mt-3 max-w-md mx-auto">
            Randevu al ya da walk-in gel. 10 dakikada sistemdesin.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Button variant="primary" size="lg" href="/randevu">Randevu Al</Button>
            <Button variant="dark-ghost" size="lg" href={WORKSHOP.waLink}>WhatsApp</Button>
          </div>
        </div>
      </section>
    </>
  );
}
