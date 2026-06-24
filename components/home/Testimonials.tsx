import type { Testimonial } from "@/lib/types";
import styles from "./Testimonials.module.css";

interface Props {
  testimonials: Testimonial[];
  googleReviewsUrl?: string;
}

export default function Testimonials({ testimonials, googleReviewsUrl }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Kind words</span>
          <h2 className={styles.heading}>
            Loved by local homes &amp; businesses
          </h2>
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
        {googleReviewsUrl && (
          <div className={styles.reviewsCta}>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.reviewsLink}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              See all our Google reviews
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
