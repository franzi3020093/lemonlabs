"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Assessment.module.css";

/* 
  Step beschreibt, auf welchem Abschnitt der Ersteinschätzung
  sich die Nutzerin oder der Nutzer gerade befindet.
*/
type Step =
  | "redflags"
  | "basisStart"
  | "bodyRegion"
  | "symptomChoice"
  | "symptomInput"
  | "basisDetails"
  | "result";

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

type InputMode = "text" | "select" | null;

const emptyRedFlags = {
  chestPain: false,
  breathingProblems: false,
  unconsciousness: false,
  severeBleeding: false,
  strokeSymptoms: false,
  highFeverConfusion: false,
};

export default function AssessmentPage() {
  const [step, setStep] = useState<Step>("redflags");
  const [redFlags, setRedFlags] = useState(emptyRedFlags);
  const [noRedFlags, setNoRedFlags] = useState(false);

  const [selectedMainRegion, setSelectedMainRegion] =
    useState<MainRegion | null>(null);

  const [selectedSubRegion, setSelectedSubRegion] =
    useState<SubRegion | null>(null);

  const [inputMode, setInputMode] = useState<InputMode>(null);
  const [symptomText, setSymptomText] = useState("");
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [catAnswer, setCatAnswer] = useState("");

  const [basisData, setBasisData] = useState({
    age: "",
    gender: "",
    pregnancy: "",
    duration: "",
    intensity: "0",
  });

  const hasEmergency = Object.values(redFlags).some(Boolean);

  function updateRedFlag(key: keyof typeof redFlags, checked: boolean) {
    setRedFlags({
      ...redFlags,
      [key]: checked,
    });

    setNoRedFlags(false);
  }

  function selectNoRedFlags(checked: boolean) {
    setNoRedFlags(checked);

    if (checked) {
      setRedFlags(emptyRedFlags);
    }
  }

  function selectMainRegion(region: MainRegion) {
    setSelectedMainRegion(region);
    setSelectedSubRegion(null);
    setInputMode(null);
    setSymptomText("");
    setSelectedSymptoms([]);
  }

  function selectSubRegion(region: SubRegion) {
    setSelectedSubRegion(region);
  }

  function continueAfterRegionSelection() {
    setStep("symptomChoice");
  }

  function toggleSymptom(symptom: string) {
    setSelectedSymptoms((previousSymptoms) =>
      previousSymptoms.includes(symptom)
        ? previousSymptoms.filter((item) => item !== symptom)
        : [...previousSymptoms, symptom]
    );
  }

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
      catAnswer,
      basisData,
    };

    console.log("Formulardaten:", formData);
    setStep("result");
  }

  return (
    <main className={styles.main}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <h1 className={styles.title}>Ersteinschätzung</h1>

        {step === "redflags" && (
          <>
            <p className={styles.text}>
              Bitte prüfen Sie zuerst, ob akute Warnzeichen vorliegen.
            </p>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Warnzeichen</legend>

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

              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={noRedFlags}
                  onChange={(event) => selectNoRedFlags(event.target.checked)}
                />
                Keines davon trifft zu
              </label>
            </fieldset>

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

        {step === "basisStart" && (
          <>
            <p className={styles.text}>
              Bitte machen Sie zuerst einige allgemeine Angaben.
            </p>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Allgemeine Angaben</legend>

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

              <label className={styles.formLabel}>
                Geschlecht
                <select
                  className={styles.input}
                  value={basisData.gender}
                  onChange={(event) =>
                    setBasisData({
                      ...basisData,
                      gender: event.target.value,
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

        {step === "bodyRegion" && (
          <>
            <p className={styles.text}>
              Klicken Sie auf eine Hauptregion und wählen Sie danach die
              passende Unterregion aus.
            </p>

            <div className={styles.bodyWrapper}>
              <p className={styles.selectedText}>Noch in Bearbeitung</p>
            </div>

            <button
              type="button"
              className={styles.primaryButton}
              onClick={continueAfterRegionSelection}
            >
              Weiter
            </button>
          </>
        )}

        {step === "symptomChoice" && (
          <>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>
                Wie möchten Sie Ihre Beschwerden angeben?
              </legend>

              <div className={styles.quickSelect}>
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

        {step === "symptomInput" && (
          <>
            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Beschwerden</legend>

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

                  <button
                    type="button"
                    className={styles.primaryButton}
                    onClick={() => {
                      console.log("Freitext abgeschickt:", symptomText);
                      setStep("result");
                    }}
                    disabled={symptomText.trim().length === 0}
                  >
                    Freitext abschicken
                  </button>
                </>
              )}

              {inputMode === "select" && (
                <>
                  <p className={styles.text}>Besitzt du eine Hauskatze?</p>

                  <div className={styles.quickSelect}>
                    <button
                      type="button"
                      className={styles.regionButton}
                      onClick={() => {
                        setCatAnswer("ja");
                        console.log("Hauskatze:", "ja");
                        setStep("result");
                      }}
                    >
                      Ja
                    </button>

                    <button
                      type="button"
                      className={styles.regionButton}
                      onClick={() => {
                        setCatAnswer("nein");
                        console.log("Hauskatze:", "nein");
                        setStep("result");
                      }}
                    >
                      Nein
                    </button>
                  </div>
                </>
              )}
            </fieldset>
          </>
        )}

        {step === "result" && (
          <div className={styles.resultBox}>
            <p className={styles.selectedText}>Ihre Angaben wurden erfasst.</p>

            <p>
              Alter: <strong>{basisData.age}</strong>
            </p>

            <p>
              Geschlecht: <strong>{basisData.gender}</strong>
            </p>

            {basisData.gender === "weiblich" && (
              <p>
                Schwangerschaft oder Stillzeit:{" "}
                <strong>{basisData.pregnancy}</strong>
              </p>
            )}

            {inputMode === "text" && (
              <p>
                Beschreibung: <strong>{symptomText}</strong>
              </p>
            )}

            {inputMode === "select" && (
              <p>
                Hauskatze: <strong>{catAnswer}</strong>
              </p>
            )}

            <Link href="/" className={styles.continueButton}>
              Zur Startseite
            </Link>
          </div>
        )}
      </form>
    </main>
  );
}
