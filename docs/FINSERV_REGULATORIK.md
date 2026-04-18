# Finanzaufsichtsrechtliche Regulatorik für Generative KI in der Projektdokumentation

**Stand der Recherche:** 2026-04-18
**Bearbeitung:** Claudia Bothe (claudia.bothe86@gmail.com)
**Zweck:** Faktenbasis für LL.M.-Slidev-Deck „Generative KI in der Projektdokumentation: Qualitätsanforderungen, Haftungsfragen und Governance-Rahmen"

---

> **METHODENHINWEIS — UPDATE 2026-04-18:**
> Erste Recherche ohne Web. Anschließend wurden folgende Quellen **live verifiziert**:
> - BaFin-Fachartikel **„KI bei Banken und Versicherern: Automatisch fair?"** vom **01.08.2024** — https://www.bafin.de/SharedDocs/Veroeffentlichungen/DE/Fachartikel/2024/fa-bj_0801_KI_Finanzindustrie.html
> - BaFin-**Orientierungshilfe zu IKT-Risiken beim Einsatz von KI** (Referat CTF 5), Stand **18.12.2025** — https://www.bafin.de/SharedDocs/Downloads/DE/Anlage/neu/dl_Anlage_orientierungshilfe_IKT_Risiken_bei_KI.html?nn=19659504 — operationalisiert **DORA** für KI-Einsatz, deckt explizit Drittanbieter-Risiken (relevant für GenKI-API-Nutzung).
> Diese beiden Quellen ersetzen die unten weiter geführten Unsicherheits-Marker zur „BaFin-2024-KI-Hinweise"-Frage.

---

## Block 1 — BaFin-Auslegungshinweise zu KI (2024)

### 1.1 Identifikation des Dokuments

Die BaFin hat **kein** umfassendes neues „KI-Rundschreiben" mit dem Titel *„Auslegungshinweise zur KI-Nutzung in Banken/Versicherungen"* in 2024 veröffentlicht, das der EU-AI-Act inhaltlich überlagert. Stattdessen existiert eine **mehrstufige Publikationspraxis**:

| Dokument | Datum | Status | Quelle |
|---|---|---|---|
| BaFin-Prinzipien „Big Data und Künstliche Intelligenz" (BDAI) — *Leitlinien für den Einsatz von Algorithmen in Entscheidungsprozessen* | 15.06.2021 | **Verifiziert in Trainingsdaten** | https://www.bafin.de/SharedDocs/Downloads/DE/Aufsichtsrecht/dl_Prinzipienpapier_BDAI.html |
| BaFin-Konsultation 11/2021 (Maschinelles Lernen — Aufsichtliche Anforderungen an interne Risikomodelle) | 21.07.2021 (Konsultation) | **Verifiziert in Trainingsdaten** | https://www.bafin.de/SharedDocs/Veroeffentlichungen/DE/Konsultation/2021/kon_11_21_ML.html |
| BaFin-Journal-Artikel „Generative KI" (Risiken / Aufsichtspraxis) | 2024 | **Existenz wahrscheinlich, Datum [nicht verifizierbar — bitte BaFin/EUR-Lex selbst prüfen]** | https://www.bafin.de/DE/PublikationenDaten/BaFinJournal/bafinjournal_node.html |
| Gemeinsame Mitteilung BaFin/Bundesbank zur KI-Nutzung (Sommer 2024) | **[nicht verifizierbar — bitte BaFin selbst prüfen, ob exakt dieses Dokument existiert]** | unsicher | — |

**Empfehlung:** Im Deck primär auf das **BDAI-Prinzipienpapier (2021)** und den **AI Act (VO (EU) 2024/1689)** verweisen. Das BDAI-Papier ist die *bislang einzig publizierte, nicht-rechtsverbindliche Auslegungshilfe* der BaFin zu KI-Risiken.

### 1.2 Kernforderungen — Erklärbarkeit (Explainability)

Aus dem **BDAI-Prinzipienpapier (BaFin, 2021)**:

