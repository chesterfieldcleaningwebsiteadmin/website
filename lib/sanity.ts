import { createClient } from 'next-sanity'
import type { Service, Testimonial, SiteSettings, HomePage } from './types'
import { SITE_SETTINGS } from './data'

const HOME_PAGE_FALLBACK: HomePage = {
  heroBadge: 'Local · family-run · fully insured',
  heroHeading: 'A little sparkle,\na spotless home.',
  heroSubheading: 'Trusted, insured cleaning for homes and businesses across Chesterfield & Derbyshire — delivered by a friendly, local team you\'ll be happy to give a key to.',
  trustItems: ['Fully insured', 'DBS-checked', 'Local & family-run', '5-star rated'],
  howSteps: [
    { title: 'Get in touch', body: 'Call, message or fill in our quick form — we\'ll get straight back to you, no pressure.' },
    { title: 'We tailor a quote', body: 'We listen to exactly what you need and put together a fair, no-obligation price.' },
    { title: 'We bring the sparkle', body: 'Our insured, DBS-checked team arrives on time and leaves everything gleaming.' },
  ],
  whyHeading: 'The kind of company you\'d hand a key to',
  whyPoints: [
    { title: 'Fully insured & DBS-checked', body: 'Complete peace of mind on every single visit.' },
    { title: 'Local & family-run', body: 'Real people from Chesterfield who genuinely care about your home.' },
    { title: 'Trusted, vetted cleaners', body: 'The same friendly faces you\'ll get to know and rely on.' },
    { title: 'Eco-friendly on request', body: 'Gentle, effective products that are kind to your home and the planet.' },
    { title: 'Flexible scheduling', body: 'We work around your life — not the other way round.' },
    { title: 'Satisfaction guaranteed', body: 'Not perfectly happy? Tell us and we\'ll put it right.' },
  ],
  ctaHeading: 'Ready to come home to a sparkle?',
  ctaBody: 'Get a free, no-obligation quote today. We\'ll tailor a clean that fits your home, your business and your budget.',
}

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
      mainImage,
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
      mainImage,
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

export async function getHomePage(): Promise<HomePage> {
  const result = await client.fetch(`
    *[_type == "homePage"][0] {
      heroImage,
      heroBadge,
      heroHeading,
      heroSubheading,
      trustItems,
      howSteps,
      whyHeading,
      whyPoints,
      ctaHeading,
      ctaBody
    }
  `)
  return result ?? HOME_PAGE_FALLBACK
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
