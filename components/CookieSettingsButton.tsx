"use client";

import styles from "./Footer.module.css";

export default function CookieSettingsButton() {
  return (
    <button
      className={styles.cookieBtn}
      onClick={() => window.dispatchEvent(new Event("ccf:cookie-settings"))}
    >
      Cookie settings
    </button>
  );
}
