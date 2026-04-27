import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/utils";
import ServiceDetail from "@/components/sections/ServiceDetail";
import type { Metadata } from "next";

const SLUG = "danismanlik";
export const metadata: Metadata = { title: "Danışmanlık", description: "Kazanç analizi ve plan karşılaştırması." };

export default function Page() {
  const s = getServiceBySlug(SLUG);
  if (!s) notFound();
  return <ServiceDetail service={s} />;
}
