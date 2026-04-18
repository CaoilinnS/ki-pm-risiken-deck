# LEGAL_QUALITY_ANALYSIS

LL.M.-Vertiefung zum Slidev-Deck *Generative KI in der Projektdokumentation – Qualitätsanforderungen, Haftungsfragen und Governance-Rahmen*.

> **Methodik und Quellenkennzeichnung.** Wo unmittelbare PDF-Belege vorliegen, sind sie mit Datei + ungefährer Stelle zitiert. Wo die analysierten Primärquellen (insbesondere WD-7-004-25 des Wissenschaftlichen Dienstes des Bundestages) eine Norm nicht ausdrücklich erwähnen, ist die Argumentation als **„eigenständige juristische Analyse"** gekennzeichnet und stützt sich auf die jeweils benannten Normtexte (BGB, ZPO, DSGVO, AI Act). Es werden **keine Aktenzeichen erfunden** und **keine Paragrafen erfunden**. Die Liste der bereits in `extracted/haftung_folien.md` und `extracted/haftungsmatrix.js` validierten Belege wird übernommen.

---

## Block A — § 633 BGB: Werkvertragliche Mängel an KI-Doku

### Hinweis zur Belegslage
Eine Volltextsuche in `extracted/pdf_txt/WD-7-004-25-pdf.txt` nach den Stichwörtern „§ 633", „634a", „Werkvertrag", „Sachmangel", „Mangel" ergibt **keinen Treffer**. Auch die übrigen Primärquellen (Mapping-Paper, NIST, Bitkom, AI-Hallucination-Literatur) behandeln § 633 BGB nicht ausdrücklich. Der gesamte Block A ist daher als **eigenständige juristische Analyse** auf Basis der Normtexte des BGB sowie der bereits aus WD-7-004-25 belegten allgemeinen Haftungssystematik (S. 8 zur „zu eigen gemachten" Verantwortung; vgl. `extracted/haftung_folien.md` Folie 11) zu lesen.

### A.1 Sachmangel nach § 633 Abs. 2 BGB

Nach **§ 633 Abs. 1 BGB** hat der Unternehmer dem Besteller das Werk frei von Sach- und Rechtsmängeln zu verschaffen. **§ 633 Abs. 2 BGB** definiert den Sachmangel über drei Stufen:

- **§ 633 Abs. 2 S. 1 BGB:** Mangel, wenn das Werk nicht die *vereinbarte Beschaffenheit* hat (subjektiver Mangelbegriff).
- **§ 633 Abs. 2 S. 2 Nr. 1 BGB:** Hilfsweise: Eignung für die *nach dem Vertrag vorausgesetzte Verwendung*.
- **§ 633 Abs. 2 S. 2 Nr. 2 BGB:** Weiter hilfsweise: Eignung für die *gewöhnliche Verwendung* und *übliche Beschaffenheit*, die der Besteller nach Art des Werks erwarten kann.

§ 633 Abs. 2 S. 3 BGB stellt die Lieferung eines anderen Werks oder einer zu geringen Menge dem Sachmangel gleich.

### A.2 KI-generierte Projektdokumente als „Werk"

Werkvertraglich geschuldet ist nach **§ 631 Abs. 1, Abs. 2 BGB** der *Erfolg* der Herstellung oder Veränderung einer Sache *oder eines anderen durch Arbeit oder Dienstleistung herbeizuführenden Erfolgs*. Geistige Werke (Gutachten, Pläne, Software, Dokumentationen) sind anerkannte Werkvertragsgegenstände – maßgeblich ist die Erfolgsbezogenheit gegenüber der reinen Tätigkeit (Abgrenzung zum Dienstvertrag, § 611 BGB).

