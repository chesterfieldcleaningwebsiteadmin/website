import { createClient } from 'next-sanity'
import type { Service, Testimonial, SiteSettings, HomePage, PromoBanner, AboutPage, ContactPage, PricingPage, PrivacyPage, CookiesPage } from './types'
import { SITE_SETTINGS, TESTIMONIALS, SERVICES, ABOUT_PAGE, CONTACT_PAGE, PRICING_PAGE, PRIVACY_PAGE, COOKIES_PAGE } from './data'

const HOME_PAGE_FALLBACK: HomePage = {
  heroBadge: '',
  heroHeading: 'A little sparkle,\na spotless home.',
  heroSubheading: 'Trusted, insured cleaning for homes and businesses across Chesterfield & Derbyshire — delivered by a friendly, local team you\'ll be happy to give a key to.',
  trustItems: ['Fully insured', 'DBS-checked', 'Local & trusted', '5-star rated'],
  servicesEyebrow: 'What we do',
  servicesHeading: 'Cleaning, tailored to you',
  servicesSub: 'From a regular sparkle to a one-off deep clean, we look after homes and businesses alike — with the same care and attention every visit.',
  howEyebrow: 'Simple from the start',
  howHeading: 'How it works',
  howSteps: [
    { title: 'Get in touch', body: 'Call, message or fill in our quick form — we\'ll get straight back to you, no pressure.' },
    { title: 'We tailor a quote', body: 'We listen to exactly what you need and put together a fair, no-obligation price.' },
    { title: 'We bring the sparkle', body: 'Our insured, DBS-checked fairies arrive on time and leave everything gleaming.' },
  ],
  whyHeading: 'The kind of company you\'d hand a key to',
  whyPoints: [
    { title: 'Fully insured & DBS-checked', body: 'Complete peace of mind on every single visit.' },
    { title: 'Local & trusted', body: 'Real people from Chesterfield who genuinely care about your home.' },
    { title: 'Trusted, vetted cleaners', body: 'The same friendly fairies you\'ll get to know and rely on.' },
    { title: 'Eco-friendly on request', body: 'Gentle, effective products that are kind to your home and the planet.' },
    { title: 'Flexible scheduling', body: 'We work around your life — not the other way round.' },
    { title: 'Satisfaction guaranteed', body: 'Not perfectly happy? Tell us and we\'ll put it right.' },
  ],
  testimonialsEyebrow: 'Kind words ♥',
  testimonialsHeading: 'Loved by local homes & businesses',
  ctaHeading: 'Ready to come home to a sparkle?',
  ctaBody: 'Get a free, no-obligation quote today. We\'ll tailor a clean that fits your home, your business and your budget.',
  beforeAfter: [
    { label: 'Kitchen deep clean', beforeImage: null, afterImage: null },
    { label: 'Bathroom refresh', beforeImage: null, afterImage: null },
  ],
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_READ_TOKEN,
})

export async function getServices(): Promise<Service[]> {
  try {
    const result = await client.fetch(`
      *[_type == "service"] | order(displayOrder asc) {
        _id,
        metaTitle,
        title,
        "slug": slug.current,
        eyebrow,
        shortBlurb,
        heroDescription,
        priceType,
        priceLabel,
        included,
        forWho,
        faqs,
        mainImage,
        photoLabel,
        displayOrder
      }
    `)
    return result?.length ? result : SERVICES
  } catch {
    return SERVICES
  }
}

export async function getService(slug: string): Promise<Service | null> {
  try {
    const result = await client.fetch(`
      *[_type == "service" && slug.current == $slug][0] {
        _id,
        metaTitle,
        title,
        "slug": slug.current,
        eyebrow,
        shortBlurb,
        heroDescription,
        priceType,
        priceLabel,
        included,
        forWho,
        faqs,
        mainImage,
        photoLabel,
        displayOrder
      }
    `, { slug })
    return result ?? SERVICES.find(s => s.slug === slug) ?? null
  } catch {
    return SERVICES.find(s => s.slug === slug) ?? null
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const result = await client.fetch(`
      *[_type == "testimonial"] | order(displayOrder asc) {
        _id,
        quote,
        name,
        place,
        displayOrder
      }
    `)
    return result?.length ? result : TESTIMONIALS
  } catch {
    return TESTIMONIALS
  }
}

