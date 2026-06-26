'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { PriceCalculatorSettings } from '@/lib/types'
import styles from './PriceEstimator.module.css'

interface Props {
  settings: PriceCalculatorSettings
}

export default function PriceEstimator({ settings }: Props) {
  const [tierIndex, setTierIndex] = useState<number | null>(null)
  const [freqIndex, setFreqIndex] = useState<number | null>(null)

  const estimate =
    tierIndex !== null && freqIndex !== null
      ? (() => {
          const tier = settings.propertyTiers[tierIndex]
          const freq = settings.frequencyOptions[freqIndex]
          const rate = settings.hourlyRate
          const discount = 1 - (freq.discountPct ?? 0) / 100
          const low = Math.round(tier.minHours * rate * discount)
          const high = Math.round(tier.maxHours * rate * discount)
          return { low, high, hasDiscount: (freq.discountPct ?? 0) > 0 }
        })()
      : null

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Quick estimate</span>
        <h2 className={styles.heading}>{settings.heading}</h2>
        {settings.subheading && <p className={styles.sub}>{settings.subheading}</p>}

        <div className={styles.selectors}>
          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Property size</legend>
            <div className={styles.chips}>
              {settings.propertyTiers.map((tier, i) => (
                <button
                  key={tier.label}
                  type="button"
                  className={`${styles.chip} ${tierIndex === i ? styles.chipActive : ''}`}
                  onClick={() => setTierIndex(i)}
                  aria-pressed={tierIndex === i}
                >
                  {tier.label}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>How often?</legend>
            <div className={styles.chips}>
              {settings.frequencyOptions.map((freq, i) => (
                <button
                  key={freq.label}
                  type="button"
                  className={`${styles.chip} ${freqIndex === i ? styles.chipActive : ''}`}
                  onClick={() => setFreqIndex(i)}
                  aria-pressed={freqIndex === i}
                >
                  {freq.label}
                  {(freq.discountPct ?? 0) > 0 && (
                    <span className={styles.discountBadge}>{freq.discountPct}% off</span>
                  )}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div className={`${styles.result} ${estimate ? styles.resultVisible : ''}`} aria-live="polite">
          {estimate ? (
            <>
              <p className={styles.resultLabel}>Estimated cost</p>
              <p className={styles.resultPrice}>
                £{estimate.low}–£{estimate.high}
              </p>
              {estimate.hasDiscount && (
                <p className={styles.resultDiscount}>Regular booking discount applied</p>
              )}
            </>
          ) : (
            <p className={styles.resultPlaceholder}>
              Select your property size and frequency above
            </p>
          )}
        </div>

        {settings.disclaimer && (
          <p className={styles.disclaimer}>{settings.disclaimer}</p>
        )}

        <Link
          href={settings.ctaHref ?? '/contact'}
          className={styles.cta}
        >
          {settings.ctaText ?? 'Get your exact quote'}
          <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
            <path
              d="M5 12h13M13 6l6 6-6 6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  )
}
