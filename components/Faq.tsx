"use client";

import { useState } from "react";
import type { Faq as FaqType } from "@/lib/types";
import styles from "./Faq.module.css";

interface Props {
  faqs: FaqType[];
  heading?: string;
}

export default function Faq({ faqs, heading = "Frequently asked questions" }: Props) {
  const [open, setOpen] = useState<number | null>(null);

  if (!faqs?.length) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{heading}</h2>
      <div className={styles.list}>
        {faqs.map((faq, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
              <button
                className={styles.trigger}
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className={styles.question}>{faq.question}</span>
                <svg
                  className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {isOpen && (
                <p className={styles.answer}>{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
