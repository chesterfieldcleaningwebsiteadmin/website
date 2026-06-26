import Link from "next/link";
import Image from "next/image";
import { getSiteSettings, getServices } from "@/lib/sanity";
import CookieSettingsButton from "./CookieSettingsButton";
import styles from "./Footer.module.css";

export default async function Footer() {
  const [settings, services] = await Promise.all([
    getSiteSettings(),
    getServices(),
  ]);

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
          <p className={styles.blurb}>{settings.footerBlurb}</p>
          <div className={styles.socials}>
            <a
              href={settings.instagramUrl}
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
                <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href={settings.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className={styles.socialBtn}
            >
              <svg viewBox="0 0 24 24" width="19" height="19" aria-hidden="true" fill="currentColor">
                <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.4V5.5c-.2 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5v1.9H8.5V14h2.3v7h2.7Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Get in touch */}
        <div>
          <h4 className={styles.colHeading}>Get in touch</h4>
          <a href={`tel:+44${settings.phone.replace(/^0/, "").replace(/\s/g, "")}`} className={styles.contactLink}>
            {settings.phone}
          </a>
          <a href={`mailto:${settings.email}`} className={styles.contactLink}>
            {settings.email}
          </a>
          <Link href="/contact" className={styles.quoteLink}>
            Request a quote
            <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
              <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Services */}
        <div>
          <h4 className={styles.colHeading}>Services</h4>
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className={styles.serviceLink}>
              {s.title}
            </Link>
          ))}
          <Link href="/pricing" className={`${styles.serviceLink} ${styles.pricingLink}`}>
            Pricing guide
          </Link>
        </div>

        {/* Quick links */}
        <div>
          <h4 className={styles.colHeading}>Company</h4>
          <Link href="/about" className={styles.serviceLink}>About us</Link>
          <Link href="/contact" className={styles.serviceLink}>Contact</Link>
          <Link href="/privacy" className={styles.serviceLink}>Privacy policy</Link>
          <Link href="/cookies" className={styles.serviceLink}>Cookie policy</Link>
        </div>

      </div>

      {/* Areas — full-width row below the columns */}
      <div className={styles.areasRow}>
        <div className={styles.areasRowInner}>
          <span className={styles.areasRowLabel}>Areas we cover</span>
          <div className={styles.areasWrap}>
            {(settings.areaPages ?? []).length > 0 ? (
              (settings.areaPages ?? []).map((area) => (
                <Link key={area.slug.current} href={`/areas/${area.slug.current}`} className={styles.areaLink}>
                  {area.name}
                </Link>
              ))
            ) : (
              <span className={styles.areasText}>
                {settings.areas.join(" · ")}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className={styles.bar}>
        <span>© 2026 Chesterfield Cleaning Fairies · Est. 2025 · Fully insured · DBS-checked ♥</span>
        <span className={styles.barRight}>
          <Link href="/privacy" className={styles.policyLink}>Privacy</Link>
          <Link href="/cookies" className={styles.policyLink}>Cookies</Link>
          <CookieSettingsButton />
          <span>Made with a little magic ✦</span>
        </span>
      </div>
    </footer>
  );
}
