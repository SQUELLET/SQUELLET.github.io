import styles from "./Hero.styles.module.scss";

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.heroWrapper}>
      <div className={styles.container}>
        <div className={styles.topBadge}>NSF I-CORPS PILOT: 2026</div>
        <h1 className={styles.headline}>
          SQUELLET<span className={styles.dot}>™</span>
        </h1>
        <p className={styles.subheadline}>
          Molecular precision in marine bioactives. Upcycling cephalopod melanin for 
          neuro-protective and antioxidant resilience.
        </p>
        <button 
          className={styles.cta} 
          onClick={() => scrollToSection("science")} // Now scrolls to Science
        >
          Explore the Science
        </button>
      </div>
    </section>
  );
}