import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/utils";
import ServiceDetail from "@/components/sections/ServiceDetail";
import type { Metadata } from "next";

const SLUG = "sisteme-dahil-olun";

export const metadata: Metadata = {
  title: "Sisteme Dahil Olun",
  description: "Çantanızı atölyemize getirin, araç projemize kayıt yaptırın.",
};

export default function Page() {
  const s = getServiceBySlug(SLUG);
  if (!s) notFound();
  return <ServiceDetail service={s} />;
}
