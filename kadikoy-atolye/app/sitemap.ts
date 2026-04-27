import type { MetadataRoute } from "next";
import { WORKSHOP } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kadikoy.kuryeproje.com";
  const now = new Date();
  const fixed = [
    "",
    "/nasil-calisir",
    "/atolye",
    "/merak-ettikleriniz",
    "/iletisim",
    "/randevu",
    "/kurumsal-program",
  ];
  const services = WORKSHOP.services.map((s) => `/hizmetler/${s.slug}`);
  return [...fixed, ...services].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
