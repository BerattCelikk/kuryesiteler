import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowSection } from "@/components/sections/HowSection";
import { WorkshopSection } from "@/components/sections/WorkshopSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { WaveDivider } from "@/components/ui/WaveDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <WaveDivider fill="#F7EFE0" height={80} />
      <StatsSection />
      <WaveDivider fill="#FDF8F0" inverted height={80} />
      <ServicesSection />
      <WaveDivider fill="#F7EFE0" height={100} />
      <HowSection />
      <WaveDivider fill="#FDF8F0" inverted height={80} />
      <WorkshopSection />
      <WaveDivider fill="#F7EFE0" height={80} />
      <TestimonialsSection />
      <WaveDivider fill="#FDF8F0" inverted height={80} />
      <FAQSection />
      <WaveDivider fill="#EDF4ED" height={100} />
      <CTASection />
    </>
  );
}
