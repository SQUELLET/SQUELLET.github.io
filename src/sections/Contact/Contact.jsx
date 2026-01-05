import styles from "./Contact.styles.module.scss";

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.info}>
            <h2>Strategic <br/> Partnering</h2>
            <p>We are currently accepting inquiries for our **2026 Pilot Program** involving high-purity marine melanin applications.</p>
          </div>
          
          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <label>Full Name</label>
              <input type="text" placeholder="Dr. Julian Vane" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Organization</label>
              <input type="text" placeholder="Biotech Research / Supply Chain" required />
            </div>
            <div className={styles.inputGroup}>
              <label>Inquiry Type</label>
              <select>
                <option>R&D Collaboration</option>
                <option>Investment Inquiry</option>
                <option>Supply Chain Partner</option>
                <option>Pilot Program Waitlist</option>
              </select>
            </div>
            <button type="submit" className={styles.submitBtn}>Initialize Inquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}