"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <Link href="/#services" className={styles.navLink}>
            Services
          </Link>
          <Link href="/#how" className={styles.navLink}>
            How it works
          </Link>
          <Link href="/#areas" className={styles.navLink}>
            Areas
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
          <Link
            href="/#services"
            onClick={() => setMenuOpen(false)}
            className={styles.mobileLink}
          >
            Services
          </Link>
          <Link
            href="/#how"
            onClick={() => setMenuOpen(false)}
            className={styles.mobileLink}
          >
            How it works
          </Link>
          <Link
            href="/#areas"
            onClick={() => setMenuOpen(false)}
            className={styles.mobileLink}
          >
            Areas we cover
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={`${styles.mobileLink} ${styles.mobileLinkLast}`}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={styles.mobileCta}
          >
            Get quote
          </Link>
        </nav>
      )}
    </header>
  );
}