- **Nachvollziehbarkeit der Modellergebnisse**: Institute müssen sicherstellen, dass Modellergebnisse *für sachverständige Dritte* (interne Revision, Aufsicht) nachvollziehbar sind. „Black-Box-Modelle" sind nicht generell verboten, aber begründungspflichtig.
- **Dokumentationspflicht**: Trainingsdaten, Feature-Auswahl, Validierung und Modellperformance sind durchgängig zu dokumentieren.
- **Proportionalität**: Erklärbarkeitsanforderungen skalieren mit Risikohöhe und Eingriffstiefe der Entscheidung (z. B. Kreditvergabe vs. interne Vorbefüllung von Formularen).

> Quelle: BaFin (2021), *Maschinelles Lernen in Risikomodellen — Aufsichtliche Anforderungen*, Konsultation 11/2021, Abschnitte zu Modell-Governance.
> [Wortlautzitate nicht eingefügt — bitte BaFin-PDF selbst prüfen.]

### 1.3 Kernforderungen — Human Oversight

- **„Mensch in der Letztverantwortung"**: Die BaFin verlangt, dass Entscheidungen mit aufsichtsrechtlicher Relevanz nicht vollautomatisiert ergehen, sondern eine *qualifizierte menschliche Überprüfung* möglich bleibt.
- **Verhältnis zu Art. 14 AI Act**: Art. 14 VO (EU) 2024/1689 regelt für **Hochrisiko-KI-Systeme** die menschliche Aufsicht (u. a. Pflicht zu *Überwachen*, *Eingreifen*, *Stop-Funktion*, Schutz vor *Automation Bias*). Die BaFin-Position ist *kompatibel*, aber **branchenspezifisch enger**: Im Finanzsektor gelten Art. 25a KWG (Geschäftsleiterverantwortung), § 25a Abs. 1 KWG (Risikomanagement) und MaRisk AT 4.3.4 als *zusätzliche* Grundlage, die unabhängig von der Hochrisiko-Einstufung des AI Act greift.
- **Praxisfolge**: Auch eine *nicht* als Hochrisiko-System klassifizierte GenKI (z. B. ChatGPT zur internen Texterstellung) unterliegt im Finanzsektor faktisch einer Oversight-Pflicht über § 25a KWG / MaRisk.

> Quelle Art. 14: VO (EU) 2024/1689, ABl. L, 2024/1689, 12.07.2024. EUR-Lex CELEX:32024R1689.
> Quelle § 25a KWG: https://www.gesetze-im-internet.de/kredwg/__25a.html

### 1.4 Bezug zu MaRisk und DORA

- **MaRisk AT 4.3.4** (Risikodatenaggregation) und **AT 7.2** (Technisch-organisatorische Ausstattung) verlangen dokumentierte IT-Prozesse — KI-Modelle fallen darunter.
- **DORA** überlagert seit 17.01.2025 die MaRisk-Regelungen zu **IKT-Risikomanagement** (siehe Block 4).
- Das **BDAI-Papier (2021)** ist *kein* Rundschreiben, sondern unverbindliche Aufsichtspraxis — wird aber bei Sonderprüfungen (§ 44 KWG) zur Beurteilungsmaßgabe.

### 1.5 Spezifika für Generative KI und KI-gestützte Dokumentation

- Eine **eigenständige BaFin-Verlautbarung speziell zu generativer KI** (LLMs, RAG, Halluzinationsrisiko) ist mit Stand der Trainingsdaten **[nicht verifizierbar — bitte BaFin-Suche durchführen]**. Das BaFin-Journal hat in 2023/2024 mehrere Artikel zu GenKI publiziert; diese sind jedoch *erläuternd*, nicht *bindend*.
- **Praktische Konsequenz für KI-gestützte Projektdokumentation**:
  1. *Halluzinationsrisiko* — bei Verwendung von LLM-Output in regulatorisch relevanten Dokumenten (Risikoberichte, Auslagerungsregister, ICAAP-Dokumente) ist ein Vier-Augen-Review zwingend.
  2. *Modellauswahl* — Closed-Source-Modelle müssen über ihre Anbieter-Zertifizierung (z. B. SOC 2, ISO 27001) hinaus auch die DORA-Anforderungen an IKT-Drittdienstleister erfüllen (Block 2).
  3. *Datenklassifikation* — Eingaben in GenKI-Systeme sind nach BAIT/DORA-Schema einzustufen; Geschäftsgeheimnisse und personenbezogene Daten erfordern separaten Vertrag (DPA + DORA-Annex).

---

## Block 2 — DORA Art. 28 ff. (IKT-Drittdienstleister)

