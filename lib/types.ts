export interface Faq {
  question: string;
  answer: string;
}

export interface Service {
  _id?: string;
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
  heroImage?: SanityImage;
  heroBadge: string;
  heroHeading: string;
  heroSubheading: string;
  trustItems: string[];
  howSteps: { title: string; body: string }[];
  whyHeading: string;
  whyPoints: { title: string; body: string }[];
  ctaHeading: string;
  ctaBody: string;
  googleReviewsUrl?: string;
  gallery?: GalleryItem[];
  beforeAfter?: BeforeAfterItem[];
}

export interface AboutPage {
  heading: string;
  subheading: string;
  storyHeading: string;
  storyBody: string;
  image?: SanityImage;
  valuesHeading: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SiteSettings {
  phone: string;
  email: string;
  instagramUrl: string;
  facebookUrl: string;
  footerBlurb: string;
  areas: string[];
  areasIntro: string;
  statsStrip?: {
    show: boolean;
    stats: StatItem[];
  };
}

export interface PromoBanner {
  enabled: boolean;
  text: string;
  linkLabel?: string;
  linkUrl?: string;
}
