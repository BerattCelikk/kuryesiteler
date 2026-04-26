import type { Metadata } from "next";
import * as Accordion from "@radix-ui/react-accordion";
import { CheckCircle2, X, Users, Building2 } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { StepCard } from "@/components/ui/StepCard";
import { InfoCard } from "@/components/ui/InfoCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { FAQItem } from "@/components/ui/FAQItem";
import { RegisterCTA } from "@/components/sections/RegisterCTA";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Araç Projesi Nasıl Çalışır?",
  description: "6 adımda araç projesi: kayıt, belge, plan seçimi, aktivasyon. Sözleşmesiz, şeffaf sistem.",
  alternates: { canonical: "/nasil-calisir" },
};

const SECTIONS = [
  { id: "adimlar", label: "6 Adım" },
  { id: "belgeler", label: "Belgeler" },
  { id: "planlar", label: "Kira Planları" },
  { id: "avantajlar", label: "Avantajlar" },
  { id: "karsilastirma", label: "Karşılaştırma" },
  { id: "sss", label: "SSS" },
];

const PLANS = [
  {
    name: "Günlük",
    price: "₺X",
    period: "/gün",
    features: [
      { t: "Tam esneklik", ok: true },
      { t: "Günlük iptal", ok: true },
      { t: "Bakım dahil", ok: false },
      { t: "Değişim dahil", ok: false },
    ],
  },
  {
    name: "Haftalık",
    price: "₺Y",
    period: "/hafta",
    features: [
      { t: "Esnek kullanım", ok: true },
      { t: "Haftalık iptal", ok: true },
      { t: "Bakım dahil", ok: true },
      { t: "Değişim dahil", ok: false },
    ],
  },
  {
    name: "Aylık",
    price: "₺Z",
    period: "/ay",
    features: [
      { t: "En ekonomik", ok: true },
      { t: "Aylık iptal", ok: true },
      { t: "Bakım dahil", ok: true },
      { t: "Değişim dahil", ok: true },
    ],
    recommended: true,
  },
];

const AVANTAJLAR = [
  { icon: "Zap", t: "Hızlı Aktivasyon", d: "10 dakikada sisteme girer, aynı gün aktifsiniz." },
  { icon: "FileX", t: "Sözleşmesiz", d: "Her an çıkabilir, plan değiştirebilirsiniz." },
  { icon: "Headphones", t: "7/24 Destek", d: "WhatsApp destek hattı kesintisiz." },
  { icon: "Shield", t: "Hasar Güvencesi", d: "Aktif planda ücretsiz değişim." },
  { icon: "TrendingUp", t: "Kazanç Artışı", d: "Projeli kuryeler ortalama %18 daha fazla kazanıyor." },
  { icon: "Wrench", t: "Profesyonel Bakım", d: "Aylık ve haftalık planlara dahil bakım." },
];

const COMPARE = [
  { t: "Hasar değişimi", a: true, b: false },
  { t: "Periyodik bakım", a: true, b: false },
  { t: "7/24 destek hattı", a: true, b: false },
  { t: "Esnek plan seçimi", a: true, b: false },
  { t: "Toplu indirim (B2B)", a: true, b: false },
  { t: "Tek seferlik yüksek maliyet", a: false, b: true },
];

