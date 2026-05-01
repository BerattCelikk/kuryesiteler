import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ekiple Gel | GOP Atölye — Filo Çanta Yönetimi",
  description:
    "5+ kurye için filo çanta yönetimi, özel fiyatlandırma, fatura kesimi ve öncelikli servis. GOP Atölye B2B programı.",
  openGraph: {
    title: "Ekiple Gel | GOP Atölye",
    description: "Filo boyutuna göre çözüm: küçük, orta ve enterprise paketler.",
  },
  alternates: { canonical: "https://gop.kuryeproje.com/filonu-yonet" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
