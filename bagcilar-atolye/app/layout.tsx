import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { CursorGlow } from "@/components/layout/CursorGlow";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import { ToastProvider } from "@/components/ui/ToastProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bagcilar.kuryeproje.com"),
  title: {
    default: "Bağcılar Kurye Atölyesi | Araç Projesi Kayıt",
    template: "%s | Bağcılar Kurye Atölyesi",
  },
  description:
    "İstanbul Bağcılar E-5 Kirazlı yakınında kurye çanta proje atölyesi. Ücretsiz kayıt, 10 dakika, her gün 07:00–01:00 açık.",
  keywords: [
    "kurye atölye",
    "bağcılar kurye",
    "araç projesi",
    "teslimat çantası",
    "kurye kayıt istanbul",
    "e-5 kurye",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://bagcilar.kuryeproje.com",
    siteName: "Kurye Proje Bağcılar",
    title: "Bağcılar Kurye Atölyesi | Araç Projesi",
    description:
      "İstanbul Bağcılar E-5 Kirazlı'daki flagship kurye çanta proje atölyesi. Ücretsiz kayıt.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bağcılar Kurye Atölyesi",
    description:
      "Flagship kurye atölyesi. E-5 Kirazlı. Her gün 07:00 – 01:00.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://bagcilar.kuryeproje.com" },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
};

const ldJson = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kurye Proje Bağcılar Atölyesi",
  description:
    "İstanbul Bağcılar E-5 Kirazlı'daki kurye çanta proje atölyesi.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "E-5 Kenarı, Kirazlı Mahallesi",
    addressLocality: "Bağcılar",
    addressRegion: "İstanbul",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.038,
    longitude: 28.856,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "01:00",
    },
  ],
  telephone: "+90-212-000-0000",
  url: "https://bagcilar.kuryeproje.com",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#0A0A0A] text-white">
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <WhatsAppFab />
        <ToastProvider />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldJson) }}
        />
      </body>
    </html>
  );
}
