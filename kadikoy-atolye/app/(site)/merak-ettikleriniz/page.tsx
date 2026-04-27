import type { Metadata } from "next";
import PageHeader from "@/components/editorial/PageHeader";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Sıkça Sorulanlar",
  description: "Kadıköy atölyemiz hakkında en sık sorulan sorular.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="SSS · Kadıköy"
        title="Merak Ettikleriniz"
        subtitle="Cevaplamadığımız bir soru olursa WhatsApp hattımız her zaman açık."
        page="No. 05"
      />
      <FAQ />
      <CTA />
    </>
  );
}
