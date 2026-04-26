import type { Metadata, Viewport } from "next";
import { Syne, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import { WORKSHOP } from "@/lib/constants";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#080B12",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gop.kuryeproje.com"),
  title: {
    default: `${WORKSHOP.name} — Gaziosmanpaşa Kurye Çanta Atölyesi`,
    template: `%s | ${WORKSHOP.name}`,
  },
  description: WORKSHOP.shortDesc,
  keywords: [
    "Gaziosmanpaşa kurye",
    "GOP kurye atölyesi",
    "kurye çanta kayıt",
    "motorlu kurye projesi",
    "Fevzi Çakmak kurye",
    "kurye filo yönetimi",
    "İstanbul kurye atölye",
  ],
  authors: [{ name: "Kurye Proje" }],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://gop.kuryeproje.com",
    siteName: WORKSHOP.name,
    title: `${WORKSHOP.name} — Gece Gündüz Çalışıyoruz`,
    description: WORKSHOP.shortDesc,
    images: [{ url: "/api/og", width: 1200, height: 630, alt: WORKSHOP.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: WORKSHOP.name,
    description: WORKSHOP.shortDesc,
    images: ["/api/og"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://gop.kuryeproje.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${syne.variable} ${jakarta.variable} ${spaceMono.variable}`}
    >
      <body className="min-h-screen bg-void text-text-primary antialiased">
        <CustomCursor />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#131929",
              color: "#EDF2FF",
              border: "1px solid rgba(232,67,90,0.3)",
              fontFamily: "Plus Jakarta Sans, sans-serif",
              fontSize: "14px",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
