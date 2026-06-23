import type { MetadataRoute } from "next";
import { getServices } from "@/lib/sanity";

const BASE_URL = "https://www.chesterfieldcleaningfairies.co.uk";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const services = await getServices();

  const serviceRoutes = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...serviceRoutes,
  ];
}
