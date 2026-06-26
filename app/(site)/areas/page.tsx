import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import { getSiteSettings, getHomePage } from "@/lib/sanity";
import styles from "./areas.module.css";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: { absolute: "House Cleaning Areas | Chesterfield & Derbyshire" },
    description:
      "Chesterfield Cleaning Fairies covers Chesterfield and surrounding Derbyshire towns — Dronfield, Staveley, Clay Cross, Wingerworth and more. Free local quotes.",
  };
}

export default async function AreasPage() {
  const [settings, home] = await Promise.all([getSiteSettings(), getHomePage()]);
  const areaPages = settings.areaPages ?? [];

  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Areas</span>
          </nav>
          <span className={styles.eyebrow}>Coverage</span>
          <h1 className={styles.heroHeading}>Areas we clean</h1>
          <p className={styles.heroSub}>
            We cover Chesterfield and surrounding Derbyshire towns and villages. Click your area for local details and a free quote.
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.inner}>
          {areaPages.length > 0 ? (
            <div className={styles.grid}>
              {areaPages.map((area) => (
                <Link
                  key={area.slug.current}
                  href={`/areas/${area.slug.current}`}
                  className={styles.card}
                >
                  {area.name}
                  <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
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
              ))}
            </div>
          ) : (
            <p className={styles.fallback}>
              We cover Chesterfield and the surrounding Derbyshire villages.{" "}
              <Link href="/contact">Contact us</Link> to check if we reach you — we&apos;re always happy to help.
            </p>
          )}
        </div>
      </section>

      <CtaBand heading={home.ctaHeading} body={home.ctaBody} />
    </main>
  );
}
