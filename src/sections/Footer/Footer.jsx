import styles from "./Footer.styles.module.scss";

const REFERENCES = [
  { 
    text: "Chen, S., et al. (2023). Antioxidant behavior of melanin from squid ink. PMC10648800.", 
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10648800/" 
  },
  { 
    text: "Zuo, R., et al. (2020). Polysaccharides and oxidative stress regulation. Frontiers in Pharma.", 
    url: "https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2020.01021/full" 
  },
  { 
    text: "Takaya, Y., et al. (1996). Illexins A, B, and C: Polysaccharide compositions from SIP.", 
    url: "https://pubmed.ncbi.nlm.nih.gov/8904812/" 
  },
  { 
    text: "Liu, H., et al. (2011). Free radical scavenging activities of cephalopod melanin.", 
    url: "https://pubmed.ncbi.nlm.nih.gov/21268535/" 
  }
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div>
            <h2 className={styles.logo}>SQUELLET™</h2>
            <p>Next-gen marine upcycling for human resilience.</p>
          </div>
          <div className={styles.contact}>
            <p>Partnering Inquiry: <strong>partners@squellet.io</strong></p>
            <p>Based in: <strong>Seafood Innovation Labs, 2026</strong></p>
          </div>
        </div>
        
        <div className={styles.references}>
          <h3>Scientific Appendix</h3>
           <ul>
            {REFERENCES.map((ref, i) => (
              <li key={i}>
                <a href={ref.url} target="_blank" rel="noopener noreferrer">
                  {ref.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div className={styles.bottom}>
          <p>© 2026 Squellet Bioactives. All rights reserved. NSF I-Corps Track.</p>
        </div>
      </div>
    </footer>
  );
}