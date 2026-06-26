import type { Testimonial } from "@/lib/types";
import styles from "./Testimonials.module.css";

interface Props {
  testimonials: Testimonial[];
  googleReviewsUrl?: string;
  googleRating?: number;
  googleReviewCount?: number;
  eyebrow?: string;
  heading?: string;
}

export default function Testimonials({ testimonials, googleReviewsUrl, googleRating, googleReviewCount, eyebrow = "Kind words ♥", heading = "Loved by local homes & businesses" }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((tm, i) => (
            <figure key={i} className={styles.card}>
              <span className={styles.stars} aria-label="5 stars">
                {[...Array(5)].map((_, j) => (
                  <svg
                    key={j}
                    viewBox="0 0 24 24"
                    width="15"
                    height="15"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z"
                      fill="currentColor"
                    />
                  </svg>
                ))}
              </span>
              <blockquote className={styles.quote}>
                &ldquo;{tm.quote}&rdquo;
              </blockquote>
              <figcaption className={styles.caption}>
                {tm.name}{" "}
                <span className={styles.place}>· {tm.place}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        {(googleReviewsUrl || googleRating || googleReviewCount) && (
          <div className={styles.reviewsCta}>
            {(googleRating || googleReviewCount) && (
              googleReviewsUrl ? (
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.ratingBadge} ${styles.ratingBadgeLink}`}
                  aria-label={`Rated ${googleRating} out of 5 from ${googleReviewCount} Google reviews — opens in new tab`}
                >
                  <span className={styles.ratingStars} aria-hidden="true">★★★★★</span>
                  {googleRating && <span className={styles.ratingScore}>{googleRating}</span>}
                  {googleReviewCount && <span className={styles.ratingCount}>· {googleReviewCount} reviews on Google</span>}
                </a>
              ) : (
                <div className={styles.ratingBadge} aria-label={`Rated ${googleRating} out of 5 from ${googleReviewCount} Google reviews`}>
                  <span className={styles.ratingStars} aria-hidden="true">★★★★★</span>
                  {googleRating && <span className={styles.ratingScore}>{googleRating}</span>}
                  {googleReviewCount && <span className={styles.ratingCount}>· {googleReviewCount} reviews on Google</span>}
                </div>
              )
            )}
          </div>
        )}
      </div>
    </section>
  );
}
