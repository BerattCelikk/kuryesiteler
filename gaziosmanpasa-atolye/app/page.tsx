import Navbar from "@/components/layout/Navbar";
import ScrollSectionTracker from "@/components/layout/ScrollSectionTracker";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StepsSection from "@/components/sections/StepsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollSectionTracker>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <StepsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </ScrollSectionTracker>
    </>
  );
}
