import styles from "./WhyChooseUs.module.css";

const WHY = [
  {
    title: "Fully insured & DBS-checked",
    body: "Complete peace of mind on every single visit.",
  },
  {
    title: "Local & family-run",
    body: "Real people from Chesterfield who genuinely care about your home.",
  },
  {
    title: "Trusted, vetted cleaners",
    body: "The same friendly faces you'll get to know and rely on.",
  },
  {
    title: "Eco-friendly on request",
    body: "Gentle, effective products that are kind to your home and the planet.",
  },
  {
    title: "Flexible scheduling",
    body: "We work around your life — not the other way round.",
  },
  {
    title: "Satisfaction guaranteed",
    body: "Not perfectly happy? Tell us and we'll put it right.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Why choose us</span>
          <h2 className={styles.heading}>
            The kind of company you'd hand a key to
          </h2>
        </div>
        <div className={styles.grid}>
          {WHY.map((wp) => (
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
