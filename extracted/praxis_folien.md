# Praxis-Folien 16–18 — Verifizierte Extraktion aus Primärquellen

> **Methodik-Hinweis:** Diese Fassung ersetzt eine frühere Version, in der PDF-Extraktion technisch nicht verfügbar war. Alle Aussagen sind jetzt gegen die `pdf_txt/*.txt`-Primärquellen geprüft. Seitenzahlen beziehen sich auf die interne Paginierung des jeweiligen Dokuments (NIST: Dokument-Seiten; Dell'Acqua: Artikel-Seiten in „Articles in Advance"; Bitkom: Dokumentseite). Synthese-Aussagen sind explizit gekennzeichnet.

---

## Folie 16 — NIST AI RMF × Bitkom → PM-Rollen

### Die vier Kernfunktionen des NIST AI RMF 1.0

**Primärquelle:** *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, National Institute of Standards and Technology, Januar 2023. Die Core-Sektion (Abschnitt 5) definiert die vier Funktionen, die in Figure 5 als Zusammenspiel mit Govern als querliegender Funktion dargestellt sind (NIST AI 100-1, S. 20).

1. **GOVERN** (Abschnitt 5.1, S. 21–23) — „cultivates and implements a culture of risk management within organizations designing, developing, deploying, evaluating, or acquiring AI systems" und stellt Prozesse, Dokumentation und Organisationsstrukturen bereit, die Risiken antizipieren und managen. Govern ist „a cross-cutting function that is infused throughout AI risk management and enables the other functions of the process" (S. 22). Tabelle 1 nennt sechs Kategorien (GOVERN 1–6) zu Policies, Accountability, Diversity, Schulung, Stakeholder-Einbindung und Third-Party-Risiken.

2. **MAP** (Abschnitt 5.2, S. 24–27) — „establishes the context to frame risks related to an AI system" (S. 24). Die MAP-Funktion identifiziert Zweck, Lebenszyklus-Akteure und potenzielle Auswirkungen; ihre Ergebnisse sind „the basis for the MEASURE and MANAGE functions" (S. 24).

3. **MEASURE** (Abschnitt 5.3, S. 28–30) — „employs quantitative, qualitative, or mixed-method tools, techniques, and methodologies to analyze, assess, benchmark, and monitor AI risk and related impacts" (S. 28). Ergebnisse fließen in MANAGE zurück; Messung erfordert „rigorous software testing and performance assessment … with associated measures of uncertainty" (S. 28).

4. **MANAGE** (Abschnitt 5.4, S. 31–32) — „entails allocating risk resources to mapped and measured risks on a regular basis and as defined by the GOVERN function. Risk treatment comprises plans to respond to, recover from, and communicate about incidents or events" (S. 31). Response-Optionen sind „mitigating, transferring, avoiding, or accepting" (MANAGE 1.3, S. 32).

### Übersetzung in PM-Rollen — Synthese der Autorin

*Kennzeichnung: Die folgende Zuordnung ist **keine** NIST-Aussage, sondern eine fachliche Synthese aus den PM-Modulkapiteln (Rollen PAG/PL/PLA laut Kapitel 1; PMO/Portfolio-Steuerkreis laut Kapitel 4) auf die RMF-Funktionen.*

| NIST-Funktion | PM-Rolle (Synthese) | Konkrete Aufgabe im Projekt |
|---|---|---|
| **Govern** | Projektauftraggeber (PAG) + Projektlenkungsausschuss (PLA), in MPM-Kontext ergänzt durch PMO | KI-Leitlinie und Freigabeprozess in Projektcharta verankern; Rollen/Verantwortlichkeiten für KI-Nutzung klar benennen (analog NIST GOVERN 2.1, S. 22) |
| **Map** | Projektleiter (PL) + Risk Owner | KI-Einsatzszenarien benennen, Risikoregister um KI-spezifische Risiken (Halluzination, Bias, Datenschutz) ergänzen |
| **Measure** | PMO / Qualitätsverantwortliche / Data-Steward | KPIs für KI-Output definieren (Fehlerquote, Review-Rate); TEVV-Praktiken (Test, Evaluation, Verification, Validation) gemäß NIST S. 28 auf KI-Artefakte anwenden |
| **Manage** | PL operativ, PLA bei Eskalation | Mitigationsmaßnahmen umsetzen (Human-in-the-Loop), Change-Request-Prozess bei KI-bedingten Scope-Änderungen anwenden, Incident-Response vorbereiten |

### Verknüpfung Bitkom — Scope-Präzisierung und Querverweise

**Primärquellen:**
- *Bitkom-Projekt „IT-gestützte Compliance im Finanzsektor" — Konzept und Vorgehensweise* (Bitkom e.V. / Quadriga-Institut QIRM).
- Bitkom-Webseite *Forschungsprojekt: IT gestützte Compliance im Finanzsektor* (abgerufen 03.04.26).

**Präzisierung (wichtig, da in Altfassung fehlerhaft dargestellt):** Das Bitkom-Papier ist **keine** allgemeine KI-Compliance-Richtlinie, sondern ein seit 2015 laufendes Forschungsprojekt mit QIRM zur Entwicklung eines **Referenzmodells für IT-gestützte Compliance im Banken- und Finanzsektor** (Bitkom-Dokument S. 2–3). Es adressiert aufsichtsrechtliche Compliance (BaFin, Bundesbank, EZB), Geldwäscheprävention, Onboarding, Know-Your-Customer/-Transaction/-Process (S. 3–4), nicht KI-Risikomanagement.

**Querverweise zur NIST-RMF-Logik (als Analogieschluss, nicht als Zitat):**
- Bitkom-Referenzarchitektur mit Geschäfts-/Informations-/Anwendungs-/Technologiearchitektur (S. 3) lässt sich strukturell als **operative Ebene** lesen, auf der NIST-Outcomes umgesetzt werden — sektorspezifisch für Finanzinstitute.
- Die Kombination „Govern-Rahmen (NIST) + sektorspezifische Referenzarchitektur (Bitkom)" ist *[nicht verifizierbar aus Primärquelle — Synthese]* und nur als Vortragsbrücke geeignet.

---

## Folie 17 — Vier PM-Praktiken für KI-Nutzung

### 1. Human-in-the-Loop

**Primärquelle:** Dell'Acqua, F.; McFowland III, E.; Mollick, E.; Lifshitz-Assaf, H.; Kellogg, K. C.; Rajendran, S.; Krayer, L.; Candelon, F.; Lakhani, K. R. (2026): *Navigating the Jagged Technological Frontier: Field Experimental Evidence of the Effects of Artificial Intelligence on Knowledge Worker Productivity and Quality*. Organization Science, Articles in Advance, DOI 10.1287/orsc.2025.21838.

Das präregistrierte Feldexperiment mit **758 Consultants** von Boston Consulting Group (Abstract, S. 1) zeigt: Innerhalb der „jagged frontier" erledigen KI-unterstützte Nutzer **12,2 % mehr Aufgaben und 25,1 % schneller** bei signifikant höherer Qualität (S. 1); außerhalb der Frontier sind sie jedoch **19 % seltener** in der Lage, die korrekte Lösung zu erzeugen (S. 1). Dell'Acqua et al. sprechen vom „falling asleep at the wheel"-Effekt — überhöhte Reliance auf KI führt zu schlechterer Performance, „reinforced by the persuasive capabilities of generative AI" (S. 18). **PM-Praktik:** Der Projektleiter definiert explizit Entscheidungspunkte, an denen ein Mensch KI-Output prüft und freigibt, bevor er in Projektartefakte einfließt. *(Hinweis: Der in der Altfassung referenzierte Gegensatz „Centaurs vs. Cyborgs" stammt nicht aus dieser Arbeit, sondern ist nur als Referenz auf Dell'Acqua et al. 2025b im Literaturverzeichnis, S. 20, enthalten — wird daher hier nicht verwendet.)*

### 2. Dokumentierte Freigabe

**Primärquellen:**
- Almeida, P. M.; Fernandes, G.; Santos, J. M. R. C. A. (2025): *Artificial intelligence tools for project management: A knowledge-based perspective*. Project Leadership and Society 6, 100196.
- Bitkom-Projekt „IT-gestützte Compliance im Finanzsektor" (S. 2–4).
- Modulkapitel 3 „Projektcontrolling und Abschluss" — Change Request Management (CRF-Formular, Dokumentationspflicht, S. 33 und S. 56 des Kapitelskripts).

Almeida et al. (S. 3) betonen: „It is important to always check whether the information provided by AI is trustworthy and correct (Carayannis et al., 2024)", weisen auf „Trust and transparency in algorithms" (S. 3) und auf den Verlust von „control and oversight over processes and progress" bei zu hoher KI-Autonomie (S. 3) hin. **PM-Praktik:** Jeder KI-generierte Projektartefakt (Statusbericht, Risikoanalyse, Priorisierungsliste) durchläuft eine formalisierte Freigabe analog zum Change-Request-Prozess (K3, CRF-Form mit Datum, Prüfer, Prüfumfang). *[Die konkrete Formulierung „dokumentierte KI-Freigabe" ist in den Quellen nicht wörtlich belegt — Synthese aus Almeida-Hinweis auf Trust-Check + K3-CRF-Prozess + NIST GOVERN 1.4 „transparent policies, procedures, and other controls" (S. 22).]*

### 3. Versionierung

**Primärquellen:**
- Modulkapitel 6 „Agiles Projektmanagement" — Sprint-Review (S. 371 des Lehrbuchs bzw. WINGS-Foliensatz: „Release-Plan", „Iteration", „Sprint Review und Retrospektive").
- Modulkapitel 2 „Projektplanung" — PSP-Code und Arbeitspaketbeschreibung mit Feld „Erstellungs-/Freigabe-Datum" (Kapitelskript).

