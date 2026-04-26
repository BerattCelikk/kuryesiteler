import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { WORKSHOP } from "@/lib/constants";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: WORKSHOP.name,
  description: WORKSHOP.shortDesc,
  url: "https://gop.kuryeproje.com",
  telephone: WORKSHOP.phoneRaw,
  email: WORKSHOP.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: WORKSHOP.street,
    addressLocality: WORKSHOP.district,
    addressRegion: "İstanbul",
    postalCode: WORKSHOP.postalCode,
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: WORKSHOP.coordinates.lat,
    longitude: WORKSHOP.coordinates.lng,
  },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: WORKSHOP.hours.weekday.open, closes: WORKSHOP.hours.weekday.close },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday","Sunday"], opens: WORKSHOP.hours.weekend.open, closes: WORKSHOP.hours.weekend.close },
  ],
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      {/* fixed-left status rail (desktop) */}
      <div className="hidden xl:block fixed left-0 top-16 bottom-0 w-[60px] bg-void border-r border-white/5 z-30">
        <div className="h-full flex flex-col items-center justify-between py-8">
          <span className="font-display font-extrabold text-text-bright text-[14px] tracking-widest" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
            KURYE PROJE
          </span>
          <span className="w-2 h-2 rounded-full bg-coral-500 shadow-[0_0_8px_rgba(232,67,90,0.6)]" style={{ animation: "statusPulse 2s ease-in-out infinite" }} />
          <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest" style={{ writingMode: "vertical-rl" }}>GOP / ROTA · 4</span>
        </div>
      </div>
      <main className="xl:pl-[60px] pt-16 min-h-screen flex flex-col">
        <PageTransition>{children}</PageTransition>
      </main>
      <div className="xl:pl-[60px]">
        <Footer />
      </div>
    </>
  );
}
