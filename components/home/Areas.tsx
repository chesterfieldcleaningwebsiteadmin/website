import Link from "next/link";
import AreaMapClient from "./AreaMapClient";
import styles from "./Areas.module.css";

interface AreaPage {
  name: string;
  slug: { current: string };
}

interface Props {
  areas: string[];
  areasIntro: string;
  areaPages?: AreaPage[];
}

const sparkle = (
  <svg viewBox="0 0 24 24" width="11" height="11" aria-hidden="true" className={styles.chipIcon}>
    <path d="M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z" fill="currentColor" />
  </svg>
);

export default function Areas({ areas, areasIntro, areaPages = [] }: Props) {
  const pageMap = new Map(areaPages.map((p) => [p.name.toLowerCase(), p.slug.current]));

  return (
    <section id="areas" className={styles.section}>
      <div className={styles.inner}>
        <div>
          <span className={styles.eyebrow}>Where we work</span>
          <h2 className={styles.heading}>Areas we cover</h2>
          <p className={styles.intro}>{areasIntro}</p>
          <div className={styles.chips}>
            {areas.map((a) => {
              const slug = pageMap.get(a.toLowerCase());
              return slug ? (
                <Link key={a} href={`/areas/${slug}`} className={`${styles.chip} ${styles.chipLink}`}>
                  {sparkle}
                  {a}
                </Link>
              ) : (
                <span key={a} className={styles.chip}>
                  {sparkle}
                  {a}
                </span>
              );
            })}
          </div>
        </div>
        <div className={styles.mapWrap}>
          <AreaMapClient areas={areas} />
        </div>
      </div>
    </section>
  );
}
