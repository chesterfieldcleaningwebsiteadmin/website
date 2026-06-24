import type { StatItem } from "@/lib/types";
import styles from "./StatsStrip.module.css";

interface Props {
  stats: StatItem[];
}

export default function StatsStrip({ stats }: Props) {
  if (!stats?.length) return null;
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        {stats.map((s, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
