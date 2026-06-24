"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

const SERVICE_LINKS = [
  { title: "Regular domestic cleaning", slug: "regular-domestic-cleaning" },
  { title: "One-off & deep cleans", slug: "one-off-deep-cleans" },
  { title: "End-of-tenancy cleaning", slug: "end-of-tenancy-cleaning" },
  { title: "Commercial & office cleaning", slug: "commercial-office-cleaning" },
  { title: "Airbnb & holiday-let changeovers", slug: "airbnb-holiday-let-changeovers" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  function closeAll() {
    setMenuOpen(false);
    setServicesOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Brand */}
        <Link href="/" className={styles.brand}>
          <span className={styles.logoDisc}>
            <Image
              src="/images/logo.jpg"
              alt="Chesterfield Cleaning Fairies logo"
              fill
              sizes="56px"
              style={{ objectFit: "cover" }}
              priority
            />
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandSub}>Chesterfield</span>
            <span className={styles.brandName}>Cleaning Fairies</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {/* Services with dropdown */}
          <div
            className={styles.servicesItem}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link href="/#services" className={styles.navLink}>
              Services
              <svg
                className={styles.chevron}
                viewBox="0 0 24 24"
                width="12"
                height="12"
                aria-hidden="true"
                style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
              >
                <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className={`${styles.dropdown} ${dropdownOpen ? styles.dropdownVisible : ""}`}>
              <div className={styles.dropdownInner}>
                {SERVICE_LINKS.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className={styles.dropdownLink}>
                    {s.title}
                  </Link>
                ))}
                <div className={styles.dropdownDivider} />
                <Link href="/pricing" className={`${styles.dropdownLink} ${styles.dropdownPricing}`}>
                  View pricing guide →
                </Link>
              </div>
            </div>
          </div>

          <Link href="/#how" className={styles.navLink}>
            How it works
          </Link>
          <Link href="/#areas" className={styles.navLink}>
            Areas
          </Link>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>

        {/* Desktop actions */}
        <div className={styles.desktopActions}>
          <a href="tel:+447369255360" className={styles.phoneLink}>
            <span className={styles.phoneIconWrap} aria-hidden="true">
              <svg viewBox="0 0 24 24" width="15" height="15">
                <path
                  d="M6.5 3h3l1.5 5-2 1.5a12 12 0 0 0 5 5l1.5-2 5 1.5v3c0 1-1 2-2 2A16 16 0 0 1 4.5 5c0-1 1-2 2-2Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            07369 255360
          </a>
          <Link href="/contact" className={styles.ctaBtn}>
            Get quote
          </Link>
        </div>

        {/* Mobile actions */}
        <div className={styles.mobileActions}>
          <a
            href="tel:+447369255360"
            aria-label="Call us"
            className={styles.mobilePhone}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
              <path
                d="M6.5 3h3l1.5 5-2 1.5a12 12 0 0 0 5 5l1.5-2 5 1.5v3c0 1-1 2-2 2A16 16 0 0 1 4.5 5c0-1 1-2 2-2Z"
                fill="currentColor"
              />
            </svg>
          </a>
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={styles.hamburger}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className={styles.mobileMenu} aria-label="Mobile navigation">
          {/* Services row with toggle */}
          <div className={styles.mobileServicesRow}>
            <Link
              href="/#services"
              onClick={closeAll}
              className={styles.mobileLink}
            >
              Services
            </Link>
            <button
              onClick={() => setServicesOpen((o) => !o)}
              aria-expanded={servicesOpen}
              aria-label={servicesOpen ? "Hide services" : "Show services"}
              className={styles.mobileServicesToggle}
            >
              <svg
                viewBox="0 0 24 24"
                width="14"
                height="14"
                aria-hidden="true"
                style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
              >
                <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Service sub-links */}
          {servicesOpen && (
            <div className={styles.mobileSubLinks}>
              {SERVICE_LINKS.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  onClick={closeAll}
                  className={styles.mobileSubLink}
                >
                  {s.title}
                </Link>
              ))}
              <Link
                href="/pricing"
                onClick={closeAll}
                className={`${styles.mobileSubLink} ${styles.mobileSubLinkPricing}`}
              >
                View pricing guide →
              </Link>
            </div>
          )}

          <Link
            href="/#how"
            onClick={closeAll}
            className={styles.mobileLink}
          >
            How it works
          </Link>
          <Link
            href="/#areas"
            onClick={closeAll}
            className={styles.mobileLink}
          >
            Areas we cover
          </Link>
          <Link
            href="/about"
            onClick={closeAll}
            className={styles.mobileLink}
          >
            About us
          </Link>
          <Link
            href="/contact"
            onClick={closeAll}
            className={`${styles.mobileLink} ${styles.mobileLinkLast}`}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={closeAll}
            className={styles.mobileCta}
          >
            Get quote
          </Link>
        </nav>
      )}
    </header>
  );
}