Kapitel 6 beschreibt den Sprint als iterative Einheit mit Release-Plan, Iteration, Sprint-Review und Retrospektive (Agiles Manifest-Prinzip: regelmäßige Auslieferung funktionsfähiger Inkremente). Kapitel 2 verlangt für Arbeitspakete u. a. „Erstellungs-/Freigabe-Datum" (Arbeitspaketbeschreibung) — d. h. Artefakte werden mit Zeitstempel und Autor versehen. **PM-Praktik:** KI-Ergebnisse und menschliche Bearbeitungsstände werden als separate Versionen mit Zeitstempel, Autorenkennzeichnung (Mensch vs. KI-Modellversion) und Ausgangs-Prompt abgelegt. *[Die explizite Versionierung von KI-Prompts ist in den Primärquellen **nicht verifizierbar** — Synthese aus Sprint-Inkrement-Logik + Arbeitspaket-Dokumentationsfeld.]*

### 4. Vier-Augen-Prinzip

**Primärquellen (ISBN-Bücher):**
- Bernert, C.; Scheurer, S.; Wehnes, H. (Hrsg.) (2024): *KI in der Projektwirtschaft 2 — Eine neue Ära der Effizienz und Innovation*. Reihe Projektmanagement neu denken (GPM TREND). UVK Verlag / Narr Francke Attempto, Tübingen. ISBN 978-3-381-11142-8 (ePDF). Einschlägige Kapitel u. a.: Kap. 6 „KI-Innovation und kein Start-up — Fehler und Fallstricke" (Teich/Schnupp, S. 73 ff.) und Kap. 18 „Der Einsatz von KI-Technologien … vor dem Hintergrund wachsender EU-weiter regulatorischer Anforderungen" (Martin/Strutzenberger, S. 201 ff.).
- Jakoby, W. (2025): *Projektmanagement für Ingenieure — Ein praxisnahes Lehrbuch für den systematischen Projekterfolg*, 6. Auflage. Springer Vieweg / Springer Fachmedien, Wiesbaden. ISBN 978-3-658-47469-0 (eBook).

