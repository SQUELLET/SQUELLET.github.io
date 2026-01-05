import styles from "./Pipeline.styles.module.scss";

const PIPELINE_DATA = [
  { stage: "Discovery", product: "SQU-01: Pure Melanin", status: "Complete", notes: "Extraction stabilized" },
  { stage: "Pre-clinical", product: "SQU-02: Bio-Polymer", status: "In Progress", notes: "Antioxidant assay ongoing" },
  { stage: "Pilot", product: "SQU-03: Encapsulated Complex", status: "Q4 2026", notes: "Partnering with seafood processors" },
];

export default function Pipeline() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className={styles.title}>Development Pipeline</h2>
        <div className={styles.tableWrapper}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Phase</th>
                <th>Candidate</th>
                <th>Status</th>
                <th>Milestone</th>
              </tr>
            </thead>
            <tbody>
              {PIPELINE_DATA.map((item, i) => (
                <tr key={i}>
                  <td className={styles.stage}>{item.stage}</td>
                  <td className={styles.product}>{item.product}</td>
                  <td>
                    <span className={item.status === "Complete" ? styles.statusBadgeDone : styles.statusBadgeActive}>
                      {item.status}
                    </span>
                  </td>
                  <td className={styles.notes}>{item.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}