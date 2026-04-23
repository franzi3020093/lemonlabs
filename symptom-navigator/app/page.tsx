export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f9fc",
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
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "32px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          {/* Überschrift */}
          <h1
            style={{
              marginBottom: "16px",
              color: "#000000",
              fontSize: "2.2rem",
              fontWeight: "700",
            }}
          >
            KI-Symptom-Navigator
          </h1>

          {/* Beschreibung */}
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
              marginBottom: "20px",
              lineHeight: "1.6",
              color: "#000000",
              fontSize: "1.05rem",
            }}
          >
            Sie ersetzt keine ärztliche Diagnose und keine medizinische
            Beratung.
          </p>

          {/* Warnhinweis */}
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

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button
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
        </div>
      </div>
    </main>
  );
}