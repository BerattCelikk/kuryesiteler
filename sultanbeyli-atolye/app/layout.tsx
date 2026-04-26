import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Nunito, Courier_Prime } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const dmSerif = DM_Serif_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

const courier = Courier_Prime({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sultanbeyli Atölyesi | Mahallenin Güvenilir Atölyesi · Kurye Proje",
  description:
    "Sultanbeyli'de motorlu kurye çanta projesi atölyesi. Kayıt, değişim ve bakım — hepsi Ankara Caddesi'nde.",
  metadataBase: new URL("https://sultanbeyli.kuryeproje.com"),
  openGraph: {
    title: "Sultanbeyli Atölyesi · Kurye Proje",
    description: "Mahallenin güvenilir atölyesi — Sultanbeyli, Ankara Caddesi.",
    locale: "tr_TR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#FDF8F0",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${dmSerif.variable} ${nunito.variable} ${courier.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#FDF8F0",
              color: "#2C1810",
              border: "1px solid rgba(192,92,40,0.20)",
              borderRadius: "16px",
              fontFamily: "var(--font-body)",
              boxShadow: "0 8px 40px rgba(192,92,40,0.14)",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
