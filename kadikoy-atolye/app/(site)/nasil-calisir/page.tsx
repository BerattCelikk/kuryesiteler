import type { Metadata } from "next";
import PageHeader from "@/components/editorial/PageHeader";
import HowItWorks from "@/components/sections/HowItWorks";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Nasıl Çalışır",
  description: "Kadıköy atölyemizde araç projesine kayıt sürecinin altı adımı.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Süreç · 6 Adım"
        title="Nasıl Çalışıyoruz"
        subtitle="Atölyemize gelişten yolculuğunuza başlamanıza kadar yalnızca on dakika."
        page="No. 03"
      />
      <HowItWorks />
      <CTA />
    </>
  );
}
