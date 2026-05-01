import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceDetail from "@/components/sections/ServiceDetail";
import { WORKSHOP } from "@/lib/constants";
import { getServiceBySlug } from "@/lib/utils";

export function generateStaticParams() {
  return WORKSHOP.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.pageTitle} | GOP Atölye`,
    description: service.longDesc,
    openGraph: { title: service.pageTitle, description: service.longDesc },
    alternates: { canonical: `https://gop.kuryeproje.com/hizmetler/${slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();
  return <ServiceDetail service={service} />;
}
