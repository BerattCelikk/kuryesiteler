import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { ILLUSTRATIONS } from "@/components/illustrations";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { WarmAccordion } from "@/components/ui/WarmAccordion";
import { WORKSHOP } from "@/lib/constants";
import { getServiceBySlug, getTodayHours } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return WORKSHOP.services
    .filter((s) => s.id !== "b2b")
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  return {
    title: `${service?.navTitle ?? "Hizmet"} · Sultanbeyli Atölyesi`,
    description: service?.desc ?? "",
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service || service.id === "b2b") notFound();

  const Illustration = ILLUSTRATIONS[service.illustrationId];

  const microSteps = [
    { n: "01", title: "Atölyeye Gelin", desc: "Ankara Caddesi'nden bizi bulun." },
    { n: "02", title: "İhtiyacı Anlatın", desc: "Ekibimiz ne yapacağını söyler." },
    { n: "03", title: "Hizmet Tamamlanır", desc: `${service.badge} hizmetiniz hazır.` },
  ];

  const microFAQ = WORKSHOP.faq.slice(0, 3);

  const otherServices = WORKSHOP.services.filter((s) => s.id !== service.id);

  return (
    <>
      <PageHero
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetler", href: "/hizmetler" },
          { label: service.navTitle },
        ]}
        label={service.badge.toUpperCase()}
        title={service.pageTitle}
        subtitle={service.longDesc}
      />

      <section className="bg-cream py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">
          <div>
            <h2 className="font-display text-section-lg text-ink mb-6">
              Nasıl İşler?
            </h2>
            <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              {microSteps.map((s) => (
                <li key={s.n} className="warm-card !bg-cream-mid p-5">
                  <span className="font-mono text-mono-sm text-terra-500 font-bold">
                    {s.n}
                  </span>
                  <h3 className="font-display text-xl text-ink mt-1 mb-1">{s.title}</h3>
                  <p className="font-body text-sm text-ink-light">{s.desc}</p>
                </li>
              ))}
            </ol>

            <h2 className="font-display text-section-lg text-ink mb-4">Ne Lazım?</h2>
            <ul className="space-y-2 mb-10">
              {["Kimlik kartı", "Motorsiklet plakası", "Telefon numaranız"].map((x) => (
                <li
                  key={x}
                  className="flex items-center gap-3 font-body text-ink-mid"
                >
                  <span className="h-6 w-6 rounded-full bg-sage-bg border border-sage-300/40 flex items-center justify-center">
                    <Check size={14} className="text-sage-500" />
                  </span>
                  {x}
                </li>
              ))}
            </ul>

            <h2 className="font-display text-section-lg text-ink mb-4">
              Ne Kazanırsınız?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {service.benefits.map((b) => (
                <div key={b} className="warm-card !bg-cream-mid p-5">
                  <div className="flex items-center gap-2 mb-1">
                    <Check size={18} className="text-sage-500" />
                    <span className="font-body font-bold text-ink">{b}</span>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-display text-section-lg text-ink mb-4">
              Bu Hizmetle İlgili Sorular
            </h2>
            <WarmAccordion items={microFAQ} />
          </div>

          <aside className="lg:sticky lg:top-24 self-start">
            <div className="warm-card !bg-cream p-6">
              <div className="icon-wrap !w-20 !h-20 mx-auto mb-4">
                <Illustration size={64} />
              </div>
              <h3 className="font-display text-2xl text-ink text-center">
                {service.navTitle}
              </h3>
              <div className="flex justify-center gap-2 mt-2 mb-5">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full px-3 py-0.5 font-body text-[11px] font-bold tracking-wider uppercase",
                    service.badgeColor === "sage"
                      ? "bg-sage-bg text-sage-600 border border-sage-300/40"
                      : "bg-terra-100 text-terra-600 border border-terra-200",
                  )}
                >
                  {service.badge}
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 mb-5">
                <StatusBadge size="md" />
                <span className="font-body text-xs text-ink-light">
                  Bugün {getTodayHours()}
                </span>
              </div>

              <div className="h-px bg-terra-200/40 mb-5" />

              <Button variant="primary" size="md" href="/randevu" fullWidth>
                Randevu Alın
              </Button>
              <div className="mt-3">
                <Button
                  variant="whatsapp"
                  size="md"
                  href={WORKSHOP.waLink}
                  external
                  fullWidth
                >
                  WhatsApp&apos;tan Yazın
                </Button>
              </div>

              <div className="h-px bg-terra-200/40 my-6" />

              <div className="section-label mb-3">Diğer Hizmetler</div>
              <ul className="space-y-2">
                {otherServices.slice(0, 4).map((o) => (
                  <li key={o.id}>
                    <Link
                      href={
                        o.id === "b2b"
                          ? "/ekibinizle-gelin"
                          : `/hizmetler/${o.slug}`
                      }
                      className="flex items-center justify-between gap-2 font-body text-sm text-ink-mid hover:text-terra-500 transition-colors group"
                    >
                      <span>{o.navTitle}</span>
                      <ArrowRight
                        size={14}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
