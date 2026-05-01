import type { MetadataRoute } from "next";
import { WORKSHOP } from "@/lib/constants";

const BASE = "https://gop.kuryeproje.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  // Service slugs are derived from constants so adding a new service in WORKSHOP.services flows here automatically.
  const serviceRoutes = WORKSHOP.services.map((s) => `/hizmetler/${s.slug}`);
  const routes = [
    "",
    "/hizmetler",
    ...serviceRoutes,
    "/filonu-yonet",
    "/nasil-calisir",
    "/randevu",
    "/aklindaki-sorular",
    "/rotani-bul",
  ];
  return routes.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: r === "" ? 1 : r.startsWith("/hizmetler/") ? 0.7 : 0.8,
  }));
}