**Zum Begriff „Vier-Augen-Prinzip" direkt:** Eine textuelle Belegstelle findet sich nur beiläufig bei Jakoby (2025), S. 433 bzw. Kapitelkontext „Kommunikation/Konfliktgespräch" — in der Wendung „vier Augen reden" (Z. 14125 im Volltext); dies ist **kein** fachlicher Einsatz des Prinzips auf KI-Output. Eine explizite Einführung des Vier-Augen-Prinzips als Kontrollmechanismus für KI-Ergebnisse ist in beiden ISBN-Büchern [nicht verifizierbar aus Primärquelle — Synthese]. **PM-Praktik (als Fachstandard aus Compliance/Audit übertragen):** Kritische KI-Ausgaben (Zahlen, Zitate, rechtliche Aussagen, Priorisierungsempfehlungen) werden durch eine zweite qualifizierte Person gegengeprüft, bevor sie in Entscheidungen oder Berichte einfließen — begründet durch das in Dell'Acqua et al. (2026, S. 1 und S. 18) empirisch gezeigte Halluzinations-/Frontier-Risiko.

---

## Folie 18 — Fünf Empfehlungen für KI-einsetzende Projektleitungen

*Kennzeichnung: Alle fünf Empfehlungen sind **Synthese** der Autorin aus den geprüften Primärquellen, nicht wörtliche Zitate. Die Quellenanker dienen als Begründungsgrundlage.*

