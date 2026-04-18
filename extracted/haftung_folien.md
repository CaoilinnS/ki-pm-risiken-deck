# Haftung und Regulierung - Textbausteine fuer Folien 8-14

Primaerquellen:
- WD = Wissenschaftliche Dienste des Bundestags, Sachstand WD 7 - 3000 - 004/25, Abschluss 04.03.2025
- Mapping = Rodriguez de Las Heras Ballell, Cambridge Forum on AI: Law and Governance (2025) 1, e5, doi:10.1017/cfl.2024.8
- AI Act = VO (EU) 2024/1689 vom 13.06.2024
- ProdHaftRL = RL (EU) 2024/2853 vom 23.10.2024 (Amtsblatt 18.11.2024; Umsetzungsfrist 09.12.2026)

Qualitaetsregel: Nicht zitierbare Inhalte sind in `haftung_issues.md` verzeichnet.

---

## Folie 9 - EU AI Act: Art. 4 AI Literacy, Art. 14 Human Oversight, Anhang III Hochrisiko

### Art. 4 AI Act - KI-Kompetenz ("AI Literacy")

- Anbieter **und** Betreiber von KI-Systemen muessen sicherstellen, dass ihr Personal und andere in ihrem Auftrag mit Betrieb/Nutzung befasste Personen ueber ein ausreichendes Mass an KI-Kompetenz verfuegen (Art. 4 AI Act; vgl. Mapping S. 4, Fn. 11, und AI Act selbst).
- Massgeblich sind technische Kenntnisse, Erfahrung, Ausbildung sowie der konkrete Einsatzkontext und die betroffenen Personen (AI Act Art. 4).
- **PM-Bezug:** Projektleitung muss Schulungs- und Kompetenznachweise fuer alle KI-Nutzer im Projekt dokumentieren, sonst liegt bereits ein struktureller Pflichtverstoss des Betreibers vor.

### Art. 14 AI Act - Human Oversight (Menschliche Aufsicht)

- Hochrisiko-KI-Systeme sind so zu konzipieren und zu entwickeln, dass sie waehrend der Verwendung von natuerlichen Personen wirksam beaufsichtigt werden koennen (AI Act Art. 14; vgl. Mapping S. 18 zu "monitoring measures").
- Aufsichtspersonen muessen Grenzen des Systems verstehen, Ausgaben sachgerecht interpretieren, den Betrieb stoppen und Entscheidungen ueberstimmen koennen (AI Act Art. 14).
- **PM-Bezug:** In jedem KI-Use-Case ist eine konkret benannte, qualifizierte Aufsichtsperson mit Abbruch- und Korrekturbefugnis vorzusehen.

### Anhang III AI Act - Hochrisiko-Anwendungsbereiche

- Anhang III listet Hochrisiko-Einsatzbereiche (u. a. biometrische Identifizierung, kritische Infrastruktur, Bildung, Beschaeftigung/HR, Zugang zu wesentlichen Dienstleistungen, Strafverfolgung, Migration, Justiz/demokratische Prozesse); die Einstufung ist zweckbezogen (AI Act Art. 6 Abs. 2 i. V. m. Anhang III; Mapping S. 7).
- Bei Zweckaenderung durch den Betreiber greift Art. 25 AI Act: Der Betreiber wird selbst zum Anbieter mit den entsprechenden Pflichten (Mapping S. 9).
- **PM-Bezug:** Use-Case-Klassifizierung zu Projektbeginn ist Pflicht - insbesondere bei HR-, Kreditvergabe- oder Bewerber-Ranking-Projekten sofort Hochrisiko-Pruefung.

---

## Folie 10 - ProdHaftRL: Paradigmenwechsel (Software/KI als Produkt)

- **Alte Rechtslage (ProdHaftG 1989, § 2):** Produkt = bewegliche Sache + Elektrizitaet; Software war nicht ausdruecklich erfasst. Folge: Ob KI "Produkt" im Sinne der Produkthaftung ist, war **bisher umstritten** - nur in Hardware implementierte KI wurde sicher erfasst (WD S. 9-10).
- **Neue Rechtslage (RL 2024/2853 "ProdHaftRL"):** Art. 4 Nr. 1 S. 2 ProdHaftRL stuft Software ausdruecklich als Produkt ein; ErwG 3 stellt klar, dass dies auch fuer KI gilt (WD S. 10).
- **Zeitschiene:** Formelle Verabschiedung Rat EU 10.10.2024, ABl-Veroeffentlichung 18.11.2024, Umsetzungsfrist bis **09.12.2026** (WD S. 10).
- **Beweiserleichterungen - Art. 10 ProdHaftRL:**
  - Fehlerhaftigkeit wird vermutet, wenn der Hersteller wichtige Informationen nicht offenlegt, vorgeschriebene Sicherheitsstandards nicht eingehalten werden oder das Produkt offensichtlich bei normaler Verwendung versagt (WD S. 11).
  - Art. 10 Abs. 3 ProdHaftRL: Kausalzusammenhang zwischen Fehler und Schaden wird vermutet, wenn das Produkt offensichtlich defekt und der Schaden typisch ist (WD S. 11).
  - Art. 10 Abs. 4 ProdHaftRL: In "besonders komplizierten Faellen" wird Fehlerhaftigkeit + Kausalitaet vermutet, wenn der Klaeger Wahrscheinlichkeit nachweist (WD S. 11).
