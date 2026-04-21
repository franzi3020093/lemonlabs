(Mikail Kocan)
# Die Softwarearchitektur

## Name des Produkts
Der Name des Produkts darf nicht irreführend sein. Er muss also aussagen, was das Produkt macht – und nur genau das.

z. B. KI-Symptom-Navigator, MediGuide, CarePath, SymptoGuide …

- keine Diagnose  
- keine medizinische Entscheidung  
- Fokus auf **Orientierung und Ersteinschätzung**

**Begründung:**  
Die Benennung beeinflusst die rechtliche Einordnung (z. B. als medizinisches Produkt). Ein neutraler Name reduziert das Risiko, dass das System als diagnostisches Tool interpretiert wird.

---

## Die Programmiersprachen

### Frontend
- TypeScript  
- JavaScript  
- CSS  

**Begründung:**  
TypeScript ermöglicht typsichere Entwicklung, reduziert Fehler frühzeitig und verbessert die Wartbarkeit. In Kombination mit modernen Frameworks wie React oder Next.js eignet es sich ideal für interaktive Webanwendungen mit komplexer Nutzerführung.

---

### Backend
- TypeScript  
- entweder Next.js oder NestJS  

**Begründung:**  
Ein einheitlicher Technologie-Stack (TypeScript im Frontend und Backend) reduziert Komplexität und erleichtert die Zusammenarbeit im Team.  
NestJS bietet zusätzlich eine klare, modulare Architektur, während Next.js für kleinere Projekte eine schnelle und integrierte Umsetzung ermöglicht.

---

### Die Datenbank
- PostgreSQL  

**Begründung:**  
PostgreSQL ist eine stabile, relationale Datenbank, die sich besonders für strukturierte Daten eignet (z. B. Symptomangaben, Antworten, Entscheidungslogik).  
Durch vorhandene Kenntnisse im Team wird die Einarbeitungszeit reduziert und die Umsetzung effizienter.

---

### Die Künstliche Intelligenz
- Nutzung eines LLM (Large Language Model) über API  
- KEINE eigenständige Diagnostik durch KI  

**Begründung:**  
Die KI wird unterstützend eingesetzt für:
- Extraktion von Informationen aus Freitext  
- Generierung von Rückfragen  
- Zusammenfassung von Eingaben  

Die finale Entscheidung erfolgt durch ein regelbasiertes System, um Sicherheit und Nachvollziehbarkeit zu gewährleisten.

---

## Zu TypeScript
- Vereinheitlicht Frontend und Backend  
- Vermeidet unnötige Komplexität durch mehrere Sprachen  

Einsatzbereiche:
- Frontend  
- Backend  
- Validierung  
- Datenmodelle  

**Begründung:**  
TypeScript verbessert die Codequalität, da Fehler bereits zur Entwicklungszeit erkannt werden.  
Zudem dienen Typen als Dokumentation, was besonders in Teamprojekten wichtig ist.

---

## SQL
- strukturierte Datenspeicherung  
- für Termin- und Weiterleitungsdaten  

**Begründung:**  
Relationale Datenbanken ermöglichen eine klare Strukturierung und Verknüpfung von Daten.  
Dies ist wichtig für Nachvollziehbarkeit und Erweiterbarkeit.

---

## Python (optional)
- nur falls unbedingt notwendig  

**Begründung:**  
Python wird häufig für Machine Learning genutzt, ist hier jedoch nicht zwingend erforderlich.  
Die zusätzliche Sprache würde die Architektur unnötig komplex machen.

---

**Fazit:**  
TypeScript ist für dieses Projekt besonders geeignet, da es gute Nutzerführung, saubere Abfragen und eine kontrollierte Entscheidungslogik unterstützt.

---

# Aufbau des Systems

## 1. Präsentationsschicht (Frontend)
- eigentliche Webseite  

**Funktionen:**
- Startseite mit Hinweis  
- Auswahl der Körperregion über eine menschliche Körpergrafik  
- symptombezogene Nachfragen:
  - Alter  
  - Geschlecht  
  - Dauer  
  - Stärke (Skala)  
  - Begleitsymptome  
- Ergebnisansicht mit Handlungsempfehlung  
- Notrufhinweis oder Terminoptionen  
- permanenter SOS-Button  

**Begründung:**  
Eine intuitive Benutzeroberfläche ist entscheidend, da Nutzer sich oft in unsicheren Situationen befinden.  
Visuelle Elemente wie eine Körpergrafik senken die Einstiegshürde.

---

## 2. Eingabe- und Validierungsschicht (Backend)
- Prüfung von Pflichtfeldern  
- Plausibilitätsprüfung der Werte  
- frühzeitige Erkennung von Notfällen  

**Begründung:**  
Frühe Validierung erhöht die Zuverlässigkeit und verhindert fehlerhafte Daten.  
Kritische Fälle können sofort erkannt und priorisiert werden.

---

## 3. Triage-Engine (Backend)
- hybride Struktur aus Regeln und KI  

**Begründung:**  
Die Kombination ermöglicht Sicherheit (durch Regeln) und Flexibilität (durch KI).

---

### A) Regelbasierte Engine
- medizinische Sicherheitsregeln  

**Begründung:**  
Regeln sind nachvollziehbar, überprüfbar und zuverlässig.

---

### B) KI-Komponente
- Rückfragen generieren  
- Freitext analysieren  
- Kategorisierung  
- Zusammenfassung  

**Begründung:**  
KI verbessert die Nutzerinteraktion und verarbeitet unstrukturierte Daten effizient.

---

### C) Entscheidungsmodul
- keine alleinige Entscheidung durch KI  
- feste Handlungskategorien  

**Begründung:**  
Die finale Entscheidung muss deterministisch und nachvollziehbar sein.

---

## 4. Integrationsschicht (Backend)
- Verbindung zu externen Diensten:
  - Telefonweiterleitung  
  - Terminbuchung  
  - Kalender  
  - ggf. PDF-Zusammenfassung  

**Begründung:**  
Diese Schicht ermöglicht die praktische Umsetzung der Handlungsempfehlungen und erhöht den Nutzen für den Nutzer.

---

## 5. Datenhaltung (Backend)

**Zu speichernde Daten:**
- anonyme Session-Daten  
- Symptome (ohne personenbezogene Daten)  
- Antworten auf Fragen  
- Ergebnis der Ersteinschätzung  
- technische Logs  

**Begründung:**  
Im Gesundheitskontext gilt das Prinzip der Datensparsamkeit.  
Es werden nur notwendige Daten gespeichert, um Funktionalität und Systemverbesserung zu gewährleisten.
