import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import { getSiteSettings, getServices, getHomePage } from "@/lib/sanity";
import styles from "./area.module.css";

export const revalidate = 60;

const BASE_URL = "https://www.chesterfieldcleaningfairies.co.uk";

export async function generateStaticParams() {
  const settings = await getSiteSettings();
  return (settings.areaPages ?? []).map((a) => ({ slug: a.slug.current }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const settings = await getSiteSettings();
  const area = (settings.areaPages ?? []).find((a) => a.slug.current === slug);
  if (!area) return {};

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Chesterfield Cleaning Fairies",
      url: `${BASE_URL}/areas/${slug}`,
      telephone: "+447369255360",
      areaServed: { "@type": "City", name: area.name },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Areas", item: `${BASE_URL}/areas` },
        { "@type": "ListItem", position: 3, name: area.name },
      ],
    },
  ];

  return {
    title: { absolute: `Cleaning Services in ${area.name} | Chesterfield Cleaning Fairies` },
    description: `Professional, insured cleaning for homes and businesses in ${area.name}, Derbyshire. Same-day quotes — friendly local team from Chesterfield.`,
    other: { "application/ld+json": JSON.stringify(schemas) },
  };
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [settings, services, home] = await Promise.all([
    getSiteSettings(),
    getServices(),
    getHomePage(),
  ]);

  const area = (settings.areaPages ?? []).find((a) => a.slug.current === slug);
  if (!area) notFound();

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/areas">Areas</Link>
            <span>/</span>
            <span>{area.name}</span>
          </nav>
          <span className={styles.eyebrow}>Local cleaning</span>
          <h1 className={styles.heroHeading}>Cleaning Services in {area.name}</h1>
          <p className={styles.heroSub}>
            Professional, insured cleaning for homes and businesses in {area.name} — delivered by a friendly local team based in Chesterfield.
          </p>
          <Link href="/contact" className={styles.heroCtaBtn}>
            Get a free quote
            <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
              <path
                d="M5 12h13M13 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>

      <TrustStrip items={home.trustItems} />

      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <span className={styles.sectionEyebrow}>What we offer</span>
          <h2 className={styles.sectionHeading}>Services available in {area.name}</h2>
          <div className={styles.servicesGrid}>
            {services.map((svc) => (
              <Link key={svc.slug} href={`/services/${svc.slug}`} className={styles.serviceCard}>
                <span className={styles.serviceEyebrow}>{svc.eyebrow}</span>
                <h3 className={styles.serviceTitle}>{svc.title}</h3>
                <p className={styles.serviceBlurb}>{svc.shortBlurb}</p>
                <span className={styles.serviceLink}>
                  Learn more
                  <svg viewBox="0 0 24 24" width="12" height="12" aria-hidden="true">
                    <path
                      d="M5 12h13M13 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading={`Ready for a spotless ${area.name} home?`}
        body="Tell us what you need — we'll get straight back to you with a fair, no-obligation quote."
      />
    </main>
  );
}