**Rechtsquelle:** Verordnung (EU) 2022/2554 des Europäischen Parlaments und des Rates vom 14. Dezember 2022 über die digitale operationale Resilienz im Finanzsektor (DORA). ABl. L 333/1, 27.12.2022. **Geltung ab 17.01.2025** (Art. 64 DORA). EUR-Lex: CELEX:32022R2554.
URL: https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32022R2554

### 2.1 Art. 28 — Allgemeine Grundsätze

- Finanzunternehmen tragen die **volle Verantwortung** für die Einhaltung aller DORA-Pflichten, auch wenn sie IKT-Dienste an Dritte auslagern (Art. 28 Abs. 1 lit. a).
- **Verhältnismäßigkeitsprinzip** unter Berücksichtigung von Art und Umfang der IKT-Dienste (Abs. 1 lit. b).
- **Strategie für IKT-Drittparteienrisiken** als Teil des IKT-Risikomanagementrahmens (Abs. 2), inkl. **Multi-Vendor-Strategie** bei kritischen oder wichtigen Funktionen (Abs. 2 UAbs. 2).
- **Informationsregister** über alle vertraglichen Vereinbarungen mit IKT-Drittdienstleistern (Abs. 3) — unterscheidet *kritische / wichtige Funktionen* vs. *sonstige IKT-Dienste*. Pflicht zur jährlichen Meldung an die zuständige Behörde (Abs. 3 UAbs. 2).
- **Vorab-Risikobewertung** vor Vertragsabschluss (Abs. 4) — Konzentrationsrisiko, Auswirkungen auf operationelle Resilienz, Datenschutz, Reputation.
- **Due Diligence** zur Eignung des Anbieters (Abs. 5).
- **Beendigungsstrategien / Exit-Strategien** für kritische oder wichtige Funktionen (Abs. 8) — *siehe 2.6*.

### 2.2 Art. 29 — Vorabbewertung des Konzentrationsrisikos

- Vor Vertragsabschluss ist zu prüfen, ob die Vereinbarung führt zu:
  - einem **Vertrag mit einem schwer ersetzbaren IKT-Drittdienstleister**, oder
  - **mehreren Verträgen** mit demselben oder eng verbundenen Anbietern.
- Bewertung der **Substituierbarkeit** und der Auswirkungen eines Anbieterausfalls.
- Bei **Unterauftragsvergabe** (Sub-Outsourcing) — insbesondere in **Drittstaaten** — vertiefte Prüfung der gesamten Lieferkette.

### 2.3 Art. 30 — Wesentliche Vertragsbestandteile (Liste)

**Art. 30 Abs. 2 (Mindestinhalt für *alle* Verträge):**

a) klare und vollständige Beschreibung aller bereitgestellten IKT-Dienste (auch Sub-Outsourcing);
b) Standorte, an denen die Dienste erbracht und Daten verarbeitet/gespeichert werden, einschließlich vorheriger Informationspflicht bei Standortänderung;
c) Bestimmungen zu Verfügbarkeit, Authentizität, Integrität und Vertraulichkeit der Daten (auch personenbezogen);
d) Bestimmungen zum **Zugang, zur Wiederherstellung und Rückgabe** personenbezogener und nicht personenbezogener Daten bei Insolvenz, Abwicklung oder Beendigung des Vertrags;
e) Beschreibung der **Service-Levels** (SLA), inkl. Aktualisierungen;
f) Pflicht zur Unterstützung bei IKT-bezogenen Vorfällen ohne zusätzliche Kosten oder zu vorab festgelegten Konditionen;
g) volle Kooperation mit den zuständigen Behörden und der Abwicklungsbehörde;
h) Kündigungsrechte und damit verbundene Mindestkündigungsfristen;
i) Voraussetzungen für die Teilnahme des IKT-Drittdienstleisters an den **IKT-Sensibilisierungs- und digitalen operationalen Resilienzschulungen** der Finanzunternehmen.

**Art. 30 Abs. 3 (zusätzliche Mindestinhalte für *kritische oder wichtige Funktionen*):**

