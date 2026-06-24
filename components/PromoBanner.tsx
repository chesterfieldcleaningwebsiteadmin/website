"use client";

import { useState } from "react";
import type { PromoBanner as PromoBannerType } from "@/lib/types";
import styles from "./PromoBanner.module.css";

export default function PromoBanner({ banner }: { banner: PromoBannerType }) {
  const [dismissed, setDismissed] = useState(false);

  if (!banner.enabled || dismissed || !banner.text) return null;

  return (
    <div className={styles.banner} role="banner">
      <div className={styles.inner}>
        <p className={styles.text}>
          {banner.text}
          {banner.linkLabel && banner.linkUrl && (
            <a href={banner.linkUrl} className={styles.link}>
              {banner.linkLabel}
              <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden="true">
                <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          )}
        </p>
        <button
          onClick={() => setDismissed(true)}
          className={styles.close}
          aria-label="Dismiss banner"
        >
          <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
            <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