export default function NasilCalisirPage() {
  return (
    <>
      <PageHero
        variant="soft"
        eyebrow="SÜREÇ"
        title="Araç Projesi Nasıl Çalışır?"
        subtitle="Araç projesi, kurye ekosisteminin yeni standardı. Tek seferlik yüksek çanta maliyeti yerine, esnek kira ve kapsamlı servis ile kurye işinizi büyütün."
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Nasıl Çalışır" }]}
      >
        <div className="grid grid-cols-3 gap-4 max-w-lg">
          {[
            { v: "10 dk", l: "Kayıt" },
            { v: "0 sözleşme", l: "Şart" },
            { v: "Aynı gün", l: "Aktif" },
          ].map((s) => (
            <div key={s.l} className="card-base p-3 text-center">
              <div className="font-mono font-bold text-blue-600">{s.v}</div>
              <div className="text-xs text-text-muted mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </PageHero>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid xl:grid-cols-[1fr_260px] gap-10">
          <div className="space-y-20 min-w-0">
            {/* Adimlar */}
            <div id="adimlar" className="scroll-mt-24">
              <SectionHeader
                label="// 6 ADIM"
                title="Kayıttan Aktivasyona"
                subtitle="Tüm süreç ortalama 10 dakika sürer. Kimlik ve plaka bilgisi yeterli."
              />
              <div className="mt-10 grid md:grid-cols-2 gap-5">
                {WORKSHOP.steps.map((s, i) => (
                  <StepCard
                    key={s.n}
                    step={s}
                    index={i}
                    position={i % 2 === 0 ? "left" : "right"}
                    showLongDesc
                  />
                ))}
              </div>
            </div>

            {/* Belgeler */}
            <div id="belgeler" className="scroll-mt-24">
              <SectionHeader
                label="// BELGELER"
                title="Ne Getirmelisiniz?"
              />
              <div className="mt-10 grid md:grid-cols-2 gap-6">
                <InfoCard accent="blue" padding="lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-5 h-5 text-blue-600" />
                    <h3 className="font-display font-bold text-text-primary">Bireysel Kurye</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {["Nüfus cüzdanı veya ehliyet", "Motorsiklet plakası", "Aktif telefon numarası"].map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </InfoCard>
                <InfoCard accent="teal" padding="lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-5 h-5 text-teal-600" />
                    <h3 className="font-display font-bold text-text-primary">Kurumsal / Kargo</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {[
                      "Şirket yetki belgesi veya vergi levhası",
                      "Yetkili kimlik bilgisi",
                      "Filo çanta adedi",
                      "Fatura bilgisi",
                    ].map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </InfoCard>
              </div>
            </div>

            {/* Plans */}
            <div id="planlar" className="scroll-mt-24">
              <SectionHeader
                label="// KİRA PLANLARI"
                title="Günlük, Haftalık, Aylık"
                subtitle="İhtiyacınıza uygun plan seçin. Hepsi sözleşmesiz, dilediğiniz zaman değiştirebilirsiniz."
              />
              <div className="mt-10 grid md:grid-cols-3 gap-5">
                {PLANS.map((p) => (
                  <div
                    key={p.name}
                    className={`card-base p-7 relative ${p.recommended ? "border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,.12)]" : ""}`}
                  >
                    {p.recommended && (
                      <span className="absolute -top-3 left-7 pill pill-blue">ÖNERİLEN</span>
                    )}
                    <h3 className="font-display font-bold text-xl text-text-primary">{p.name}</h3>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="font-stat text-blue-600">{p.price}</span>
                      <span className="text-text-muted text-sm">{p.period}</span>
                    </div>
                    <ul className="mt-6 space-y-2.5 border-t border-border-light pt-5">
                      {p.features.map((f) => (
                        <li key={f.t} className="flex items-start gap-2 text-sm">
                          {f.ok ? (
                            <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-4 h-4 text-text-subtle flex-shrink-0 mt-0.5" />
                          )}
                          <span className={f.ok ? "text-text-secondary" : "text-text-subtle line-through"}>
                            {f.t}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div id="avantajlar" className="scroll-mt-24">
              <SectionHeader label="// AVANTAJLAR" title="Proje Avantajları" />
              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {AVANTAJLAR.map((a) => (
                  <InfoCard key={a.t} padding="md">
                    <div className="w-11 h-11 rounded-[12px] bg-blue-50 flex items-center justify-center mb-3">
                      <Icon name={a.icon} className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-display font-bold text-text-primary">{a.t}</h3>
                    <p className="mt-1.5 text-sm text-text-muted leading-relaxed">{a.d}</p>
                  </InfoCard>
                ))}
              </div>
            </div>

            {/* Compare */}
            <div id="karsilastirma" className="scroll-mt-24">
              <SectionHeader
                label="// KARŞILAŞTIRMA"
                title="Projeli mi, Projesiz mi?"
              />
              <div className="mt-10 card-base overflow-hidden">
                <div className="grid grid-cols-[1fr_auto_auto] gap-4 p-4 bg-bg-soft border-b border-border-light">
                  <div className="font-mono text-xs text-text-muted uppercase">Özellik</div>
                  <div className="font-mono text-xs text-blue-600 uppercase w-24 text-center">Projeli</div>
                  <div className="font-mono text-xs text-text-muted uppercase w-24 text-center">Projesiz</div>
                </div>
                {COMPARE.map((c, i) => (
                  <div
                    key={c.t}
                    className={`grid grid-cols-[1fr_auto_auto] gap-4 p-4 items-center ${i < COMPARE.length - 1 ? "border-b border-border-light" : ""}`}
                  >
                    <span className="text-sm text-text-secondary">{c.t}</span>
                    <span className="w-24 flex justify-center">
                      {c.a ? (
                        <CheckCircle2 className="w-5 h-5 text-teal-500" />
                      ) : (
                        <X className="w-5 h-5 text-text-subtle" />
                      )}
                    </span>
                    <span className="w-24 flex justify-center">
                      {c.b ? (
                        <CheckCircle2 className="w-5 h-5 text-teal-500" />
                      ) : (
                        <X className="w-5 h-5 text-text-subtle" />
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div id="sss" className="scroll-mt-24">
              <SectionHeader label="// SSS" title="İlgili Sorular" />
              <div className="mt-8">
                <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
                  {WORKSHOP.faq.slice(0, 4).map((f, i) => (
                    <FAQItem key={f.q} item={f} index={i} value={`c-${i}`} />
                  ))}
                </Accordion.Root>
              </div>
            </div>
          </div>

          <TableOfContents sections={SECTIONS} />
        </div>
      </section>

      <RegisterCTA />
    </>
  );
}
