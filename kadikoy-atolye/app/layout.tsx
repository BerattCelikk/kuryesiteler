import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Figtree, Inconsolata } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { WORKSHOP } from "@/lib/constants";
import CustomCursor from "@/components/ui/CustomCursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inconsolata = Inconsolata({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${WORKSHOP.name} — ${WORKSHOP.tagline}`,
    template: `%s · ${WORKSHOP.name}`,
  },
  description: WORKSHOP.shortDesc,
  keywords: [
    "kurye çanta", "araç projesi", "Kadıköy kurye atölyesi",
    "motorlu kurye Kadıköy", "kurye proje Anadolu yakası",
  ],
  authors: [{ name: "Kurye Proje" }],
  metadataBase: new URL("https://kadikoy.kuryeproje.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Kurye Proje · Kadıköy",
    title: `${WORKSHOP.name} — ${WORKSHOP.tagline}`,
    description: WORKSHOP.shortDesc,
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FEFCF5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${cormorant.variable} ${figtree.variable} ${inconsolata.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ivory text-ink">
        <CustomCursor />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#FEFCF5",
              color: "#1A1A14",
              border: "1px solid rgba(30,92,52,0.18)",
              borderRadius: "8px",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
            },
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
