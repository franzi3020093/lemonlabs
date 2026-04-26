"use client"

import { getAlreadyVisited } from "../actions";
import { useActionState } from "react";

export default function ReadDataForm() {
  const [DBdata, formActiongetAlreadyVisited] = useActionState(getAlreadyVisited, null);

  return (
    <form action={formActiongetAlreadyVisited} style={{ color: "#000000"}}>
      <label htmlFor="textfeld">Hier ID fuer DB zugriff eingeben: </label>
      <input style={{backgroundColor: "#d4d4d4"}} type="number" id="textfeld" name="textfeld" required />
      <button style={{backgroundColor: "#d4d4d4", margin: 10, paddingLeft: 10, paddingRight: 10}} type="submit">bestaetigen</button>
      {DBdata !== null && DBdata !== undefined ? (
        <p>Already Visited Doctor: {DBdata.toString()}</p>
      ) : (<p>Es gibt keine Daten unter dieser ID</p>)
    }
    </form>
  );
}