a) vollständige Beschreibung der Dienste mit quantitativen und qualitativen **Leistungszielen** und Sanktionen bei Nichterfüllung;
b) Notifizierungs- und Berichtspflichten bei wesentlichen Entwicklungen, die die Diensterbringung beeinträchtigen können;
c) Pflicht zur Umsetzung und Erprobung von **Notfall-/Wiederherstellungsplänen** sowie geeigneten IKT-Sicherheitsmaßnahmen (insbesondere Standards der **Informationssicherheit**);
d) Teilnahme an den **Threat-led Penetration Tests (TLPT)** des Finanzunternehmens (Art. 26/27) und Mitwirkung;
e) **uneingeschränktes Zugriffs-, Inspektions- und Auditrecht** der Finanzunternehmen, der Aufsicht und beauftragter Dritter;
f) Bedingungen für **Sub-Outsourcing** (Genehmigungsvorbehalt, Kettendurchgriff);
g) **Exit-Strategien** und **Übergangszeiten** (siehe 2.6);
h) Beendigungsrechte bei wesentlichen Verstößen, behördlicher Aufforderung oder Verschlechterung der Diensterbringung.

### 2.4 Art. 31 — Bestimmung kritischer IKT-Drittdienstleister (CTPP)

- Die **ESAs** (EBA, ESMA, EIOPA) bestimmen über das **Joint Committee** anhand einer **Kriterienliste** (Art. 31 Abs. 2):
  1. systemische Auswirkungen eines Ausfalls,
  2. systemische Bedeutung der von dem Anbieter unterstützten Finanzunternehmen,
  3. Abhängigkeit von dem Anbieter bei kritischen/wichtigen Funktionen,
  4. **Substituierbarkeit** des Anbieters.
- CTPP-Status führt zur **direkten Aufsicht durch die ESA als Lead Overseer** (Art. 32 ff.).
- Erste CTPP-Liste war für 2025 angekündigt; Hyperscaler (AWS, Microsoft Azure, Google Cloud) gelten als wahrscheinliche Kandidaten. **Aktuelle CTPP-Liste 04/2026: [nicht verifizierbar — bitte ESMA-Joint-Committee-Veröffentlichung selbst prüfen]**.

### 2.5 Anwendung auf OpenAI / Azure OpenAI / Anthropic Enterprise für Projektdokumentation

| Anbieter | DORA-Status | Begründung |
|---|---|---|
| **Azure OpenAI** | **IKT-Drittdienstleister gem. Art. 3 Nr. 19 DORA**; Microsoft Azure ist **wahrscheinlicher CTPP-Kandidat** | Hosted by Microsoft Azure, Vertragspartner ist Microsoft Ireland Operations Ltd. |
| **OpenAI direkt (API)** | IKT-Drittdienstleister; **kein** CTPP, aber Sub-Processor-Risiko | Vertragspartner OpenAI Ireland Ltd.; Sub-Processing über Microsoft Azure (Hosting). |
| **Anthropic Enterprise** | IKT-Drittdienstleister; **kein** CTPP (Stand 04/2026: [nicht verifizierbar]) | Vertragspartner Anthropic PBC (USA) bzw. Anthropic Ireland; Hosting i. d. R. AWS/GCP. |

**Pflichten, die in jedem Fall greifen:**

1. **Art. 28 Abs. 3** — Aufnahme in das **Informationsregister** mit Klassifikation kritisch/nicht kritisch.
2. **Art. 28 Abs. 4** — Vorabbewertung (Konzentration, Substituierbarkeit, Datenschutz).
3. **Art. 30 Abs. 2** — Vertraglich abzubildender Mindestinhalt (Standortbestimmungen, Auditrechte, Datenrückgabe etc.).
4. Bei Einstufung als **„Unterstützung kritischer oder wichtiger Funktionen"** — zusätzlich **Art. 30 Abs. 3** (TLPT, Exit-Strategie, Auditrechte „uneingeschränkt").
5. **Meldung an BaFin** im Rahmen des jährlichen Registers.

### 2.6 Wann ist GenKI eine „kritische oder wichtige Funktion"?

Definition „kritische oder wichtige Funktion" (Art. 3 Nr. 22 DORA): Funktion, deren *Ausfall* die *Erfüllung der Pflichten* aus dem Finanzaufsichtsrecht oder die *finanzielle Solidität / Geschäftskontinuität* eines Finanzinstituts wesentlich beeinträchtigen würde.

**Praxisleitlinie:**

