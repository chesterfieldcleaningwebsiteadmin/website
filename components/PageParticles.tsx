import styles from './PageParticles.module.css'

const STAR = "M12 .5c.85 6.4 4.25 9.8 10.7 10.7C16.25 12.05 12.85 15.45 12 21.9c-.85-6.45-4.25-9.85-10.7-10.7C7.75 10.3 11.15 6.9 12 .5Z"

// Negative delays make those particles appear mid-rise immediately on page load,
// so the effect is visible without waiting for the full animation to start.
const PARTICLES: { left: string; size: number; delay: string; dur: string; drift: string }[] = [
  { left: "3%",  size: 5, delay: "0s",    dur: "15s", drift: "16px"  },
  { left: "10%", size: 4, delay: "-6s",   dur: "13s", drift: "-12px" },
  { left: "19%", size: 5, delay: "-2s",   dur: "17s", drift: "20px"  },
  { left: "28%", size: 4, delay: "-10s",  dur: "14s", drift: "-18px" },
  { left: "38%", size: 6, delay: "-4s",   dur: "16s", drift: "14px"  },
  { left: "48%", size: 4, delay: "-8s",   dur: "12s", drift: "-20px" },
  { left: "57%", size: 5, delay: "-1s",   dur: "15s", drift: "18px"  },
  { left: "66%", size: 4, delay: "-12s",  dur: "13s", drift: "-14px" },
  { left: "74%", size: 6, delay: "-5s",   dur: "17s", drift: "10px"  },
  { left: "83%", size: 4, delay: "-9s",   dur: "14s", drift: "-16px" },
  { left: "91%", size: 5, delay: "-3s",   dur: "16s", drift: "22px"  },
  { left: "97%", size: 4, delay: "-7s",   dur: "12s", drift: "-10px" },
  { left: "14%", size: 5, delay: "-14s",  dur: "15s", drift: "12px"  },
  { left: "53%", size: 4, delay: "-11s",  dur: "13s", drift: "-22px" },
  { left: "79%", size: 5, delay: "3s",    dur: "17s", drift: "16px"  },
  { left: "43%", size: 4, delay: "-15s",  dur: "14s", drift: "-8px"  },
]

export default function PageParticles() {
  return (
    <div className={styles.layer} aria-hidden="true">
      {PARTICLES.map((p, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          width={p.size}
          height={p.size}
          className={styles.particle}
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.dur,
            ['--drift' as string]: p.drift,
          } as React.CSSProperties}
        >
          <path d={STAR} fill="currentColor" />
        </svg>
      ))}
    </div>
  )
}
