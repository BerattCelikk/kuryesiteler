import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/utils";
import ServiceDetail from "@/components/sections/ServiceDetail";
import type { Metadata } from "next";

const SLUG = "bakim-onarim";
export const metadata: Metadata = { title: "Bakım & Onarım", description: "Düzenli bakım ve onarım hizmetleri." };

export default function Page() {
  const s = getServiceBySlug(SLUG);
  if (!s) notFound();
  return <ServiceDetail service={s} />;
}
