import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Randevu · Sultanbeyli Atölyesi",
  description: "Hızlı ve sıcak bir randevu — atölyemize davetlisiniz.",
};

export default function RandevuPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Randevu" }]}
        label="Randevu"
        title="Randevu Alın."
        subtitle="Birkaç bilgi, ardından kapıda görüşmek üzere."
      />
      <CTASection />
    </>
  );
}
