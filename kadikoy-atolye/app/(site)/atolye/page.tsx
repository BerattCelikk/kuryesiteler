import type { Metadata } from "next";
import PageHeader from "@/components/editorial/PageHeader";
import About from "@/components/sections/About";
import StatsRow from "@/components/sections/StatsRow";
import Location from "@/components/sections/Location";
import Testimonials from "@/components/sections/Testimonials";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Atölye",
  description: "Kadıköy atölyemizin hikayesi, ekibi ve konumu.",
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Atölye · Kadıköy"
        title="Bir Atölyeden Fazlası"
        subtitle="Kadıköy'ün kalbinde, kuryelerimizin günlük yolculuklarına eşlik eden bir adres."
        page="No. 04"
      />
      <About />
      <StatsRow />
      <Location />
      <Testimonials />
      <CTA />
    </>
  );
}