- **Erweiterter "Component"-Begriff - Art. 4(3), (4) ProdHaftRL:** Auch "related services" (z. B. Datenlieferdienste, Cloud-/SaaS-Komponenten) gelten als Komponenten; General-Purpose-AI-Modelle koennen als Komponente bzw. der integrierende Anbieter nach Art. 8 Abs. 2 revPLD als "refurbisher" eingestuft werden (Mapping S. 17).

Quellen: WD S. 9-12 (Kap. 4.2.1 f.); Mapping S. 14-17 (Kap. 3.2.1).

---

## Folie 11 - § 823 BGB und LG Kiel: "Zu-eigen-gemachte" KI-Inhalte

### Urteilskern

Das **LG Kiel** entschied mit **Urteil vom 29.02.2024, Az. 6 O 151/23** (GRUR-RS 2024, 29599, Rn. 36), dass der Betreiber einer Plattform, die eine eigene KI-basierte Software zur Beantwortung von Suchanfragen einsetzt, fuer KI-generierte Falschinformationen nach allgemeinen Grundsaetzen **als Verwender der Software haftet**. Die bewusst eingesetzte KI habe nicht erkannt, dass die Information falsch war, weil sie fuer solche Faelle unzulaenglich trainiert war. Der Betreiber hafte auch fuer von Dritten eingestellte falsche Informationen, wenn er sie sich aus Nutzersicht "zu eigen" mache und erkennbar die inhaltliche Verantwortung uebernehme (WD S. 9, Fn. 20, 21).

### Einordnung in § 823 BGB

- Deliktische Betreiberhaftung aus § 823 Abs. 1 BGB; fuer den Geschaedigten oft Schwierigkeit, Verschulden nachzuweisen (WD S. 8).
- Beweislastumkehr z. B. nach § 630h Abs. 1 BGB im Arzthaftungsrecht - auf KI-gestuetzte Untersuchungen/Diagnosesysteme anwendbar (WD S. 8-9).

### PM-Transfer: Wann macht Projektleitung KI-Output "zu eigen"?

- Wenn KI-generierte Texte/Analysen unveraendert in Projektberichte, Steering-Vorlagen, Kunden-Deliverables uebernommen werden.
- Wenn die Projektleitung KI-Outputs im eigenen Namen (z. B. Chatbot auf Unternehmenswebsite, automatisierte Mandanten-Antwort) veroeffentlicht.
- Wenn erkennbar die inhaltliche Verantwortung uebernommen wird ("Unsere Risiko-Analyse zeigt...") - auch ohne explizite Pruefung.

Quellen: WD S. 8-9 (Kap. 4.1); Landgericht Kiel, Urteil v. 29.02.2024, Az. 6 O 151/23, GRUR-RS 2024, 29599, Rn. 36.

---

## Folie 12 - Rollen-Teaser (4 Haftungssubjekte)

- **Hersteller/Anbieter:** Verschuldensunabhaengige Produkthaftung nach neuer ProdHaftRL + deliktische Produzentenhaftung mit Beweislastumkehr (WD S. 9-12). Eintrittspunkt in die Haftungskette.
- **Betreiber (Unternehmen):** Haftet deliktisch und vertraglich, wenn die eingesetzte KI-Software Schaden verursacht - besonders, wenn Ausgaben "zu eigen gemacht" werden (LG Kiel, WD S. 8-9).
- **Anwender (Mitarbeiter):** Persoenlich verantwortlich fuer im eigenen Namen verwendete KI-Inhalte; Pruefpflicht gegen Halluzinationen und Bias (WD S. 8, 13).
- **Projektleitung:** Traegt Auswahl-, Instruktions- und Ueberwachungspflichten; muss Human-Oversight (AI Act Art. 14) organisatorisch absichern und dokumentieren.

