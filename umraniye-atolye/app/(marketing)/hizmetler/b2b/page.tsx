import type { Metadata } from "next";
import { CheckCircle2, Package, Users, ShieldCheck, FileText, BarChart3, Clock } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { InfoCard } from "@/components/ui/InfoCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TableOfContents } from "@/components/ui/TableOfContents";
import { B2BForm } from "@/components/pages/B2BForm";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Kurumsal B2B",
  description: "Kargo firmaları ve e-ticaret depoları için filo çanta yönetimi, toplu kayıt ve öncelikli servis.",
  alternates: { canonical: "/hizmetler/b2b" },
};

const TIERS = [
  {
    name: "Bireysel",
    size: "1-4 çanta",
    features: ["Standart fiyat", "Walk-in kabul", "Destek hattı", "Sözleşmesiz"],
    recommended: false,
  },
  {
    name: "Küçük Filo",
    size: "5-20 çanta",
    features: ["%15 indirim", "Öncelikli bakım", "Atanmış yönetici", "Aylık rapor", "Toplu fatura"],
    recommended: true,
  },
  {
    name: "Büyük Filo",
    size: "20+ çanta",
    features: ["%30 indirim", "7/24 destek", "Yerinde teslimat", "API entegrasyonu", "Özel fiyat teklifi"],
    recommended: false,
  },
];

const ADV = [
  { icon: Package, t: "Toplu Kayıt", d: "5+ çanta için tek seferde sistem kaydı ve hızlı aktivasyon." },
  { icon: Users, t: "Hesap Yöneticisi", d: "Size ayrılmış tek bir kurumsal ilişki yöneticisi." },
  { icon: ShieldCheck, t: "Öncelikli Servis", d: "Bakım ve değişim için öncelikli sıra." },
  { icon: FileText, t: "Fatura Kesimi", d: "Aylık toplu fatura, KDV dahil resmi belgelerle." },
  { icon: BarChart3, t: "Aylık Rapor", d: "Filo performans raporu, hasar analizleri." },
  { icon: Clock, t: "Hızlı Dönüş", d: "24 saat içinde başvurunuza özel teklif." },
];

const STEPS = [
  { n: 1, t: "Başvuru", d: "Aşağıdaki formu doldurun." },
  { n: 2, t: "Görüşme", d: "Hesap yöneticisi 24 saat içinde arar." },
  { n: 3, t: "Teklif", d: "Size özel fiyat ve hizmet paketi sunulur." },
  { n: 4, t: "Aktivasyon", d: "Sözleşme imzası sonrası filo aktive olur." },
];

const SECTIONS = [
  { id: "nedir", label: "B2B Nedir?" },
  { id: "fiyatlandirma", label: "Kapsam & Fiyat" },
  { id: "avantajlar", label: "Avantajlar" },
  { id: "surec", label: "Başvuru Süreci" },
  { id: "basvuru", label: "Başvuru Formu" },
];

