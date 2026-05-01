# Product Backlog

---

## Epic: Datenerfassung von Basisdaten und Symptomen (hohe Priorität)
Ziel: Vollständige Erfassung grundlegender Nutzerdaten und Vorbereitung der Ersteinschätzung ohne inhaltliche Bewertung.

### FA 001 – Basisdaten erfassen
Als Nutzer möchte ich grundlegende Angaben (z. B. Alter, Geschlecht) machen, damit eine genauere Einschätzung möglich ist.  
Akzeptanzkriterium: Eingabefelder für Basisdaten sind vorhanden, Pflichtfelder werden validiert, Eingaben werden gespeichert  
Priorität: hoch  

### FA 004 – Symptome finden und erfassen
Als Nutzer möchte ich Symptome über Kategorien, das Körpermodell oder ein Freitextfeld erfassen können, damit alle meine Beschwerden berücksichtigt werden.  
Akzeptanzkriterium: Symptomerfassung über Kategorien, Körpermodell und Freitext möglich  
Priorität: hoch  

### FA 005 – Körpermodell anzeigen
Als Nutzer möchte ich ein visuelles Körpermodell sehen, damit ich meine Beschwerden besser zuordnen kann.  
Akzeptanzkriterium: Körpermodell wird vollständig angezeigt, alle definierten Körperregionen sind sichtbar und unterscheidbar  
Priorität: hoch  

### FA 006 – Körperregion auswählen
Als Nutzer möchte ich eine Körperregion auswählen können, damit ich meine Symptome präzise angeben kann.  
Akzeptanzkriterium: Auswahl wird visuell hervorgehoben, Auswahl kann rückgängig gemacht werden  
Priorität: hoch  

### FA 007 – Symptome aus Körperregion anzeigen
Als Nutzer möchte ich passende Symptome zu einer ausgewählten Körperregion sehen, damit ich diese auswählen kann.  
Akzeptanzkriterium: Nach Auswahl werden passende Symptome angezeigt, Mehrfachauswahl ist möglich, Auswahl kann rückgängig gemacht werden  
Priorität: hoch  

### FA 008 – Zusätzliche Symptome erfassen
Als Nutzer möchte ich sonstige Symptome manuell eingeben können, damit alle meine Beschwerden berücksichtigt werden.  
Akzeptanzkriterium: Freitextfeld vorhanden, mehrere Symptome können eingegeben werden  
Priorität: hoch  

### FA 009 – Psychische Beschwerden erfassen
Als Nutzer möchte ich meine psychischen Beschwerden eingeben können, damit diese berücksichtigt werden.  
Akzeptanzkriterium: Psychische Symptome werden erfasst und gespeichert  
Priorität: hoch  

### FA 010 – Eingaben bearbeiten
Als Nutzer möchte ich meine Eingaben ändern können, damit ich Fehler korrigieren kann.  
Akzeptanzkriterium: Bereits eingegebene Daten sind editierbar, Änderungen werden gespeichert  
Priorität: hoch  

### FA 011 – Eingaben zurücksetzen
Als Nutzer möchte ich alle Eingaben löschen können, damit ich neu beginnen kann.  
Akzeptanzkriterium: Alle Eingaben können mit einer Aktion gelöscht werden, Bestätigung wird angezeigt  
Priorität: mittel  

### FA 012 – Eingaben validieren
Als System sollen Eingaben überprüft werden, damit fehlerhafte oder unvollständige Daten erkannt werden.  
Akzeptanzkriterium: Pflichtfelder werden geprüft, fehlerhafte Eingaben werden erkannt, Fehlermeldungen werden angezeigt  

### FA 013 – Zusatzangaben optional hinzufügen
Als Nutzer möchte ich optionale Zusatzangaben machen können, damit ich eine genauere Einschätzung erhalte.  
Akzeptanzkriterium: Zusatzangaben sind als optional gekennzeichnet, Schritt kann übersprungen werden, Eingaben werden gespeichert  
Priorität: mittel  

---

## Epic: Symptomeinschätzung / Triage (hohe Priorität)
Ziel: Bewertung der eingegebenen Daten zur Bestimmung der Dringlichkeit und Ableitung konkreter Maßnahmen.

### FA 014 – Einschätzung starten
Als Nutzer möchte ich die Auswertung meiner Angaben starten können, damit ich eine Einschätzung erhalte.  
Akzeptanzkriterium: Button vorhanden, nach Klick wird Bewertung durchgeführt und Ergebnis angezeigt  
Priorität: hoch  

