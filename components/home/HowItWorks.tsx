import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    n: "1",
    title: "Get in touch",
    body: "Call, message or fill in our quick form — we'll get straight back to you, no pressure.",
  },
  {
    n: "2",
    title: "We tailor a quote",
    body: "We listen to exactly what you need and put together a fair, no-obligation price.",
  },
  {
    n: "3",
    title: "We bring the sparkle",
    body: "Our insured, DBS-checked team arrives on time and leaves everything gleaming.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Simple from the start</span>
          <h2 className={styles.heading}>How it works</h2>
        </div>
        <div className={styles.grid}>
          {STEPS.map((step) => (
            <div key={step.n} className={styles.card}>
              <span className={styles.number}>{step.n}</span>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardBody}>{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
