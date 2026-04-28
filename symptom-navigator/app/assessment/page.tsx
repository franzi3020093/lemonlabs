"use client"
import { Suspense } from "react";
import ReadDataForm from "./readDataForm";
import SendPromtForm from "./sendPromtForm";

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
          <ReadDataForm />
          <SendPromtForm />
        </div>
      </div>
    </main>
  );
}
