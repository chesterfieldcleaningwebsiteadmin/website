import Link from "next/link";
import Image from "next/image";
import styles from "./Hero.module.css";
import { urlFor } from "@/lib/sanityImage";
import type { SanityImage } from "@/lib/types";

interface Props {
  badge: string;
  heading: string;
  subheading: string;
  heroImage?: SanityImage;
}

const HERO_PARTICLES = [
  { top: "12%", left: "2%",  size: 5, delay: "0s",   dur: "12s" },
  { top: "48%", left: "7%",  size: 4, delay: "1s",   dur: "11s" },
  { top: "70%", left: "14%", size: 6, delay: "0.5s", dur: "14s" },
  { top: "25%", left: "25%", size: 5, delay: "2s",   dur: "13s" },
  { top: "62%", left: "33%", size: 4, delay: "0s",   dur: "10s" },
  { top: "35%", left: "48%", size: 7, delay: "1.5s", dur: "15s" },
  { top: "15%", left: "58%", size: 5, delay: "3s",   dur: "12s" },
  { top: "65%", left: "65%", size: 4, delay: "0.5s", dur: "11s" },
  { top: "28%", left: "76%", size: 6, delay: "2s",   dur: "13s" },
  { top: "52%", left: "83%", size: 5, delay: "1s",   dur: "14s" },
  { top: "75%", left: "88%", size: 4, delay: "0s",   dur: "10s" },
  { top: "18%", left: "93%", size: 5, delay: "2.5s", dur: "12s" },
  { top: "45%", left: "96%", size: 4, delay: "0.5s", dur: "11s" },
  { top: "80%", left: "98%", size: 6, delay: "1.5s", dur: "13s" },
] as const

export default function Hero({ badge, heading, subheading, heroImage }: Props) {
  return (
    <section className={styles.hero}>
      {/* floating fairy dust particles */}
      {HERO_PARTICLES.map((p, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width={p.size}
          height={p.size}
          aria-hidden="true"
          className={styles.driftParticle}
          style={{ top: p.top, left: p.left, animationDelay: p.delay, animationDuration: p.dur }}
        >
          <path
            d="M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z"
            fill="currentColor"
          />
        </svg>
      ))}

      {/* decorative sparkles */}
      <svg
        viewBox="0 0 24 24"
        width="22"
        height="22"
        aria-hidden="true"
        className={`${styles.sparkle} ${styles.sparkleA}`}
      >
        <path
          d="M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z"
          fill="currentColor"
        />
      </svg>
      <svg
        viewBox="0 0 24 24"
        width="14"
        height="14"
        aria-hidden="true"
        className={`${styles.sparkle} ${styles.sparkleB}`}
      >
        <path
          d="M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z"
          fill="currentColor"
        />
      </svg>

      <div className={styles.inner}>
        {/* Left: copy */}
        <div>
          {badge && (
            <span className={styles.badge}>
              <svg
                viewBox="0 0 24 24"
                width="13"
                height="13"
                aria-hidden="true"
                className={styles.badgeIcon}
              >
                <path
                  d="M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z"
                  fill="currentColor"
                />
              </svg>
              {badge}
            </span>
          )}
          <h1 className={styles.heading}>
            {heading.split("\n").map((line, i, arr) => (
              <span key={i}>
                {line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
          </h1>
          <p className={styles.subheading}>{subheading}</p>
          <div className={styles.ctaRow}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Get quote
              <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
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
            <a href="tel:+447369255360" className={styles.ctaPhone}>
              <svg
                viewBox="0 0 24 24"
                width="17"
                height="17"
                aria-hidden="true"
                className={styles.phoneIcon}
              >
                <path
                  d="M6.5 3h3l1.5 5-2 1.5a12 12 0 0 0 5 5l1.5-2 5 1.5v3c0 1-1 2-2 2A16 16 0 0 1 4.5 5c0-1 1-2 2-2Z"
                  fill="currentColor"
                />
              </svg>
              07369 255360
            </a>
          </div>
        </div>

        {/* Right: photo placeholder with floating badge */}
        <div className={styles.photoWrap}>
          <div className={styles.photoInner}>
            {heroImage ? (
              <div className={styles.photoReal}>
                <Image
                  src={urlFor(heroImage).width(700).height(875).url()}
                  alt="Chesterfield Cleaning Fairies — sparkling clean home"
                  fill
                  sizes="(max-width: 900px) 0px, 45vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            ) : (
              <div className={styles.photoDark}>
                <Image
                  src="/images/logo.jpg"
                  alt="Chesterfield Cleaning Fairies"
                  width={260}
                  height={260}
                  className={styles.photoDarkLogo}
                />
              </div>
            )}
            <div className={styles.ratingBadge}>
              <span className={styles.stars} aria-label="5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 24 24"
                    width="13"
                    height="13"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z"
                      fill="currentColor"
                    />
                  </svg>
                ))}
              </span>
              <div className={styles.ratingText}>
                <div className={styles.ratingTitle}>5-star rated</div>
                <div className={styles.ratingSub}>by Chesterfield families</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
