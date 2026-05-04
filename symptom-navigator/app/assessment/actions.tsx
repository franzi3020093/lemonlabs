// server side actions for assessment page
"use server"

import { connectionPool } from "../db"; // for database queries
import { cookies } from 'next/headers' // for cookies
import { randomUUID } from 'crypto'; // for generating access codes for the db data
import { NextResponse } from 'next/server'; // for redirecting and returning json responses in this case mainly ai responses

// function to save form data in variables and query to write to the db
export async function saveFormData(formData: FormData, redFlags: any, selectedRegion: any) {

    // form data is saved in variables and converted to the correct type
    const age = parseInt(formData.get("age") as string);

    //test log
    console.log("test:", formData.toString());
    console.log("redFlags:", redFlags);
    console.log("selectedRegion:", selectedRegion);

    // generate uuid as access code for the db data later on
    const accessCode = randomUUID();

    // schreiben der Daten in die DB und return der ID zum Abruf auf assesment
    const dbReturn = await connectionPool.query(
        `
        Insert into cases (age)
        VALUES ($1)

        returning case_id
        `,
        [age]
    );

    // test logs
    console.log("Formulardaten in DB gespeichert");
    console.log("DB Rückgabe:", dbReturn);

    // set cookie to acess later on
    const sessionCookie = await cookies();
    sessionCookie.set({name: 'caseId', value: dbReturn.rows[0].patient_id, httpOnly: true, path: '/' });
}

//funktion zum holen der Daten aus der DB und in eine Variable speichern, prevState ist, um die Daten bei Ausgabe verwenden zu können, über formData wird accessCode übergeben
export async function getDBData(prevState: any, formData: FormData) {

// DB query
const DatenAusDB = await connectionPool.query(`
    SELECT * FROM cases
    WHERE case_id = ${parseInt(formData.get("accessCode") as string)}
    `
);
// test log und Abfangen von "inkorrekten" Eingaben, sowie Rückgabe der Daten, falls vorhanden
  if (DatenAusDB.rows.length > 0) {
  console.log("Abfrageergebnis:", DatenAusDB);
  return DatenAusDB.rows[0];
  } else {
    console.log("Keine Daten");
    return null;
  }
}