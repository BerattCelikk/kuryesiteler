import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WORKSHOP } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ServiceSidebar } from "@/components/pages/ServiceSidebar";

export const metadata: Metadata = {
  title: "Hizmetler",
  description: "Ümraniye atölyemizde sunduğumuz tüm hizmetler: çanta kaydı, B2B filo yönetimi, bakım, değişim ve proje analizi.",
  alternates: { canonical: "/hizmetler" },
};

export default function HizmetlerPage() {
  const featured = WORKSHOP.services.filter((s) => s.featured);
  const others = WORKSHOP.services.filter((s) => !s.featured);
  return (
    <>
      <PageHero
        variant="white"
        eyebrow="HİZMETLER"
        title="Tüm Hizmetlerimiz"
        subtitle="Çanta kaydından bakımına, bireysel kuryeden kurumsal filolara kadar kurye dünyasının tüm ihtiyaçlarına tek atölyede çözüm."
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Hizmetler" }]}
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[220px_1fr] gap-10">
          <ServiceSidebar />

          <div>
            <h3 className="section-label mb-4">ÖNE ÇIKAN HİZMETLER</h3>
            <div className="space-y-5 mb-12">
              {featured.map((s, i) => (
                <ServiceCard key={s.id} service={s} variant="featured" index={i} />
              ))}
            </div>

            <h3 className="section-label mb-4">DİĞER HİZMETLER</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {others.map((s, i) => (
                <ServiceCard key={s.id} service={s} variant="compact" index={i} />
              ))}
            </div>

            <div className="mt-12 rounded-[16px] blue-gradient-bg p-8 md:p-10 text-white flex flex-wrap items-center justify-between gap-5">
              <div className="max-w-xl">
                <p className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue-100">
                  // KURUMSAL
                </p>
                <h3 className="mt-2 fluid-lg text-white">B2B Başvurusu</h3>
                <p className="mt-2 text-blue-50 text-sm">
                  Kargo firmanız veya e-ticaret deponuz için filo çanta anlaşması yapın.
                </p>
              </div>
              <Link
                href="/hizmetler/b2b"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-[12px] bg-white text-blue-700 hover:bg-blue-50 font-display font-semibold"
              >
                Başvuru Formu <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
