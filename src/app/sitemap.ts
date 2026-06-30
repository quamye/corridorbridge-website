import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://corridorbridge.com";
  const now = new Date();

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/platform", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/payments", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/compliance", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/shipment-tracking", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/solutions", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/leadership", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/trust", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/partners", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/security", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/case-studies", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/corridors", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/corridors/africa-canada", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/corridors/ghana-canada", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/corridors/nigeria-canada", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/corridors/kenya-canada", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/industries", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/industries/fintech", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/industries/logistics", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/industries/import-export", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/industries/government", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/industries/financial-institutions", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${base}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}



