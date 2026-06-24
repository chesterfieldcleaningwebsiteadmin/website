import Link from "next/link";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/TrustStrip";
import StatsStrip from "@/components/StatsStrip";
import ServicesGrid from "@/components/home/ServicesGrid";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Areas from "@/components/home/Areas";
import Testimonials from "@/components/home/Testimonials";
import Gallery from "@/components/home/Gallery";
import BeforeAfterGallery from "@/components/home/BeforeAfterGallery";
import CtaBand from "@/components/CtaBand";
import { getServices, getTestimonials, getSiteSettings, getHomePage } from "@/lib/sanity";

export const revalidate = 60;

export default async function HomePage() {
  const [services, testimonials, settings, home] = await Promise.all([
    getServices(),
    getTestimonials(),
    getSiteSettings(),
    getHomePage(),
  ]);

  const statsItems = settings.statsStrip?.show !== false ? (settings.statsStrip?.stats ?? []) : [];

  return (
    <>
      <main>
        <Hero
          badge={home.heroBadge}
          heading={home.heroHeading}
          subheading={home.heroSubheading}
          heroImage={home.heroImage}
        />
        {statsItems.length > 0 && <StatsStrip stats={statsItems} />}
        <TrustStrip items={home.trustItems} />
        <ServicesGrid services={services} />
        <HowItWorks steps={home.howSteps} />
        <WhyChooseUs heading={home.whyHeading} points={home.whyPoints} />
        <Areas areas={settings.areas} areasIntro={settings.areasIntro} />
        <Testimonials testimonials={testimonials} googleReviewsUrl={home.googleReviewsUrl} />
        {home.gallery?.length ? <Gallery items={home.gallery} /> : null}
        <BeforeAfterGallery items={home.beforeAfter ?? []} />
        <CtaBand heading={home.ctaHeading} body={home.ctaBody} />
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
