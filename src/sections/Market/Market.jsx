import AnimatedNumber from "@/components/AnimatedNumber/AnimatedNumber";
import styles from "./Market.styles.module.scss";

const MARKET_STATS = [
  { label: "Global TAM", value: "$498B" },
  { label: "Marine Biotech CAGR", value: "10.5%" },
  { label: "By-product Valorization", value: "$15B" }
];

export default function Market() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <h2>Market Scalability</h2>
          <p>Seizing the intersection of global health and sustainable blue-economy scaling.</p>
          <div className={styles.tamGrid}>
            {MARKET_STATS.map((item, i) => (
              <div key={i} className={styles.tamItem}>
                <span className={styles.label}>{item.label}</span>
                <span className={styles.value}>
                  <AnimatedNumber value={item.value} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}