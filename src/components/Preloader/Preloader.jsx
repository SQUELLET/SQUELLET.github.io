import { useEffect, useState } from "react";
import styles from "./Preloader.styles.module.scss";

export default function Preloader() {
  const [loadingText, setLoadingText] = useState("Initializing Labs...");

  useEffect(() => {
    const sequence = [
      "Calibrating molecular weights...",
      "Extracting cephalopod melanin...",
      "Synthesizing bioactive polymers...",
      "SQUELLET™ Ready."
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      setLoadingText(sequence[i]);
      i = (i + 1) % sequence.length;
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.overlay}>
      <div className={styles.inkDrop}></div>
      <p className={styles.text}>{loadingText}</p>
    </div>
  );
}