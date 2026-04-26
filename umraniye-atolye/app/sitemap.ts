import type { MetadataRoute } from "next";

const BASE = "https://umraniye.kuryeproje.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/atolye",
    "/hizmetler",
    "/hizmetler/canta-kaydi",
    "/hizmetler/canta-degisim",
    "/hizmetler/bakim-servis",
    "/hizmetler/b2b",
    "/hizmetler/proje-analizi",
    "/nasil-calisir",
    "/randevu",
    "/sss",
    "/iletisim",
  ];
  return routes.map((r) => ({
    url: `${BASE}${r}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: r === "" ? 1 : 0.8,
  }));
}
