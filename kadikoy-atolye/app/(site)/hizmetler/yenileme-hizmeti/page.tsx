import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/utils";
import ServiceDetail from "@/components/sections/ServiceDetail";
import type { Metadata } from "next";

const SLUG = "yenileme-hizmeti";

export const metadata: Metadata = {
  title: "Yenileme Hizmeti",
  description: "Çantanızın ömrü dolduğunda kesintisiz devam etmek için yenileme.",
};

export default function Page() {
  const s = getServiceBySlug(SLUG);
  if (!s) notFound();
  return <ServiceDetail service={s} />;
}
