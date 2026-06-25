import styles from "./HowItWorks.module.css";

interface Props {
  steps: { title: string; body: string }[];
  eyebrow?: string;
  heading?: string;
}

export default function HowItWorks({ steps, eyebrow = "Simple from the start", heading = "How it works" }: Props) {
  return (
    <section id="how" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.grid}>
          {steps.map((step, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.number}>{i + 1}</span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardBody}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
