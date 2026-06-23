import styles from "./Areas.module.css";

interface Props {
  areas: string[];
  areasIntro: string;
}

export default function Areas({ areas, areasIntro }: Props) {
  return (
    <section id="areas" className={styles.section}>
      <div className={styles.inner}>
        <div>
          <span className={styles.eyebrow}>Where we work</span>
          <h2 className={styles.heading}>Areas we cover</h2>
          <p className={styles.intro}>{areasIntro}</p>
          <div className={styles.chips}>
            {areas.map((a) => (
              <span key={a} className={styles.chip}>
                <svg
                  viewBox="0 0 24 24"
                  width="11"
                  height="11"
                  aria-hidden="true"
                  className={styles.chipIcon}
                >
                  <path
                    d="M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z"
                    fill="currentColor"
                  />
                </svg>
                {a}
              </span>
            ))}
          </div>
        </div>
        <div className={styles.mapPlaceholder}>
          <span className={styles.mapLabel}>
            [ map of Chesterfield &amp; Derbyshire ]
          </span>
        </div>
      </div>
    </section>
  );
}
