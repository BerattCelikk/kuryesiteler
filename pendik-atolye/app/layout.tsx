import type { Metadata } from "next";
import { Barlow_Condensed, Source_Sans_3, Fira_Code } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { Toaster } from "react-hot-toast";
import { WORKSHOP } from "@/lib/constants";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const body = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "600"],
  display: "swap",
});

const mono = Fira_Code({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${WORKSHOP.name} | ${WORKSHOP.tagline}`,
    template: `%s | ${WORKSHOP.name}`,
  },
  description: WORKSHOP.shortDesc,
  metadataBase: new URL("https://pendik.kuryeproje.com"),
  openGraph: {
    title: WORKSHOP.name,
    description: WORKSHOP.shortDesc,
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="tr"
      className={`${display.variable} ${body.variable} ${mono.variable} antialiased`}
    >
      <body className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
        <PageTransition />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#212529",
              color: "#F8F9FA",
              border: "1px solid #6CC024",
              fontFamily: "var(--font-body)",
              borderRadius: "8px",
            },
          }}
        />
      </body>
    </html>
  );
}
