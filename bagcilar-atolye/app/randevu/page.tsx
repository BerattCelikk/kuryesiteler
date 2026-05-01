import type { Metadata } from "next";
import { BookingPage } from "./BookingPage";

export const metadata: Metadata = {
  title: "Randevu Al",
  description:
    "Bağcılar Atölyesi'nde randevu alın. Motosiklet çanta projesi için uygun zaman dilimini seçin, formu doldurun.",
};

export default function Page() {
  return <BookingPage />;
}
