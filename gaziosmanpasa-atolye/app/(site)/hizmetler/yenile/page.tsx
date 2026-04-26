import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/sections/ServiceDetail";
import { getServiceBySlug } from "@/lib/utils";

const service = getServiceBySlug("yenile");

export const metadata: Metadata = {
  title: service?.navTitle ?? "Hizmet",
  description: service?.longDesc,
};

export default function Page() {
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