KI-gestützte Projektdokumente (Statusberichte, Risikoregister, Change-Request-Analysen, Stakeholder-Reports, Lessons-Learned-Dokumentation) erfüllen die Werkdefinition, **wenn der Auftragnehmer ein konkretes Dokumentations-Ergebnis schuldet** – z. B. eine PMO-Beratung, die einen finalen, abnahmefähigen Berichts-Set liefert. Bezieht sich der Vertrag dagegen nur auf das Bemühen um Unterstützung („wir beraten Sie laufend bei der KI-Nutzung"), ist Dienstvertrag einschlägig.

### A.3 Typische Mängel KI-generierter Projektdokumentation

| Mangelphänomen | Einordnung in § 633 Abs. 2 BGB |
|---|---|
| **Halluzinationen** (faktische, intrinsische oder logische Fehlaussagen) | Abweichung von der vereinbarten Beschaffenheit (S. 1) bzw. Untauglichkeit für die vorausgesetzte Verwendung (S. 2 Nr. 1). Verifikationsbasis: Magesh et al. 2025: 17–33 % Halluzinationsrate selbst bei spezialisierter Rechts-RAG (`extracted/evidenz_folien.md` Folie 4); Anh-Hoang/Tran/Nguyen 2025 Taxonomie (`evidenz_folien.md` Folie 5). |
| **Fehlende Auditierbarkeit** (kein Prompt-Log, keine Modellversion, keine Quellenkette) | Untauglichkeit für übliche Verwendung (S. 2 Nr. 2), wenn nach Art des Werks Auditierbarkeit erwartet wird (z. B. in regulierten Industrien, BaFin-Adressaten; vgl. `extracted/haftung_folien.md` Folie 14). |
| **Falsche / „misgrounded" Zitate** (Quelle existiert, stützt die Aussage aber nicht) | Mangel iSd S. 1 oder S. 2 Nr. 1; besonders gefährlich, weil schwer entdeckbar (Magesh et al., S. 5–6, Abschnitt 4.3 – `evidenz_folien.md`). |
| **Unvollständige Risiko-/Statusabdeckung** | Lieferung eines Werks „zu geringer Menge" iSd § 633 Abs. 2 S. 3 BGB analog; jedenfalls Mangel nach S. 1. |
| **Bias-/Diskriminierungsmuster** in HR-/Bewerber-Reports | Mangel nach S. 1, ggf. zugleich Rechtsmangel (Verstoß gegen AGG/DSGVO) iSd § 633 Abs. 3 BGB. |

### A.4 Ansprüche des Bestellers (§§ 634 ff. BGB)

Bei Mangelhaftigkeit stehen dem Besteller nach **§ 634 BGB** kumulativ-alternativ zur Verfügung:

1. **Nacherfüllung** (§ 634 Nr. 1 i. V. m. § 635 BGB): Wahlrecht des Unternehmers zwischen Beseitigung des Mangels (Re-Generierung mit besserem Prompt, manueller Nachbearbeitung, Re-Run mit aktuellerem Modell) oder Herstellung eines neuen Werks.
2. **Selbstvornahme + Aufwendungsersatz** (§ 634 Nr. 2 i. V. m. § 637 BGB) nach erfolglosem Fristablauf.
3. **Rücktritt** (§ 634 Nr. 3 i. V. m. §§ 636, 323, 326 Abs. 5 BGB) oder **Minderung** (§ 638 BGB) – bei unerheblichem Mangel ist Rücktritt nach § 323 Abs. 5 S. 2 BGB ausgeschlossen.
4. **Schadensersatz** (§ 634 Nr. 4 i. V. m. §§ 280 ff., 281, 283, 311a BGB) bzw. Ersatz vergeblicher Aufwendungen (§ 284 BGB). Folgeschäden (z. B. Fehlentscheidung im Lenkungsausschuss aufgrund halluzinierten Statusberichts) sind über §§ 280 Abs. 1, 249 ff. BGB zu liquidieren.

### A.5 Verjährung nach § 634a BGB

- **§ 634a Abs. 1 Nr. 1 BGB:** Bei einem Werk, dessen Erfolg in der Herstellung, Wartung oder Veränderung einer Sache oder in der Erbringung von Planungs- oder Überwachungsleistungen hierfür besteht – **2 Jahre**.
- **§ 634a Abs. 1 Nr. 2 BGB:** Bei einem Bauwerk und einem Werk, dessen Erfolg in der Erbringung von Planungs- oder Überwachungsleistungen hierfür besteht – **5 Jahre**.
- **§ 634a Abs. 1 Nr. 3 BGB:** Im Übrigen – **regelmäßige Verjährung** nach §§ 195, 199 BGB (3 Jahre ab Schluss des Jahres der Kenntnis bzw. grob fahrlässigen Unkenntnis).

KI-gestützte Projektdokumentation als „anderes" Werk fällt regelmäßig unter Nr. 3 (3 Jahre). Bei arglistigem Verschweigen eines Mangels (z. B. bewusst nicht offengelegtes Halluzinationsrisiko) gilt **§ 634a Abs. 3 BGB**: regelmäßige Verjährung, frühestens jedoch ab Abnahme.

### A.6 Bezug zum IT-Beratungs-Werkvertrag

In der typischen Konstellation **„Beratung erstellt KI-gestützte Doku für Auftraggeber"** sind drei Pfade zu unterscheiden:

1. **Beratung übernimmt KI-Output unverändert in das Werk:** Sie haftet werkvertraglich für jeden Mangel; das LG-Kiel-Argument („zu eigen gemacht", `extracted/haftung_folien.md` Folie 11) verstärkt zugleich die *deliktische* Haftungsspur nach § 823 Abs. 1 BGB.
2. **Beratung schuldet vertraglich auch Plausibilitäts-/Quellprüfung:** Verletzung dieser Pflicht ist eigenständiger Mangel iSd § 633 Abs. 2 S. 1 BGB.
3. **AGB-Klauseln zur Halluzinations-/KI-Risiko-Allokation:** Pauschale Freizeichnung kollidiert mit § 309 Nr. 7, § 307 BGB (kein Ausschluss bei Vorsatz/grober Fahrlässigkeit; Kardinalpflichtverletzung). „As-is"-Klauseln sind im B2B nur eingeschränkt zulässig.

> **Praxisrelevanter Konsens-Satz für Folie:** „Wer KI-Doku als Werk schuldet, schuldet sie *halluzinationsfrei oder nachvollziehbar geprüft* – die §§ 633 ff. BGB kennen keinen ‚AI-Bonus'."

---

## Block B — § 416 ZPO: KI-Doku als Privaturkunde?

### Hinweis zur Belegslage
WD-7-004-25 enthält keine Treffer zu „§ 416 ZPO", „Urkunde", „Privaturkunde", „Beweis" im engeren Sinne der Urkundenlehre (nur „Beweislast" iSd materiellrechtlicher Beweisverteilung, S. 8). Block B ist daher **eigenständige juristische Analyse**, gestützt auf die Normtexte ZPO sowie auf die in `extracted/haftung_folien.md` (Folie 11) und `extracted/haftungsmatrix.js` belegte LG-Kiel-Linie zum „Zu-eigen-machen".

### B.1 § 416 ZPO – formeller Beweiswert nur bei eigenhändiger Unterschrift

**§ 416 ZPO:** „Privaturkunden begründen, sofern sie von dem Aussteller unterschrieben oder mittels notariell beglaubigten Handzeichens unterzeichnet sind, vollen Beweis dafür, dass die in ihnen enthaltenen Erklärungen von dem Aussteller abgegeben sind."

Der Beweis ist *formeller Natur*: Er erstreckt sich nur auf die *Tatsache der Abgabe der Erklärung* durch den Aussteller, nicht auf die *inhaltliche Richtigkeit* der Erklärung. Voraussetzung ist eine **eigenhändige Unterschrift** (oder qualifiziert elektronische Signatur nach § 126a BGB i. V. m. § 371a ZPO, der § 416 ZPO entsprechend erweitert).

### B.2 Reine KI-Erzeugnisse: keine Urkunde mangels menschlichen Ausstellers

Eine Privaturkunde setzt einen **menschlichen Aussteller** voraus, dem die Erklärung *zurechenbar* ist. Ein autonom durch ein LLM generiertes Dokument ohne nachfolgende menschliche Aneignung hat keinen Aussteller iSd § 416 ZPO – das Modell ist kein Rechtssubjekt. Es liegt allenfalls ein **Augenscheinsobjekt** iSd § 371 ZPO vor (freie Beweiswürdigung nach § 286 ZPO), nicht aber eine Urkunde mit gesetzlich gebundenem Beweiswert.

### B.3 Wann verleiht menschliche Freigabe Urkundenqualität?

Urkundenqualität iSd § 416 ZPO entsteht erst durch **menschliche Aneignung mit Unterschrift**:

- **Klassisch:** Projektleitung druckt KI-generierten Statusbericht aus, prüft, korrigiert, *unterschreibt* und legt ihn dem Lenkungsausschuss vor → § 416 ZPO greift; voller formeller Beweis dafür, dass die PL die Erklärung abgegeben hat.
- **Elektronisch:** Statusbericht wird als PDF mit **qualifizierter elektronischer Signatur** (qeS, eIDAS-VO) versehen → § 371a Abs. 1 ZPO erweitert § 416 ZPO entsprechend.
- **Nicht ausreichend:** bloßes „Anhaken" in einem Workflow-Tool ohne qeS, Zustimmung per einfacher E-Mail, automatischer Footer „erstellt durch KI XY".

### B.4 Brücke zum LG Kiel: formeller vs. materieller Beweiswert

Das **LG Kiel, Urteil v. 29.02.2024, Az. 6 O 151/23, GRUR-RS 2024, 29599, Rn. 36** (`extracted/haftung_folien.md` Folie 11; `extracted/haftungsmatrix.js`, Eintrag betreiber) bewegt sich auf einer **materiell-haftungsrechtlichen** Ebene: Wer KI-Inhalte sich „zu eigen macht", haftet für deren Inhalt. Daraus folgt **nicht** automatisch ein formeller Urkundenbeweis. Wer dagegen *unterschreibt* (Block B.3), erzeugt zugleich beide Wirkungen:

- **formell:** § 416 ZPO – Erklärung ist von der PL abgegeben;
- **materiell:** LG Kiel – PL hat den Inhalt zu eigen gemacht und haftet für Falschaussagen.

Die zwei Spuren sind kongruent, aber rechtsdogmatisch zu trennen: § 416 ZPO sagt nichts über Wahrheit, das LG Kiel sagt nichts über Beweiskraft im Prozess.

### B.5 § 415 ZPO – nur am Rande

**§ 415 ZPO** (öffentliche Urkunden) wird nur dann relevant, wenn KI-gestützte Dokumente in **behördlichen oder gerichtlichen Verfahren** entstehen (z. B. KI-gestützte Aktenstrukturierung im BMJ-Kontext, vgl. WD-7-004-25 S. 6–8 zur Justiz-Digitalisierungsinitiative). Ein durch eine Behörde erstellter und ordnungsgemäß ausgefertigter KI-gestützter Bescheid kann § 415 ZPO unterfallen – Voraussetzung bleibt die menschliche Ausstellung durch die zuständige Amtsperson.

### B.6 Beweiserleichterungen jenseits der Urkundenlehre

Die formelle Schwäche von KI-Doku im Beweis wird durch sektorale Beweislast­umkehrungen teilweise kompensiert:

- **Art. 10 ProdHaftRL (RL (EU) 2024/2853):** Vermutung der Fehlerhaftigkeit, wenn der Hersteller wesentliche Informationen nicht offenlegt; Kausalitätsvermutung in „besonders komplizierten Fällen" (`extracted/haftung_folien.md` Folie 10; WD-7-004-25 S. 11). Ab Umsetzungsfrist 09.12.2026 anwendbar.
- **§ 630h Abs. 1 BGB:** Beweislastumkehr bei vermutetem Behandlungsfehler; nach WD-7-004-25 S. 8–9 *auf KI-gestützte Untersuchungen und Diagnosesysteme anwendbar* (`haftung_folien.md` Folie 11).

### B.7 Ein-Satz-Implikation für die PM-Praxis

> **Ohne signierte Freigabe ist KI-Doku im Streitfall nur Augenscheinsobjekt – signierte Freigabe ist deshalb keine Formalie, sondern die einzige zivilprozessual wirksame Versicherungspolice.**

---

## Block C — DSGVO bei KI-Projektdokumentation

### Hinweis zur Belegslage
WD-7-004-25 enthält keine substanziellen Treffer zu DSGVO-Artikeln. Block C ist **eigenständige juristische Analyse auf Basis der Verordnungstexte (VO (EU) 2016/679)**. Risiken werden mit den belegten Einsatzszenarien aus `extracted/haftung_folien.md` (Folien 11–14) und `extracted/evidenz_folien.md` (Folie 6, PM-Artefakte) verbunden.

### C.1 Art. 5 DSGVO – Grundsätze

| Grundsatz (Art. 5 Abs. 1 DSGVO) | KI-PM-Anwendung |
|---|---|
| **lit. a Rechtmäßigkeit, Treu und Glauben, Transparenz** | KI-Verarbeitung von Stakeholder-/Mitarbeiterdaten erfordert Rechtsgrundlage nach Art. 6 (i. d. R. lit. b Vertrag, lit. f berechtigtes Interesse mit Abwägung; bei Beschäftigtendaten zusätzlich § 26 BDSG). |
| **lit. b Zweckbindung** | Trainingsverwendung von Projektdaten durch den KI-Anbieter ist zweckfremd – Verbot ohne ausdrückliche Einwilligung oder vertragliches Opt-out. |
| **lit. c Datenminimierung** | Statusbericht-Prompts dürfen nur die *für die Berichtsgenerierung erforderlichen* personenbezogenen Daten enthalten – keine Klar­namen, wo Pseudonymisierung möglich. |
| **lit. d Richtigkeit** | Halluzinierte Aussagen über benannte Personen (z. B. „X hat Meilenstein verfehlt") sind unrichtig iSd Art. 5 Abs. 1 lit. d → Berichtigungsanspruch nach Art. 16. |
| **lit. e Speicherbegrenzung** | Aufbewahrungsfristen für Prompt-Logs, KI-Outputs und Audit-Trails sind festzulegen (parallel zu handels-/steuerrechtlichen GoBD-Fristen, soweit anwendbar). |
| **lit. f Integrität und Vertraulichkeit** | Schutz vor unbefugter Verarbeitung – Cloud-LLM-Aufrufe ohne EU-Hosting / SCCs verletzen Art. 5 Abs. 1 lit. f i. V. m. Kap. V (Drittlandtransfer). |
| **Abs. 2 Rechenschaftspflicht** | Verantwortlicher muss Einhaltung der Abs. 1-Grundsätze *nachweisen können* – ohne dokumentierte KI-Governance ist dieser Nachweis nicht zu führen (Querverweis NIST RMF GOVERN 1.4, Block E). |

### C.2 Art. 22 DSGVO – Verbot ausschließlich automatisierter Entscheidungen

**Art. 22 Abs. 1 DSGVO:** Recht der betroffenen Person, *nicht* einer ausschließlich auf automatisierter Verarbeitung – einschließlich Profiling – beruhenden Entscheidung unterworfen zu werden, die ihr gegenüber rechtliche Wirkung entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt.

**Anwendbarkeit auf KI-gestützte Projektentscheidungen:**

- **Klar einschlägig:** KI-gestütztes Bewerber-Ranking, automatisierte Performance-Bewertungen, KI-Priorisierung in Personalprojekten (vgl. Anhang III AI Act – Hochrisiko, `extracted/haftung_folien.md` Folie 9).
- **Grenzfall:** KI-erstellte Risikoempfehlung im Risikoregister, die *faktisch* nicht mehr menschlich überprüft wird – „rubber stamping" gilt nach Art.-29-WP-Leitlinien (WP251 rev.01) als ausschließlich automatisiert.
- **Nicht einschlägig:** KI-erstellter Entwurf, der vom PL substanziell überarbeitet und entschieden wird (echtes Human-in-the-Loop, vgl. `praxis_folien.md` Folie 17, Praktik 1).

Ausnahmen: Art. 22 Abs. 2 (Vertrag, gesetzliche Grundlage, Einwilligung) – bei Beschäftigtendaten regelmäßig hohe Hürde, da keine echte Freiwilligkeit (Art. 7 Abs. 4).

### C.3 Art. 32 DSGVO – Sicherheit der Verarbeitung

Verantwortlicher und Auftragsverarbeiter haben unter Berücksichtigung des Stands der Technik geeignete TOMs zu treffen, insbesondere ggf.:

- **Pseudonymisierung und Verschlüsselung** (Abs. 1 lit. a) – z. B. Maskierung von Personennamen vor Prompt-Übergabe an externe LLMs.
- **Integrität, Vertraulichkeit, Verfügbarkeit, Belastbarkeit** (Abs. 1 lit. b) – Schutz vor Prompt-Injection, Modell-Exfiltration, Adversarial Attacks (BSI-Kategorien, vgl. WD-7-004-25 S. 14–15, `haftung_folien.md` Folie 14).
- **Wiederherstellung** (Abs. 1 lit. c) – Versionierung der KI-Artefakte (vgl. `praxis_folien.md` Folie 17, Praktik 3).
- **Regelmäßige Überprüfung** (Abs. 1 lit. d) – TEVV-Praktik nach NIST RMF MEASURE (S. 28 NIST AI 100-1).

### C.4 Risikoszenarien im KI-PM-Kontext

| Szenario | DSGVO-Berührung |
|---|---|
| Stakeholder-Namensnennungen in KI-erstellten Statusberichten | Art. 5 Abs. 1 lit. a, c, d; Art. 6; ggf. Art. 16 (Berichtigung) bei Halluzination |
| Personenbezogene Risiko-/Change-Daten in Prompts an externes LLM | Art. 6, Art. 28 (Auftragsverarbeitung), Art. 44 ff. (Drittlandtransfer); Verlust der Zweckbindung |
| Trainingsdaten-Leaks (LLM gibt Inhalte aus früheren Prompts wieder) | Art. 5 Abs. 1 lit. f, Art. 32; ggf. meldepflichtige Datenpanne nach Art. 33, 34 |
| KI-gestütztes Mitarbeiter-Performance-Tracking | Art. 22; § 26 BDSG; Mitbestimmung BetrVG (außerhalb DSGVO) |

### C.5 DSFA-Pflicht nach Art. 35 DSGVO

**Art. 35 Abs. 1 DSGVO:** DSFA, wenn die Verarbeitung *voraussichtlich ein hohes Risiko* für die Rechte und Freiheiten natürlicher Personen zur Folge hat. **Art. 35 Abs. 3 DSGVO** nennt Regelbeispiele:

- **lit. a:** systematische und umfassende Bewertung persönlicher Aspekte natürlicher Personen, die sich auf automatisierte Verarbeitung einschließlich Profiling stützt und auf der Entscheidungen *mit Rechtswirkung* beruhen → KI-gestützte HR-/Bewertungs-Projekte regelmäßig DSFA-pflichtig.
- **lit. b:** umfangreiche Verarbeitung besonderer Kategorien (Art. 9) – z. B. KI im Health-Care-Projekt.
- **lit. c:** systematische umfangreiche Überwachung öffentlich zugänglicher Bereiche.

Für GenKI-Projekte ergänzend zu beachten:

- **Art. 35 Abs. 4 DSGVO:** DSK-Liste deutscher Aufsichtsbehörden zur Pflicht-DSFA (u. a. „Einsatz von KI zur Steuerung der Interaktion mit Betroffenen" sowie „Einsatz von KI zur Bewertung persönlicher Aspekte" – aus DSK-Muster-Liste; eigenständige Verifikation am konkreten Aufsichtskatalog erforderlich).
- **Konvergenz mit AI Act:** Hochrisiko-Einstufung nach Anhang III AI Act ist starkes Indiz für DSFA-Pflicht (Anhang III + Art. 14 AI Act, vgl. `haftung_folien.md` Folie 9).

> **Konsens-Satz:** Sobald KI Personenbezug + Entscheidungsrelevanz + Skalierung kombiniert, ist DSFA der sichere Pfad – nicht die kreative Auslegung von Ausnahmen.

---

## Block D — Fünf Qualitätsdimensionen für KI-Projektdokumentation

### Belegtheit des Frameworks

Das Framework ist **direkt aus NIST AI RMF 1.0 (NIST AI 100-1) Abschnitt 3.1–3.7 (S. 12–17, Trustworthiness Characteristics)** ableitbar. NIST nennt sieben Charakteristika: *valid and reliable, safe, secure and resilient, accountable and transparent, explainable and interpretable, privacy-enhanced, fair with harmful bias managed* (NIST AI 100-1, S. 12 / Abschnitt 3, Inhaltsverzeichnis Z. 61–73; Definition S. 12). Daraus werden die nachfolgenden fünf PM-relevanten Dimensionen verdichtet (Synthese – die Verdichtung selbst ist eigenständig und so gekennzeichnet, die *einzelnen Anker* sind belegt).

Ergänzende Anker: Magesh et al. 2025 (Halluzinations-Definition + „Groundedness", `evidenz_folien.md` Folie 5); Anh-Hoang/Tran/Nguyen 2025 (Halluzinations-Taxonomie); EU AI Act Art. 12 (Aufzeichnungspflicht), Art. 13 (Transparenz), Art. 14 (Human Oversight), Art. 15 (Genauigkeit, Robustheit, Cybersicherheit) – belegt über `haftung_folien.md` Folie 9.

### D.1 Faktentreue (Factual Accuracy)

- **Definition:** Die Aussage ist mit etabliertem Weltwissen, vertraglichen Vorgaben und Projektdaten konsistent; sie enthält weder fact-conflicting noch misgrounded Aussagen. *Anker: NIST AI 100-1 S. 13 (3.1 „Valid and Reliable", Accuracy-Definition nach ISO/IEC TS 5723:2022); Magesh et al. 2025 Abschn. 4.3 zur „Groundedness" (`evidenz_folien.md` Folie 5).*
- **Verletzungsbeispiel:** Risikoregister enthält die „BaFin-Rundschreiben-Nr. 12/2024 zur KI-Modellvalidierung" – die Nummer existiert nicht (faktische Halluzination, vgl. Anh-Hoang et al. 2025).
- **Schützende PM-Praktik:** Vier-Augen-Prinzip mit dokumentierter Quellenprüfung vor Übernahme (`praxis_folien.md` Folie 17, Praktik 4).

### D.2 Vollständigkeit (Completeness)

- **Definition:** Das Dokument deckt alle nach Projektkontext, Vertrag und Standardvorgabe erforderlichen Aspekte ab; keine sicherheits-, compliance- oder entscheidungsrelevanten Auslassungen. *Anker: NIST AI 100-1 S. 13–14 (3.1 Reliability + Robustness als „performance under a variety of circumstances"); ergänzend AI Act Art. 13 (verständliche Information für Deployer).*
- **Verletzungsbeispiel:** KI-Statusbericht erwähnt nur grüne Meilensteine, weil das System auf positiven Korpora überrepräsentiert trainiert wurde – Eskalationsthemen fehlen (vgl. Aramali et al. 2025: „concerns about deep analysis", `evidenz_folien.md` Folie 3).
- **Schützende PM-Praktik:** Strukturierte Pflicht-Sektionen / Templates mit verpflichtenden Feldern; Review-Checkliste am CRF-Prozess orientiert (Modul K3, `praxis_folien.md` Folie 17, Praktik 2).

### D.3 Nachvollziehbarkeit (Traceability)

- **Definition:** Jede Aussage ist auf Eingangs-Prompt, Modellversion, Quellenkette und ggf. Retrieval-Kontext rückführbar. *Anker: NIST AI 100-1 S. 15–16 (3.4 „Accountable and Transparent"); AI Act Art. 12 (Aufzeichnungspflichten für Hochrisiko-KI); NIST MEASURE S. 28 verlangt „a traceable basis to inform management decisions" (`praxis_folien.md` Folie 18, Empf. 3).*
- **Verletzungsbeispiel:** Change-Request-Begründung enthält Argumente, die sich später nicht reproduzieren lassen, weil weder Prompt noch Modellversion (z. B. „GPT-4o vs. GPT-4o-mini am 18.04.2026") protokolliert wurden.
- **Schützende PM-Praktik:** Versionierte Trennung von KI- und Menschen-Erzeugnissen mit Modell- und Autorenkennzeichnung (`praxis_folien.md` Folie 17, Praktik 3; Folie 18, Empf. 3).

### D.4 Auditierbarkeit (Auditability)

- **Definition:** Externe Prüfer können auf Basis der dokumentierten Artefakte (Prompts, Outputs, Reviews, Modell-Logs) die Entstehung und Freigabe nachvollziehen, ohne auf den ursprünglichen Bearbeiter angewiesen zu sein. *Anker: NIST AI 100-1 S. 15–16 (3.4 Accountability presupposes Transparency); GOVERN 1.4 (S. 22 NIST AI 100-1) verlangt „transparent policies, procedures, and other controls"; AI Act Art. 12, 14.*
- **Verletzungsbeispiel:** Lessons-Learned-Bericht eines abgeschlossenen Projekts enthält KI-Auswertungen, die intern aus „Datenschutzgründen" gelöscht wurden, sodass eine spätere Aufsichtsprüfung (BaFin, interne Revision) die Aussagen nicht mehr verifizieren kann.
- **Schützende PM-Praktik:** Dokumentierte Freigabe analog Change-Request-Prozess (CRF-Form mit Prüfer, Datum, Prüfumfang, vgl. `praxis_folien.md` Folie 17, Praktik 2; Empf. 4 Folie 18).

### D.5 Revisionssicherheit (Tamper-evidence)

- **Definition:** Versionsstände, Zeitstempel, Autoren-/Modellsignaturen und Aufbewahrungsfristen sind manipulationssicher festgehalten – nachträgliche Änderungen sind erkennbar. *Anker: NIST AI 100-1 S. 15 (3.3 „Secure and Resilient" – „confidentiality, integrity, and availability"); AI Act Art. 12 Aufzeichnungspflichten; Modul K2 Arbeitspaket-Dokumentationsfeld („Erstellungs-/Freigabe-Datum") und K6 Sprint-Inkrement-Logik (`praxis_folien.md` Folie 17, Praktik 3).*
- **Verletzungsbeispiel:** Ein Statusbericht wird drei Monate nach Lenkungsausschuss-Sitzung „nachgeschärft", ohne dass die ursprüngliche KI-Fassung erhalten bleibt – die Beweisführung in einem späteren Haftungsprozess (LG-Kiel-Linie, `haftung_folien.md` Folie 11) wird unmöglich.
- **Schützende PM-Praktik:** WORM-/append-only-Ablage, qeS-signierte Freigabeversionen (Brücke zu Block B.3), Aufbewahrungsfristen-Matrix (handels-/steuerrechtlich + DSGVO Art. 5 Abs. 1 lit. e).

> **Synthese-Hinweis:** Die *Verdichtung* der NIST-Sieben auf diese Fünf ist eigenständige Auswahl; die *einzelnen Anker* (Faktentreue ↔ NIST 3.1, Auditierbarkeit ↔ NIST 3.4, Revisionssicherheit ↔ NIST 3.3, etc.) sind 1:1 belegt.

---

## Block E — Drei-Ebenen-Governance-Modell

### Belegtheit des Modells

Das Drei-Ebenen-Modell **Strategisch / Taktisch / Operativ** wird hier als **synthetische Brücke** zwischen drei belegten Bezugsrahmen aufgespannt:

1. **NIST AI RMF Core (S. 20–32, Abschn. 5.1–5.4):** GOVERN ist „a cross-cutting function … infused throughout AI risk management" (S. 22) – passt strukturell auf die *strategische* Ebene; MAP + MEASURE sind kontextsetzend bzw. analytisch und liegen *taktisch* zwischen Govern und Manage; MANAGE allokiert Ressourcen und reagiert *operativ* auf Risiken (S. 31).
2. **Bitkom/QIRM-Referenzmodell (S. 2–4, S. 7):** unterscheidet Geschäfts- / Daten- / Anwendungs- / Technologie-Architektur – als sektorales Operationalisierungs-Layer für regulierte Branchen (Bitkom 2017, S. 3, vgl. `praxis_folien.md` Folie 16).
3. **AI Act Art. 14 (Human Oversight):** verlangt die *organisatorische* Verankerung menschlicher Aufsicht – flankiert alle drei Ebenen.

> **Kennzeichnung:** Die explizite Drei-Stufen-Übersetzung „Strategisch / Taktisch / Operativ" ist *eigenständige Synthese*. NIST selbst nutzt vier Funktionen, nicht drei Ebenen; Bitkom nutzt vier Architekturschichten; COSO ERM (oft zitiert als drittes Vorbild) ist nicht in den extrahierten Primärquellen verfügbar und wird daher hier nicht als Beleg, sondern nur als Vortrags-Brücke genannt.

### E.1 Strategische Ebene

| Aspekt | Inhalt |
|---|---|
| **Verantwortlich** | Projektauftraggeber (PAG) und Projektlenkungsausschuss (PLA); im Multiprojektmanagement zusätzlich Portfolio-Steuerkreis / PMO-Leitung (Modul K1, K4, vgl. `praxis_folien.md` Folie 16, Synthese-Tabelle). |
| **Entscheidungen** | KI-Leitlinie, KI-Use-Case-Freigabe-Schwellwerte, Risikoappetit, Klassifizierung Hochrisiko ja/nein (Anhang III AI Act), Budgetierung Schulungen (Art. 4 AI Act – KI-Literacy). |
| **Dokumente / Artefakte** | KI-Policy, Projektcharta-Klauseln zu KI-Nutzung (`praxis_folien.md` Folie 18, Empf. 4), Schulungsplan, AI-Inventar (NIST GOVERN 1.6, S. 22, NIST AI 100-1). |
| **NIST-Anker** | GOVERN-Funktion (NIST AI 100-1 S. 21–23, Abschn. 5.1; Tabelle 1, GOVERN 1.1, 1.2, 2.1, 2.3). |
| **AI Act Art. 14** | Strategische Festlegung, *welche* KI-Use-Cases überhaupt menschliche Aufsicht in welcher Tiefe erhalten (Art. 14 Abs. 1, 2 AI Act). |
| **BaFin / Bitkom** | Bitkom 2017 S. 2: BaFin/Bundesbank/EZB-Aufsicht erweitert Adressatenkreis; KI-Strategieklausel im Rahmen der MaRisk-AT-/BAIT-Steuerung (sektoral, vgl. `haftung_folien.md` Folie 14, mit Hinweis auf nur partielle Primärbelegtheit). |

### E.2 Taktische Ebene

| Aspekt | Inhalt |
|---|---|
| **Verantwortlich** | Projektmanagement-Office (PMO) und Projektleitung (PL); Risk Owner und Quality Lead. |
| **Entscheidungen** | Mapping konkreter KI-Use-Cases auf das Risikoregister; Auswahl der Modellversion und der Anbieter (DPA / Drittlandtransfer); Definition der KPI-/TEVV-Metriken (Fehlerrate, Review-Quote, Halluzinations-Stichprobe). |
| **Dokumente / Artefakte** | Use-Case-Steckbrief, Risikoregister-Erweiterung KI, AVV nach Art. 28 DSGVO, Freigabepfad-Definition, Messplan nach NIST MEASURE (S. 28). |
| **NIST-Anker** | MAP (S. 24–27, Abschn. 5.2) + MEASURE (S. 28–30, Abschn. 5.3) – „MAP establishes the context to frame risks" (S. 24); MEASURE liefert „quantitative, qualitative, or mixed-method tools" (S. 28). |
| **AI Act Art. 14** | Konkrete Auswahl und Qualifizierung der Aufsichtsperson(en); Definition der Eingriffspunkte und Stop-Mechanismen (Art. 14 Abs. 4 lit. a–e AI Act, vgl. `haftung_folien.md` Folie 9). |
| **BaFin / Bitkom** | Bitkom-Referenzarchitektur als sektorales Strukturraster: Geschäfts- / Daten- / Anwendungsarchitektur (Bitkom 2017 S. 3, 7) bildet die *taktische Übersetzungsschicht* für Finanzinstitute. |

### E.3 Operative Ebene

| Aspekt | Inhalt |
|---|---|
| **Verantwortlich** | Anwender (Projektmitarbeitende), Reviewer im Vier-Augen-Prinzip; technisch: Data Steward / DevOps. |
| **Entscheidungen** | Konkrete Prompt-Formulierung, Übernahme oder Ablehnung von KI-Output, Versionierung und Signatur (Brücke zu Block B.3), Eskalation bei verdächtigen Outputs. |
| **Dokumente / Artefakte** | Prompt-Log, Output-Versionen mit Modell- und Autoren-Tag, signierte Freigabe (qeS), Incident-Report, Sprint-Inkrement (Modul K6) bzw. Arbeitspaket-Datei (Modul K2). |
| **NIST-Anker** | MANAGE (S. 31–32, Abschn. 5.4) – „allocating risk resources to mapped and measured risks … plans to respond to, recover from, and communicate about incidents" (S. 31); MANAGE 1.3 Optionen „mitigating, transferring, avoiding, or accepting" (S. 32). |
| **AI Act Art. 14** | Tatsächliche Ausübung der Aufsicht im Einzelfall: Verstehen der Systemgrenzen, korrekte Interpretation der Outputs, Ausübung des Stop-Rechts (Art. 14 Abs. 4 lit. a, b, e AI Act). |
| **BaFin / Bitkom** | Operative Compliance-Prozesse (KY-Customer/Transaction/Process, Bitkom 2017 S. 3) treffen direkt KI-Outputs in Onboarding-/AML-Workflows; Incident-Eskalation ggf. an MaRisk-AT-7.2-/BAIT-Strukturen anschlussfähig (sektorale Verknüpfung, vgl. `haftung_folien.md` Folie 14 mit Belegungs-Vorbehalt). |

### E.4 Verbindungslinien

- **Top-down (GOVERN → MAP/MEASURE → MANAGE):** Strategische KI-Policy gibt Schwellen vor, taktische Use-Case-Klassifikation operationalisiert sie, operative Reviews + Signaturen vollziehen sie.
- **Bottom-up (Incident-Loop):** Operativer Vorfall (z. B. halluzinierte Zahl im Statusbericht) → MEASURE-Auswertung → MAP-Aktualisierung → ggf. GOVERN-Policy-Revision (NIST: „outcomes feed back to MANAGE", S. 28).
- **AI Act Art. 14 als Querschnittspflicht:** Auf jeder Ebene anders ausgeprägt – Strategie definiert Aufsichtskonzept, Taktik bestimmt Aufsichtsperson + Methode, Operative übt Aufsicht aus.
- **BaFin-Bezug:** Sektorspezifisch ist die *taktische* Ebene am stärksten betroffen, weil hier die Übersetzung in MaRisk/BAIT/DORA-konforme Prozesse erfolgt; Bitkom-Referenzarchitektur (`praxis_folien.md` Folie 16) liefert die methodische Brücke.

---

## Quellenverzeichnis (Kurzform, Block-übergreifend)

- **WD-7-004-25:** Wissenschaftliche Dienste des Bundestages, Sachstand WD 7 - 3000 - 004/25, Abschluss 04.03.2025 (`extracted/pdf_txt/WD-7-004-25-pdf.txt`).
- **NIST AI 100-1:** AI Risk Management Framework 1.0, January 2023 (`extracted/pdf_txt/NIST.AI.100-1.txt`); insbesondere Abschnitte 3.1–3.7 (S. 12–17) und 5.1–5.4 (S. 21–32).
- **Mapping-Paper:** Rodriguez de Las Heras Ballell, Cambridge Forum on AI: Law and Governance (2025) 1, e5, doi:10.1017/cfl.2024.8 (`extracted/pdf_txt/mapping-generative-ai-rules-and-liability-scenarios-...txt`).
- **Bitkom 2017:** Bitkom/QIRM-Forschungsprojekt „IT-gestützte Compliance im Finanzsektor" (`extracted/pdf_txt/170825-Bitkom-Projekt-IT-gestuetzte-Compliance.txt`).
- **Magesh et al. 2025:** Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools, Journal of Empirical Legal Studies, DOI 10.1111/jels.12413.
- **Anh-Hoang, Tran & Nguyen 2025:** Survey and analysis of hallucinations in large language models, Frontiers in AI 8:1622292.
- **LG Kiel:** Urteil v. 29.02.2024, Az. 6 O 151/23, GRUR-RS 2024, 29599, Rn. 36.
- **EU AI Act:** VO (EU) 2024/1689 vom 13.06.2024.
- **ProdHaftRL:** RL (EU) 2024/2853 vom 23.10.2024 (Umsetzungsfrist 09.12.2026).
- **DSGVO:** VO (EU) 2016/679.
- **Werkvertragliche Normen:** §§ 631, 633, 634, 634a, 635, 636, 637, 638 BGB; §§ 280, 281, 283, 284, 311a, 323, 326 BGB; §§ 309, 307 BGB.
- **Beweisrechtliche Normen:** §§ 415, 416, 371, 371a, 286 ZPO; § 126a BGB; § 630h Abs. 1 BGB.
- **Vorhandene Folien-Extrakte:** `extracted/haftung_folien.md` (Folien 9–14), `extracted/evidenz_folien.md` (Folien 3–6), `extracted/praxis_folien.md` (Folien 16–18), `extracted/haftungsmatrix.js`.

*Datum der Erstellung: 18.04.2026.*
