import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { WorkshopSection } from "@/components/sections/WorkshopSection";
import { Button } from "@/components/ui/Button";
import { WORKSHOP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Atölye · Sultanbeyli",
  description: "Sultanbeyli Ankara Caddesi'ndeki atölyemizi tanıyın.",
};

export default function AtolyePage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Atölye" }]}
        label="Atölyemiz"
        title={WORKSHOP.copy.workshopTitle}
        subtitle="Mahallenin içinden, mahalleye hizmet."
      />
      <WorkshopSection />
      <section className="bg-cream-mid py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <span className="section-label">Hikayemiz</span>
          <h2 className="mt-3 font-display text-display-xl text-ink leading-tight">
            Sultanbeyli&apos;nin İlk Atölyesi
          </h2>
          <p className="mt-5 font-body text-body-lg text-ink-light">
            {WORKSHOP.founding} Sultanbeyli ve çevresinde binlerce kuryeye hizmet
            veriyoruz. Atölyemiz Ankara Caddesi&apos;nde — tam kalabalık güzergahta,
            ulaşımı kolay, kapısı her sabah erken açık.
          </p>
          <p className="mt-3 font-body text-body-lg text-ink-light">
            Burada bir kurye sadece müşteri değil, mahalledendir.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button variant="primary" size="lg" href="/randevu">Randevu Alın</Button>
            <Button variant="ghost" size="lg" href={WORKSHOP.googleMapsUrl} external>
              Yol Tarifi
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
