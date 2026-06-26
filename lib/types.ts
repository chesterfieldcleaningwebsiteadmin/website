export interface Faq {
  question: string;
  answer: string;
}

export interface Service {
  _id?: string;
  metaTitle?: string;
  metaDescription?: string;
  title: string;
  slug: string;
  shortBlurb: string;
  priceType: "from" | "quote";
  priceLabel: string;
  eyebrow: string;
  heroDescription: string;
  included: string[];
  forWho: { title: string; body: string }[];
  faqs?: Faq[];
  mainImage?: SanityImage;
  photoLabel: string;
  displayOrder: number;
}

export interface Testimonial {
  _id?: string;
  quote: string;
  name: string;
  place: string;
  displayOrder: number;
}

export interface SanityImage {
  _type: 'image'
  asset: { _type: 'reference'; _ref: string }
  hotspot?: { x: number; y: number; height: number; width: number }
  crop?: { top: number; bottom: number; left: number; right: number }
}

export interface GalleryItem {
  image: SanityImage;
  altText: string;
}

export interface BeforeAfterItem {
  label: string;
  beforeImage?: SanityImage | null;
  afterImage?: SanityImage | null;
}

export interface HomePage {
  metaTitle?: string;
  metaDescription?: string;
  heroImage?: SanityImage;
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  trustItems: string[];
  servicesEyebrow?: string;
  servicesHeading?: string;
  servicesSub?: string;
  howEyebrow?: string;
  howHeading?: string;
  howSteps: { title: string; body: string }[];
  whyHeading: string;
  whyPoints: { title: string; body: string }[];
  testimonialsEyebrow?: string;
  testimonialsHeading?: string;
  ctaHeading: string;
  ctaBody: string;
  googleReviewsUrl?: string;
  gallery?: GalleryItem[];
  beforeAfter?: BeforeAfterItem[];
}

export interface ContactPage {
  metaTitle?: string;
  metaDescription?: string;
  heroEyebrow: string;
  heroHeading: string;
  heroSub: string;
  trustItems: string[];
}

export interface PricingPage {
  metaTitle?: string;
  metaDescription?: string;
  heroEyebrow: string;
  heroHeading: string;
  heroSub: string;
  footerNote: string;
}

export interface PrivacyPage {
  metaDescription?: string;
}

export interface CookiesPage {
  metaDescription?: string;
}

export interface AboutPage {
  metaTitle?: string;
  heading: string;
  subheading: string;
  storyHeading: string;
  storyBody: string;
  image?: SanityImage;
  valuesHeading: string;
  metaDescription?: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface InstagramHighlight {
  image: SanityImage;
  caption?: string;
}

export interface SiteSettings {
  phone: string;
  email: string;
  instagramUrl: string;
  facebookUrl: string;
  footerBlurb: string;
  areas: string[];
  areasIntro: string;
  areaPages?: { name: string; slug: { current: string } }[];
  googleRating?: number;
  googleReviewCount?: number;
  googleWriteReviewUrl?: string;
  streetAddress?: string;
  openingHours?: string;
  instagramHighlights?: InstagramHighlight[];
  statsStrip?: {
    show: boolean;
    stats: StatItem[];
  };
}

export interface PriceCalculatorTier {
  label: string;
  minHours: number;
  maxHours: number;
}

export interface PriceCalculatorFrequency {
  label: string;
  discountPct: number;
}

export interface PriceCalculatorSettings {
  show: boolean;
  heading: string;
  subheading?: string;
  hourlyRate: number;
  propertyTiers: PriceCalculatorTier[];
  frequencyOptions: PriceCalculatorFrequency[];
  disclaimer?: string;
  ctaText?: string;
  ctaHref?: string;
}

export interface PromoBanner {
  enabled: boolean;
  text: string;
  linkLabel?: string;
  linkUrl?: string;
}
