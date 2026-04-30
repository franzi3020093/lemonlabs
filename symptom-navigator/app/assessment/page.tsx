"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Assessment.module.css";

/* 
  Step beschreibt, auf welchem Abschnitt der Ersteinschätzung
  sich die Nutzerin oder der Nutzer gerade befindet.
*/
type Step =
  | "redflags" // Schritt 1: Warnzeichen prüfen
  | "basisStart" // Schritt 2: allgemeine Basisfragen vor der Körperregion
  | "bodyRegion" // Schritt 3: Körperregion auswählen
  | "symptomChoice" // Schritt 4: Eingabeart wählen
  | "symptomInput" // Schritt 5: Symptome eingeben oder auswählen
  | "basisDetails" // Schritt 6: weitere Detailfragen
  | "result"; // Schritt 7: Ergebnis / Zusammenfassung

/* Hauptregionen der Körperkarte */
type MainRegion =
  | "Kopf & Gesicht"
  | "Hals & Nacken"
  | "Brust"
  | "Bauch"
  | "Rücken"
  | "Becken & Unterleib"
  | "Arme & Hände"
  | "Beine & Füße"
  | "Haut (gesamt)"
  | "Allgemein (ganzer Körper)";

/* Unterregionen, die nach Auswahl einer Hauptregion angezeigt werden */
type SubRegion =
  | "Kopf"
  | "Augen"
  | "Ohren"
  | "Nase"
  | "Mund / Zähne"
  | "Hals"
  | "Nacken"
  | "Brust links"
  | "Brust rechts"
  | "Oberbauch"
  | "Unterbauch"
  | "Rücken oben"
  | "Rücken unten"
  | "Becken"
  | "Genitalbereich"
  | "Schulter"
  | "Oberarm"
  | "Unterarm"
  | "Hand"
  | "Oberschenkel"
  | "Knie"
  | "Unterschenkel"
  | "Fuß"
  | "Haut allgemein"
  | "Keine bestimmte Region / mehrere Stellen";

/* Gibt an, ob Beschwerden als Freitext oder per Auswahl angegeben werden */
type InputMode = "text" | "select" | null;

/* Anfangszustand der Warnzeichen */
const emptyRedFlags = {
  chestPain: false,
  breathingProblems: false,
  unconsciousness: false,
  severeBleeding: false,
  strokeSymptoms: false,
  highFeverConfusion: false,
};