export default function B2BPage() {
  return (
    <>
      <PageHero
        variant="blue"
        eyebrow="KURUMSAL"
        title="Filo Çanta Yönetimi"
        subtitle="Kargo firmanız, e-ticaret deponuz veya büyük kurye ağınız için özel çözümler. 5+ çanta için toplu kayıt, öncelikli servis ve atanmış hesap yöneticisi."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetler", href: "/hizmetler" },
          { label: "B2B" },
        ]}
        ctaLabel="Başvuru Yap"
        ctaHref="#basvuru"
        secondaryCtaLabel="WhatsApp"
        secondaryCtaHref={WORKSHOP.waLink}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid xl:grid-cols-[1fr_260px] gap-10">
          <div className="space-y-20 min-w-0">
            {/* Nedir */}
            <div id="nedir" className="scroll-mt-24 grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <SectionHeader label="// B2B NEDİR?" title="Kurumsal Çanta Projesi" />
                <div className="mt-6 space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    B2B programımız, 5 ve üzeri çanta kullanan kargo şirketleri,
                    e-ticaret depoları ve büyük kurye ağları için özel olarak
                    tasarlandı. Standart sözleşmesiz sistemimizin avantajlarını
                    toplu olarak kullanın.
                  </p>
                  <p>
                    Çanta kaydından bakım/değişime, faturadan performans
                    raporlarına kadar tüm filo operasyonlarınızı tek bir
                    atanmış hesap yöneticisiyle yönetiyoruz.
                  </p>
                </div>
              </div>
              <InfoCard accent="blue" padding="lg">
                <h4 className="section-label mb-4">KEY FACTS</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2 text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>5 çanta ve üzeri için geçerli</span>
                  </li>
                  <li className="flex items-start gap-2 text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Filo büyüklüğüne göre kademeli indirim</span>
                  </li>
                  <li className="flex items-start gap-2 text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Aylık toplu fatura kesilir</span>
                  </li>
                  <li className="flex items-start gap-2 text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span>Ayrılmış hesap yöneticisi</span>
                  </li>
                </ul>
              </InfoCard>
            </div>

            {/* Pricing */}
            <div id="fiyatlandirma" className="scroll-mt-24">
              <SectionHeader
                label="// KAPSAM"
                title="Filo Büyüklüğüne Göre Paket"
                subtitle="Filonuzun boyutuna göre farklı paket ve indirim oranları sunuyoruz."
              />
              <div className="mt-10 grid md:grid-cols-3 gap-5">
                {TIERS.map((t) => (
                  <div
                    key={t.name}
                    className={`card-base p-7 relative ${t.recommended ? "border-blue-500 shadow-[0_0_0_3px_rgba(59,130,246,.12)]" : ""}`}
                  >
                    {t.recommended && (
                      <span className="absolute -top-3 left-7 pill pill-blue">ÖNERİLEN</span>
                    )}
                    <div className="font-mono text-xs text-text-muted uppercase tracking-wider">{t.size}</div>
                    <h3 className="mt-2 fluid-lg text-text-primary">{t.name}</h3>
                    <ul className="mt-5 space-y-2.5">
                      {t.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={t.recommended ? "primary" : "secondary"}
                      size="md"
                      fullWidth
                      href="#basvuru"
                      className="mt-6"
                    >
                      Detay İçin İletişim
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages */}
            <div id="avantajlar" className="scroll-mt-24">
              <SectionHeader label="// AVANTAJLAR" title="Neden B2B Programı?" />
              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {ADV.map((a) => (
                  <InfoCard key={a.t} padding="md">
                    <div className="w-11 h-11 rounded-[12px] bg-blue-50 flex items-center justify-center mb-3">
                      <a.icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <h3 className="font-display font-bold text-text-primary">{a.t}</h3>
                    <p className="mt-1.5 text-sm text-text-muted leading-relaxed">{a.d}</p>
                  </InfoCard>
                ))}
              </div>
            </div>

            {/* Process */}
            <div id="surec" className="scroll-mt-24">
              <SectionHeader label="// SÜREÇ" title="Başvurudan Aktivasyona" />
              <div className="mt-10 grid md:grid-cols-4 gap-5">
                {STEPS.map((s) => (
                  <div key={s.n} className="card-base p-5">
                    <div className="font-mono text-xs text-blue-500 font-bold">0{s.n}</div>
                    <h3 className="mt-2 font-display font-bold text-text-primary">{s.t}</h3>
                    <p className="mt-1 text-sm text-text-muted">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div id="basvuru" className="scroll-mt-24">
              <SectionHeader
                label="// BAŞVURU"
                title="Başvuru Formu"
                subtitle="Formu doldurun, 24 saat içinde hesap yöneticimiz sizinle iletişime geçsin."
              />
              <div className="mt-10">
                <B2BForm />
              </div>
            </div>
          </div>

          <TableOfContents sections={SECTIONS} />
        </div>
      </section>
    </>
  );
}
