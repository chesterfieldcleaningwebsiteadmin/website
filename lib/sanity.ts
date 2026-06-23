import { createClient } from "next-sanity";
import type { Service, Testimonial, SiteSettings } from "./types";
import { SERVICES, TESTIMONIALS, SITE_SETTINGS } from "./data";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2024-01-01",
      useCdn: true,
      token: process.env.SANITY_API_READ_TOKEN,
    })
  : null;

export async function getServices(): Promise<Service[]> {
  if (!sanityClient) return SERVICES;
  const data = await sanityClient.fetch<Service[]>(
    `*[_type == "service"] | order(displayOrder asc) {
      _id, title, "slug": slug.current, eyebrow, shortBlurb, heroDescription,
      priceType, priceLabel, included, forWho, photoLabel, displayOrder
    }`,
    {},
    { next: { revalidate: 60 } }
  );
  return data?.length ? data : SERVICES;
}

export async function getService(slug: string): Promise<Service | null> {
  if (!sanityClient) {
    return SERVICES.find((s) => s.slug === slug) ?? null;
  }
  const data = await sanityClient.fetch<Service>(
    `*[_type == "service" && slug.current == $slug][0] {
      _id, title, "slug": slug.current, eyebrow, shortBlurb, heroDescription,
      priceType, priceLabel, included, forWho, photoLabel, displayOrder
    }`,
    { slug },
    { next: { revalidate: 60 } }
  );
  return data ?? (SERVICES.find((s) => s.slug === slug) ?? null);
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!sanityClient) return TESTIMONIALS;
  const data = await sanityClient.fetch<Testimonial[]>(
    `*[_type == "testimonial"] | order(displayOrder asc) { _id, quote, name, place, displayOrder }`,
    {},
    { next: { revalidate: 60 } }
  );
  return data?.length ? data : TESTIMONIALS;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!sanityClient) return SITE_SETTINGS;
  const data = await sanityClient.fetch<SiteSettings>(
    `*[_type == "siteSettings"][0] { phone, email, instagramUrl, facebookUrl, footerBlurb, areas, areasIntro }`,
    {},
    { next: { revalidate: 60 } }
  );
  return data ?? SITE_SETTINGS;
}
