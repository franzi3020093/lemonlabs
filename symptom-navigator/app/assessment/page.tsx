"use client";

import { useState } from "react";
import styles from "./Assessment.module.css";

type Step = "redflags" | "basisStart" | "bodyRegion" | "basisDetails";

type Region =
  | "Kopf"
  | "Hals"
  | "Brust"
  | "Bauch"
  | "Rücken"
  | "Arm / Hand"
  | "Bein / Fuß"
  | "Haut"
  | "Allgemeine Beschwerden";

export default function AssessmentPage() {
  const [step, setStep] = useState<Step>("redflags");

  const [redFlags, setRedFlags] = useState({
    chestPain: false,
    breathingProblems: false,
    unconsciousness: false,
    severeBleeding: false,
    strokeSymptoms: false,
    highFeverConfusion: false,
  });

  const [basisData, setBasisData] = useState({
    age: "",
    gender: "",
    pregnantOrBreastfeeding: "",
    preExistingConditions: "",
    regularMedication: "",
    symptomStart: "",
    symptomStrength: "",
    generalCondition: "",
  });

  const [selectedRegion, setSelectedRegion] = useState<Region | "">("");

  const handleRedFlagChange = (key: keyof typeof redFlags) => {
    setRedFlags((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const isEmergency = Object.values(redFlags).some(Boolean);

  return (
    <main className={styles.main}>
      <form className={styles.card} onSubmit={(e) => e.preventDefault()}>
        <h1 className={styles.title}>Ersteinschätzung</h1>

        {step === "redflags" && (
          <>
            <p className={styles.text}>
              Bitte beantworten Sie zuerst die folgenden Sicherheitsfragen.
            </p>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>
                Trifft eines der folgenden Symptome zu?
              </legend>

              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={redFlags.chestPain}
                  onChange={() => handleRedFlagChange("chestPain")}
                />
                Starke Brustschmerzen oder Druck auf der Brust
              </label>

              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={redFlags.breathingProblems}
                  onChange={() => handleRedFlagChange("breathingProblems")}
                />
                Atemnot oder schwere Atemprobleme
              </label>

              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={redFlags.unconsciousness}
                  onChange={() => handleRedFlagChange("unconsciousness")}
                />
                Bewusstlosigkeit oder starke Verwirrtheit
              </label>

              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={redFlags.severeBleeding}
                  onChange={() => handleRedFlagChange("severeBleeding")}
                />
                Starke, nicht stoppbare Blutung
              </label>

              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={redFlags.strokeSymptoms}
                  onChange={() => handleRedFlagChange("strokeSymptoms")}
                />
                Lähmung, Sprachprobleme oder Verdacht auf Schlaganfall
              </label>

              <label className={styles.label}>
                <input
                  type="checkbox"
                  checked={redFlags.highFeverConfusion}
                  onChange={() => handleRedFlagChange("highFeverConfusion")}
                />
                Hohes Fieber mit Wesensveränderung oder Verwirrtheit
              </label>
            </fieldset>

            {isEmergency ? (
              <div className={styles.emergencyBox}>
                <h2 className={styles.emergencyTitle}>
                  ⚠️ Möglicher Notfall
                </h2>

                <p>
                  Ihre Angaben deuten auf einen möglichen medizinischen Notfall
                  hin. Bitte wählen Sie sofort den Notruf.
                </p>

                <a href="tel:112" className={styles.emergencyButton}>
                  Notruf 112 wählen
                </a>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setStep("basisStart")}
                className={styles.primaryButton}
              >
                Weiter mit der Ersteinschätzung
              </button>
            )}
          </>
        )}

        {step === "basisStart" && (
          <>
            <p className={styles.text}>
              Bitte geben Sie zunächst einige grundlegende Angaben an.
            </p>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>Grundangaben</legend>

              <label className={styles.formLabel}>
                Alter
                <input
                  type="number"
                  min="0"
                  max="120"
                  value={basisData.age}
                  onChange={(e) =>
                    setBasisData({ ...basisData, age: e.target.value })
                  }
                  placeholder="z. B. 27"
                  className={styles.input}
                />
              </label>

              <label className={styles.formLabel}>
                Geschlecht
                <select
                  value={basisData.gender}
                  onChange={(e) =>
                    setBasisData({
                      ...basisData,
                      gender: e.target.value,
                      pregnantOrBreastfeeding: "",
                    })
                  }
                  className={styles.input}
                >
                  <option value="">Bitte auswählen</option>
                  <option value="female">Weiblich</option>
                  <option value="male">Männlich</option>
                  <option value="diverse">Divers</option>
                  <option value="noAnswer">Keine Angabe</option>
                </select>
              </label>

              {basisData.gender === "female" && (
                <label className={styles.formLabel}>
                  Sind Sie schwanger oder stillend?
                  <select
                    value={basisData.pregnantOrBreastfeeding}
                    onChange={(e) =>
                      setBasisData({
                        ...basisData,
                        pregnantOrBreastfeeding: e.target.value,
                      })
                    }
                    className={styles.input}
                  >
                    <option value="">Bitte auswählen</option>
                    <option value="pregnant">Schwanger</option>
                    <option value="breastfeeding">Stillend</option>
                    <option value="no">Nein</option>
                    <option value="unknown">Unsicher</option>
                  </select>
                </label>
              )}
            </fieldset>

            <button
              type="button"
              onClick={() => setStep("bodyRegion")}
              className={styles.primaryButton}
            >
              Weiter zur Körperregion-Auswahl
            </button>
          </>
        )}

        {step === "bodyRegion" && (
          <>
            <p className={styles.text}>
              Bitte tippen Sie auf die Körperregion, in der Ihre Beschwerden
              auftreten.
            </p>

            <div className={styles.bodyWrapper}>
              <img
                src="/images/body-image.png"
                alt="Menschlicher Körper zur Auswahl der Körperregion"
                className={styles.bodyImage}
              />

              <RegionHotspot
                label="Kopf"
                region="Kopf"
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                top="5%"
                left="50%"
              />

              <RegionHotspot
                label="Hals"
                region="Hals"
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                top="18%"
                left="50%"
              />

              <RegionHotspot
                label="Brust"
                region="Brust"
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                top="31%"
                left="50%"
              />

              <RegionHotspot
                label="Bauch"
                region="Bauch"
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                top="45%"
                left="50%"
              />

              <RegionHotspot
                label="Arm"
                region="Arm / Hand"
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                top="38%"
                left="22%"
              />

              <RegionHotspot
                label="Arm"
                region="Arm / Hand"
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                top="38%"
                left="78%"
              />

              <RegionHotspot
                label="Beine"
                region="Bein / Fuß"
                selectedRegion={selectedRegion}
                setSelectedRegion={setSelectedRegion}
                top="72%"
                left="50%"
              />
            </div>

            <div className={styles.quickSelect}>
              {(["Haut", "Allgemeine Beschwerden"] as Region[]).map(
                (region) => (
                  <button
                    key={region}
                    type="button"
                    onClick={() => setSelectedRegion(region)}
                    className={`${styles.regionButton} ${
                      selectedRegion === region ? styles.selectedRegion : ""
                    }`}
                  >
                    {region}
                  </button>
                )
              )}
            </div>

            {selectedRegion && (
              <div className={styles.resultBox}>
                <p className={styles.selectedText}>
                  Ausgewählte Körperregion: {selectedRegion}
                </p>

                <button
                  type="button"
                  onClick={() => setStep("basisDetails")}
                  className={styles.continueButton}
                >
                  Weiter zu den Zusatzfragen
                </button>
              </div>
            )}
          </>
        )}

        {step === "basisDetails" && (
          <>
            <p className={styles.text}>
              Diese zusätzlichen Angaben sind optional und helfen dabei, die
              Ersteinschätzung genauer einzuordnen.
            </p>

            <fieldset className={styles.fieldset}>
              <legend className={styles.legend}>
                Zusätzliche Informationen
              </legend>

              <label className={styles.formLabel}>
                Haben Sie relevante Vorerkrankungen?
                <select
                  value={basisData.preExistingConditions}
                  onChange={(e) =>
                    setBasisData({
                      ...basisData,
                      preExistingConditions: e.target.value,
                    })
                  }
                  className={styles.input}
                >
                  <option value="">Überspringen</option>
                  <option value="no">Nein</option>
                  <option value="yes">Ja</option>
                  <option value="unknown">Unsicher</option>
                </select>
              </label>

              <label className={styles.formLabel}>
                Nehmen Sie regelmäßig Medikamente ein?
                <select
                  value={basisData.regularMedication}
                  onChange={(e) =>
                    setBasisData({
                      ...basisData,
                      regularMedication: e.target.value,
                    })
                  }
                  className={styles.input}
                >
                  <option value="">Überspringen</option>
                  <option value="no">Nein</option>
                  <option value="yes">Ja</option>
                  <option value="unknown">Unsicher</option>
                </select>
              </label>

              <label className={styles.formLabel}>
                Seit wann bestehen die Beschwerden?
                <select
                  value={basisData.symptomStart}
                  onChange={(e) =>
                    setBasisData({
                      ...basisData,
                      symptomStart: e.target.value,
                    })
                  }
                  className={styles.input}
                >
                  <option value="">Überspringen</option>
                  <option value="minutes_hours">Seit Minuten / Stunden</option>
                  <option value="today">Seit heute</option>
                  <option value="days">Seit mehreren Tagen</option>
                  <option value="longer">Schon länger</option>
                </select>
              </label>

              <label className={styles.formLabel}>
                Wie stark sind die Beschwerden? (1 = leicht, 10 = sehr stark)
                <input
                  type="number"
                  min="1"
                  max="10"
                  value={basisData.symptomStrength}
                  onChange={(e) =>
                    setBasisData({
                      ...basisData,
                      symptomStrength: e.target.value,
                    })
                  }
                  placeholder="Optional: 1 bis 10"
                  className={styles.input}
                />
              </label>

              <label className={styles.formLabel}>
                Fühlen Sie sich insgesamt stark beeinträchtigt?
                <select
                  value={basisData.generalCondition}
                  onChange={(e) =>
                    setBasisData({
                      ...basisData,
                      generalCondition: e.target.value,
                    })
                  }
                  className={styles.input}
                >
                  <option value="">Überspringen</option>
                  <option value="no">Nein</option>
                  <option value="yes">Ja</option>
                  <option value="unknown">Unsicher</option>
                </select>
              </label>
            </fieldset>

            <button
              type="button"
              className={styles.primaryButton}
              onClick={() => {
                console.log({
                  redFlags,
                  basisData,
                  selectedRegion,
                });
              }}
            >
              Auswertung starten
            </button>
          </>
        )}
      </form>
    </main>
  );
}

type RegionHotspotProps = {
  label: string;
  region: Region;
  selectedRegion: Region | "";
  setSelectedRegion: (region: Region) => void;
  top: string;
  left: string;
};

function RegionHotspot({
  label,
  region,
  selectedRegion,
  setSelectedRegion,
  top,
  left,
}: RegionHotspotProps) {
  const selected = selectedRegion === region;

  return (
    <button
      type="button"
      aria-label={`Körperregion ${region} auswählen`}
      onClick={() => setSelectedRegion(region)}
      className={`${styles.hotspot} ${selected ? styles.selectedHotspot : ""}`}
      style={{ top, left }}
    >
      {label}
    </button>
  );
}