### 1. KI-Literacy früh im Projekt verankern
- **Handlung (Imperativ):** Verankern Sie ein verpflichtendes KI-Kompetenz-Briefing mit Nachweis im Projekt-Setup, bevor Teammitglieder KI-Werkzeuge nutzen.
- **Begründung:** NIST AI RMF GOVERN 2.2 (S. 22) verlangt explizit „AI risk management training to enable [personnel] to perform their duties and responsibilities consistent with related policies, procedures, and agreements". Almeida et al. (2025, S. 3) verweisen auf Bodea et al. (2020): 70 % der Teilnehmenden nennen „limited understanding of AI tools" als Haupt-Adoptionshindernis. Art. 4 EU AI Act verpflichtet Anbieter und Betreiber zur Sicherstellung eines „ausreichenden Niveaus an KI-Kompetenz".
- **Quellenanker:** NIST AI 100-1 S. 22 (GOVERN 2.2); Almeida et al. 2025 S. 3; Art. 4 AI Act.
- **Risikobezug:** adressiert unkritische Übernahme halluzinierter Inhalte sowie Organisationsverschulden bei fehlender Schulungspflicht.

### 2. Freigabepfade mit dokumentierter Human-Review etablieren
- **Handlung:** Definieren Sie für jeden KI-Use-Case im Projekt einen Freigabepfad mit benanntem Reviewer, Review-Tiefe und Dokumentationspflicht.
- **Begründung:** Dell'Acqua et al. (2026, S. 1) zeigen, dass KI-Output außerhalb der „jagged frontier" zu 19 % häufiger falschen Lösungen führt, ohne dass Nutzer dies erkennen. NIST MEASURE (S. 28) verlangt „formalized reporting and documentation of results". Das Modulkapitel 3 liefert mit dem Change-Request-Formular (CRF) ein analog nutzbares Muster (K3, S. 33).
- **Quellenanker:** Dell'Acqua et al. 2026 S. 1 und 18 („falling asleep at the wheel"); NIST AI 100-1 S. 28 (Abschnitt 5.3); Modulkapitel 3 CRF.
- **Risikobezug:** adressiert Halluzinationen (fabrizierte Fakten/Quellen) und Haftungslücke bei undokumentierter Übernahme.

### 3. Versionierte Trennung von KI- und Mensch-Erzeugnissen
- **Handlung:** Legen Sie KI-Ausgaben und menschliche Bearbeitungen als separate Versionen mit Modell-/Autorenkennzeichnung ab (Artefaktmanagement in PSP-Dokumentation bzw. Sprint-Inkrement).
- **Begründung:** NIST MEASURE (S. 28) verlangt dokumentierte Evidenz, die „provides a traceable basis to inform management decisions" (S. 28). Modulkapitel 6 etabliert den Sprint-Review als Übergabepunkt versionierter Artefakte; Kapitel 2 verlangt im Arbeitspaket ein „Erstellungs-/Freigabe-Datum".
- **Quellenanker:** NIST AI 100-1 S. 28; Modul K6 (Sprint-Review); Modul K2 (Arbeitspaket-Dokumentationsfeld).
- **Risikobezug:** adressiert Urheber-/Haftungszurechnung, Nicht-Rekonstruierbarkeit fehlerhafter Entscheidungsketten, Nachweispflicht bei regulatorischer Prüfung.

