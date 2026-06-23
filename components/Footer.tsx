import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

const services = [
  { label: "Regular domestic cleaning", slug: "regular-domestic-cleaning" },
  { label: "One-off & deep cleans", slug: "one-off-deep-cleans" },
  { label: "End-of-tenancy cleaning", slug: "end-of-tenancy-cleaning" },
  { label: "Commercial & office", slug: "commercial-office-cleaning" },
  { label: "Airbnb changeovers", slug: "airbnb-holiday-let-changeovers" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        {/* Brand column */}
        <div>
          <div className={styles.brand}>
            <span className={styles.logoDisc}>
              <Image
                src="/images/logo.jpg"
                alt="Chesterfield Cleaning Fairies logo"
                fill
                sizes="50px"
                style={{ objectFit: "cover" }}
              />
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandSub}>Chesterfield</span>
              <span className={styles.brandName}>Cleaning Fairies</span>
            </span>
          </div>
          <p className={styles.blurb}>
            A local, family-run cleaning team bringing a little sparkle to
            homes and businesses across Chesterfield &amp; Derbyshire.
          </p>
          <div className={styles.socials}>
            <a
              href="https://www.instagram.com/chesterfieldcleaningfairies/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className={styles.socialBtn}
            >
              <svg
                viewBox="0 0 24 24"
                width="19"
                height="19"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1.2"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/people/Chesterfield-cleaning-fairies/61556004656005/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={styles.socialBtn}
            >
              <svg
                viewBox="0 0 24 24"
                width="19"
                height="19"
                aria-hidden="true"
                fill="currentColor"
              >
                <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.4V5.5c-.2 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5v1.9H8.5V14h2.3v7h2.7Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Get in touch */}
        <div>
          <h4 className={styles.colHeading}>Get in touch</h4>
          <a href="tel:+447369255360" className={styles.contactLink}>
            07369 255360
          </a>
          <a
            href="mailto:Chesterfieldcleaningfairies@gmail.com"
            className={styles.contactLink}
          >
            Chesterfieldcleaningfairies@gmail.com
          </a>
          <Link href="/contact" className={styles.quoteLink}>
            Request a quote
            <svg
              viewBox="0 0 24 24"
              width="13"
              height="13"
              aria-hidden="true"
            >
              <path
                d="M5 12h13M13 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Services */}
        <div>
          <h4 className={styles.colHeading}>Services</h4>
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={styles.serviceLink}
            >
              {s.label}
            </Link>
          ))}
        </div>

        {/* Areas */}
        <div>
          <h4 className={styles.colHeading}>Areas we cover</h4>
          <p className={styles.areasText}>
            Chesterfield, Brampton, Walton, Hasland, Brimington, Wingerworth,
            Dronfield, Staveley, Clay Cross &amp; surrounding Derbyshire
            villages.
          </p>
        </div>
      </div>

      <div className={styles.bar}>
        <span>
          © 2026 Chesterfield Cleaning Fairies. Fully insured · DBS-checked.
        </span>
        <span>Made with a little magic ✦</span>
      </div>
    </footer>
  );
}
