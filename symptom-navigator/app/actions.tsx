"use server"
import { redirect } from "next/navigation";
import { sql } from "./lib/db";

// funktion zum speichern der formulardaten in einer variable und query zum schreiben in die neon db
export async function saveAlreadyVisited(formData: FormData) {
  const alreadyVisited = formData.get("alreadyVisitedDoctor");
  console.log("test:", alreadyVisited);

  const alreadyVisitedBool = (alreadyVisited === "true");

  // schreiben der Daten in die DB und return der ID zum Abruf auf assesment
  const id = await sql`
    INSERT INTO test (alreadyvisited)
    VALUES (${alreadyVisitedBool})
    RETURNING id
  `;
  console.log("getAlreadyVisited gespeichert");
  console.log(id);

  redirect(`/assessment?id=${id[0].id}`);
}

//funktion zum holen der Daten aus der DB und in eine Variable speichern
export async function getAlreadyVisited(prevState: any, formData: FormData) {
  const id = formData.get("textfeld");
  const DatenAusDB = await sql`
    SELECT alreadyvisited
    FROM test
    WHERE id = ${id}
    ORDER BY id DESC
    LIMIT 1
  `;
  if (DatenAusDB.length > 0) {
  const alreadyVisited = DatenAusDB[0].alreadyvisited;
  console.log("Abfrageergebnis:", alreadyVisited);
  return alreadyVisited;
  } else {
    console.log("Keine Daten gefunden für ID:", id);
    return null;
  }
}

export async function sendPrompt(formData: FormData) {
  const prompt = formData.get("textfeld");
}

