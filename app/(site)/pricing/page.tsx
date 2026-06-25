import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { getServices, getHomePage, getPricingPage } from "@/lib/sanity";
import styles from "./pricing.module.css";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const pricing = await getPricingPage();
  return {
    title: "Pricing | Chesterfield Cleaning Fairies",
    description:
      pricing.metaDescription ??
      "Transparent pricing for domestic, commercial and specialist cleaning across Chesterfield & Derbyshire. Starting from £15/hr — get a free, no-obligation quote today.",
  };
}

export default async function PricingPage() {
  const [services, home, pricing] = await Promise.all([
    getServices(),
    getHomePage(),
    getPricingPage(),
  ]);

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
          className={styles.heroSparkle}
        >
          <path
            d="M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z"
            fill="currentColor"
          />
        </svg>
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Pricing</span>
          </nav>
          <span className={styles.eyebrow}>{pricing.heroEyebrow}</span>
          <h1 className={styles.heroHeading}>{pricing.heroHeading}</h1>
          <p className={styles.heroSub}>{pricing.heroSub}</p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className={styles.body}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            {services.map((svc) => (
              <div key={svc.slug} className={styles.card}>
                <span className={styles.cardEyebrow}>{svc.eyebrow}</span>
                <h2 className={styles.cardTitle}>{svc.title}</h2>

                {svc.priceType === "from" ? (
                  <div className={styles.priceBlock}>
                    <span className={styles.fromLabel}>From</span>
                    <span className={styles.price}>{svc.priceLabel}</span>
                  </div>
                ) : (
                  <div className={styles.priceBlock}>
                    <span className={styles.price}>{svc.priceLabel}</span>
                  </div>
                )}

                <ul className={styles.included}>
                  {svc.included.slice(0, 4).map((item) => (
                    <li key={item} className={styles.includedItem}>
                      <span className={styles.tick} aria-hidden="true">
                        <svg viewBox="0 0 20 20" width="14" height="14">
                          <path
                            d="M4 10.5l3.5 3.5L16 6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                  {svc.included.length > 4 && (
                    <li className={styles.moreItems}>
                      +{svc.included.length - 4} more inclusions
                    </li>
                  )}
                </ul>

                <div className={styles.cardActions}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className={styles.detailsLink}
                  >
                    Full details
                    <svg
                      viewBox="0 0 24 24"
                      width="14"
                      height="14"
                      aria-hidden="true"
                    >
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
                  <Link href="/contact" className={styles.quoteBtn}>
                    Get quote
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className={styles.note}>{pricing.footerNote}</p>
        </div>
      </section>

      <CtaBand heading={home.ctaHeading} body={home.ctaBody} />
    </main>
  );
}
