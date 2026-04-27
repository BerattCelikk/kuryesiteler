import { PageHero } from "@/components/layout/PageHero";
import { BookingFlow } from "@/components/sections/BookingFlow";

export const metadata = { title: "Randevu Al" };

export default function Page() {
  return (
    <>
      <PageHero
        label="RANDEVU"
        title="Randevu Al"
        desc="4 adımda randevunu oluştur. Walk-in için randevu gerekmiyor."
        crumbs={[{ label: "Panel", href: "/" }, { label: "Randevu" }]}
      />
      <BookingFlow />
    </>
  );
}