### 4. NIST-RMF-Mapping in die Projektcharta aufnehmen
- **Handlung:** Regeln Sie in Projektauftrag/Projektcharta explizit, wer Govern, Map, Measure und Manage für KI-Nutzung im Projekt wahrnimmt.
- **Begründung:** NIST GOVERN 1.1 (S. 22) verlangt, dass „legal and regulatory requirements involving AI are understood, managed, and documented"; GOVERN 2.1 (S. 22) fordert dokumentierte Rollen, Verantwortlichkeiten und Kommunikationswege. Modulkapitel 1 (Projektauftrag/Rollen PAG/PL/PLA) und Kapitel 4 (Kongruenzprinzip Aufgabe-Kompetenz-Verantwortung) liefern die PM-Gegenstücke.
- **Quellenanker:** NIST AI 100-1 S. 22 (Tabelle 1, GOVERN 1.1 und 2.1); Modulkapitel 1 und 4.
- **Risikobezug:** adressiert unklare Verantwortlichkeit bei KI-Schadensfall sowie ad-hoc-Governance unter Zeitdruck.

### 5. Branchenspezifische Zusatzpflichten früh adressieren
- **Handlung:** Prüfen Sie im Projekt-Setup, ob sektorale Regelwerke (MaRisk/BAIT im Finanzsektor, MDR/IVDR für Medizinprodukte, DSGVO) zusätzliche KI-Pflichten auslösen, und erweitern Sie das Risikoregister entsprechend.
- **Begründung:** Der Bitkom-Referenzmodellansatz (Bitkom-Papier S. 2–4) zeigt explizit, dass Finanzsektor-Compliance (BaFin, Bundesbank, EZB, Geldwäscheprävention) **eigene** IT-gestützte Anforderungen hat, die parallel zum allgemeinen Rahmen gelten. NIST GOVERN 6 (S. 23) verlangt Policies für Third-Party- und Supply-Chain-Risiken, die je nach Sektor unterschiedlich streng sind.
- **Quellenanker:** Bitkom-Papier S. 2–4; NIST AI 100-1 S. 23 (GOVERN 6); EU AI Act als Mindestharmonisierung (Erwägungsgrund zur Sektorkongruenz).
- **Risikobezug:** adressiert nachträgliche Compliance-Lücken, Bußgeldrisiken sektoraler Aufsichten, Regulierungsarbitrage-Fehler.

---

## Anhang — Quellen-Kurzcheck (verifiziert)

| Datei | Titel / Fundstelle | Verifizierter Status |
|---|---|---|
| NIST.AI.100-1.txt | AI RMF 1.0, Januar 2023 | Abschnitt 5 (S. 20–33), Tabellen 1–4 gelesen |
| dell-acqua-et-al-2026-navigating-the-jagged-technological-frontier.txt | Organization Science, Articles in Advance, 2026 | Abstract S. 1, Diskussion S. 17–18 gelesen |
| Almeida-et-al-...txt | Project Leadership and Society 6 (2025) 100196 | Einleitung + Abschnitt 2 gelesen |
| 170825-Bitkom-Projekt-IT-gestuetzte-Compliance.txt | Bitkom/QIRM-Forschungsprojekt Finanzsektor 2015 ff. | S. 1–7 gelesen; Scope ist **Finanzsektor**, nicht KI allgemein |
| 9783381111428_21759.txt | „KI in der Projektwirtschaft 2" (Bernert/Scheurer/Wehnes Hrsg. 2024, UVK/Narr Francke) | Impressum + Inhaltsverzeichnis verifiziert |
| 978-3-658-47469-0.txt | „Projektmanagement für Ingenieure" (Jakoby, 6. Aufl. 2025, Springer Vieweg) | Impressum + Vorwort verifiziert |
| Agiles Projektmanagmebnt Kapitel 6.txt | WINGS Modul K6 | Sprint-Struktur, Release-Plan, Iteration, Review belegt |
| Projektmanagement Projektplanung Kapitel 2.txt | WINGS Modul K2 | PSP, Arbeitspaket-Dokumentationsfeld belegt |
| Projektcontrolling und Abschluss Kapitel 3.txt | WINGS Modul K3 | Change Request Management mit CRF belegt |

---

*Ende der verifizierten Extraktion für Folien 16–18.*
