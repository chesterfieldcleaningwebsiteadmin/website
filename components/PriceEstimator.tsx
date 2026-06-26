'use client'
import { useState } from 'react'
import Link from 'next/link'
import type { PriceCalculatorSettings } from '@/lib/types'
import styles from './PriceEstimator.module.css'

interface Props {
  settings: PriceCalculatorSettings
}

const ALL_FREQUENCIES = [
  { key: 'oneoff',      label: 'One-off clean', showKey: 'showOneOff',      monthly: null as null | number },
  { key: 'fortnightly', label: 'Fortnightly',   showKey: 'showFortnightly', monthly: 2 },
  { key: 'weekly',      label: 'Weekly',         showKey: 'showWeekly',      monthly: 4 },
] as const

export default function PriceEstimator({ settings }: Props) {
  const [tierIndex, setTierIndex] = useState<number | null>(null)
  const [freqKey, setFreqKey]     = useState<string | null>(null)

  const frequencies = ALL_FREQUENCIES.filter(f => settings[f.showKey] !== false)

  const result = (() => {
    if (tierIndex === null || freqKey === null) return null
    const tier = settings.tiers[tierIndex]
    const freq = frequencies.find(f => f.key === freqKey)
    if (!tier || !freq) return null

    const price =
      freq.key === 'oneoff'      ? tier.oneOffPrice :
      freq.key === 'fortnightly' ? tier.fortnightlyPrice :
                                   tier.weeklyPrice

    const monthly = freq.monthly !== null ? price * freq.monthly : null
    const isOneOff = freq.key === 'oneoff'

    return { price, monthly, isOneOff }
  })()

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
              {settings.tiers.map((tier, i) => (
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
              {frequencies.map(freq => (
                <button
                  key={freq.key}
                  type="button"
                  className={`${styles.chip} ${freqKey === freq.key ? styles.chipActive : ''}`}
                  onClick={() => setFreqKey(freq.key)}
                  aria-pressed={freqKey === freq.key}
                >
                  {freq.label}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div
          className={`${styles.result} ${result ? styles.resultVisible : ''}`}
          aria-live="polite"
        >
          {result ? (
            <>
              <p className={styles.resultLabel}>
                {result.isOneOff ? 'One-off clean' : 'Price per visit'}
              </p>
              <p className={styles.resultPrice}>£{result.price}</p>
              <p className={styles.resultContext}>
                {result.isOneOff
                  ? 'single visit · no commitment'
                  : `approx. £${result.monthly}/month`}
              </p>
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

        <Link href={settings.ctaHref ?? '/contact'} className={styles.cta}>
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
