import styles from "./TrustStrip.module.css";

interface Props {
  items: string[];
}

export default function TrustStrip({ items }: Props) {
  return (
    <section className={styles.strip}>
      <div className={styles.inner}>
        {items.map((t) => (
          <span key={t} className={styles.item}>
            <span className={styles.tick} aria-hidden="true">
              <svg viewBox="0 0 20 20" width="13" height="13">
                <path
                  d="M4 10.5l3.5 3.5L16 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