-> Ueberleitung: Wer haftet wofuer - interaktive Matrix auf der naechsten Folie.

---

## Folie 14 - Regulierte Industrien: FinServ, Health, Oeffentliche Hand

> Quellenhinweis: Das verfuegbare Bitkom-Dokument "IT-gestuetzte Compliance im Finanzsektor" (Konzept und Vorgehensweise, ohne Datum, 2017) beschreibt ein Referenzmodell-Projekt von Bitkom und QIRM; es enthaelt **keine vertieften Ausfuehrungen zu MaRisk, BAIT, DORA, MDR** - lediglich einen Hinweis, dass Aufsicht durch BaFin, Deutsche Bundesbank und EZB den Adressatenkreis vergroessert (S. 2). Die nachfolgenden Aussagen zu MaRisk/BAIT/MDR stuetzen sich daher auf in den Primaerquellen **nicht** nachgewiesenes Allgemeinwissen und sind in `haftung_issues.md` entsprechend markiert.

### Financial Services

- Der Gesetzgeber treibt die Regulierung von Banken, Finanzdienstleistern und Versicherungen sowie verwandter Branchen "weiterhin zuegig voran"; dies vergroessert den Adressatenkreis der BaFin-/Bundesbank-/EZB-Aufsicht (Bitkom 2017, S. 2).
- Es existieren (Stand 2017) keine adaequaten Compliance-Referenzmodelle/Industriestandards fuer IT-gestuetzte Compliance im Banken- und Finanzsektor; das Bitkom-QIRM-Projekt schliesst diese Luecke methodisch (Bitkom 2017, S. 2).
- Know-Your-Prinzipien (KY-Customer, KY-Transaction, KY-Process) strukturieren die Datenarchitektur der Compliance - bei KI-Einsatz im Onboarding/Geldwaesche-Screening direkt relevant (Bitkom 2017, S. 3, 5).
- [Nicht aus Primaerquelle belegt] MaRisk AT 4.3.1 (Risikomanagement) und BAIT (Bankaufsichtliche Anforderungen an die IT) adressieren IT-Risiken einschliesslich Auslagerung; fuer KI-Einsatz relevant ueber BAIT-Abschnitt "Anwendungsentwicklung".
- [Nicht aus Primaerquelle belegt] DORA (VO (EU) 2022/2554) ergaenzt ab 17.01.2025 das Rahmenwerk um digitale operationale Resilienz, insb. bei Drittanbieter-ICT-Risiken (relevant fuer Cloud-KI).

### Health Care

- [Nicht aus Primaerquelle belegt] MDR (VO (EU) 2017/745) erfasst Medizinprodukte einschliesslich Software-as-Medical-Device; KI-Diagnosesysteme unterliegen zusaetzlich AI Act Anhang III (Medizinprodukte-Sicherheitsbauteile = Hochrisiko).
- Aus WD S. 8-9 belegt: § 630h Abs. 1 BGB (Beweislastumkehr bei Behandlungsfehlern) ist auf KI-gestuetzte Untersuchungen und Diagnosesysteme anwendbar.
- Aus WD S. 13 belegt: Halluzinationen im medizinischen Kontext koennen zu Reputations-, Finanz- und **rechtlichen Nachteilen** fuehren - die Pruef- und Dokumentationspflicht ist hier besonders hoch.

### Oeffentliche Hand

- Das Bundesministerium des Innern und fuer Heimat betreibt das Beratungszentrum fuer Kuenstliche Intelligenz (BeKI); Stand Februar 2025 enthaelt die Uebersicht 179 Eintraege zu KI-Systemen der Bundesverwaltung mit Risikostrategie-Angaben (WD S. 4).
- Im Rahmen der "Digitalisierungsinitiative fuer die Justiz" unterstuetzt das BMJ KI-Projekte der Laender (Sprachmodell, Aktenstrukturierung, Uebersetzungsplattform, Massenverfahren-Assistenz, Anonymisierungs-Kit); technische Standards werden ueber eine gemeinsame KI-Plattform gesetzt (WD S. 6-8).
- BSI-Einschaetzung: Risiken werden in drei Kategorien geteilt - ordnungsgemaesse Nutzung (unerwuenschte Ausgaben, mangelnde Kontrolle), Missbrauch und Angriffe (Poisoning, Privacy, Evasion Attacks; WD S. 14-15).

Quellen: Bitkom 2017, S. 2-3, 5; WD S. 4-8, 13-15; ergaenzendes Branchenrecht siehe `haftung_issues.md`.