export default function AssessmentPage() {
  /* Aktueller Schritt im Formular */
  const [step, setStep] = useState<Step>("redflags");

  /* Zustand der einzelnen Warnzeichen */
  const [redFlags, setRedFlags] = useState(emptyRedFlags);

  /* Speichert, ob bewusst „Keines davon trifft zu“ gewählt wurde */
  const [noRedFlags, setNoRedFlags] = useState(false);

  /* Ausgewählte Hauptregion der Körperkarte */
  const [selectedMainRegion, setSelectedMainRegion] =
    useState<MainRegion | null>(null);

  /* Ausgewählte Unterregion passend zur Hauptregion */
  const [selectedSubRegion, setSelectedSubRegion] =
    useState<SubRegion | null>(null);

  /* Speichert, ob Freitext oder Symptomauswahl genutzt wird */
  const [inputMode, setInputMode] = useState<InputMode>(null);

  /* Freitextbeschreibung der Beschwerden */
  const [symptomText, setSymptomText] = useState("");

  /* Liste der ausgewählten Symptome */
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);

  /* Allgemeine und zusätzliche Basisdaten */
  const [basisData, setBasisData] = useState({
    age: "",
    gender: "",
    pregnancy: "",
    duration: "",
    intensity: "0", // 👈 Standardwert für Slider
  });

  /* Prüft, ob mindestens ein Warnzeichen ausgewählt wurde */
  const hasEmergency = Object.values(redFlags).some(Boolean);

  /*
    Aktualisiert ein einzelnes Warnzeichen.
    Sobald ein Warnzeichen angeklickt wird, wird „Keines davon“ deaktiviert.
  */
  function updateRedFlag(key: keyof typeof redFlags, checked: boolean) {
    setRedFlags({
      ...redFlags,
      [key]: checked,
    });

    setNoRedFlags(false);
  }

  /*
    Aktiviert oder deaktiviert „Keines davon trifft zu“.
    Wenn es aktiviert wird, werden alle Warnzeichen zurückgesetzt.
  */
  function selectNoRedFlags(checked: boolean) {
    setNoRedFlags(checked);

    if (checked) {
      setRedFlags(emptyRedFlags);
    }
  }

  /*
    Wählt eine Hauptregion aus.
    Gleichzeitig werden alte Unterregionen und Symptome zurückgesetzt,
    damit keine falschen Daten aus einer vorherigen Auswahl bleiben.
  */
  function selectMainRegion(region: MainRegion) {
    setSelectedMainRegion(region);
    setSelectedSubRegion(null);
    setInputMode(null);
    setSymptomText("");
    setSelectedSymptoms([]);
  }

  /* Speichert die ausgewählte Unterregion */
  function selectSubRegion(region: SubRegion) {
    setSelectedSubRegion(region);
  }

  /*
    Erst wenn Hauptregion und Unterregion gewählt wurden,
    geht es weiter zur Auswahl der Eingabeart.
  */
  function continueAfterRegionSelection() {
    if (selectedMainRegion && selectedSubRegion) {
      setStep("symptomChoice");
    }
  }

  /*
    Fügt ein Symptom zur Liste hinzu oder entfernt es wieder,
    wenn es bereits ausgewählt war.
  */
  function toggleSymptom(symptom: string) {
    setSelectedSymptoms((previousSymptoms) =>
      previousSymptoms.includes(symptom)
        ? previousSymptoms.filter((item) => item !== symptom)
        : [...previousSymptoms, symptom]
    );
  }

  /*
    Liefert passende Unterregionen zur ausgewählten Hauptregion.
  */
  function getSubRegions(region: MainRegion | null): SubRegion[] {
    switch (region) {
      case "Kopf & Gesicht":
        return ["Kopf", "Augen", "Ohren", "Nase", "Mund / Zähne"];

      case "Hals & Nacken":
        return ["Hals", "Nacken"];

      case "Brust":
        return ["Brust links", "Brust rechts"];

      case "Bauch":
        return ["Oberbauch", "Unterbauch"];

      case "Rücken":
        return ["Rücken oben", "Rücken unten"];

      case "Becken & Unterleib":
        return ["Becken", "Genitalbereich"];

      case "Arme & Hände":
        return ["Schulter", "Oberarm", "Unterarm", "Hand"];

      case "Beine & Füße":
        return ["Oberschenkel", "Knie", "Unterschenkel", "Fuß"];

      case "Haut (gesamt)":
        return ["Haut allgemein"];

      case "Allgemein (ganzer Körper)":
        return ["Keine bestimmte Region / mehrere Stellen"];

      default:
        return [];
    }
  }

  /*
    Liefert typische Symptome zur gewählten Unterregion.
  */
  function getSymptomsForSubRegion(region: SubRegion | null) {
    switch (region) {
      case "Kopf":
        return ["Kopfschmerzen", "Schwindel", "Übelkeit", "Druckgefühl"];

      case "Augen":
        return ["Augenschmerzen", "Rötung", "Sehstörung", "Lichtempfindlichkeit"];

      case "Ohren":
        return ["Ohrenschmerzen", "Hörminderung", "Ohrgeräusche", "Druckgefühl"];

      case "Nase":
        return ["Schnupfen", "Verstopfte Nase", "Nasenschmerzen", "Nasenbluten"];

      case "Mund / Zähne":
        return ["Zahnschmerzen", "Schmerzen im Mund", "Schwellung", "Bluten"];

      case "Hals":
        return ["Halsschmerzen", "Schluckbeschwerden", "Heiserkeit", "Schwellung"];

      case "Nacken":
        return [
          "Nackenschmerzen",
          "Steifigkeit",
          "Verspannung",
          "Bewegungseinschränkung",
        ];

      case "Brust links":
      case "Brust rechts":
        return [
          "Brustschmerzen",
          "Engegefühl",
          "Druckgefühl",
          "Schmerzen beim Atmen",
        ];

      case "Oberbauch":
        return ["Oberbauchschmerzen", "Übelkeit", "Erbrechen", "Sodbrennen"];

      case "Unterbauch":
        return ["Unterbauchschmerzen", "Durchfall", "Verstopfung", "Blähungen"];

      case "Rücken oben":
      case "Rücken unten":
        return ["Rückenschmerzen", "Verspannung", "Ausstrahlung ins Bein"];

      case "Becken":
        return ["Beckenschmerzen", "Druckgefühl", "Schmerzen beim Sitzen"];

      case "Genitalbereich":
        return ["Schmerzen", "Juckreiz oder Brennen", "Schwellung", "Ausfluss"];

      case "Schulter":
      case "Oberarm":
      case "Unterarm":
      case "Hand":
        return [
          "Schmerzen",
          "Taubheitsgefühl",
          "Schwellung",
          "Bewegungseinschränkung",
        ];

      case "Oberschenkel":
      case "Knie":
      case "Unterschenkel":
      case "Fuß":
        return ["Schmerzen", "Schwellung", "Taubheitsgefühl", "Probleme beim Gehen"];

      case "Haut allgemein":
        return ["Ausschlag", "Juckreiz", "Rötung", "Schwellung"];

      case "Keine bestimmte Region / mehrere Stellen":
        return ["Fieber", "Müdigkeit", "Schwindel", "Allgemeines Krankheitsgefühl"];

      default:
        return [];
    }
  }

  /*
    Wird beim Abschließen des Formulars ausgeführt.
    Die Daten werden aktuell nur in der Browser-Konsole ausgegeben.
  */
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = {
      redFlags,
      noRedFlags,
      selectedMainRegion,
      selectedSubRegion,
      inputMode,
      symptomText,
      selectedSymptoms,
      basisData,
    };

    console.log("Formulardaten:", formData);
    setStep("result");
  }

  return (
    <main className={styles.main}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Ersteinschätzung</h1>

        {/* ================= Schritt 1: Warnzeichen prüfen ================= */}
        {step === "redflags" && (
          <>
            <p className={styles.text}>
              Bitte prüfen Sie zuerst, ob akute Warnzeichen vorliegen.
            </p>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Warnzeichen</legend>

              {/* Einzelne Warnzeichen */}
              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={redFlags.chestPain}
                  onChange={(event) =>
                    updateRedFlag("chestPain", event.target.checked)
                  }
                />
                Starke Brustschmerzen
              </label>

              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={redFlags.breathingProblems}
                  onChange={(event) =>
                    updateRedFlag("breathingProblems", event.target.checked)
                  }
                />
                Atemnot oder starke Atemprobleme
              </label>

              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={redFlags.unconsciousness}
                  onChange={(event) =>
                    updateRedFlag("unconsciousness", event.target.checked)
                  }
                />
                Bewusstlosigkeit oder starke Benommenheit
              </label>

              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={redFlags.severeBleeding}
                  onChange={(event) =>
                    updateRedFlag("severeBleeding", event.target.checked)
                  }
                />
                Starke Blutung
              </label>

              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={redFlags.strokeSymptoms}
                  onChange={(event) =>
                    updateRedFlag("strokeSymptoms", event.target.checked)
                  }
                />
                Lähmung, Sprachstörung oder Verdacht auf Schlaganfall
              </label>

              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={redFlags.highFeverConfusion}
                  onChange={(event) =>
                    updateRedFlag("highFeverConfusion", event.target.checked)
                  }
                />
                Hohes Fieber mit Verwirrtheit
              </label>

              {/* Gegenoption: keine Warnzeichen */}
              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={noRedFlags}
                  onChange={(event) => selectNoRedFlags(event.target.checked)}
                />
                Keines davon trifft zu
              </label>
            </fieldset>

            {/* Notfallhinweis erscheint sofort, wenn ein Warnzeichen angeklickt wurde */}
            {hasEmergency && (
              <div className={styles.emergencyBox}>
                <h2 className={styles.emergencyTitle}>Notfallhinweis</h2>

                <p>
                  Bei diesen Beschwerden sollten Sie sofort den Notruf wählen.
                </p>

                <a href="tel:112" className={styles.emergencyButton}>
                  112 anrufen
                </a>
              </div>
            )}

            {/* Weiter geht es nur, wenn keine Warnzeichen vorliegen */}
            {!hasEmergency && (
              <button
                type="button"
                className={styles.primaryButton}
                onClick={() => setStep("basisStart")}
                disabled={!noRedFlags}
              >
                Weiter
              </button>
            )}
          </>
        )}

        {/* ================= Schritt 2: Basisfragen vor der Körperregion ================= */}
        {step === "basisStart" && (
          <>
            <p className={styles.text}>
              Bitte machen Sie zuerst einige allgemeine Angaben.
            </p>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Allgemeine Angaben</legend>

              {/* Alter wird vor der Körperregion abgefragt */}
              <label className={styles.formLabel}>
                Alter
                <input
                  className={styles.input}
                  type="number"
                  min="0"
                  value={basisData.age}
                  onChange={(event) =>
                    setBasisData({ ...basisData, age: event.target.value })
                  }
                  placeholder="Zum Beispiel: 25"
                />
              </label>

              {/* Geschlecht wird vor der Körperregion abgefragt */}
              <label className={styles.formLabel}>
                Geschlecht
                <select
                  className={styles.input}
                  value={basisData.gender}
                  onChange={(event) =>
                    setBasisData({
                      ...basisData,
                      gender: event.target.value,

                      /*
                        Wenn nicht „weiblich“ gewählt wird,
                        wird pregnancy geleert und später nicht angezeigt.
                      */
                      pregnancy:
                        event.target.value === "weiblich"
                          ? basisData.pregnancy
                          : "",
                    })
                  }
                >
                  <option value="">Bitte auswählen</option>
                  <option value="weiblich">Weiblich</option>
                  <option value="männlich">Männlich</option>
                  <option value="divers">Divers</option>
                  <option value="keine Angabe">Keine Angabe</option>
                </select>
              </label>

              {/* Schwangerschaft/Stillzeit erscheint nur bei Geschlecht „weiblich“ */}
              {basisData.gender === "weiblich" && (
                <label className={styles.formLabel}>
                  Schwangerschaft oder Stillzeit
                  <select
                    className={styles.input}
                    value={basisData.pregnancy}
                    onChange={(event) =>
                      setBasisData({
                        ...basisData,
                        pregnancy: event.target.value,
                      })
                    }
                  >
                    <option value="">Bitte auswählen</option>
                    <option value="ja">Ja</option>
                    <option value="nein">Nein</option>
                    <option value="keine Angabe">Keine Angabe</option>
                  </select>
                </label>
              )}
            </fieldset>

            <button
              type="button"
              className={styles.primaryButton}
              onClick={() => setStep("bodyRegion")}
              disabled={
                !basisData.age ||
                !basisData.gender ||
                (basisData.gender === "weiblich" && !basisData.pregnancy)
              }
            >
              Weiter zur Körperregion
            </button>
          </>
        )}

        {/* ================= Schritt 3: Körperregion auswählen ================= */}
        {/* ================= Schritt 3: Körperbild-Platzhalter ================= */}
        {step === "bodyRegion" && (
          <>
            <p className={styles.text}>Körperbild noch in Bearbeitung</p>

            <button
              type="button"
              className={styles.primaryButton}
              onClick={() => setStep("symptomChoice")}
            >
              Weiter
            </button>
          </>
        )}

        {/* ================= Schritt 4: Eingabeart wählen ================= */}
        {step === "symptomChoice" && (
          <>
            <p className={styles.text}>
              Ausgewählte Region: <strong>{selectedSubRegion}</strong>
            </p>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>
                Wie möchten Sie Ihre Beschwerden angeben?
              </legend>

              <div className={styles.quickSelect}>
                {/* Freitextmodus aktivieren */}
                <button
                  type="button"
                  className={styles.regionButton}
                  onClick={() => {
                    setInputMode("text");
                    setStep("symptomInput");
                  }}
                >
                  Freitext eingeben
                </button>

                {/* Auswahlmodus aktivieren */}
                <button
                  type="button"
                  className={styles.regionButton}
                  onClick={() => {
                    setInputMode("select");
                    setStep("symptomInput");
                  }}
                >
                  Symptome auswählen
                </button>
              </div>
            </fieldset>
          </>
        )}

        {/* ================= Schritt 5: Symptome eingeben oder auswählen ================= */}
        {step === "symptomInput" && (
          <>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Beschwerden</legend>
        
              {/* Freitextfeld */}
              {inputMode === "text" && (
                <>
                  <label className={styles.formLabel}>
                    Beschreiben Sie Ihre Beschwerden:
                    <textarea
                      className={styles.input}
                      value={symptomText}
                      onChange={(event) => setSymptomText(event.target.value)}
                      placeholder="Beschreiben Sie Ihre Symptome..."
                      maxLength={1000}
                    />
        
                    <span className={styles.characterCounter}>
                      {symptomText.length}/1000 Zeichen
                    </span>
                  </label>
        
                  {/* 👉 NEUER BUTTON */}
                  <button
                    type="button"
                    className={styles.primaryButton}
                    onClick={() => console.log("Freitext abgeschickt:", symptomText)}
                  >
                    Weiter
                  </button>
                </>
              )}
        
              {/* Katzen-Frage */}
              {inputMode === "select" && (
                <>
                  <p className={styles.text}>Hast du eine Katze?</p>
        
                  <label className={styles.label}>
                    <input type="radio" name="katze" value="ja" />
                    Ja
                  </label>
        
                  <label className={styles.label}>
                    <input type="radio" name="katze" value="nein" />
                    Nein
                  </label>
        
                  {/* 👉 NEUER BUTTON */}
                  <button
                    type="button"
                    className={styles.primaryButton}
                    onClick={() => console.log("Katze beantwortet")}
                  >
                    Weiter
                  </button>
                </>
              )}
            </fieldset>
          </>
        )}
        
      </form>
    </main>
  );
}
