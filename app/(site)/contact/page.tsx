import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import { getSiteSettings, getContactPage } from "@/lib/sanity";
import styles from "./contact.module.css";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const contact = await getContactPage();
  return {
    title: { absolute: contact.metaTitle ?? "Get a Free Quote | Chesterfield Cleaning Fairies" },
    description:
      contact.metaDescription ??
      "Request a free, no-obligation cleaning quote. We cover Chesterfield and surrounding Derbyshire villages and usually reply the same day.",
  };
}

export default async function ContactPage() {
  const [settings, contact] = await Promise.all([
    getSiteSettings(),
    getContactPage(),
  ]);

  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <svg
          viewBox="0 0 24 24"
          width="20"
          height="20"
          aria-hidden="true"
          className={styles.heroSparkle}
        >
          <path
            d="M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z"
            fill="currentColor"
          />
        </svg>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>{contact.heroEyebrow}</span>
          <h1 className={styles.heroHeading}>{contact.heroHeading}</h1>
          <p className={styles.heroSub}>{contact.heroSub}</p>
        </div>
      </section>

      {/* Form + details */}
      <section className={styles.body}>
        <div className={styles.bodyInner}>
          {/* Form card */}
          <div className={styles.formCard}>
            <ContactForm />
          </div>

          {/* Sidebar */}
          <aside className={styles.sidebar}>
            {/* Talk directly */}
            <div className={styles.sideCard}>
              <h3 className={styles.sideHeading}>Talk to us directly</h3>
              <a
                href={`tel:+44${settings.phone.replace(/^0/, "").replace(/\s/g, "")}`}
                className={styles.contactRow}
              >
                <span className={styles.contactIcon} style={{ background: "var(--secondary-soft)", color: "var(--secondary)" }}>
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                    <path d="M6.5 3h3l1.5 5-2 1.5a12 12 0 0 0 5 5l1.5-2 5 1.5v3c0 1-1 2-2 2A16 16 0 0 1 4.5 5c0-1 1-2 2-2Z" fill="currentColor" />
                  </svg>
                </span>
                <span>
                  <span className={styles.contactMeta}>Call or text</span>
                  <span className={styles.contactValue}>{settings.phone}</span>
                </span>
              </a>
              <a href={`mailto:${settings.email}`} className={styles.contactRow}>
                <span className={styles.contactIcon} style={{ background: "var(--primary-soft)", color: "var(--primary)" }}>
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" />
                    <path d="M4 7l8 6 8-6" />
                  </svg>
                </span>
                <span className={styles.contactEmailWrap}>
                  <span className={styles.contactMeta}>Email</span>
                  <span className={styles.contactValue}>{settings.email}</span>
                </span>
              </a>
            </div>

            {/* Socials */}
            <div className={styles.sideCard}>
              <h3 className={styles.sideHeading}>Follow the sparkle</h3>
              <div className={styles.socials}>
                <a
                  href={settings.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>
                <a
                  href={settings.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialBtn}
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="currentColor">
                    <path d="M13.5 21v-7h2.3l.4-2.8h-2.7V9.4c0-.8.2-1.4 1.4-1.4h1.4V5.5c-.2 0-1.1-.1-2-.1-2 0-3.4 1.2-3.4 3.5v1.9H8.5V14h2.3v7h2.7Z" />
                  </svg>
                  Facebook
                </a>
              </div>
            </div>

            {/* Trust */}
            <div className={styles.trustCard}>
              {contact.trustItems.map((t) => (
                <span key={t} className={styles.trustItem}>
                  <span className={styles.trustTick} aria-hidden="true">
                    <svg viewBox="0 0 20 20" width="12" height="12">
                      <path d="M4 10.5l3.5 3.5L16 6" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {t}
                </span>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
