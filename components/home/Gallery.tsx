import Image from "next/image";
import type { GalleryItem } from "@/lib/types";
import { urlFor } from "@/lib/sanityImage";
import styles from "./Gallery.module.css";

interface Props {
  items: GalleryItem[];
}

export default function Gallery({ items }: Props) {
  if (!items?.length) return null;
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          <span className={styles.eyebrow}>Our work</span>
          <h2 className={styles.heading}>A little sparkle, in every room</h2>
        </div>
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.item}>
              <Image
                src={urlFor(item.image).width(600).height(480).url()}
                alt={item.altText || "Cleaning work by Chesterfield Cleaning Fairies"}
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