### FA 015 – KI-basierte Auswertung
Als Nutzer möchte ich, dass meine Daten automatisch ausgewertet werden, damit ich eine Einschätzung erhalte.  
Akzeptanzkriterium: Nach Abschluss der Eingabe wird eine Auswertung generiert und angezeigt  
Priorität: hoch  

### FA 016 – Dringlichkeit bestimmen
Als Nutzer möchte ich nach Dringlichkeit priorisiert werden, damit ich schnell die richtige Hilfe bekomme.  
Akzeptanzkriterium: Genau eine Dringlichkeitsstufe wird zugewiesen und sichtbar angezeigt  
Priorität: hoch  

### FA 017 – Versorgungsebene zuweisen
Als Nutzer möchte ich wissen, wohin ich mich wenden soll, damit ich die richtige Hilfe erhalte.  
Akzeptanzkriterium: Versorgungsebene wird eindeutig zugewiesen und verständlich dargestellt  
Priorität: hoch  

### FA 018 – Handlungsempfehlung anzeigen
Als Nutzer möchte ich konkrete Handlungsempfehlungen erhalten, damit ich weiß, was ich tun soll.  
Akzeptanzkriterium: Empfehlung ist verständlich formuliert und enthält konkrete nächste Schritte  
Priorität: hoch  

---

## Epic: Sicherheit (hohe Priorität)
Ziel: Früherkennung kritischer Situationen und Unterstützung bei Notfällen.

### FA 019 – Red Flags anzeigen
Als Nutzer möchte ich kritische Symptome sehen, damit ich Notfälle früh erkennen kann.  
Akzeptanzkriterium: Liste definierter Red Flags wird angezeigt  
Priorität: hoch  

### FA 020 – Red Flags auswählen
Als Nutzer möchte ich kritische Symptome auswählen können, damit sie berücksichtigt werden.  
Akzeptanzkriterium: Auswahl ist möglich, visuell hervorgehoben und rückgängig machbar  
Priorität: hoch  

### FA 021 – Red Flags erkennen
Als System sollen kritische Symptome erkannt werden, damit im Notfall reagiert werden kann.  
Akzeptanzkriterium: Definierte Red Flags werden erkannt, höchste Dringlichkeitsstufe wird gesetzt  
Priorität: hoch  

### FA 022 – Notfallhinweis anzeigen
Als Nutzer möchte ich bei kritischen Symptomen einen klaren Hinweis erhalten, damit ich schnell handeln kann.  
Akzeptanzkriterium: Notfallhinweis wird angezeigt, klare Handlungsanweisung vorhanden  
Priorität: hoch  

### FA 023 – SOS-Button anzeigen
Als Nutzer möchte ich jederzeit einen SOS-Button sehen, damit ich im Notfall schnell handeln kann.  
Akzeptanzkriterium: Button ist auf allen Seiten sichtbar und hervorgehoben  
Priorität: hoch  

### FA 024 – Notrufempfehlung anzeigen
Als Nutzer möchte ich nach dem Drücken des SOS-Buttons eine klare Empfehlung zum Notruf sehen.  
Akzeptanzkriterium: Hinweis wird angezeigt, Button zum Wählen ist sichtbar  
Priorität: hoch  

### FA 025 – SOS-Notruf auslösen
Als Nutzer möchte ich die Telefonfunktion mit 112 öffnen können.  
Akzeptanzkriterium: Telefonfunktion öffnet sich, 112 ist vorausgefüllt, Anruf muss bestätigt werden  
Priorität: hoch  

---

## Epic: Datenhaltung (hohe Priorität)
Ziel: Sichere Speicherung und Verwaltung aller Nutzerdaten.

### FA 026 – Daten speichern
Als Nutzer möchte ich meine Daten speichern können, damit ich sie später nutzen kann.  
Akzeptanzkriterium: Daten werden gespeichert und einer ID zugeordnet  
Priorität: hoch  

### FA 027 – Daten abrufen
Als Nutzer möchte ich meine Daten einsehen können.  
Akzeptanzkriterium: Daten werden vollständig und verständlich angezeigt  
Priorität: mittel  

### FA 028 – Daten löschen
Als Nutzer möchte ich meine Daten löschen können.  
Akzeptanzkriterium: Daten sind danach nicht mehr abrufbar  
Priorität: mittel  

### FA 029 – Daten exportieren
Als Nutzer möchte ich meine Daten exportieren können.  
Akzeptanzkriterium: Exportfunktion vorhanden, Daten vollständig enthalten  
Priorität: mittel  

---