- GenKI für **interne Texterstellung / Folien / Zusammenfassungen** — i. d. R. **nicht** kritisch.
- GenKI als Bestandteil **kundenfacing Prozesse** (Chatbot in Online-Banking, automatisierte Vertragstexte) — **kritisch/wichtig** möglich.
- GenKI in **Risikomanagement, Reporting, ICAAP, ILAAP, Aufsichtsmeldewesen** — **kritisch**, da Ausfall zu Meldeverstoß führen kann.
- GenKI in **Projektdokumentation interner Bauprojekte / IT-Projekte** — Einzelfallbewertung, **i. d. R. nicht-kritisch**, sofern Ergebnisse nicht in Pflichtdokumente einfließen.

### 2.7 Exit-Strategie-Anforderung

**Art. 28 Abs. 8 DORA** (für *kritische oder wichtige Funktionen*):

- **Dokumentierte Exit-Strategie** mit folgenden Elementen:
  - **Übergangszeiträume**, in denen die Dienste in vergleichbarer Qualität fortgeführt werden,
  - **Wiedereingliederungs- oder Migrationsplan** (Insourcing oder Wechsel zu Alternativanbieter),
  - **Datenmigrationskonzept** (Format, Übergabe, Löschung beim Altanbieter),
  - **Test der Exit-Strategie** in regelmäßigen Abständen.
- Praxisproblem GenKI: **Modell-Lock-in** (Prompt-Optimierung, Fine-Tuning, RAG-Indizes sind anbieterspezifisch). Exit-Strategie muss explizit **Anbieterwechsel innerhalb angemessener Frist** sicherstellen — was bei proprietären Closed-Source-Modellen technisch schwierig ist.

---

## Block 3 — MaRisk AT 9 (Auslagerung)

**Rechtsquelle:** BaFin-Rundschreiben **„Mindestanforderungen an das Risikomanagement" (MaRisk)**, in der Fassung vom **29.06.2023** (7. MaRisk-Novelle, Rundschreiben 05/2023 (BA)). URL: https://www.bafin.de/SharedDocs/Veroeffentlichungen/DE/Rundschreiben/2023/rs_1305_marisk_ba.html

> **Hinweis 8. Novelle:** Eine **8. MaRisk-Novelle 2024/2025** war für die DORA-Anpassung in Konsultation. Veröffentlichung und genaues Inkrafttreten **[nicht verifizierbar — bitte BaFin-Konsultationsstand 04/2026 selbst prüfen]**. Zu erwarten ist, dass AT 9 weitgehend in Richtung DORA-Konformität reduziert / ersetzt wird, da DORA als unmittelbar geltende EU-VO Vorrang hat.

### 3.1 Auslagerungstatbestand (AT 9 Tz. 1)

**Auslagerung** liegt vor, wenn ein anderes Unternehmen mit der Wahrnehmung von Aktivitäten und Prozessen beauftragt wird, die im Zusammenhang mit der Durchführung von Bankgeschäften, Finanzdienstleistungen oder sonstigen institutstypischen Dienstleistungen stehen, die ansonsten vom Institut selbst erbracht würden.

**Abgrenzung:**

- **Auslagerung** = institutstypische Tätigkeit *dauerhaft* an Dritten verlagert.
- **Sonstiger Fremdbezug** = einmalige oder Standard-Marktleistung (z. B. SaaS-Standard ohne Bezug zu institutstypischer Aufgabe, Strom, Reinigung, Standard-Office-Software).
- Maßgeblich: **Substituierbarkeit, Standardisierung, Risiko**.

### 3.2 Anforderungen vor der Auslagerung (AT 9 Tz. 2–4)

- **Risikoanalyse** vor jeder Auslagerung mit Wesentlichkeitsprüfung.
- **Wesentliche Auslagerungen** unterliegen verschärften Anforderungen.
- Berücksichtigung von Reputations-, Konzentrations-, operationellen und rechtlichen Risiken.

### 3.3 Anforderungen während der Auslagerung (AT 9 Tz. 5–14)

- **Schriftliche Auslagerungsvereinbarung** mit definierten Mindestinhalten:
  - Spezifikation der ausgelagerten Aktivität,
  - Informations- und Prüfungsrechte,
  - Weisungsrechte,
  - Kündigungsrechte,
  - Datenschutz und Vertraulichkeit,
  - Sub-Outsourcing-Klauseln,
  - SLA / Leistungsindikatoren.
