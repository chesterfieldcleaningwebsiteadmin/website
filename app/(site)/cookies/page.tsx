import type { Metadata } from "next";
import { getCookiesPage } from "@/lib/sanity";
import styles from "../privacy/policy.module.css";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const page = await getCookiesPage();
  return {
    title: "Cookie Policy | Chesterfield Cleaning Fairies",
    description:
      page.metaDescription ??
      "How Chesterfield Cleaning Fairies uses cookies and how to manage your preferences.",
  };
}

export default function CookiesPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Cookie Policy</h1>
        <p className={styles.updated}>Last updated: June 2026</p>

        <p>
          This policy explains how Chesterfield Cleaning Fairies uses cookies and similar technologies on this website, and how you can control them.
        </p>

        <h2>What are cookies?</h2>
        <p>
          Cookies are small text files placed on your device when you visit a website. They help the site remember your preferences and understand how you use it.
        </p>

        <h2>Cookies we use</h2>

        <h3>Strictly necessary</h3>
        <p>
          These cookies are essential for the website to function and cannot be switched off. They do not store personally identifiable information.
        </p>
        <ul>
          <li><strong>ccf_cookie_consent</strong> — remembers whether you have accepted or declined optional cookies. Expires after 1 year.</li>
        </ul>

        <h3>Analytics (optional — requires consent)</h3>
        <p>
          These cookies help us understand how visitors use the site so we can improve it. All data is anonymised.
        </p>
        <ul>
          <li><strong>Google Analytics</strong> (via Google Tag Manager) — tracks page views, session duration and traffic sources. Data is retained for 14 months by default.</li>
        </ul>

        <h3>Behaviour tracking (optional — requires consent)</h3>
        <ul>
          <li><strong>Microsoft Clarity</strong> — records anonymised session replays and heatmaps to help us understand user behaviour. Data is retained for 90 days.</li>
        </ul>

        <h2>How to manage your cookie preferences</h2>
        <p>
          When you first visit the site, a banner asks for your consent to optional cookies. You can change your choice at any time by clicking &ldquo;Cookie settings&rdquo; in the footer.
        </p>
        <p>
          You can also control cookies through your browser settings. Note that blocking all cookies may affect how the site works.
        </p>

        <h2>Third-party links</h2>
        <p>
          Our site may link to third-party websites (e.g. Instagram, Facebook). We are not responsible for their cookie practices.
        </p>

        <h2>More information</h2>
        <p>
          For more information about how we handle your data, see our{" "}
          <a href="/privacy">Privacy Policy</a>. To contact us about cookies, email{" "}
          <a href="mailto:Chesterfieldcleaningfairies@gmail.com">Chesterfieldcleaningfairies@gmail.com</a>.
        </p>
      </div>
    </main>
  );
}
