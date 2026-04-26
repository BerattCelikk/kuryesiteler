import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { WorkshopInfo } from "@/components/sections/WorkshopInfo";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { RegisterCTA } from "@/components/sections/RegisterCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <WorkshopInfo />
      <div className="section-divider" />
      <HowItWorks />
      <div className="section-divider" />
      <Services />
      <Testimonials />
      <FAQ />
      <RegisterCTA />
    </>
  );
}
