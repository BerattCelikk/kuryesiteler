import type { Metadata } from "next";
import { BookingPage } from "./BookingPage";

export const metadata: Metadata = {
  title: "Randevu Al",
  description:
    "Bağcılar Kurye Atölyesi'nden randevu alın. Ücretsiz kayıt, 10 dakika işlem.",
};

export default function Page() {
  return <BookingPage />;
}
