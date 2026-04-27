import Hero from "@/components/sections/Hero";
import EditorialQuote from "@/components/sections/EditorialQuote";
import About from "@/components/sections/About";
import StatsRow from "@/components/sections/StatsRow";
import Services from "@/components/sections/Services";
import ForestPull from "@/components/sections/ForestPull";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Location from "@/components/sections/Location";
import CTA from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <EditorialQuote />
      <About />
      <StatsRow />
      <Services />
      <ForestPull />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Location />
      <CTA />
    </>
  );
}
