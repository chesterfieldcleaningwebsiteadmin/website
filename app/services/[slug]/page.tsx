import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import Image from "next/image";
import { getServices, getService, getHomePage } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";
import styles from "./service.module.css";

export const revalidate = 60;

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const svc = await getService(slug);
  if (!svc) return {};
  return {
    title: `${svc.title} | Chesterfield Cleaning Fairies`,
    description: svc.heroDescription,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [svc, allServices, home] = await Promise.all([
    getService(slug),
    getServices(),
    getHomePage(),
  ]);

  if (!svc) notFound();

  const others = allServices
    .filter((s) => s.slug !== slug)
    .slice(0, 4);

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
          {/* Breadcrumb */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/#services">Services</Link>
            <span>/</span>
            <span className={styles.breadcrumbCurrent}>{svc.title}</span>
          </nav>

          <div className={styles.heroGrid}>
            <div>
              <span className={styles.eyebrow}>{svc.eyebrow}</span>
              <h1 className={styles.heroHeading}>{svc.title}</h1>
              <p className={styles.heroSub}>{svc.heroDescription}</p>
              <div className={styles.heroPriceRow}>
                {svc.priceType === "from" ? (
                  <span className={styles.fromBadge}>
                    From <span className={styles.fromPrice}>{svc.priceLabel}</span>
                  </span>
                ) : (
                  <span className={styles.quoteBadge}>Tailored quote</span>
                )}
                <Link href="/contact" className={styles.heroCtaBtn}>
                  Get quote
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                    <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className={styles.heroPhoto}>
              {svc.mainImage ? (
                <Image
                  src={urlFor(svc.mainImage).width(600).height(480).url()}
                  alt={svc.title}
                  fill
                  sizes="(max-width: 900px) 0px, 40vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              ) : (
                <span className={styles.photoLabel}>
                  [ photo: {svc.photoLabel} ]
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <TrustStrip items={home.trustItems} />

      {/* Included + Sidebar */}
      <section className={styles.body}>
        <div className={styles.bodyInner}>
          <div>
            {/* Included list */}
            <span className={styles.sectionEyebrow}>What&rsquo;s included</span>
            <h2 className={styles.sectionHeading}>Everything taken care of</h2>
            <p className={styles.sectionSub}>
              A typical visit covers the essentials below — and we&rsquo;ll
              happily tailor the checklist to your home or workspace.
            </p>
            <div className={styles.includedGrid}>
              {svc.included.map((inc) => (
                <div key={inc} className={styles.includedItem}>
                  <span className={styles.includedTick} aria-hidden="true">
                    <svg viewBox="0 0 20 20" width="13" height="13">
                      <path d="M4 10.5l3.5 3.5L16 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className={styles.includedLabel}>{inc}</span>
                </div>
              ))}
            </div>

            {/* For who */}
            <h2 className={styles.forWhoHeading}>Who it&rsquo;s for</h2>
            <div className={styles.forWhoGrid}>
              {svc.forWho.map((fw) => (
                <div key={fw.title} className={styles.forWhoCard}>
                  <span className={styles.forWhoIcon} aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="22" height="22">
                      <path d="M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z" fill="currentColor" />
                    </svg>
                  </span>
                  <h3 className={styles.forWhoTitle}>{fw.title}</h3>
                  <p className={styles.forWhoBody}>{fw.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing sidebar */}
          <aside className={styles.sidebar}>
            {svc.priceType === "from" && (
              <div className={styles.pricingCard}>
                <span className={styles.pricingEyebrow}>Guide price</span>
                <div className={styles.pricingAmount}>
                  From {svc.priceLabel}
                </div>
                <p className={styles.pricingNote}>
                  Final price depends on the size of the space, frequency and
                  any extras — we&rsquo;ll confirm it all in your free quote.
                </p>
                <Link href="/contact" className={styles.pricingBtn}>
                  Get this price
                </Link>
              </div>
            )}
            <div className={styles.quoteCard}>
              <span className={styles.quoteCardEyebrow}>
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                  <path d="M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z" fill="currentColor" />
                </svg>
                {svc.priceType === "quote" ? "Get a tailored price" : "Larger or bespoke job?"}
              </span>
              <h3 className={styles.quoteCardHeading}>Prefer a fixed quote?</h3>
              <p className={styles.quoteCardBody}>
                For offices, regular contracts and one-off projects we&rsquo;ll
                put together a tailored, no-obligation price just for you.
              </p>
              <Link href="/contact" className={styles.quoteCardBtn}>
                Request a tailored quote
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Other services */}
      {others.length > 0 && (
        <section className={styles.others}>
          <div className={styles.othersInner}>
            <h2 className={styles.othersHeading}>Explore our other services</h2>
            <div className={styles.othersGrid}>
              {others.map((o) => (
                <Link key={o.slug} href={`/services/${o.slug}`} className={styles.otherCard}>
                  {o.title}
                  <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" className={styles.otherArrow}>
                    <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        heading="Let's get your quote started"
        body="Tell us what you need and we'll tailor a fair price — no pressure, no obligation."
      />
    </main>
  );
}
