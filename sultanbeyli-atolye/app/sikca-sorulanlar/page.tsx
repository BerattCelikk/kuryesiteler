import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { FAQSection } from "@/components/sections/FAQSection";
import { WORKSHOP } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Sıkça Sorulanlar · Sultanbeyli Atölyesi",
  description: WORKSHOP.copy.faqTitle,
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Ana Sayfa", href: "/" }, { label: "Sıkça Sorulanlar" }]}
        label="Sorular"
        title={WORKSHOP.copy.faqTitle}
        subtitle="En çok sorulanları bir araya getirdik. Cevap bulamazsanız bize yazın."
      />
      <FAQSection />
    </>
  );
}
