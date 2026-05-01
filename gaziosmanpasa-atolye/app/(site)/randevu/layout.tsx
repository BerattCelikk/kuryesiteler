import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Randevu Al | GOP Atölye — Gaziosmanpaşa",
  description:
    "GOP Atölye'de kurye çantası bakım, kayıt veya yenileme için online randevu alın. Hızlı, ücretsiz, onaysız.",
  openGraph: {
    title: "Randevu Al | GOP Atölye",
    description: "Gaziosmanpaşa atölyemizde slot ayırtın — bekleme yok, anında onay.",
  },
  alternates: { canonical: "https://gop.kuryeproje.com/randevu" },
};

export default function RandevuLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
