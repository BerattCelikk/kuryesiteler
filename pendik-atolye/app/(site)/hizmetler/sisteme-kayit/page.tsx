import { notFound } from "next/navigation";
import { ServiceDetailLayout } from "@/components/sections/ServiceDetailLayout";
import { getServiceBySlug } from "@/lib/utils";

const SLUG = "sisteme-kayit";
export const metadata = { title: getServiceBySlug(SLUG)?.pageTitle ?? "Hizmet" };

export default function Page() {
  const service = getServiceBySlug(SLUG);
  if (!service) notFound();
  return <ServiceDetailLayout service={service} />;
}
