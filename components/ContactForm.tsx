"use client";

import { useState, useRef } from "react";
import styles from "./ContactForm.module.css";

const SERVICES = [
  "Regular domestic cleaning",
  "One-off & deep clean",
  "End-of-tenancy cleaning",
  "Commercial & office cleaning",
  "Airbnb / holiday-let changeover",
  "Not sure yet — please advise",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm({
  preselect,
}: {
  preselect?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (data.get("botcheck")) return;

    setStatus("loading");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: accessKey,
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          service: data.get("service"),
          message: data.get("message"),
          subject: `Quote enquiry — ${data.get("service") || "Cleaning"}`,
          from_name: "Chesterfield Cleaning Fairies Website",
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.successState}>
        <span className={styles.successIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24" width="30" height="30">
            <path
              d="M4 12.5l5 5L20 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h2 className={styles.successHeading}>Thank you!</h2>
        <p className={styles.successBody}>
          We&rsquo;ve received your enquiry and will be in touch as soon as we
          can. Prefer to talk? Call us on{" "}
          <a href="tel:+447369255360">07369 255360</a>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className={styles.resetBtn}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.form} noValidate>
      <h2 className={styles.formHeading}>Request a free quote</h2>
      <p className={styles.formSub}>We&rsquo;ll be in touch as soon as we can.</p>

      {/* honeypot */}
      <input
        type="checkbox"
        name="botcheck"
        className={styles.honeypot}
        tabIndex={-1}
        aria-hidden="true"
      />

      <div className={styles.twoCol}>
        <label className={styles.field}>
          <span className={styles.label}>Your name *</span>
          <input
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className={styles.input}
          />
        </label>
        <label className={styles.field}>
          <span className={styles.label}>Phone</span>
          <input
            name="phone"
            type="tel"
            placeholder="07000 000000"
            className={styles.input}
          />
        </label>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>Email *</span>
        <input
          name="email"
          type="email"
          required
          placeholder="jane@example.com"
          className={styles.input}
        />
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Service you&rsquo;re interested in</span>
        <select
          name="service"
          className={styles.select}
          defaultValue={preselect || SERVICES[0]}
        >
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>

      <label className={styles.field}>
        <span className={styles.label}>Message</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Tell us about your home or business, rough size, how often, and where you are…"
          className={styles.textarea}
        />
      </label>

      {status === "error" && (
        <p className={styles.errorMsg}>
          Something went wrong — please try again or call us on{" "}
          <a href="tel:+447369255360">07369 255360</a>.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className={styles.submitBtn}
      >
        {status === "loading" ? "Sending…" : "Send my enquiry"}
        {status !== "loading" && (
          <svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true">
            <path
              d="M4 12l16-8-6 16-3-6-7-2Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
      <p className={styles.privacy}>
        Your enquiry goes straight to our inbox — no spam, ever.
      </p>
    </form>
  );
}
