import styles from "./Science.styles.module.scss";

const BENEFITS = [
  {
    title: "Antioxidant Shield",
    desc: "Neutralizes reactive oxygen species (ROS) with high-purity melanin fractions.",
    stat: "IC50: 0.52 mg/mL"
  },
  {
    title: "Immune Resilience",
    desc: "Modulates cytokines to strengthen natural defense barriers.",
    stat: "Natural Polysaccharides"
  },
  {
    title: "Gut-Brain Axis",
    desc: "Bio-available peptides that support the enteric nervous system.",
    stat: "Neuro-protective"
  }
];

export default function Science() {
  return (
    <section className={styles.section} id="science">
      <div className="container">
        <h2 className={styles.title}>The Bioactive Moat</h2>
        <div className={styles.grid}>
          {BENEFITS.map((b, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stat}>{b.stat}</div>
              <h3>{b.title}</h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}