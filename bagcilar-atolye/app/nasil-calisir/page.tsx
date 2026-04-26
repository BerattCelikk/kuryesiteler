import type { Metadata } from "next";
import {
  MapPin,
  FileCheck,
  PackageCheck,
  Database,
  CreditCard,
  Zap,
  TrendingUp,
  Shield,
  RefreshCw,
  Headphones,
  Unlock,
  type LucideIcon,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RegisterCTA } from "@/components/sections/RegisterCTA";

export const metadata: Metadata = {
  title: "Araç Projesi Nasıl Çalışır?",
  description:
    "Bağcılar Kurye Atölyesi'nde araç projesi nasıl çalışır? 6 adımda süreç ve tüm avantajlar.",
};

interface Step {
  n: number;
  icon: LucideIcon;
  title: string;
  desc: string;
}
const steps: Step[] = [
  {
    n: 1,
    icon: MapPin,
    title: "Atölyeye Gel",
    desc: "Motorsikletinle Bağcılar atölyesine gel. E-5 Kirazlı'dayız, önümüzde ücretsiz park alanı var.",
  },
  {
    n: 2,
    icon: FileCheck,
    title: "Belgeleri Hazırla",
    desc: "Kimlik kartını ve motorsiklet plaka bilgini hazırda bulundur. Ek belge gerekmez.",
  },
  {
    n: 3,
    icon: PackageCheck,
    title: "Çantanı Teslim Et",
    desc: "Ekibimiz çantanı inceler, barkodlar ve sisteme işlenmek üzere kayda alır.",
  },
  {
    n: 4,
    icon: Database,
    title: "Sistem Kaydı",
    desc: "10 dakikada dijital kayıt tamamlanır, proje numaran oluşturulur ve size verilir.",
  },
  {
    n: 5,
    icon: CreditCard,
    title: "Plan Seç",
    desc: "Günlük, haftalık veya aylık kira planından size uygun olanı seç. Sözleşme yok.",
  },
  {
    n: 6,
    icon: Zap,
    title: "Aktif Ol",
    desc: "Kaydın aynı gün aktif olur. İlk teslimatından itibaren araç projesi avantajlarını yaşa.",
  },
];

const benefits: { icon: LucideIcon; title: string; desc: string }[] = [
  { icon: TrendingUp, title: "Günlük Gelir Artışı", desc: "Proje avantajıyla kazancın artar" },
  { icon: Shield, title: "Sigorta Güvencesi", desc: "Çantan ve işin güvence altında" },
  { icon: RefreshCw, title: "Çanta Değişim Hakkı", desc: "Yıpranan çantan yenilenir" },
  { icon: Zap, title: "Öncelikli Servis", desc: "Atölyede randevusuz hızlı servis" },
  { icon: Headphones, title: "7/24 Destek", desc: "WhatsApp üzerinden anlık destek" },
  { icon: Unlock, title: "Sözleşmesiz Çıkış", desc: "Dilediğin zaman projeden ayrıl" },
];

export default function Page() {
  return (
    <>
      <section className="relative flex min-h-[40vh] items-center overflow-hidden bg-[#0A0A0A] pt-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(255,107,0,0.12), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-3xl px-6 py-16 text-center">
          <div className="flex justify-center">
            <SectionLabel>Süreç</SectionLabel>
          </div>
          <h1 className="mt-5 text-fluid-hero font-black tracking-tight text-white">
            Araç Projesi <span className="text-[#FF6B00]">Nasıl Çalışır?</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-[#A0A0A0]">
            Kurye çantanızı projeye dahil edin. Kira planınızı seçin.
            Araç projesinin tüm avantajlarından yararlanın — hepsi 10 dakikada.
          </p>
        </div>
      </section>

      <section className="bg-[#0A0A0A]">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <ol className="relative space-y-5">
            {steps.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.n} className="relative flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FF6B00] text-[14px] font-black text-black">
                      {String(s.n).padStart(2, "0")}
                    </div>
                    {s.n < steps.length && (
                      <div
                        className="mt-2 w-0.5 flex-1 border-l-2 border-dashed"
                        style={{ borderColor: "rgba(255,107,0,0.3)" }}
                      />
                    )}
                  </div>
                  <div className="flex-1 rounded-xl border border-[#2A2A2A] bg-[#111111] p-6">
                    <div className="flex items-center gap-3">
                      <Icon size={18} className="text-[#FF6B00]" />
                      <h3 className="text-[17px] font-bold text-white">{s.title}</h3>
                    </div>
                    <p className="mt-2 text-[14px] leading-relaxed text-[#A0A0A0]">
                      {s.desc}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="border-t border-[#2A2A2A] bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-center">
            <SectionLabel>Avantajlar</SectionLabel>
            <h2 className="mt-4 text-fluid-xl font-black tracking-tight text-white">
              Projeye Katılanlar Ne Kazanır?
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.title}
                  className="rounded-xl border border-[#2A2A2A] bg-[#0A0A0A] p-6 transition hover:border-[#FF6B00]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FF6B00]/10">
                    <Icon size={20} className="text-[#FF6B00]" />
                  </div>
                  <h3 className="mt-5 text-[16px] font-bold text-white">{b.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#A0A0A0]">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <RegisterCTA />
    </>
  );
}
