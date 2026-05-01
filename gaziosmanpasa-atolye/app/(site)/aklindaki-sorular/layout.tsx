import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Aklındaki Sorular | GOP Atölye — Gaziosmanpaşa",
  description:
    "Kayıt, plan, çanta değişimi ve destek hakkında en sık sorulan soruların yanıtları. GOP Atölye sıkça sorulanlar.",
  openGraph: {
    title: "Aklındaki Sorular | GOP Atölye",
    description: "GOP Atölye hakkında merak ettiğin her şey tek sayfada.",
  },
  alternates: { canonical: "https://gop.kuryeproje.com/aklindaki-sorular" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
