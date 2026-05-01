import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Nasıl Çalışır | GOP Atölye — Gaziosmanpaşa",
  description:
    "GOP Atölye'nin 6 adımlık süreci, plan seçenekleri ve projeli–projesiz farkı. Süreç şeffaf.",
  openGraph: {
    title: "Nasıl Çalışır | GOP Atölye",
    description: "Atölyeye gelişten aktivasyona — süreç adım adım.",
  },
  alternates: { canonical: "https://gop.kuryeproje.com/nasil-calisir" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
