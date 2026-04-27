import type { Metadata } from "next";
import PageHeader from "@/components/editorial/PageHeader";
import BookingFlow from "@/components/sections/BookingFlow";

export const metadata: Metadata = {
  title: "Randevu",
  description: "Kadıköy atölyemizden randevu alın. Dört adımda tamamlanır.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Randevu · 4 Adım"
        title="Tarih Seçin"
        subtitle="Ad Soyad, tarih, hizmet ayrıntıları ve onay — yalnızca dakikalar."
        page="No. 09"
      />
      <section className="bg-ivory-mid py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6 md:px-8">
          <BookingFlow />
        </div>
      </section>
    </>
  );
}
