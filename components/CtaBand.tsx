import Link from "next/link";
import styles from "./CtaBand.module.css";

interface Props {
  heading?: string;
  body?: string;
}

export default function CtaBand({
  heading = "Ready to come home to a sparkle?",
  body = "Get a free, no-obligation quote today. We'll tailor a clean that fits your home, your business and your budget.",
}: Props) {
  return (
    <section className={styles.outer}>
      <div className={styles.band}>
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          aria-hidden="true"
          className={`${styles.sparkle} ${styles.sparkleLeft}`}
        >
          <path
            d="M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z"
            fill="currentColor"
          />
        </svg>
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          aria-hidden="true"
          className={`${styles.sparkle} ${styles.sparkleRight}`}
        >
          <path
            d="M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z"
            fill="currentColor"
          />
        </svg>
        <h2 className={styles.heading}>{heading}</h2>
        <p className={styles.body}>{body}</p>
        <div className={styles.btns}>
          <Link href="/contact" className={styles.btnPrimary}>
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
          <a href="tel:+447369255360" className={styles.btnSecondary}>
            <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
              <path
                d="M6.5 3h3l1.5 5-2 1.5a12 12 0 0 0 5 5l1.5-2 5 1.5v3c0 1-1 2-2 2A16 16 0 0 1 4.5 5c0-1 1-2 2-2Z"
                fill="currentColor"
              />
            </svg>
            07369 255360
          </a>
        </div>
      </div>
    </section>
  );
}
