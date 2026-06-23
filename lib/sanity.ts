// Sanity integration is disabled until NEXT_PUBLIC_SANITY_PROJECT_ID is configured.
// All data is served from lib/data.ts. Swap this file for the Sanity version when ready.
import type { Service, Testimonial, SiteSettings } from "./types";
import { SERVICES, TESTIMONIALS, SITE_SETTINGS } from "./data";

export async function getServices(): Promise<Service[]> {
  return SERVICES;
}

export async function getService(slug: string): Promise<Service | null> {
  return SERVICES.find((s) => s.slug === slug) ?? null;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return TESTIMONIALS;
}

export async function getSiteSettings(): Promise<SiteSettings> {
  return SITE_SETTINGS;
}
