import type { Metadata } from "next";
import { Check, Minus } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { HowSection } from "@/components/sections/HowSection";
import { Button } from "@/components/ui/Button";
import { WORKSHOP } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Nasıl Çalışıyoruz? · Sultanbeyli Atölyesi",
  description: "Altı adımda kayıt, plan seçimi ve aktivasyon.",
};

const PLANS = [
  { id: "daily", name: "Günlük", desc: "Esnek, taahhütsüz", features: ["Günlük ödeme", "İstediğin gün başla / bırak", "Anlık değişim hakkı"], highlight: false },
  { id: "weekly", name: "Haftalık", desc: "En popüler", features: ["Haftalık ödeme", "İndirimli kira", "Bakım servisi dahil", "Öncelikli kabul"], highlight: true },
  { id: "monthly", name: "Aylık", desc: "Maksimum tasarruf", features: ["Aylık ödeme", "%30'a kadar indirim", "Bakım + değişim dahil", "Filo raporu (B2B)"], highlight: false },
];

const COMPARISON = [
  { feature: "Kayıt ücreti", projeli: "Ücretsiz", projesiz: "Yok" },
  { feature: "Çanta değişim hakkı", projeli: true, projesiz: false },
  { feature: "Periyodik bakım", projeli: true, projesiz: false },
  { feature: "Hasar değişimi", projeli: true, projesiz: false },
  { feature: "SMS proje numarası", projeli: true, projesiz: false },
  { feature: "Sözleşmesiz çıkış", projeli: true, projesiz: true },
];

export default function NasilPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Nasıl Çalışır" }]}
        label="Süreç"
        title={WORKSHOP.copy.howitTitle}
        subtitle="Altı adımda atölyemize katılın. Hepsi insan ölçeğinde, sıcacık."
      />

      <HowSection />

      <section className="bg-cream py-20">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="section-label">Plan Seçimi</span>
            <h2 className="mt-3 font-display text-display-xl text-ink leading-tight">
              Size En Uygun Plan
            </h2>
            <p className="mt-3 font-body text-body-lg text-ink-light">
              Sözleşmesiz, ceza yok, istediğiniz gün çıkış.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PLANS.map((p) => (
              <div
                key={p.id}
                className={cn(
                  "warm-card !bg-cream-mid p-7 relative",
                  p.highlight && "!bg-sage-bg !border-sage-500/40 !border-2",
                )}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sage-500 text-cream font-body text-[11px] font-bold uppercase tracking-wider rounded-full px-3 py-1">
                    En Popüler
                  </span>
                )}
                <h3 className="font-display text-2xl text-ink mb-1">{p.name}</h3>
                <p className="font-body text-sm text-ink-light mb-5">{p.desc}</p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 font-body text-sm text-ink-mid"
                    >
                      <Check size={14} className="text-sage-500 mt-1 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-mid py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="section-label">Karşılaştırma</span>
            <h2 className="mt-3 font-display text-display-xl text-ink leading-tight">
              Projeli mi, Projesiz mi?
            </h2>
          </div>

          <div className="overflow-hidden rounded-3xl border border-terra-200/40 bg-cream">
            <table className="w-full">
              <thead className="bg-terra-100 border-b border-terra-200">
                <tr>
                  <th className="text-left font-body font-bold text-ink py-4 px-5 text-sm">
                    Özellik
                  </th>
                  <th className="text-center font-body font-bold text-terra-600 py-4 px-5 text-sm">
                    Projeli
                  </th>
                  <th className="text-center font-body font-bold text-ink-light py-4 px-5 text-sm">
                    Projesiz
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, i) => (
                  <tr
                    key={row.feature}
                    className={cn(
                      i % 2 === 1 && "bg-cream-mid",
                      "border-b border-terra-200/30 last:border-0",
                    )}
                  >
                    <td className="py-3 px-5 font-body text-ink">{row.feature}</td>
                    <td className="py-3 px-5 text-center">
                      {typeof row.projeli === "boolean" ? (
                        row.projeli ? (
                          <Check className="inline text-sage-500" size={18} />
                        ) : (
                          <Minus className="inline text-ink-faint" size={18} />
                        )
                      ) : (
                        <span className="font-mono text-mono-sm text-sage-600">
                          {row.projeli}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-5 text-center">
                      {typeof row.projesiz === "boolean" ? (
                        row.projesiz ? (
                          <Check className="inline text-sage-500" size={18} />
                        ) : (
                          <Minus className="inline text-ink-faint" size={18} />
                        )
                      ) : (
                        <span className="font-mono text-mono-sm text-ink-light">
                          {row.projesiz}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-10">
            <Button variant="primary" size="lg" href="/randevu">
              Hemen Başlayın
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
