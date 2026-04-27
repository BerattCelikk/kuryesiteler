import { Check } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { B2BForm } from "@/components/sections/B2BForm";
import { BarcodeDecoration } from "@/components/ui/BarcodeDecoration";

export const metadata = { title: "Filo Yönetimi" };

const WHY = [
  { title: "Toplu Kayıt", desc: "Tek seferde 5+ kuryeyi sisteme alın." },
  { title: "Fatura Kesimi", desc: "Tüm hizmetlerinize tek fatura, KDV dahil." },
  { title: "Öncelikli Servis", desc: "Bekleme yok. Filo kuryeleri direkt servis." },
];

const TIERS = [
  {
    size: "5 – 10",
    label: "Başlangıç",
    features: ["%10 indirim", "Toplu kayıt", "Aylık fatura", "Standart bakım"],
    variant: "light" as const,
  },
  {
    size: "11 – 20",
    label: "Önerilen",
    features: ["%20 indirim", "Öncelikli servis", "Filo raporu", "Hızlı değişim"],
    variant: "lime" as const,
    featured: true,
  },
  {
    size: "20+",
    label: "Kurumsal",
    features: ["Özel fiyat", "Ataşman koordinatör", "API entegrasyon", "SLA"],
    variant: "dark" as const,
  },
];

const STEPS = [
  { n: "01", title: "Başvuru" },
  { n: "02", title: "Görüşme" },
  { n: "03", title: "Sözleşme" },
  { n: "04", title: "Aktivasyon" },
];

export default function Page() {
  return (
    <>
      <PageHero
        variant="dark"
        label="B2B PROGRAMI · FİLO"
        title="Filo Yönetimi"
        desc="Kargo firmanızın 5+ kuryesi için özel program. Toplu kayıt, fatura, öncelikli servis."
        crumbs={[{ label: "Panel", href: "/" }, { label: "Filo Yönetimi" }]}
      />

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {WHY.map((w, i) => (
            <div key={w.title} className="widget p-6">
              <div className="font-mono text-[12px] text-lime-600 mb-2">
                {String(i + 1).padStart(2, "0")} /
              </div>
              <h3 className="font-display font-bold text-[20px] text-gray-900">{w.title}</h3>
              <p className="text-[14px] text-gray-600 mt-2">{w.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <div className="flex items-end justify-between mb-6">
            <div>
              <span className="precision-label">Filo Büyüklüğüne Göre</span>
              <h2 className="font-display font-bold text-section-lg text-gray-900 mt-2">
                Üç Kademeli Program
              </h2>
            </div>
            <BarcodeDecoration bars={12} />
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {TIERS.map((t) => (
              <div
                key={t.size}
                className={
                  t.variant === "dark"
                    ? "widget-dark p-7 relative"
                    : t.variant === "lime"
                    ? "widget-lime p-7 relative"
                    : "widget p-7 relative"
                }
              >
                {t.featured && (
                  <span className="absolute top-3 right-3 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded bg-gray-900 text-lime-300">
                    Önerilen
                  </span>
                )}
                <div
                  className={`text-[12px] font-mono uppercase tracking-wider ${
                    t.variant === "dark"
                      ? "text-lime-300"
                      : t.variant === "lime"
                      ? "text-gray-800"
                      : "text-lime-600"
                  }`}
                >
                  {t.label}
                </div>
                <div
                  className={`font-display font-bold text-[36px] mt-2 ${
                    t.variant === "dark" ? "text-gray-50" : "text-gray-900"
                  }`}
                >
                  {t.size}
                  <span className="text-[14px] font-normal opacity-60 ml-2">kurye</span>
                </div>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-[14px] ${
                        t.variant === "dark"
                          ? "text-gray-300"
                          : t.variant === "lime"
                          ? "text-gray-800"
                          : "text-gray-700"
                      }`}
                    >
                      <Check
                        size={16}
                        className={`mt-0.5 shrink-0 ${
                          t.variant === "dark"
                            ? "text-lime-300"
                            : t.variant === "lime"
                            ? "text-gray-900"
                            : "text-lime-500"
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

        <div className="mb-16">
          <span className="precision-label">Başvuru Süreci</span>
          <h2 className="font-display font-bold text-section-lg text-gray-900 mt-2 mb-6">
            4 Adımda Aktivasyon
          </h2>
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] border-t-2 border-dashed border-lime-400 -z-0" />
            {STEPS.map((s) => (
              <div key={s.n} className="widget p-5 relative z-10 text-center">
                <div className="w-10 h-10 mx-auto rounded-full bg-lime-500 text-gray-900 font-mono font-bold flex items-center justify-center">
                  {s.n}
                </div>
                <div className="mt-3 font-display font-semibold text-[16px] text-gray-900">
                  {s.title}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <span className="precision-label">Filo Başvuru Formu</span>
          <h2 className="font-display font-bold text-section-lg text-gray-900 mt-2 mb-6">
            Başlamak için bilgi bırakın
          </h2>
          <B2BForm />
        </div>
      </section>
    </>
  );
}
