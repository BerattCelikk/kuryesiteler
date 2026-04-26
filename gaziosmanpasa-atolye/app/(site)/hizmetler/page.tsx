import type { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowUpRight, Network } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import TiltCard from "@/components/ui/TiltCard";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { WORKSHOP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: "Kayıt, değişim, bakım, danışmanlık ve filo yönetimi. GOP atölyesinde 5 hizmet, tek nokta.",
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHero breadcrumb="GOP → HİZMETLER" title="Ne İstiyorsun?" subtitle="5 farklı hizmet, tek atölye." />

      <section className="max-w-[1400px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORKSHOP.services.map((s, i) => {
            const Icon = ((Icons as unknown as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>>)[s.icon] ?? Icons.Box) as React.ComponentType<{ className?: string; strokeWidth?: number }>;
            return (
              <TiltCard key={s.id} maxTilt={5}>
                <Link href={`/hizmetler/${s.slug}`} className="panel holo-card p-7 h-full flex flex-col group block" style={{ animationDelay: `${i * 50}ms` }}>
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-coral-500/10 border border-coral-500/30 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-coral-400" strokeWidth={1.5} />
                    </div>
                    <Badge color={s.badgeColor as "coral" | "cyan" | "amber"}>{s.badge}</Badge>
                  </div>
                  <h3 className="font-display font-bold text-section-lg text-text-bright mb-3">{s.pageTitle}</h3>
                  <p className="font-body text-[15px] text-text-secondary leading-relaxed mb-5 flex-1">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[12px] text-coral-300 uppercase tracking-widest group-hover:gap-2 transition-all">
                    Detay <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </Link>
              </TiltCard>
            );
          })}
        </div>
      </section>

      <section className="cta-coral-gradient py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Network className="w-6 h-6 text-white" />
              <span className="font-mono text-mono-label text-white/80">// B2B</span>
            </div>
            <h2 className="font-display font-extrabold text-section-xl text-white mb-3">Ekiple mi Geliyorsunuz?</h2>
            <p className="font-body text-base text-white/85 max-w-xl">5+ kurye için filo çanta yönetimi, özel fiyat, fatura kesimi ve öncelikli servis.</p>
          </div>
          <Button href="/filonu-yonet" variant="white" size="lg">
            Filonu Yönet →
          </Button>
        </div>
      </section>
    </>
  );
}
