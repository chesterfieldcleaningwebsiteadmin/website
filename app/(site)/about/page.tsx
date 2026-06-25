import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import TrustStrip from "@/components/TrustStrip";
import CtaBand from "@/components/CtaBand";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import { getAboutPage, getHomePage } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImage";
import styles from "./about.module.css";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const about = await getAboutPage();
  return {
    title: { absolute: "About Us | Chesterfield Cleaning Fairies" },
    description:
      about.metaDescription ??
      "Meet the local team behind Chesterfield Cleaning Fairies. Fully insured, DBS-checked and passionate about delivering a genuinely great clean across Chesterfield & Derbyshire.",
  };
}

export default async function AboutPage() {
  const [about, home] = await Promise.all([getAboutPage(), getHomePage()]);

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
            <span>About us</span>
          </nav>
          <span className={styles.eyebrow}>About us</span>
          <h1 className={styles.heroHeading}>{about.heading}</h1>
          <p className={styles.heroSub}>{about.subheading}</p>
        </div>
      </section>

      {/* Trust strip */}
      <TrustStrip items={home.trustItems} />

      {/* Story */}
      <section className={styles.story}>
        <div className={styles.storyInner}>
          <div className={styles.storyText}>
            <h2 className={styles.storyHeading}>{about.storyHeading}</h2>
            {about.storyBody.split("\n\n").map((para, i) => (
              <p key={i} className={styles.storyPara}>
                {para}
              </p>
            ))}
            <Link href="/contact" className={styles.storyCta}>
              Get a free quote
              <svg
                viewBox="0 0 24 24"
                width="15"
                height="15"
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
          </div>

          {about.image && (
            <div className={styles.storyImageWrap}>
              <Image
                src={urlFor(about.image).width(600).height(480).url()}
                alt="The Chesterfield Cleaning Fairies team"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 900px) 0px, 42vw"
              />
            </div>
          )}
        </div>
      </section>

      {/* Values */}
      <WhyChooseUs
        heading={about.valuesHeading}
        points={home.whyPoints}
      />

      <CtaBand heading={home.ctaHeading} body={home.ctaBody} />
    </main>
  );
}
