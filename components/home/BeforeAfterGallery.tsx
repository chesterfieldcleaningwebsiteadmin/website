import Image from "next/image";
import { urlFor } from "@/lib/sanityImage";
import type { BeforeAfterItem } from "@/lib/types";
import styles from "./BeforeAfterGallery.module.css";

interface Props {
  items: BeforeAfterItem[];
}

export default function BeforeAfterGallery({ items }: Props) {
  if (!items || items.length === 0) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Our work</span>
          <h2 className={styles.heading}>Seeing is believing</h2>
          <p className={styles.sub}>
            A few examples of what a Chesterfield Cleaning Fairies visit can do.
          </p>
        </div>

        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.pair}>
              {item.label && <p className={styles.pairLabel}>{item.label}</p>}
              <div className={styles.images}>
                <div className={styles.imageWrap}>
                  <span className={styles.tag}>Before</span>
                  {item.beforeImage ? (
                    <Image
                      src={urlFor(item.beforeImage).width(600).height(450).url()}
                      alt={`Before: ${item.label}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 700px) 90vw, 35vw"
                    />
                  ) : (
                    <div className={styles.placeholder} role="img" aria-label={`Before photo — ${item.label} — coming soon`} />
                  )}
                </div>

                <div className={styles.imageWrap}>
                  <span className={`${styles.tag} ${styles.tagAfter}`}>After</span>
                  {item.afterImage ? (
                    <Image
                      src={urlFor(item.afterImage).width(600).height(450).url()}
                      alt={`After: ${item.label}`}
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 700px) 90vw, 35vw"
                    />
                  ) : (
                    <div className={`${styles.placeholder} ${styles.placeholderAfter}`} role="img" aria-label={`After photo — ${item.label} — coming soon`} />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.cta}>
          Photos coming soon — follow us on{" "}
          <a
            href="https://www.instagram.com/chesterfieldcleaningfairies/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaLink}
          >
            Instagram
          </a>{" "}
          to see our latest work.
        </p>
      </div>
    </section>
  );
}
