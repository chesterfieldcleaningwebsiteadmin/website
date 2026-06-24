import { createClient } from 'next-sanity'
import type { Service, Testimonial, SiteSettings } from './types'
import { SITE_SETTINGS } from './data'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
})

export async function getServices(): Promise<Service[]> {
  return client.fetch(`
    *[_type == "service"] | order(displayOrder asc) {
      _id,
      title,
      "slug": slug.current,
      eyebrow,
      shortBlurb,
      heroDescription,
      priceType,
      priceLabel,
      included,
      forWho,
      photoLabel,
      displayOrder
    }
  `)
}

export async function getService(slug: string): Promise<Service | null> {
  return client.fetch(`
    *[_type == "service" && slug.current == $slug][0] {
      _id,
      title,
      "slug": slug.current,
      eyebrow,
      shortBlurb,
      heroDescription,
      priceType,
      priceLabel,
      included,
      forWho,
      photoLabel,
      displayOrder
    }
  `, { slug })
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return client.fetch(`
    *[_type == "testimonial"] | order(displayOrder asc) {
      _id,
      quote,
      name,
      place,
      displayOrder
    }
  `)
}

export async function getSiteSettings(): Promise<SiteSettings> {
  const result = await client.fetch(`
    *[_type == "siteSettings"][0] {
      phone,
      email,
      instagramUrl,
      facebookUrl,
      footerBlurb,
      areas,
      areasIntro
    }
  `)
  return result ?? SITE_SETTINGS
}
