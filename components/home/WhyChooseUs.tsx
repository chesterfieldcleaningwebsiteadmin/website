import styles from "./WhyChooseUs.module.css";

interface Props {
  heading: string;
  points: { title: string; body: string }[];
}

export default function WhyChooseUs({ heading, points }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Why choose us</span>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.grid}>
          {points.map((wp) => (
            <div key={wp.title} className={styles.card}>
              <span className={styles.tick} aria-hidden="true">
                <svg viewBox="0 0 20 20" width="17" height="17">
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
              <div>
                <h3 className={styles.cardTitle}>{wp.title}</h3>
                <p className={styles.cardBody}>{wp.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
