import Link from "next/link";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div id="hauptbox" className={styles.hauptbox}>
        <div id="kopfbox-oben" className={styles.kopfbox}>
          <div id="ueberschriften-und-bild" className={styles.header}>
            <h1 className={styles.title}>MediGuide</h1>

            <h2 className={styles.subtitle}>
              <span>by lemonlabs</span>

              <img
                src="/images/lemonlabslogo_blue.png"
                alt="Lemonlabs Logo"
                className={styles.logo}
              />
            </h2>
          </div>

          <p id="einleitung" className={styles.intro}>
            Diese Anwendung unterstützt Sie bei einer ersten Einschätzung Ihrer
            Beschwerden und hilft Ihnen dabei, den geeigneten nächsten Schritt
            zu wählen.
          </p>

          <p id="warnung" className={styles.warningText}>
            Sie ersetzt keine ärztliche Diagnose und keine medizinische
            Beratung.
          </p>

          <div id="verweis-notruf" className={styles.notrufBox}>
            Bei akuten Beschwerden wie Atemnot, Bewusstlosigkeit oder starken
            Brustschmerzen wählen Sie sofort den Notruf 112.
          </div>

          <div id="button-box" className={styles.buttonBox}>
            <a href="tel:112" className={styles.emergencyButton}>
              Notfall / 112
            </a>

            <Link href="/assessment" className={styles.primaryButton}>
              Ersteinschätzung starten
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}