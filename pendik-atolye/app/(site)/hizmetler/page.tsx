import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { BarcodeDecoration } from "@/components/ui/BarcodeDecoration";

export const metadata = { title: "Ne İhtiyacın Var?" };

export default function ServicesIndex() {
  return (
    <>
      <PageHero
        label="HİZMETLER · 5 KALEM"
        title="Ne İhtiyacın Var?"
        desc="Kayıt, değişim, bakım ve filo yönetimi. Hepsi tek atölyede."
        crumbs={[{ label: "Panel", href: "/" }, { label: "Hizmetler" }]}
      />
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {WORKSHOP.services.map((s, i) => {
            const Icon = (Icons as unknown as Record<string, React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>>)[s.icon];
            return (
              <Link
                key={s.id}
                href={`/hizmetler/${s.slug}`}
                className="widget progress-bar-item p-6 group flex flex-col gap-3"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="flex items-start justify-between">
                  {Icon && <Icon size={28} strokeWidth={1.6} className="text-lime-600" />}
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded ${
                      s.badgeColor === "lime"
                        ? "bg-lime-100 text-lime-700"
                        : s.badgeColor === "dark"
                        ? "bg-gray-900 text-lime-300"
                        : "bg-gray-150 text-gray-600"
                    }`}
                  >
                    {s.badge}
                  </span>
                </div>
                <h3 className="font-display font-bold text-section-lg text-gray-900 leading-tight">
                  {s.navTitle}
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed flex-1">
                  {s.desc}
                </p>
                <div className="flex items-center gap-1 text-[13px] text-lime-600 font-semibold mt-1 group-hover:translate-x-0.5 transition-transform">
                  Detay <ArrowRight size={13} />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="widget-dark mt-12 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden">
          <div className="scan-sweep-overlay" aria-hidden />
          <div className="flex-1">
            <span className="precision-label !text-lime-300">B2B PROGRAM</span>
            <h3 className="font-display font-bold text-section-xl text-gray-50 mt-2">
              Filo Yönetimi
            </h3>
            <p className="text-[15px] text-gray-300 mt-2 max-w-xl">
              5 ve üzeri kuryeniz varsa filo programımız devreye girer. Toplu kayıt,
              fatura, öncelikli servis.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <BarcodeDecoration bars={10} className="!opacity-30" />
            <Button variant="primary" size="md" href="/filo-yonetimi">
              Filo Başvurusu
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
