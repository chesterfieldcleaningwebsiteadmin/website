import Image from "next/image";
import type { InstagramHighlight } from "@/lib/types";
import { urlFor } from "@/lib/sanityImage";
import styles from "./InstagramHighlights.module.css";

interface Props {
  highlights: InstagramHighlight[];
  instagramUrl?: string;
}

export default function InstagramHighlights({ highlights, instagramUrl }: Props) {
  if (!highlights.length) return null;

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Our latest work</span>
          <h2 className={styles.heading}>See the sparkle for yourself</h2>
        </div>

        <div className={styles.grid}>
          {highlights.map((h, i) => (
            <div key={i} className={styles.cell}>
              <Image
                src={urlFor(h.image).width(480).height(480).url()}
                alt={h.caption ?? "Chesterfield Cleaning Fairies — recent work"}
                fill
                sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 20vw"
                style={{ objectFit: "cover" }}
              />
              {h.caption && (
                <div className={styles.caption} aria-hidden="true">
                  {h.caption}
                </div>
              )}
            </div>
          ))}
        </div>

        {instagramUrl && (
          <div className={styles.cta}>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaLink}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
              Follow us on Instagram
              <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
