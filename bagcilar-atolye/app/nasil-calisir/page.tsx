import type { Metadata } from "next";
import {
  MessageCircle,
  MapPin,
  ClipboardCheck,
  ShieldCheck,
  FileCheck,
  Train,
  Award,
  Zap,
  ReceiptText,
  type LucideIcon,
} from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { RegisterCTA } from "@/components/sections/RegisterCTA";
import { HOW_IT_WORKS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nasıl Çalışır",
  description:
    "Motosiklet çantanızı 5 adımda ruhsata işletin. Proje, TÜVTÜRK ve noter — aynı gün.",
};

const stepIconMap: Record<string, LucideIcon> = {
  MessageCircle,
  MapPin,
  ClipboardCheck,
  ShieldCheck,
  FileCheck,
};

interface Advantage {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const advantages: Advantage[] = [
  {
    icon: Train,
    title: "E-5 Üzerinde Merkezi Konum",
    desc: "Kirazlı metro ile direkt ulaşım, İstanbul'un her yakasından erişim.",
  },
  {
    icon: Award,
    title: "TSE Onaylı Mühendis",
    desc: "Resmi, hukuken geçerli proje. İmzalı mühendis belgesiyle TÜVTÜRK'te sorun yaşamazsınız.",
  },
  {
    icon: Zap,
    title: "15 Dakika Proje Süresi",
    desc: "Bekleme yok. Gelir, projenizi alır, devam edersiniz.",
  },
  {
    icon: ReceiptText,
    title: "Şeffaf Fiyatlandırma",
    desc: "Gizli ücret yok. WhatsApp'tan fotoğraf atın, net fiyatı öğrenin.",
  },
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
            Kurye Araç Projesi{" "}
            <span className="text-[#FF6B00]">Nasıl Çalışır?</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-[#A0A0A0]">
            WhatsApp&apos;tan ön kontrolle başlayın, atölyede 15 dakikada projenizi alın,
            TÜVTÜRK ve noteri aynı gün bitirin. Yasal, hızlı ve şeffaf süreç — 5 net adım.
          </p>
        </div>
      </section>

      <section className="bg-[#0A0A0A]">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <ol className="relative space-y-5">
            {HOW_IT_WORKS.map((s, idx) => {
              const Icon = stepIconMap[s.iconName] ?? ClipboardCheck;
              const num = idx + 1;
              const isLast = num === HOW_IT_WORKS.length;
              return (
                <li key={s.title} className="relative flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FF6B00] text-[14px] font-black text-black">
                      {String(num).padStart(2, "0")}
                    </div>
                    {!isLast && (
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
                      {s.description}
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
              Neden Bağcılar Atölyesi?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-[#A0A0A0]">
              Konum, hız, güvenilirlik ve şeffaflık — kuryelerin neden bizi seçtiğine
              dair dört net sebep.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.title}
                  className="rounded-xl border border-[#2A2A2A] bg-[#0A0A0A] p-6 transition hover:border-[#FF6B00]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#FF6B00]/10">
                    <Icon size={20} className="text-[#FF6B00]" />
                  </div>
                  <h3 className="mt-5 text-[16px] font-bold text-white">{a.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#A0A0A0]">
                    {a.desc}
                  </p>
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
