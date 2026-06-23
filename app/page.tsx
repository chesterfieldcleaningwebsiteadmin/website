import Link from "next/link";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Areas from "@/components/home/Areas";
import Testimonials from "@/components/home/Testimonials";
import CtaBand from "@/components/CtaBand";
import { getServices, getTestimonials, getSiteSettings } from "@/lib/sanity";

export const revalidate = 60;

export default async function HomePage() {
  const [services, testimonials, settings] = await Promise.all([
    getServices(),
    getTestimonials(),
    getSiteSettings(),
  ]);

  return (
    <>
      <main>
        <Hero />
        <TrustStrip />
        <ServicesGrid services={services} />
        <HowItWorks />
        <WhyChooseUs />
        <Areas areas={settings.areas} areasIntro={settings.areasIntro} />
        <Testimonials testimonials={testimonials} />
        <CtaBand />
      </main>

      {/* Mobile floating quote button */}
      <Link href="/contact" className="mobileQuoteBtn" aria-label="Get a quote">
        <svg
          viewBox="0 0 24 24"
          width="17"
          height="17"
          aria-hidden="true"
          style={{ color: "var(--gold-soft)" }}
        >
          <path
            d="M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z"
            fill="currentColor"
          />
        </svg>
        Get quote
      </Link>
    </>
  );
}
