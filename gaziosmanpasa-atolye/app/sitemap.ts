import type { MetadataRoute } from "next";

const BASE = "https://gop.kuryeproje.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/hizmetler",
    "/hizmetler/sisteme-gir",
    "/hizmetler/yenile",
    "/hizmetler/bakimda-tut",
    "/hizmetler/hesabi-gor",
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
