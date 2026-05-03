// Next.js Link-Komponente für clientseitige Navigation
import Link from "next/link";

// Import der lokalen CSS-Module für das Styling dieser Seite
import styles from "./Home.module.css";

// Hauptkomponente der Startseite
export default function Home() {
  return (
    // Haupt-Layout-Container (zentriert den Inhalt auf der Seite)
    <main className={styles.main}>
      
      {/* Begrenzter Inhaltsbereich (max. Breite + zentriert) */}
      <div className={styles.hauptbox}>
        
        {/* Visuelle Karte / Box mit Hintergrund, Schatten und Padding */}
        <div className={styles.kopfbox}>
          
          {/* Header-Bereich mit Titel, Untertitel und Logo */}
          <div className={styles.header}>
            
            {/* Haupttitel der Anwendung */}
            <h1 className={styles.title}>MediGuide</h1>

            {/* Untertitel + Logo */}
            <h2 className={styles.subtitle}>
              <span>by lemonlabs</span>

              {/* Logo-Bild */}
              <img
                src="/images/lemonlabslogo_blue.png"
                alt="Lemonlabs Logo"
                className={styles.logo}
              />
            </h2>
          </div>

          {/* Kurze Einführung zur Funktion der Anwendung */}
          <p className={styles.intro}>
            Diese Anwendung unterstützt Sie bei einer ersten Einschätzung Ihrer
            Beschwerden und hilft Ihnen dabei, den geeigneten nächsten Schritt
            zu wählen.
          </p>

          {/* Wichtiger Hinweis (keine medizinische Beratung) */}
          <p className={styles.warningText}>
            Sie ersetzt keine ärztliche Diagnose und keine medizinische
            Beratung.
          </p>

          {/* Hervorgehobener Notfall-Hinweis */}
          <div className={styles.notrufBox}>
            Bei akuten Beschwerden wie Atemnot, Bewusstlosigkeit oder starken
            Brustschmerzen wählen Sie sofort den Notruf 112.
          </div>

          {/* Button-Bereich */}
          <div className={styles.buttonBox}>
            
            {/* Direktwahl-Button für den Notruf (funktioniert auf mobilen Geräten) */}
            <a href="tel:112" className={styles.emergencyButton}>
              Notfall / 112
            </a>

            {/* Navigation zur Ersteinschätzung (interne Seite) */}
            <Link href="/assessment" className={styles.primaryButton}>
              Ersteinschätzung starten
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
