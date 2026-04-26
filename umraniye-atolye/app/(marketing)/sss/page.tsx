import type { Metadata } from "next";
import { MessageCircle, Phone, Calendar } from "lucide-react";
import { WORKSHOP, FAQ_CATEGORIES } from "@/lib/constants";
import { PageHero } from "@/components/ui/PageHero";
import { Sidebar } from "@/components/ui/Sidebar";
import { InfoCard } from "@/components/ui/InfoCard";
import { Button } from "@/components/ui/Button";
import { FAQSearch } from "@/components/pages/FAQSearch";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular",
  description: "Ümraniye kurye atölyesi sık sorulan sorular: kayıt, belgeler, saat, ulaşım, B2B, fiyat.",
  alternates: { canonical: "/sss" },
};

export default function SSSPage() {
  const sidebarLinks = FAQ_CATEGORIES.map((c) => ({
    label: c,
    href: `/sss#${c.toLowerCase().replace(/\s+/g, "-")}`,
  }));

  return (
    <>
      <PageHero
        variant="white"
        eyebrow="SSS"
        title="Sık Sorulan Sorular"
        subtitle="Aklınızdaki soruların cevaplarını buradan bulabilirsiniz. Bulamadığınız bir şey varsa WhatsApp'tan yazın."
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "SSS" }]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[220px_1fr] gap-10">
          <Sidebar heading="KATEGORİLER" links={[{ label: "Tümü", href: "/sss" }, ...sidebarLinks]} />

          <div>
            <FAQSearch />

            <InfoCard padding="lg" className="mt-10 text-center" accent="blue">
              <h3 className="fluid-lg text-text-primary">Sorunuzu Bulamadınız mı?</h3>
              <p className="text-text-muted mt-2 max-w-lg mx-auto">
                Ekibimiz size yardımcı olmak için burada. WhatsApp, telefon veya
                randevu üzerinden ulaşabilirsiniz.
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <Button
                  variant="teal"
                  size="md"
                  href={WORKSHOP.waLink}
                  icon={<MessageCircle className="w-4 h-4" />}
                  iconPosition="left"
                >
                  WhatsApp
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  href={`tel:${WORKSHOP.phoneRaw}`}
                  icon={<Phone className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Telefon
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  href="/randevu"
                  icon={<Calendar className="w-4 h-4" />}
                  iconPosition="left"
                >
                  Randevu
                </Button>
              </div>
            </InfoCard>
          </div>
        </div>
      </section>
    </>
  );
}
