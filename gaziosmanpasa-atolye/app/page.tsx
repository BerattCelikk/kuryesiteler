"use client";
import { useRef } from "react";
import Navbar from "@/components/layout/Navbar";
import SectionDotNav from "@/components/layout/SectionDotNav";
import HeroSection from "@/components/sections/HeroSection";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StepsSection from "@/components/sections/StepsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { useScrollSection } from "@/hooks/useScrollSection";

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  useScrollSection(ref);

  return (
    <>
      <Navbar />
      <SectionDotNav containerRef={ref} />
      <div ref={ref} className="snap-container">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <StepsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </div>
    </>
  );
}
