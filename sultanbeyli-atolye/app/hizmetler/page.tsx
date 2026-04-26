import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ILLUSTRATIONS } from "@/components/illustrations";
import { Button } from "@/components/ui/Button";
import { WORKSHOP } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Hizmetler · Sultanbeyli Atölyesi",
  description: WORKSHOP.copy.servicesTitle,
};

export default function HizmetlerPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Hizmetler" }]}
        label="Hizmetler"
        title={WORKSHOP.copy.servicesTitle}
        subtitle="Beş ana hizmet — kayıt, değişim, bakım, danışmanlık, B2B."
      />

      <section className="bg-cream py-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 divide-y divide-terra-200/40">
          {WORKSHOP.services.map((s, i) => {
            const Illustration = ILLUSTRATIONS[s.illustrationId];
            const reverse = i % 2 === 1;
            const href =
              s.id === "b2b" ? "/ekibinizle-gelin" : `/hizmetler/${s.slug}`;
            return (
              <div
                key={s.id}
                className={cn(
                  "grid grid-cols-1 md:grid-cols-[220px_1fr] gap-10 items-center py-12",
                  reverse && "md:grid-cols-[1fr_220px]",
                )}
              >
                <div
                  className={cn(
                    "flex justify-center md:justify-start",
                    reverse && "md:order-last md:justify-end",
                  )}
                >
                  <div className="icon-wrap !w-[200px] !h-[200px]">
                    <Illustration size={160} />
                  </div>
                </div>
                <div>
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-3 py-1 font-body text-[11px] font-bold tracking-wider uppercase mb-3",
                      s.badgeColor === "sage"
                        ? "bg-sage-bg text-sage-600 border border-sage-300/50"
                        : "bg-terra-100 text-terra-600 border border-terra-200",
                    )}
                  >
                    {s.badge}
                  </span>
                  <h2 className="font-display text-section-lg text-ink mb-3">
                    {s.navTitle}
                  </h2>
                  <p className="font-body text-body-lg text-ink-light max-w-xl mb-3">
                    {s.desc}
                  </p>
                  <p className="font-body text-[15px] text-ink-mid max-w-xl mb-5">
                    {s.longDesc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 max-w-lg">
                    {s.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 font-body text-sm text-ink-mid"
                      >
                        <Check size={16} className="text-sage-500 mt-0.5 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 font-body font-semibold text-terra-500 hover:text-terra-600 transition-colors group"
                  >
                    Detaylı Bilgi
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-cream-mid py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-sage-bg border border-sage-300/40 rounded-3xl p-10 text-center">
            <span className="section-label !text-sage-600">B2B</span>
            <h3 className="mt-3 font-display text-display-xl text-ink leading-tight">
              Ekibinizle mi geliyorsunuz?
            </h3>
            <p className="mt-3 font-body text-body-lg text-ink-light max-w-xl mx-auto">
              5 ve üzeri kurye için toplu kayıt, özel fiyat ve öncelikli servis.
            </p>
            <div className="mt-6">
              <Button variant="primary" size="lg" href="/ekibinizle-gelin">
                Detaylı Bilgi
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
