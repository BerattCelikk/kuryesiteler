import type { Metadata } from "next";
import { MapPin, Clock, Train, Route, ParkingCircle, Users, Wrench, Briefcase } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { InfoCard } from "@/components/ui/InfoCard";
import { StatCard } from "@/components/ui/StatCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { WorkshopMapDynamic } from "@/components/ui/WorkshopMapDynamic";
import { RegisterCTA } from "@/components/sections/RegisterCTA";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Icon } from "@/components/ui/Icon";

export const metadata: Metadata = {
  title: "Atölye Hakkında",
  description: `Ümraniye atölyemiz 2022'den beri Anadolu Yakası'nın en büyük araç projesi merkezi. ${WORKSHOP.teamSize}, TEM ve D100 bağlantısı.`,
  alternates: { canonical: "/atolye" },
};

const TRANSIT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Train, Route, ParkingCircle, MapPin,
};

export default function AtolyePage() {
  return (
    <>
      <PageHero
        variant="soft"
        eyebrow="HAKKIMIZDA"
        title="Anadolu Yakası'nın Lojistik Kalbi"
        subtitle={WORKSHOP.longDesc}
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Atölye" }]}
      />

      {/* Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {WORKSHOP.stats.map((s, i) => (
              <StatCard key={s.id} stat={s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <SectionHeader
              label="// HİKAYEMİZ"
              title="2022'de Kurulan Ümraniye Atölyemiz"
            />
            <div className="mt-6 space-y-5 text-text-secondary leading-relaxed">
              <p>
                Ümraniye atölyemiz, 2022 yılında Anadolu Yakası'nın artan kurye
                talebini karşılamak üzere kuruldu. TEM ve D100 otoyollarının
                kesişiminde yer alan konumumuzla, Sultanbeyli'den Kartal'a,
                Kadıköy'den Pendik'e uzanan geniş bir bölgeye hizmet veriyoruz.
              </p>
              <p>
                {WORKSHOP.teamSize} ekibimizle her gün onlarca kuryeyi araç
                projemize dahil ediyor, hasar değişimi yapıyor ve kurumsal filo
                anlaşmalarımızı yönetiyoruz. Amacımız: kuryelerin çantasından
                değil, yolundan endişelenmesi.
              </p>
              <p>
                Gelecek dönemde atölyemizi iki katına çıkararak, Anadolu
                Yakası'nda B2B kargo filo merkezi haline getirmeyi planlıyoruz.
              </p>
            </div>
          </div>
          <InfoCard accent="blue" padding="lg">
            <h3 className="section-label mb-6">EKİP & KAPASİTE</h3>
            <div className="space-y-5">
              <div>
                <div className="font-stat text-text-primary">{WORKSHOP.teamSize.split(" ")[0]}</div>
                <div className="text-sm text-text-muted">Uzman ekip</div>
              </div>
              <div>
                <div className="font-stat text-text-primary">{WORKSHOP.founded}</div>
                <div className="text-sm text-text-muted">Kuruluş yılı</div>
              </div>
              <div>
                <div className="font-stat text-text-primary">350+</div>
                <div className="text-sm text-text-muted">Aktif kayıtlı kurye</div>
              </div>
              <div>
                <div className="font-stat text-text-primary">47</div>
                <div className="text-sm text-text-muted">Kurumsal anlaşma</div>
              </div>
            </div>
          </InfoCard>
        </div>
      </section>

      {/* Map & transit */}
      <section className="py-16 md:py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="// KONUM"
            title="Konum & Ulaşım"
            subtitle="TEM ve D100'e dakikalar uzaklıkta, metroyla yürüme mesafesinde."
            className="mb-10"
          />
          <WorkshopMapDynamic height={500} className="mb-8" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {WORKSHOP.transit.map((t) => {
              const I = TRANSIT_ICONS[t.icon] ?? MapPin;
              return (
                <InfoCard key={t.label} padding="md" accent={t.highlight ? "blue" : "none"}>
                  <I className={`w-6 h-6 ${t.highlight ? "text-blue-600" : "text-text-muted"}`} />
                  <div className="mt-3 font-display font-semibold text-text-primary">{t.label}</div>
                  <div className="text-sm text-text-muted">{t.detail}</div>
                </InfoCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <SectionHeader
            label="// SAATLER"
            title="Çalışma Saatleri"
            align="center"
            className="mb-10"
          />
          <InfoCard padding="lg">
            <div className="flex justify-center mb-6">
              <StatusBadge size="lg" />
            </div>
            <table className="w-full text-sm">
              <tbody>
                {[
                  { ...WORKSHOP.hours.weekday, today: new Date().getDay() >= 1 && new Date().getDay() <= 5 },
                  { ...WORKSHOP.hours.weekend, today: new Date().getDay() === 0 || new Date().getDay() === 6 },
                  { ...WORKSHOP.hours.holiday, today: false },
                ].map((h) => (
                  <tr
                    key={h.label}
                    className={`border-b border-border-light last:border-0 ${h.today ? "bg-blue-50" : ""}`}
                  >
                    <td className="py-4 font-display font-semibold text-text-primary">
                      {h.label}
                      {h.today && <span className="ml-2 pill pill-blue">BUGÜN</span>}
                    </td>
                    <td className="py-4 font-mono text-text-secondary text-right">
                      {h.open} – {h.close}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </InfoCard>
        </div>
      </section>

      {/* Why Umraniye */}
      <section className="py-16 md:py-20 bg-bg-soft">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            label="// AVANTAJLARIMIZ"
            title="Neden Ümraniye?"
            align="center"
            className="mb-10"
          />
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: "Route", title: "TEM & D100 Erişimi", desc: "İki otoyola dakikalar içinde. Kargo kuryeleri için ideal." },
              { icon: "Train", title: "Metro Bağlantısı", desc: "M7 Ümraniye durağına 5 dakika yürüme mesafesinde." },
              { icon: "ParkingCircle", title: "Geniş Park Alanı", desc: "Atölyemizin önünde ücretsiz motorsiklet park alanı." },
            ].map((f, i) => (
              <InfoCard key={f.title} padding="lg">
                <div className="w-12 h-12 rounded-[12px] bg-blue-50 flex items-center justify-center mb-4">
                  <Icon name={f.icon} className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-display font-bold text-lg text-text-primary">{f.title}</h3>
                <p className="text-sm text-text-muted mt-2 leading-relaxed">{f.desc}</p>
                <div className="mt-3 font-mono text-[10px] text-text-subtle">0{i + 1}</div>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 blue-gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-blue-100">
            // EKİP
          </p>
          <h2 className="mt-3 fluid-xl text-white">12 Uzman, Tek Hedef</h2>
          <p className="mt-4 text-lg text-blue-50 max-w-2xl">
            Her pozisyonda deneyimli ekip üyelerimizle, kurye dünyasının tüm
            detaylarını yönetiyoruz.
          </p>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {[
              { icon: Users, title: "Kayıt Uzmanı", desc: "Hızlı ve kusursuz sistem kaydı." },
              { icon: Wrench, title: "Teknik Servis", desc: "Bakım, tamir ve donanım kontrolü." },
              { icon: Briefcase, title: "B2B Koordinatör", desc: "Kurumsal filo ve kargo firmaları." },
            ].map((r) => (
              <div
                key={r.title}
                className="rounded-[14px] bg-white/10 border border-white/15 p-6 backdrop-blur"
              >
                <r.icon className="w-6 h-6 text-blue-100" />
                <h3 className="mt-3 font-display font-bold text-lg text-white">{r.title}</h3>
                <p className="mt-2 text-sm text-blue-50 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RegisterCTA />
    </>
  );
}
