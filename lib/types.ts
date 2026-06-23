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
  photoLabel: string;
  tileBg: string;
  tileFg: string;
  displayOrder: number;
}

export interface Testimonial {
  _id?: string;
  quote: string;
  name: string;
  place: string;
  displayOrder: number;
}

export interface SiteSettings {
  phone: string;
  email: string;
  instagramUrl: string;
  facebookUrl: string;
  footerBlurb: string;
  areas: string[];
  areasIntro: string;
}
