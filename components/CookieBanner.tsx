"use client";

import { useState, useEffect } from "react";
import styles from "./CookieBanner.module.css";

const STORAGE_KEY = "ccf_cookie_consent";

function updateGtag(granted: boolean) {
  if (typeof window === "undefined" || !window.gtag) return;
  const value = granted ? "granted" : "denied";
  window.gtag("consent", "update", {
    analytics_storage: value,
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
  });
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) setVisible(true);

    const handler = () => {
      localStorage.removeItem(STORAGE_KEY);
      setVisible(true);
    };
    window.addEventListener("ccf:cookie-settings", handler);
    return () => window.removeEventListener("ccf:cookie-settings", handler);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "granted");
    updateGtag(true);
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, "denied");
    updateGtag(false);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className={styles.overlay} role="dialog" aria-label="Cookie consent">
      <div className={styles.banner}>
        <div className={styles.text}>
          <p className={styles.heading}>We use cookies</p>
          <p className={styles.body}>
            We use analytics cookies (Google Analytics, Microsoft Clarity) to
            understand how visitors use the site. You can accept or decline —
            the site works either way.
          </p>
        </div>
        <div className={styles.actions}>
          <button onClick={reject} className={styles.rejectBtn}>
            Reject non-essential
          </button>
          <button onClick={accept} className={styles.acceptBtn}>
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
