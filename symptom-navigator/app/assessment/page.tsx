import { getAlreadyVisited } from "../actions";

export default function AssessmentPage() {
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
          style={{
            background: "#f2f8fc",
            borderRadius: "16px",
            padding: "32px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          <h1
            style={{
              color: "#000000",
              fontFamily: "Arial Black, Arial, sans-serif",
              fontSize: "3rem",
              fontWeight: "700",
              marginBottom: "16px",
            }}
          >
            Noch in Bearbeitung
          </h1>

          <p
            style={{
              color: "#000000",
              fontSize: "1.05rem",
              lineHeight: "1.6",
            }}
          >
            Diese Seite wird aktuell noch entwickelt.
          </p>
          <form action={getAlreadyVisited}>
            <label style={{
              color: "#000000",
              fontSize: "1.05rem",
              lineHeight: "1.6",
            }}
             htmlFor="textfeld">Hier ID fuer DB zugriff eingeben: </label>
            <input style={{
              color: "#000000",
              fontSize: "1.05rem",
              lineHeight: "1.6",
              backgroundColor: "#dadada",
              margin: "8px"
            }}
            type="text" id="textfeld" name="textfeld"/>
            <button style={{
              color: "#000000",
              fontSize: "1.05rem",
              lineHeight: "1.6",
              border: "solid",
              borderRadius: "8px",
              marginTop: "16px",
            }}
              type="submit"> bestaetigen </button>
          </form>
        </div>
      </div>
    </main>
  );
}