export async function getHomePage(): Promise<HomePage> {
  try {
    const result = await client.fetch(`
      *[_type == "homePage"][0] {
        metaTitle,
        metaDescription,
        heroImage,
        heroBadge,
        heroHeading,
        heroSubheading,
        trustItems,
        servicesEyebrow,
        servicesHeading,
        servicesSub,
        howEyebrow,
        howHeading,
        howSteps,
        whyHeading,
        whyPoints,
        testimonialsEyebrow,
        testimonialsHeading,
        ctaHeading,
        ctaBody,
        googleReviewsUrl,
        gallery[] {
          image,
          altText
        },
        beforeAfter[] {
          label,
          beforeImage,
          afterImage
        }
      }
    `)
    return result ?? HOME_PAGE_FALLBACK
  } catch {
    return HOME_PAGE_FALLBACK
  }
}

export async function getAboutPage(): Promise<AboutPage> {
  try {
    const result = await client.fetch(`
      *[_type == "aboutPage"][0] {
        metaTitle,
        metaDescription,
        heading,
        subheading,
        storyHeading,
        storyBody,
        image,
        valuesHeading
      }
    `)
    return result ?? ABOUT_PAGE
  } catch {
    return ABOUT_PAGE
  }
}

export async function getSiteSettings(): Promise<SiteSettings> {
  try {
    const result = await client.fetch(`
      *[_type == "siteSettings"][0] {
        phone,
        email,
        instagramUrl,
        facebookUrl,
        footerBlurb,
        areas,
        areasIntro,
        areaPages[]{ name, slug },
        googleRating,
        googleReviewCount,
        streetAddress,
        openingHours,
        instagramHighlights[]{ image, caption },
        statsStrip {
          show,
          stats[] {
            value,
            label
          }
        }
      }
    `)
    return result ?? SITE_SETTINGS
  } catch {
    return SITE_SETTINGS
  }
}

export async function getContactPage(): Promise<ContactPage> {
  try {
    const result = await client.fetch(`
      *[_type == "contactPage"][0] {
        metaTitle,
        metaDescription,
        heroEyebrow,
        heroHeading,
        heroSub,
        trustItems
      }
    `)
    return result ?? CONTACT_PAGE
  } catch {
    return CONTACT_PAGE
  }
}

export async function getPricingPage(): Promise<PricingPage> {
  try {
    const result = await client.fetch(`
      *[_type == "pricingPage"][0] {
        metaTitle,
        metaDescription,
        heroEyebrow,
        heroHeading,
        heroSub,
        footerNote
      }
    `)
    return result ?? PRICING_PAGE
  } catch {
    return PRICING_PAGE
  }
}

export async function getPrivacyPage(): Promise<PrivacyPage> {
  try {
    const result = await client.fetch(`
      *[_type == "privacyPage"][0] { metaDescription }
    `)
    return result ?? PRIVACY_PAGE
  } catch {
    return PRIVACY_PAGE
  }
}

export async function getCookiesPage(): Promise<CookiesPage> {
  try {
    const result = await client.fetch(`
      *[_type == "cookiesPage"][0] { metaDescription }
    `)
    return result ?? COOKIES_PAGE
  } catch {
    return COOKIES_PAGE
  }
}

export async function getPromoBanner(): Promise<PromoBanner | null> {
  try {
    const result = await client.fetch(`
      *[_type == "promoBanner"][0] {
        enabled,
        text,
        linkLabel,
        linkUrl
      }
    `)
    return result ?? null
  } catch {
    return null
  }
}