- **Auslagerungsbeauftragter** (zentrale Funktion, AT 9 Tz. 12).
- **Auslagerungsregister** (AT 9 Tz. 13) — entspricht weitgehend dem DORA-Register.
- **Fortlaufende Überwachung** und periodische Risiko-Reassessments.
- **Notfallkonzepte** und **Exit-Strategien** für wesentliche Auslagerungen.

### 3.4 Unterscheidung AT 9 vs. „sonstiger Fremdbezug"

| Kriterium | Auslagerung (AT 9) | Sonstiger Fremdbezug |
|---|---|---|
| Institutstypische Tätigkeit? | ja | nein |
| Dauerhaftigkeit | regelmäßig dauerhaft | i. d. R. einmalig |
| Standardisierung | unterschiedlich | hoch |
| Vertragliche Mindestinhalte | umfangreich (AT 9 Tz. 7) | reduziert |
| Auslagerungsregister-Pflicht | ja | nein |
| Auslagerungsbeauftragter zuständig | ja | nein |

**Praxisbeispiel GenKI-Nutzung:**
- ChatGPT-Plus-Account einzelner Mitarbeiter für Brainstorming → **sonstiger Fremdbezug**.
- Azure-OpenAI-API integriert in firmeninterne Dokumentationsplattform für Compliance-Berichte → **wesentliche Auslagerung** *möglich*, da Bezug zu institutstypischen Aufgaben (Compliance-Dokumentation).

---

## Block 4 — Abgrenzung DORA × MaRisk

### 4.1 Lex-specialis-Verhältnis

- **DORA** ist eine **unmittelbar geltende EU-Verordnung** (Art. 288 AEUV) — Anwendungsvorrang vor nationalen Aufsichtsregelungen, soweit dieselbe Materie geregelt wird.
- **MaRisk** ist ein BaFin-**Rundschreiben** (norminterpretierende Verwaltungsvorschrift, basierend auf § 25a KWG).
- Im Bereich **IKT-Risikomanagement und IKT-Drittparteienmanagement** ist **DORA lex specialis** gegenüber AT 7.2 (IT) und AT 9 (Auslagerung) MaRisk.
- BaFin hat angekündigt, MaRisk **auf DORA-konforme Restregelungen** zurückzuführen (8. Novelle — *[Stand 04/2026 nicht verifizierbar]*).

### 4.2 Überlappende vs. DORA-exklusive Pflichten

| Bereich | DORA | MaRisk AT 9 | Anmerkung |
|---|---|---|---|
| Definitionen IKT-Drittdienstleister | Art. 3 Nr. 19, 21, 22 DORA | AT 9 Tz. 1 | DORA *präziser*; MaRisk-Auslagerungsbegriff bleibt für **Nicht-IKT** relevant. |
| Vertraglicher Mindestinhalt | Art. 30 Abs. 2/3 | AT 9 Tz. 7 | DORA enthält *zusätzliche* Pflichten (TLPT-Mitwirkung, Exit-Klausel). |
| Informationsregister | Art. 28 Abs. 3 | AT 9 Tz. 13 | **DORA-Register harmonisiert ESA-weit** (Implementing Technical Standards). |
| Konzentrationsrisiko-Vorabbewertung | Art. 29 | (implizit AT 9 Tz. 2) | DORA-exklusiv mit ausformulierter Substituierbarkeitsprüfung. |
| Lead Oversight kritischer Anbieter | Art. 31 ff. | — | **DORA-exklusiv**: Aufsicht über CTPP durch ESAs. |
| TLPT (Threat-led Penetration Tests) | Art. 26/27 | — | **DORA-exklusiv**. |
| Auslagerungsbeauftragter | — (ggf. via § 25a KWG) | AT 9 Tz. 12 | **MaRisk-exklusiv** (organisatorische Funktion). |
| Sonstige operationelle Risiken (Markt-, Adressenausfall-, Liquiditätsrisiko) | — | umfassend | **MaRisk-exklusiv** — DORA regelt *nur* IKT. |

### 4.3 Praktischer Use Case — GenKI-API-Nutzung im Finanzinstitut

