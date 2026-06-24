import Link from "next/link";
import type { Service } from "@/lib/types";
import styles from "./ServicesGrid.module.css";

interface Props {
  services: Service[];
}

const TILE_COLOURS = [
  { bg: "var(--primary-soft)", fg: "var(--primary)" },
  { bg: "var(--secondary-soft)", fg: "var(--secondary)" },
  { bg: "var(--gold-soft)", fg: "var(--gold-deep)" },
];

export default function ServicesGrid({ services }: Props) {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>What we do</span>
          <h2 className={styles.heading}>Cleaning, tailored to you</h2>
          <p className={styles.sub}>
            From a regular sparkle to a one-off deep clean, we look after homes
            and businesses alike — with the same care and attention every visit.
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className={styles.card}
            >
              <span
                className={styles.icon}
                style={{
                  background: TILE_COLOURS[i % 3].bg,
                  color: TILE_COLOURS[i % 3].fg,
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="26"
                  height="26"
                  aria-hidden="true"
                >
                  <path
                    d="M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardBlurb}>{s.shortBlurb}</p>
              <div className={styles.cardFooter}>
                {s.priceType === "from" ? (
                  <span className={styles.fromBadge}>
                    From <span className={styles.fromPrice}>{s.priceLabel}</span>
                  </span>
                ) : (
                  <span className={styles.quoteBadge}>Tailored quote</span>
                )}
                <span className={styles.learnMore}>
                  Learn more
                  <svg
                    viewBox="0 0 24 24"
                    width="14"
                    height="14"
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
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
