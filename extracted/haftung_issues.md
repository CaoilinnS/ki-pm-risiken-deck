# SOURCE_ISSUES - Nicht in den Primaerquellen eindeutig belegbare Aussagen

Diese Datei listet Aussagen auf, die im Deck-Entwurf vorkommen koennten, aber **nicht** in den drei gelesenen Primaerquellen (WD-7-004-25, Mapping-Paper, Bitkom "IT-gestuetzte Compliance im Finanzsektor") enthalten sind. Bevor diese Aussagen in das Deck uebernommen werden, muss die Projektleitung entweder (a) eine Primaerquelle ergaenzen oder (b) die Aussage entfernen/als Allgemeinwissen kennzeichnen.

---

## 1. Folie 14 / Financial Services - MaRisk und BAIT

**Problem:** Die Bitkom-PDF (Konzept und Vorgehensweise, 10 Seiten, 2017) nennt **MaRisk und BAIT namentlich nicht**. Sie verweist lediglich allgemein auf "Aufsicht durch BaFin, Deutsche Bundesbank bzw. EZB" und darauf, dass der Gesetzgeber die Regulierung "zuegig voran" treibe (S. 2). Konkrete Paragraphen, AT-Module oder BAIT-Kapitel fehlen.

**Nicht belegt:**
- dass MaRisk AT 4.3.1 fuer KI-Risikomanagement einschlaegig sei
- dass BAIT-Kapitel "Anwendungsentwicklung" KI-Modelle erfasse
- dass DORA (VO (EU) 2022/2554) KI-Cloud-Einsatz abdecke

**Empfehlung:** Vor Finalisierung Folie 14 entweder die aktuelle BaFin-MaRisk-Fassung (Rundschreiben 05/2023 oder Nachfolger), BAIT-Rundschreiben und DORA-Text als zusaetzliche Primaerquellen einbinden oder die Bullets entsprechend entschaerfen ("typischerweise einschlaegig" ohne konkrete Paragraphen).

## 2. Folie 14 / Health - MDR und KI

**Problem:** Weder WD noch Mapping noch Bitkom sprechen MDR (VO (EU) 2017/745) ausdruecklich an. Der WD erwaehnt nur **§ 630h Abs. 1 BGB** (Beweislastumkehr im Arzthaftungsrecht, analog auf KI-Diagnose, S. 8-9) - das ist belegt und nutzbar.

**Nicht belegt:**
- dass KI-Diagnosesoftware "Software as Medical Device" nach MDR ist
- dass AI Act Anhang III Medizinprodukte-Sicherheitsbauteile als Hochrisiko einstuft (ist in Art. 6 Abs. 1 AI Act - nicht Anhang III - geregelt und bezieht sich auf Harmonisierungsrechtsvorschriften der Union; sollte ggf. praeziser formuliert werden)

**Empfehlung:** MDR-Regelung aus der MDR selbst zitieren oder Folie auf § 630h BGB + AI Act Art. 6 Abs. 1 beschraenken.

## 3. Art. 6 Abs. 2 vs. Art. 6 Abs. 1 AI Act bei Hochrisiko-Klassifizierung

Im Mapping-Paper wird auf S. 7 "the list of high-risk AI system in Annex III as referred to in Article 6(2) AI Act" erwaehnt - das ist belegt. Die im Deck haeufig genutzte Kurzform "Hochrisiko nach Anhang III" ist korrekt, die zweite Kategorie (Art. 6 Abs. 1 i. V. m. Anhang I - harmonisierte Produktregulierung) sollte bei Medizin/Automotive mitgenannt werden. Aktuell nicht explizit im Deck; nur als Verbesserungshinweis notiert.

## 4. AILD-Status

Das Mapping-Paper (2024/2025) behandelt die AILD (Proposal COM/2022/496) noch als "in-progress" (S. 2). **Inzwischen wurde die AILD Anfang 2025 zurueckgezogen** - das ist **nicht** im Mapping-Paper belegt (Redaktionsschluss Nov. 2024) und sollte, falls im Deck erwaehnt, mit einer aktuellen Kommissions-/EP-Quelle belegt werden, nicht mit dem Mapping-Paper.

## 5. Konkretes Datum/Gericht/Aktenzeichen LG Kiel - verifiziert

LG Kiel, Urteil v. 29.02.2024, Az. 6 O 151/23, GRUR-RS 2024, 29599, Rn. 36 - **direkt und doppelt in WD S. 9 (Fn. 20, 21) belegt**. Keine Issue, Verifikation erfolgreich.

## 6. "Projektleiter" als Haftungssubjekt

Weder WD noch Mapping behandeln den "Projektleiter" als eigenstaendiges Haftungssubjekt. Die in `haftungsmatrix.js` eingetragene Rolle wird aus den allgemeinen Grundsaetzen (Organisationsverschulden, § 43 GmbHG, § 93 AktG) abgeleitet und mit der allgemeinen Betreiber-/Anwenderlogik der Primaerquellen unterfuettert. Das ist konstruktiv; im Deck sollte transparent bleiben, dass dies eine **systematische Projektion** des Betreiber-/Organhaftungsrechts auf die Projektleiter-Rolle ist, keine Rsp. oder Norm speziell dazu.

## 7. § 630h BGB "analog" auf Dokumentationsmaengel ausserhalb Arzthaftung

Im Prompt wird "§ 630h BGB bei Dokumentationsmaengeln analog" als Beispiel fuer Beweislastumkehr bei Projektleiter-Haftung genannt. WD S. 8-9 erwaehnt § 630h Abs. 1 BGB ausdruecklich **nur im Kontext KI-gestuetzter Untersuchungen/Diagnosesysteme** (Arzthaftungsrecht), nicht als allgemeines PM-Tool. Eine Analogie auf Projekt-Dokumentationsmaengel ausserhalb des medizinischen Kontexts ist dogmatisch nicht trivial und sollte im Deck vorsichtig formuliert werden.

## 8. Gleichsetzung "Anwender" = "Deployer" im AI Act

Der AI Act unterscheidet "provider" (Anbieter) und "deployer" (Betreiber); einen individuell-natuerlichen Mitarbeiter als Haftungssubjekt kennt der AI Act **nicht** eigenstaendig. Die Rolle "Anwender" im deutschen WD-Text (S. 8) umfasst sowohl juristische Personen/Unternehmen (= deployer) als auch natuerliche Personen. Im Deck daher klarstellen: "Anwender" ist eine deutsch-rechtliche Haftungsperspektive, kein AI-Act-Begriff.

---

**Stand:** 2026-04-18
**Bearbeiter:** Research-Agent (Claude Opus 4.7)
