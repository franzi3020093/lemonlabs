import Link from "next/link";
import { saveAlreadyVisited } from './actions';

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#FFFFFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          width: "100%",
          textAlign: "center",
        }}
      >
        <div
          id="Start-Kasten"
          style={{
            background: "#f2f8fc",
            borderRadius: "16px",
            padding: "32px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          <div
            id="UeberschriftenUndBild"
            style={{
              marginBottom: "4vh",
            }}
          >
            <h1
              style={{
                color: "#000000",
                fontFamily: "Arial Black, Arial, sans-serif",
                fontSize: "4rem",
                fontWeight: "700",
                marginBottom: "0",
              }}
            >
              MediGuide
            </h1>

            <h2
              style={{
                color: "#778899",
                fontSize: "2rem",
                fontWeight: "350",
                marginTop: "-1vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <span>by lemonlabs</span>

              <img
                src="/images/lemonlabslogo_blue.png"
                alt="Lemonlabs Logo"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
              />
            </h2>
          </div>

          <p
            style={{
              marginBottom: "12px",
              lineHeight: "1.6",
              color: "#000000",
              fontSize: "1.05rem",
            }}
          >
            Diese Anwendung unterstützt Sie bei einer ersten Einschätzung Ihrer
            Beschwerden und hilft Ihnen dabei, den geeigneten nächsten Schritt
            zu wählen.
          </p>

          <p
            style={{
              color: "#000000",
              fontSize: "1rem",
              marginBottom: "14px",
              fontWeight: 900,
              //WebkitTextStroke: "0.3px #000000",
            }}
          >
            Sie ersetzt keine ärztliche Diagnose und keine medizinische
            Beratung.
          </p>

          <div
            style={{
              background: "#fff4e5",
              color: "#92400e",
              padding: "14px",
              borderRadius: "10px",
              marginBottom: "24px",
              lineHeight: "1.6",
              fontSize: "0.98rem",
            }}
          >
            Bei akuten Beschwerden wie Atemnot, Bewusstlosigkeit oder starken
            Brustschmerzen wählen Sie sofort den Notruf 112.
          </div>
          <form action={saveAlreadyVisited}>
          <fieldset
            style={{
              border: "1px solid #d1d5db",
              borderRadius: "12px",
              padding: "18px",
              marginBottom: "24px",
              textAlign: "left",
            }}
          >
            <legend
              style={{
                fontWeight: 700,
                color: "#000000",
                padding: "0 8px",
              }}
            >
              Waren Sie wegen dieser Symptome bereits beim Arzt?
            </legend>

            <p
              style={{
                color: "#000000",
                fontSize: "1rem",
                marginBottom: "14px",
                fontWeight: 900,
                //WebkitTextStroke: "0.3px #000000",
              }}
            >
              Diese Angabe hilft dabei, die Ersteinschätzung besser einzuordnen.
            </p>

            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#000000",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <input
                type="radio"
                name="alreadyVisitedDoctor"
                value="true"
              />
              Ja, ich war bereits beim Arzt.
            </label>

            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#000000",
                cursor: "pointer",
              }}
            >
              <input
                type="radio"
                name="alreadyVisitedDoctor"
                value="false"
              />
              Nein, ich war noch nicht beim Arzt.
            </label>
          </fieldset>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
              type="submit"
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              Ersteinschätzung starten
            </button>

            <button
              type="button"
              style={{
                background: "#dc2626",
                color: "white",
                border: "none",
                padding: "12px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: 600,
              }}
            >
              Notfall / 112
            </button>
          </div>
          </form>
        </div>
      </div>
    </main>
  );
}