## Epic: Transparenz (hohe Priorität)

### FA 030 – Eingaben bestätigen
Als Nutzer möchte ich meine Eingaben vor dem Absenden überprüfen können.  
Akzeptanzkriterium: Zusammenfassung wird angezeigt, Änderungen möglich  
Priorität: hoch  

### FA 031 – Freitext zusammenfassen
Als Nutzer möchte ich eine verständliche Zusammenfassung sehen.  
Akzeptanzkriterium: Zusammenfassung wird angezeigt und kann angepasst werden  
Priorität: mittel  

### FA 032 – Begründung anzeigen
Als Nutzer möchte ich verstehen, warum eine Einschätzung getroffen wurde.  
Akzeptanzkriterium: Begründung ist verständlich und nachvollziehbar  
Priorität: hoch  

---

## Epic: UX (hohe Priorität)
Ziel: Intuitive und verständliche Nutzung.

### FA 033 – Navigation zwischen Schritten
Als Nutzer möchte ich zwischen Schritten wechseln können.  
Akzeptanzkriterium: Vor und Zurück Navigation möglich, Daten bleiben erhalten  
Priorität: hoch  

### FA 034 – Terminbutton anzeigen
Als Nutzer möchte ich einen Terminbutton sehen.  
Akzeptanzkriterium: Button ist sichtbar und verständlich  
Priorität: mittel  

### FA 035 – Terminweiterleitung durchführen
Als Nutzer möchte ich zu einem Terminservice weitergeleitet werden.  
Akzeptanzkriterium: Externe Seite wird geöffnet  
Priorität: mittel  

### FA 036 – Rezeptbutton anzeigen
Als Nutzer möchte ich einen Rezeptbutton sehen.  
Akzeptanzkriterium: Button ist sichtbar und verständlich  
Priorität: mittel  

### FA 037 – Rezeptweiterleitung durchführen
Als Nutzer möchte ich zu einem Rezeptservice weitergeleitet werden.  
Akzeptanzkriterium: Weiterleitung funktioniert korrekt  
Priorität: mittel  

### NFA 038 – Intuitive Bedienbarkeit
Als Nutzer möchte ich die Anwendung einfach bedienen können.  
Akzeptanzkriterium: Navigation ist selbsterklärend  
Priorität: hoch  

### NFA 039 – Verständliche Sprache
Als Nutzer möchte ich Inhalte verstehen können.  
Akzeptanzkriterium: Sprache ist einfach und klar  
Priorität: hoch  

### NFA 040 – Ladezeiten
Als Nutzer möchte ich schnelle Reaktionszeiten.  
Akzeptanzkriterium: Seiten laden unter 2 Sekunden  
Priorität: hoch  

### NFA 041 – Barrierefreiheit
Als Nutzer möchte ich die Anwendung unabhängig von Einschränkungen nutzen können.  
Akzeptanzkriterium: grundlegende Barrierefreiheit ist gegeben  
Priorität: mittel  

### NFA 042 – Responsives Design
Als Nutzer möchte ich die Anwendung auf allen Geräten nutzen können.  
Akzeptanzkriterium: Darstellung passt sich an Bildschirmgröße an  
Priorität: hoch  

---

## Epic: Interoperabilität (mittlere Priorität)

### FA 043 – Weiterleitung an externe Dienste
Als Nutzer möchte ich externe Dienste nutzen können.  
Akzeptanzkriterium: Weiterleitung funktioniert korrekt  
Priorität: hoch  

### FA 044 – Daten bereitstellen
Als Nutzer möchte ich Daten weitergeben können.  
Akzeptanzkriterium: Schnittstelle oder Export vorhanden  
Priorität: mittel  

### FA 045 – FHIR-Kompatibilität
Als Nutzer möchte ich standardisierte Datenformate nutzen.  
Akzeptanzkriterium: Daten entsprechen FHIR  
Priorität: mittel  

---

## Epic: Zusatzfeatures (niedrige Priorität)

### FA 046 – Offline-Modus
Als Nutzer möchte ich die Anwendung offline nutzen können.  
Akzeptanzkriterium: Grundfunktionen sind offline verfügbar  
Priorität: niedrig  

### FA 047 – Offline-Speicherung
Als Nutzer möchte ich Daten offline speichern können.  
Akzeptanzkriterium: Synchronisation erfolgt später  
Priorität: niedrig  

### FA 048 – Installierbarkeit
Als Nutzer möchte ich die Anwendung installieren können.  
Akzeptanzkriterium: Installation über Browser möglich  
Priorität: niedrig  
