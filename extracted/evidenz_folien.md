# Evidenz fuer Folien 3-6: Regulatorische und Haftungsrisiken beim KI-Einsatz im PM

Quellenstand: alle Angaben mit Quellenanker und Seiten-/Abschnittsnachweis aus den
extrahierten PDFs unter `extracted/pdf_txt/`. Verifizierte Zitate, keine Paraphrasen
ohne Beleg. Widersprueche werden beide Seiten zitiert (keine Mittelung).

---

## Folie 3 - Einstieg/Framing: KI im PM - Produktivitaetsversprechen vs. Risikorealitaet

### Produktivitaetsversprechen (belegte Aussagen)

1. **Vervierfachung des Produktivitaetswachstums in KI-exponierten Branchen.**
   In Branchen, die am staerksten von KI betroffen sind (z. B. Finanzdienstleistungen,
   Software-Publishing), ist das Produktivitaetswachstum seit der Verbreitung von
   GenAI von 7 % (2018-2022) auf 27 % (2018-2024) gestiegen - fast eine Vervierfachung.
   *(PwC AI Jobs Barometer 2025, S. 2 der Pressemitteilung; Textzeilen 54-64)*

2. **85 %+ der GenAI-"Trailblazer" berichten signifikant positive Effekte auf
   Scope/Schedule/Cost/Quality-Management** (vs. ca. 40 % der "Explorers"); 99 %
   der Trailblazer melden einen positiven Gesamteinfluss von GenAI auf Projektarbeit.
   *(PMI "First Movers' Advantage" / GenAI Adoption Report, Abschnitt 2, S. 6 ff.;
   Textzeilen 202-208)*

3. **GenAI schliesst die Expertise-Luecke:** Novizen mit GenAI-Unterstuetzung
   erreichen bei Projektplanungsaufgaben eine Leistung, die unassistierten
   Profis vergleichbar ist (2x2-Experiment, signifikante Effekte auf Zeit und
   subjektiven Erfolg). *(Hettrich, Krings & Kock, 2025, S. 789, Abstract;
   Textzeilen 28-30, 89-91)*

4. **Gartner-Prognose (zitiert in Hughes et al.):** "80 Percent of Today's
   Project Management Tasks Will Be Eliminated by 2030" durch KI (v. a.
   Datensammlung, Tracking, administrative Koordination).
   *(Hughes et al., 2025, S. 2; Textzeile 66-68 - Gartner/Costello 2019 zitiert.
   Hughes relativiert die Zahl ausdruecklich als Vereinfachung, Zeilen 71-75.)*

### Risikorealitaet (belegte Aussagen)

1. **74 % der PM-Fachkraefte aeussern gemischte oder negative Gefuehle zur
   KI-Adoption**, trotz Anerkennung der Produktivitaetsvorteile; Hauptsorgen:
   Jobsicherheit und Datenschutz. *(Aramali et al., 2025, Project Leadership
   and Society 6, S. 1, Abstract; Textzeilen 33-36)*

2. **Ergebnisqualitaet haengt stark von Datenqualitaet und Nutzeranweisungen ab;
   Bedenken bei Tiefenanalyse und Root-Cause-Identifikation.**
   *(Aramali et al., 2025, Abschnitt 2.2, S. 2; Textzeilen 132-136)*