**Frage:** Welches Regelwerk schlägt zu, wenn eine Bank Azure OpenAI für die KI-gestützte Erstellung von Projektdokumentationen einsetzt?

**Antwort (Stufenprüfung):**

1. **Ist Azure OpenAI ein IKT-Dienst i. S. v. Art. 3 Nr. 21 DORA?** → **Ja** (Cloud-basierter API-Service zur Datenverarbeitung).
2. **Greift DORA?** → **Ja** — gilt seit 17.01.2025 für *alle* Finanzunternehmen i. S. v. Art. 2 DORA. Damit greifen Art. 28 ff. DORA *primär*.
3. **Greift MaRisk AT 9 zusätzlich?** → **Nur subsidiär** für Aspekte, die DORA *nicht* regelt (z. B. Auslagerungsbeauftragter; Verbindung zum Gesamt-Risikomanagementprozess nach AT 4).
4. **Ist die Funktion „kritisch oder wichtig"?** → Einzelfallprüfung. Bei **Projektdokumentation interner Projekte** i. d. R. **nein** — daher *nur* Art. 30 Abs. 2 DORA, *nicht* Abs. 3.
5. **Zusätzlich:** **AI Act Art. 14** prüfen — sofern System als Hochrisiko klassifiziert (Anhang III). Generelle GenKI für interne Dokumentation i. d. R. *nicht* Hochrisiko, sondern allenfalls **General-Purpose AI Model** (Art. 51 ff. AI Act, Pflichten primär beim Anbieter).
6. **§ 25a KWG / MaRisk AT 4.3.4** bleiben übergeordnet anwendbar (Geschäftsleiterverantwortung, Risikomanagement-Rahmen).

### 4.4 Die zwei wichtigsten Konflikte / Überschneidungen

1. **Auslagerungsregister (DORA Art. 28 Abs. 3 vs. MaRisk AT 9 Tz. 13):** Doppelregisterführung droht, solange MaRisk nicht angepasst ist. BaFin erwartet ein **konsolidiertes Register**, das beiden Anforderungen genügt; Format folgt **ITS Register of Information** (DORA-DVO).
2. **Exit-Strategie und Substituierbarkeit:** DORA Art. 28 Abs. 8 verlangt eine **getestete** Exit-Strategie. MaRisk AT 9 fordert ebenfalls Notfallkonzepte, allerdings ohne Test-Pflicht. **Bei GenKI praktisch oft unerfüllbar**, weil Modell-Lock-in (proprietäre Modelle, Prompt-Engineering, RAG-Pipelines) einen 1:1-Wechsel nicht zulässt — *offenes Problem* in der Aufsichtspraxis 2025/2026.

---

## Anhang — Quellen-Kurzliste (kanonische URLs, in dieser Session nicht live verifiziert)

- VO (EU) 2022/2554 (DORA): https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32022R2554
- VO (EU) 2024/1689 (AI Act): https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R1689
- BaFin BDAI-Prinzipien (2021): https://www.bafin.de/SharedDocs/Downloads/DE/Aufsichtsrecht/dl_Prinzipienpapier_BDAI.html
- BaFin MaRisk (Fassung 29.06.2023): https://www.bafin.de/SharedDocs/Veroeffentlichungen/DE/Rundschreiben/2023/rs_1305_marisk_ba.html
- § 25a KWG: https://www.gesetze-im-internet.de/kredwg/__25a.html
- ESMA / Joint Committee CTPP-Designation: https://www.esma.europa.eu/ (CTPP-Liste 2026 noch zu verifizieren)
- BaFin DORA-Themenseite: https://www.bafin.de/DE/Aufsicht/DORA/dora_node.html

---

## Dinge, die explizit als „nicht verifizierbar" markiert sind

1. Existenz und genauer Titel/Datum eines „BaFin-KI-Auslegungshinweises Sommer 2024" (Block 1.1).
2. Veröffentlichungsstatus und Inkrafttreten der **8. MaRisk-Novelle** (Block 3 Header).
3. Aktuelle **CTPP-Liste** der ESAs zum Stand 04/2026 (Block 2.4).
4. Status von **Anthropic** als IKT-Drittdienstleister im konkreten Aufsichtshandeln (Block 2.5).
5. Wortlaute aller zitierten BaFin-Quellen — keine Live-Abfrage möglich (durchgängig).
