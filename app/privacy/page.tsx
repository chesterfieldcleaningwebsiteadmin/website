import type { Metadata } from "next";
import styles from "./policy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Chesterfield Cleaning Fairies collects, uses and protects your personal data.",
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.heading}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: June 2026</p>

        <p>
          Chesterfield Cleaning Fairies (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) is committed to protecting your personal data. This policy explains what information we collect, how we use it and your rights under UK GDPR and the Data Protection Act 2018.
        </p>

        <h2>1. Who we are</h2>
        <p>
          We are a sole trader / small business operating as Chesterfield Cleaning Fairies, based in Chesterfield, Derbyshire. You can contact us at{" "}
          <a href="mailto:Chesterfieldcleaningfairies@gmail.com">Chesterfieldcleaningfairies@gmail.com</a>{" "}
          or on 07369 255360.
        </p>

        <h2>2. What personal data we collect</h2>
        <ul>
          <li><strong>Contact enquiries:</strong> name, email address, phone number and any message you submit via our contact form.</li>
          <li><strong>Usage data:</strong> anonymised analytics (pages visited, time on site) collected via Google Analytics when you consent to cookies.</li>
          <li><strong>Behaviour data:</strong> session recordings and heatmaps via Microsoft Clarity when you consent to cookies.</li>
        </ul>

        <h2>3. How we use your data</h2>
        <ul>
          <li>To respond to your quote or service enquiry.</li>
          <li>To provide the cleaning services you have requested.</li>
          <li>To improve our website and understand how visitors use it (analytics, where consent is given).</li>
        </ul>

        <h2>4. Legal basis for processing</h2>
        <ul>
          <li><strong>Legitimate interests</strong> — responding to your enquiry about our services.</li>
          <li><strong>Consent</strong> — analytics and behaviour tracking (you can change this at any time via the cookie settings).</li>
        </ul>

        <h2>5. How long we keep your data</h2>
        <p>
          Enquiry emails are retained in our Gmail inbox for up to 2 years and then deleted. If you become a customer, we may retain your contact details for the duration of the service relationship and up to 2 years after. Analytics data is retained according to Google Analytics and Microsoft Clarity default retention periods.
        </p>

        <h2>6. Who we share data with</h2>
        <p>We do not sell your data. We share it only with:</p>
        <ul>
          <li><strong>Web3Forms</strong> — our contact form provider (processes your enquiry data to deliver emails to us).</li>
          <li><strong>Google Analytics / Google Tag Manager</strong> — website analytics (when consent is given).</li>
          <li><strong>Microsoft Clarity</strong> — session recording and heatmaps (when consent is given).</li>
          <li><strong>Vercel</strong> — our website hosting provider (processes server logs).</li>
        </ul>
        <p>All processors are bound by appropriate data processing agreements.</p>

        <h2>7. Cookies</h2>
        <p>
          We use cookies and similar technologies for essential site function and, with your consent, for analytics and behaviour tracking. See our{" "}
          <a href="/cookies">Cookie Policy</a> for full details. You can update your preferences at any time using the &ldquo;Cookie settings&rdquo; link in the footer.
        </p>

        <h2>8. Your rights</h2>
        <p>Under UK GDPR you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you.</li>
          <li>Correct inaccurate data.</li>
          <li>Request erasure of your data.</li>
          <li>Object to processing based on legitimate interests.</li>
          <li>Withdraw consent at any time (this does not affect the lawfulness of processing before withdrawal).</li>
          <li>Lodge a complaint with the Information Commissioner&rsquo;s Office (ICO) at ico.org.uk.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:Chesterfieldcleaningfairies@gmail.com">Chesterfieldcleaningfairies@gmail.com</a>.
        </p>

        <h2>9. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The &ldquo;last updated&rdquo; date at the top of this page will reflect any changes.
        </p>
      </div>
    </main>
  );
}
