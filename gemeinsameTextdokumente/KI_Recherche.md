1. Eigenes LLM + Medizinische Daten --> Hohes Halluzinationsrisik, schwer medizinisch validierte Daten zu finden
(MAcht wenig sinn weil zu hoher Aufwand)

2. API Nutzen --> Infermedica (Kostet hat aber Testversion), EndlessMedical (kostenlos) API's bieten meist klinisch validierte Daten, zudem fertige medizinische Codes (ICD-10). Habe gelesen dass medizinische APIs nicht halluzinieren das ie auf festen medizinischen Regeln (Bayesian Network) basieren.

- Wenn ein LLM für den Chat genutzt wird darf es nur Informationen verwenden, die von der API kommen.

3. RAG (Retrieval-Augumented Generation)
So funktioniert es: Man speichert die AWMF-Leitlinien als Textbausteine in einer PostgreSQL-Datenbank. Wenn ein Nutzer eine Frage stellt, sucht das System automatisch den passenden Leitlinien-Abschnitt heraus und gibt ihn zusammen mit der Frage an ein Standard-LLM (z. B. GPT-4 oder Llama 3).

Vorteil: Die KI halluziniert kaum noch, weil sie die Anweisung hat: "Antworte NUR basierend auf diesem Textabschnitt der AWMF."

Aufwand: Man muss die Datenbank mit Leitlinien füllen, statt ein Modell zu trainieren.


AWMF (Portal der Wissenschaftlichen Medizin) --> Beinhaltet die offizielle Deutsche Handlungsempfehlung. 
Was steht z.B. drin :

Red Flags (Warnsignale): Das sind Symptome, bei denen die Steuerung sofort auf „NOTFALL“ schalten muss (z. B. bei Rückenschmerz: Lähmung im Bein, Kontrollverlust über Blase/Darm).

Triage-Kriterien: Wer muss sofort zum Arzt, wer kann bis morgen warten? (z. B. „Arztbesuch innerhalb von 24 Stunden empfohlen“).

Selbsthilfemaßnahmen: Was kann der Patient jetzt tun, um die Zeit effizient zu nutzen? (z. B. Stufenlagerung, bestimmte Atemtechniken).

Problem Daten liegen als PDF vor und müssten einzelt extrahiert werden hoher Aufwand.

- Feste Textbausteine wie (z.B. "Gehen sie in die Notaufnahme") sollten von festen Textbausteinen aus einer Datenbank geladen werden und nicht von der KI generiert werden.


4. Extra
- Möglichkeit --> Erstellung eines FHIR-Bundles also ein FHIR R4 Dokument wie auch in dem Prototyp das z.B. als QR Code erstellt wird, welches der Patient dem Arzt zeigen kann, der Arzt kann somit direkt die Daten ins KIS einpflegen 