3. **Felicetti et al. dokumentieren "unfaithful appropriation"** - ProjektmanagerInnen
   nutzen GenAI kreativ, aber in Abweichung vom Tool-Design; dies kann zu
   unbeabsichtigten Ergebnissen fuehren. *(Felicetti et al., 2024, Journal of
   Innovation & Knowledge 9, Abstract S. 1 + Zeilen 141-150: "Unfaithful
   appropriations ... out of line with the spirit of the technology")*

4. **Hughes et al. warnen explizit vor Over-Reliance und algorithmischer
   Verzerrung:** "If AI generates incorrect decisions due to biased data ...
   the project manager ... is surely running the risk of being tripped up."
   *(Hughes et al., 2025, S. 8; Textzeilen 427-430, 691-748)*

5. **PMI-Warnung (bei Hughes zitiert):** Notwendigkeit sorgfaeltigen
   Prompt-Designs zur Risikovermeidung, Disclaimer fuer KI-generierte Inhalte.
   *(Hughes et al., 2025; Textzeile 748ff.)*

---

## Folie 4 - 3-Zahlen-Slide

### Zahl 1: Halluzinationsquote in Rechts-RAG-Tools (Magesh et al., Stanford)

**Verifizierte exakte Zahlen aus dem Stanford RegLab-Paper:**

- **Lexis+ AI: ca. 17 % Halluzinationsrate** (genauer: "over 1 in 6", und im
  Fliesstext `> 1 in 6`). Accuracy: 65 %, Incomplete: 18 %.
- **Ask Practical Law AI (Thomson Reuters): ca. 17 % Halluzinationsrate**
  ("Over 1 in 6"). Accuracy: 19 %, Incomplete: 62 %.
- **Westlaw AI-Assisted Research: ca. 33 % (ein Drittel) Halluzinationsrate.**
  Accuracy: 41 %. "Westlaw hallucinated substantially more - one-third of
  its responses contained a hallucination."
- **GPT-4 als Referenz (closed book):** generell deutlich hoehere Rate;
  vorherige Arbeit (Dahl et al. 2024, im Paper zitiert) misst fuer
  general-purpose LLMs **58-82 %** Halluzinationen bei Rechtsabfragen.

Die Spec-Zahl **"58 %"** stammt NICHT aus Magesh et al. fuer RAG-Tools,
sondern aus der zitierten Vorarbeit Dahl et al. (2024) fuer **allgemeine
LLMs ohne RAG** (58-82 % Bandbreite). Fuer Magesh selbst sind die korrekten
Rahmenzahlen **17-33 %** (RAG-gestuetzte Rechts-KI). *(Magesh et al., 2025,
Abstract S. 1 Textzeilen 29-31; Abschnitt 6.1 "Hallucinations Persist Across
Query Types" S. 9, Textzeilen 508-518, 522-528.)*

**Stichprobe/Methode:** vorregistrierter Datensatz von >200 manuell
konstruierten Rechtsabfragen, Abfragen Maerz-Mai 2024. Hand-codiert auf
Correctness + Groundedness. Halluzination = Antwort, die entweder
inkorrekt ist ODER deren zitierte Quelle die Aussage nicht stuetzt
(misgrounded). *(Magesh et al., 2025, Abschnitte 4.3, 5.2, 5.4;
Textzeilen 327-331, 502-518.)*

**Kontext-Paragraph (2-3 Saetze):** Die Stanford-Studie zeigt: Selbst
spezialisierte RAG-basierte Rechtsrecherche-Tools der Marktfuehrer
LexisNexis und Thomson Reuters halluzinieren in 17 % bis 33 % der Faelle,
obwohl die Anbieter mit "hallucination-free" warben. Die Autoren
definieren Halluzination strenger als die Anbieter: nicht nur erfundene
Faelle, sondern auch "misgrounded" Antworten, bei denen die zitierte
Quelle die Aussage nicht stuetzt.

**Headline (max. 10 Woerter):**
- "17-33 %: Auch spezialisierte Rechts-KI halluziniert trotz 'hallucination-free'-Versprechen."
- Alternative: "Selbst Rechts-RAG halluziniert in jedem sechsten bis dritten Fall."

**Seite/Abschnitt:** Magesh et al., 2025, Journal of Empirical Legal Studies,
Abstract S. 1 (Zeilen 29-31); Ergebnisse Abschnitt 6.1, S. 9 (Zeilen 511-514);
Fig. 4 / S. 9-10 (Zeilen 521-528).

### Zahl 2: § 823 BGB - Transfer-Satz

> Wer durch fahrlaessig uebernommene, unverifizierte KI-Ausgaben Dritten
> einen Schaden zufuegt, haftet persoenlich nach § 823 Abs. 1 BGB - die
> Verantwortung bleibt beim Menschen, nicht beim Modell.

(Kein externer Beleg noetig - juristische Transfernorm.)

### Zahl 3: 9.12.2026 - ProdHaftRL-Umsetzungsfrist

> Ab dem 9. Dezember 2026 erfasst die neue EU-Produkthaftungsrichtlinie
> auch Software und KI-Systeme: fehlerhafte KI-Ausgaben koennen dann
> verschuldensunabhaengige Produkthaftung ausloesen.

(Datum wird durch separaten Agenten verifiziert; hier nur der Transfersatz
fuer die Folie.)

---

## Folie 5 - Taxonomie: Halluzinationen (faktisch vs. kontextuell; intrinsisch vs. extrinsisch)

Die vier Kategorien kombinieren zwei Dimensionen, wie sie in der
aktuellen Fachliteratur konvergieren (Anh-Hoang, Tran & Nguyen, 2025;
Shao, 2025; Li et al., 2024):

### 1. Intrinsische Halluzination (contextual/faithfulness)
**Definition:** Output widerspricht dem bereitgestellten Input- oder
Kontextmaterial; das Modell erzeugt eine Aussage, die mit der im Prompt
oder Quelldokument gegebenen Information unvereinbar ist.
**Beispiel:** Gegeben der Input "Einstein was born in Ulm, Germany"
generiert das Modell "Einstein was born in Berlin" (Zusammenfassungsfehler).
*(Anh-Hoang, Tran & Nguyen, 2025, Abschnitt 2.4 "Taxonomy of
hallucinations", S. 3; Textzeilen 144-147; Beispiel Zeilen 154-160.)*

### 2. Extrinsische Halluzination (contextual/faithfulness)
**Definition:** Output fuegt Informationen hinzu, die weder im Input noch
in den Quelldokumenten vorhanden sind - kann nicht unmittelbar als falsch
bewiesen werden, ist aber ungrounded.
**Beispiel:** Bei offener QA-Aufgabe "Ursache des Dinosaurieraussterbens"
erfindet das Modell: "massive volcanic eruptions on Venus caused changes
on Earth" - syntaktisch kohaerent, aber ohne Quellenbezug.
*(Anh-Hoang, Tran & Nguyen, 2025, Abschnitt 2.4 S. 3; Textzeilen 148-151;
Beispiel Zeilen 164-170.)*

### 3. Faktische (factual) Halluzination
**Definition:** Output enthaelt Aussagen, die mit real-weltlichem Wissen
oder Wissensbasen unvereinbar sind - unabhaengig davon, ob Kontextmaterial
vorhanden ist. Entspricht Li et al.s "fact-conflicting" bzw. Magesh' "incorrect".
**Beispiel:** "The capital of Canada is Toronto" statt "Ottawa" (TruthfulQA-Test).
*(Anh-Hoang, Tran & Nguyen, 2025, S. 3, Zeilen 153-155 und 173-177.)*
*(vgl. Li et al., 2024, S. 2, Zeilen 63-67: "Fact-conflicting hallucination".)*

### 4. Logische Halluzination
**Definition:** Output ist syntaktisch korrekt, aber intern inkonsistent
oder logisch inkohaerent (Widerspruch, Ableitungsfehler, falsche Ursache-Wirkung).
**Beispiel:** "If a = b and b = c, then a = c, but a is not c" (widerspruechliche
Schlussfolgerung in mathematischen Tasks).
*(Anh-Hoang, Tran & Nguyen, 2025, S. 3, Zeilen 156-161 und 177-181.)*

### Zusaetzliche Dimension aus Shao (2025): Faithfulness vs. Factualness
Shao verdichtet die Taxonomie auf zwei Grundtypen, die in der CS-Literatur
konvergieren: **Faithfulness errors** (intrinsisch: Output widerspricht
dem Input/Kontext) und **Factualness errors** (extrinsisch/faktisch:
Output widerspricht etabliertem Weltwissen). *(Shao, 2025, S. 5-6; Zeilen
186-189.)*

### Ergaenzung - Anbieter-Konfusion (Magesh et al.)
Thomson Reuters und LexisNexis verwenden den Begriff "Halluzination"
uneinheitlich - mal nur fuer erfundene Faelle, mal breiter fuer "plausible
but completely false" Antworten. Magesh et al. definieren daher strenger:
eine Antwort ist halluziniert, wenn sie **inkorrekt ODER misgrounded** ist
(Quelle existiert, stuetzt die Aussage aber nicht). Diese "Groundedness"-Dimension
ist fuer den PM-Kontext relevant: Eine Projektplan-Zitation, die auf eine
real existierende, aber inhaltlich unpassende Norm verweist, ist
gefaehrlicher als eine frei erfundene, weil schwerer zu entdecken.
*(Magesh et al., 2025, Abschnitt 4.3 S. 5-6, Zeilen 325-340.)*

### Hinweis Shao: AI-Halluzinationen als neue Misinformationsform
Shao argumentiert, dass AI-Halluzinationen konzeptuell von
menschlicher Misinformation/Disinformation zu unterscheiden sind -
sie entstehen ohne Intent aus der probabilistischen Natur von LLMs
und sind "statistically inevitable". *(Shao, 2025, Einleitung S. 2-3,
Zeilen 72-94; Swiss-Cheese-Modell Abschnitt S. 5-6.)*

---

## Folie 6 - PM-Bezug: 4 PM-Artefakte

Hinweis: Die meisten Papers behandeln PM-Artefakte **nicht artefakt-spezifisch**
mit dokumentierten Fehlermodi. Daher werden die folgenden Punkte als
**Eigenschluss gestuetzt auf die jeweiligen Quellen** gekennzeichnet.

### 1. Risikoregister
**Halluzinationsmodus:** Erfundene oder falsch kategorisierte Risiken,
plausibel formulierte Bedrohungen ohne empirische Basis ("extrinsisch" +
"factual"). Besonders gefaehrlich: misgrounded Zitationen auf existierende,
aber unpassende Praezedenzfaelle oder Standards.
**Konsequenz:** Fehlpriorisierung der Mitigation, fehlende reale Risiken
bleiben unbeachtet, Ressourcenfehlallokation.
*Eigenschluss gestuetzt auf Hughes et al., 2025, S. 8 (Textzeilen 715-724):
"identifying risk patterns ... relying on the assumption that machines are
infallible" und Warnung vor algorithmic bias; sowie Aramali et al., 2025,
S. 2 (Zeilen 129-133): "Its effectiveness depends on data quality and
user instructions, with concerns about deep analysis and identifying
root causes."*

### 2. Statusbericht
**Halluzinationsmodus:** Intrinsische Halluzinationen beim Zusammenfassen
(Zahlenverdrehung, Meilenstein-Fehlzuordnung, erfundene Fortschrittsaussagen),
die dem Input widersprechen - typische Summarization-Fehlklasse.
**Konsequenz:** Falsche Governance-Entscheidungen auf Lenkungsausschuss-Ebene,
Vertrauensverlust bei Stakeholdern, potenzielle Meldepflichtverletzungen.
*Eigenschluss gestuetzt auf Anh-Hoang, Tran & Nguyen, 2025, S. 3
(Zeilen 154-160): "Intrinsic hallucinations frequently occur in
summarization tasks where the model outputs statements directly
contradicting the provided input"; und Shao, 2025, S. 5 (Zeilen 232-238):
"subtle hallucinations, such as slightly incorrect figures ... are difficult
to identify".*

### 3. Change Request
**Halluzinationsmodus:** Faktische + misgrounded Halluzinationen -
erfundene Auswirkungsanalysen, nicht existente Abhaengigkeiten, Verweise
auf real existierende aber unpassende Projektdokumente.
**Konsequenz:** Genehmigung von Aenderungen auf falscher Faktenbasis;
vertragliche Konsequenzen (Nachtragsmanagement), Budget- und
Terminueberschreitungen.
*Eigenschluss gestuetzt auf Magesh et al., 2025, S. 6 (Zeilen 334-340):
"These errors are potentially more dangerous than fabricating a case
outright, because they are subtler and more difficult to spot"; und
Felicetti et al., 2024 (Zeilen 141-150) zur "unfaithful appropriation"
von GenAI-Tools.*

### 4. Stakeholder-Kommunikation
**Halluzinationsmodus:** Extrinsische Halluzinationen (ausgeschmueckte,
nicht belegte Detailinformation) und faktische Halluzinationen, die
"plausibel und ueberzeugend" wirken - Air-Canada-Muster (Chatbot-Zusage
einer Bereavement-Fare-Kulanz, die so nicht existierte).
**Konsequenz:** Fehlinformation externer Stakeholder, Vertrauensverlust,
konkrete Haftung (vgl. Moffatt v. Air Canada, 2024 - das Unternehmen
haftete fuer die Chatbot-Aussage).
*Beleg: Shao, 2025, S. 2 (Zeilen 61-64): "Air Canada's chatbot provided
misleading information about bereavement fares, resulting in a misinformed
customer and associated financial loss (Moffatt v. Air Canada, 2024)".
Eigenschluss fuer den PM-Stakeholder-Kontext zusaetzlich gestuetzt auf
Hughes et al., 2025 (Zeilen 498-505): "inadequate communication can result
in misalignments within the project team and with external stakeholders".*

---

## Quellenverzeichnis (Kurzform)

- Magesh, V., Surani, F., Dahl, M., Suzgun, M., Manning, C. D., & Ho, D. E. (2025).
  Hallucination-Free? Assessing the Reliability of Leading AI Legal Research
  Tools. *Journal of Empirical Legal Studies*. DOI: 10.1111/jels.12413.
- Li, Y., Sheng, D., Zhou, Z., & Wu, Y. (2024). AI hallucination: towards a
  comprehensive classification of distorted information in AIGC.
  *Humanities and Social Sciences Communications*, 11:1278.
- Anh-Hoang, D., Tran, V., & Nguyen, L.-M. (2025). Survey and analysis of
  hallucinations in large language models. *Frontiers in Artificial
  Intelligence*, 8:1622292.
- Shao, A. (2025). Beyond Misinformation: A Conceptual Framework for Studying
  AI Hallucinations in (Science) Communication. arXiv:2504.13777v1.
- Felicetti, A. M., Cimino, A., Mazzoleni, A., & Ammirato, S. (2024). Artificial
  intelligence and project management. *Journal of Innovation & Knowledge*,
  9, 100545.
- Aramali, V., Cho, N., Pande, F., Al-Mhdawi, M.K.S., Ojiako, U., & Qazi, A.
  (2025). Generative AI in project management. *Project Leadership and
  Society*, 6, 100191.
- Hettrich, B., Krings, N., & Kock, A. (2025). Bridging the Expertise Gap.
  *Creativity and Innovation Management*, 34, 789-805.
- Hughes, L. et al. (2025). Impact of artificial intelligence on project
  management (PM). *Journal of Innovation & Knowledge*, 10, 100772.
- PwC Deutschland (2025). AI Jobs Barometer 2025.
- Project Management Institute (2024). First Movers' Advantage (GenAI Adoption
  Report).
- Project Management Institute (2024). Pushing the Limits (GenAI Report Wave 2).
- Barcaui, A. & Monat, A. (2023). Who is better in project planning? Generative
  artificial intelligence or project managers? *Project Leadership and
  Society*, 4, 100101.
