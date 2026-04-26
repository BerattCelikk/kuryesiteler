import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { WORKSHOP } from "@/lib/constants";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://umraniye.kuryeproje.com"),
  title: {
    default: "Ümraniye Kurye Atölyesi | Araç Projesi",
    template: "%s | Kurye Proje Ümraniye",
  },
  description: WORKSHOP.longDesc,
  keywords: [
    "Ümraniye kurye",
    "kurye çantası",
    "araç projesi",
    "motokurye",
    "Anadolu Yakası kurye",
    "B2B filo çanta",
  ],
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: "Kurye Proje · Ümraniye",
    title: "Ümraniye Kurye Atölyesi | Araç Projesi",
    description: WORKSHOP.longDesc,
    images: ["/api/og"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ümraniye Kurye Atölyesi",
    description: WORKSHOP.longDesc,
    images: ["/api/og"],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const ldLocalBusiness = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: `Kurye Proje · ${WORKSHOP.name}`,
  image: "/api/og",
  address: {
    "@type": "PostalAddress",
    streetAddress: WORKSHOP.street,
    addressLocality: WORKSHOP.district,
    postalCode: WORKSHOP.postalCode,
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: WORKSHOP.coordinates.lat,
    longitude: WORKSHOP.coordinates.lng,
  },
  telephone: WORKSHOP.phone,
  email: WORKSHOP.email,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "23:00",
    },
  ],
};

const ldWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kurye Proje · Ümraniye",
  url: "https://umraniye.kuryeproje.com",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="tr"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-text-primary">
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldLocalBusiness) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ldWebsite) }}
        />
      </body>
    </html>
  );
}
