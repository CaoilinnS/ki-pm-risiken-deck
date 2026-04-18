// Haftungsmatrix: 4 Rollen x 4 Dimensionen
// Primärquellen:
//   - WD-7-004-25 (Wissenschaftliche Dienste des Bundestags, Fachbereich WD 7, Az. WD 7 - 3000 - 004/25,
//     Abschluss der Arbeit: 04.03.2025)
//   - Mapping Generative AI rules and liability scenarios in the AI Act, and in the proposed
//     EU liability rules for AI liability (Rodriguez de Las Heras Ballell, Cambridge Forum on AI:
//     Law and Governance, 2025, doi:10.1017/cfl.2024.8)
// Hinweis: Offene Punkte und nicht eindeutig belegbare Aussagen siehe haftung_issues.md

export const haftungsmatrix = {
  hersteller: {
    label: "Hersteller / Anbieter",
    grundlage: [
      "ProdHaftG § 1 Abs. 1 (verschuldensunabhaengige Gefaehrdungshaftung fuer fehlerhafte Produkte)",
      "RL (EU) 2024/2853 Art. 4 Nr. 1 (Software ausdruecklich als Produkt; KI-Bezug in ErwG 3)",
      "§ 823 Abs. 1 BGB (deliktische Produzentenhaftung; Konstruktions- und Instruktionsfehler)",
      "AI Act Art. 53, 55 (Pflichten fuer Anbieter von General-Purpose-AI-Modellen; zusaetzliche Pflichten bei systemischen Risiken)"
    ],
    rechtsprechung: "Keine einschlaegige deutsche Hoechstrichter-Rsp. speziell zur KI-Herstellerhaftung; der BGH-Fehlerbegriff (BGH, Urteil v. 09.05.1995 - VI ZR 158/94, NJW 1995, 2162) und die Produzentenhaftungs-Rsp. (BGH, Urteil v. 16.06.2009 - VI ZR 107/08, NJW 2009, 2952) werden analog herangezogen.",
    beweislast: "Bei der deliktischen Produzentenhaftung gilt eine Beweislastumkehr: Der Hersteller muss sich entlasten, dass er kein fehlerhaftes Produkt in Verkehr gebracht und seinen Verkehrssicherungspflichten genuegt hat. Unter der neuen ProdHaftRL (Art. 10 RL 2024/2853) wird die Fehlerhaftigkeit vermutet, wenn der Hersteller Informationen nicht offenlegt oder Sicherheitsstandards nicht einhaelt; in technisch komplexen Faellen greift zusaetzlich eine Kausalitaetsvermutung.",
    pm: "Anbieter von KI-Systemen (z. B. OpenAI, Anthropic) muessen ab Umsetzungsfrist 09.12.2026 der ProdHaftRL mit ausgeweiteter Produkthaftung auf Software/KI rechnen. Fuer Projekte bedeutet das: Vertragsklauseln zu Aktualisierung, Trainingsdaten-Transparenz (AI Act Art. 53) und Incident-Reporting muessen Teil der Beschaffung sein.",
    quellen: [
      "WD-7-004-25, S. 9-12 (Kap. 4.2 Herstellerhaftung, 4.2.1 Produkthaftung, 4.2.2 Produzentenhaftung)",
      "Mapping, S. 14-17 (Kap. 3.2.1 Delimiting the scope of application; revPLD)",
      "Mapping, S. 9-10 (Kap. 2.3 Rules on Generative AI in the AI Act)"
    ]
  },
  betreiber: {
    label: "Betreiber (einsetzendes Unternehmen)",
    grundlage: [
      "§ 823 Abs. 1 BGB (deliktische Haftung fuer die Verletzung absoluter Rechtsgueter)",
      "Vertragsrechtliche Haftung (§§ 280 ff. BGB) gegenueber Kunden/Nutzern der mit KI erbrachten Leistung",
      "AI Act Art. 26 (Pflichten des Betreibers/'Deployer' bei Hochrisiko-KI-Systemen, insb. menschliche Aufsicht)",
      "AI Act Art. 25 (Betreiber wird zum Anbieter, wenn er den Zweck eines KI-Systems so aendert, dass es zum Hochrisiko-System wird)"
    ],
    rechtsprechung: "LG Kiel, Urteil v. 29.02.2024, Az. 6 O 151/23 (GRUR-RS 2024, 29599, Rn. 36): Der Plattformbetreiber haftet als Verwender der Software fuer KI-generierte Falschinformationen, wenn er die KI willentlich einsetzt und sich die Ausgaben aus Nutzersicht 'zu eigen macht' bzw. erkennbar die inhaltliche Verantwortung uebernimmt.",
    beweislast: "Im Deliktsrecht traegt grundsaetzlich der Geschaedigte die Beweislast fuer Verschulden und Kausalitaet (WD-7-004-25, S. 8). Dies wird in komplexen KI-Konstellationen als schwierig angesehen; die entworfene AI Liability Directive (AILD) sah widerlegliche Kausalitaets- und Verschuldensvermutungen bei Verletzung von AI-Act-Pflichten vor. Im vertraglichen Bereich bestehen sektorale Beweislastumkehrungen (z. B. § 630h Abs. 1 BGB bei Behandlungsfehlern, analog auf KI-gestuetzte Diagnose anwendbar).",
    pm: "Fuer Unternehmen, die KI in Projekten einsetzen (z. B. Beratungen, Banken, Pharma), folgt daraus: Wer KI-Outputs selbst veroeffentlicht oder in eigene Entscheidungen uebernimmt, macht sie sich 'zu eigen' und haftet wie fuer eigene Fehler. Dokumentationspflicht: Auswahl, Freigabeprozesse, menschliche Pruefung (AI Act Art. 14) und Incident-Logs sind zu fuehren.",
    quellen: [
      "WD-7-004-25, S. 8-9 (Kap. 4.1 Haftung des Anwenders oder Systembetreibers; LG Kiel)",
      "Mapping, S. 9 (Art. 25 AI Act; Betreiberrolle in der AI-Wertschoepfungskette)",
      "Mapping, S. 17-18 (Kap. 3.2.2 Expected use and presumptions)"
    ]
  },
  anwender: {
    label: "Anwender (individueller Mitarbeiter)",
    grundlage: [
      "§ 823 Abs. 1 BGB (persoenliche deliktische Haftung fuer schuldhafte Rechtsgutverletzung)",
      "Arbeitsrechtliche Haftung (innerbetrieblicher Schadensausgleich, abgestufte Haftung nach Verschuldensgrad)",
      "AI Act Art. 4 (AI Literacy / KI-Kompetenz: Betreiber muss ausreichendes KI-Verstaendnis seines Personals sicherstellen)",
      "Sorgfaltspflichten aus dem Arbeitsvertrag (Pruef- und Plausibilisierungspflicht gegenueber KI-Output)"
    ],
    rechtsprechung: "Keine spezifische deutsche Rsp. zur individuellen Anwenderhaftung bei KI-Nutzung veroeffentlicht; WD-7-004-25, S. 8 stellt klar: 'Verantwortlich fuer KI-generierte Inhalte ist im Zweifel der Anwender, der KI-generierte Inhalte im eigenen Namen verwendet oder sich die Ergebnisse einer KI zu eigen macht.' Die Grundsaetze aus LG Kiel 6 O 151/23 sind auf den individuellen Anwender analog uebertragbar.",
    beweislast: "Geschaedigter muss bei deliktischer Haftung Verschulden und Kausalitaet nachweisen - WD-7-004-25, S. 8 bezeichnet dies gerade bei opaken KI-Systemen als 'Problem'. Im Arbeitsverhaeltnis kommt die Beweislastverteilung zur Verletzung arbeitsvertraglicher Pflichten durch den Arbeitgeber hinzu. Eine KI-spezifische Beweiserleichterung auf EU-Ebene steht mit dem Rueckzug der AILD (Stand Mappings) aus.",
    pm: "Mitarbeiter, die in Projekten mit KI arbeiten, muessen KI-Output kritisch pruefen (Halluzinationen, Bias). Unterlassene Pruefung bei erkennbaren Fehlern kann als grobe Fahrlaessigkeit gewertet werden. Praxisempfehlung: Schulungen nach AI Act Art. 4, schriftliche Freigabe- und Vier-Augen-Prozesse bei kritischen Outputs, Prompt- und Quellendokumentation.",
    quellen: [
      "WD-7-004-25, S. 8 (Verantwortung des Anwenders, 'zu eigen machen')",
      "WD-7-004-25, S. 13-14 (Kap. 5.1, Fehlfunktionen/Halluzinationen als Quelle rechtlicher Nachteile)",
      "Mapping, S. 10-11 (Transparenz- und Kennzeichnungspflichten, Art. 50 Abs. 2 AI Act)"
    ]
  },
  projektleiter: {
    label: "Projektleiter / Projektverantwortung",
    grundlage: [
      "§ 823 Abs. 1 BGB i. V. m. Organisations- und Auswahlverschulden",
      "§ 43 GmbHG / § 93 AktG analog bzw. Delegation der Sorgfalt eines ordentlichen Geschaeftsleiters an die Projektleitung",
      "AI Act Art. 14 (Human Oversight - menschliche Aufsicht bei Hochrisiko-KI-Systemen)",
      "AI Act Art. 26 Abs. 2 (Betreiber muss die Aufgabe der menschlichen Aufsicht natuerlichen Personen mit erforderlicher Kompetenz uebertragen)"
    ],
    rechtsprechung: "Keine spezifische deutsche Rsp. zur Projektleiter-Haftung bei KI; die LG-Kiel-Linie zum 'zu eigen machen' (6 O 151/23) greift auch hier, wenn die Projektleitung KI-Ergebnisse ohne Pruefung in Projektdokumente uebernimmt. Ansonsten: Allgemeine Grundsaetze der Organhaftung (BGH-Rsp. zu Auswahl-, Instruktions- und Ueberwachungspflichten) werden analog angewendet.",
    beweislast: "Beweislast folgt dem Charakter des Anspruchs: deliktisch durch den Geschaedigten, innerorganschaftlich (z. B. § 93 Abs. 2 AktG) mit Beweislastumkehr zulasten des Vorstands/der Geschaeftsfuehrung - auf delegierte Projektleitung analog. Dokumentationsmaengel wirken haftungsverschaerfend (Parallele zu § 630h BGB).",
    pm: "Projektleitung muss KI-Einsatz governance-maessig aufsetzen: KI-Use-Case-Freigabe, Risikoklassifizierung (Hochrisiko nach Anhang III AI Act?), schriftliche Aufsichtsregelung, Eskalationspfade, Incident-Response. Nicht dokumentierte menschliche Aufsicht = faktische Beweislast gegen die Projektleitung.",
    quellen: [
      "WD-7-004-25, S. 8 (allgemeine Verantwortungszuschreibung an denjenigen, der KI 'im eigenen Namen' einsetzt)",
      "Mapping, S. 9 (Art. 25 AI Act: Rollenuebergang Betreiber -> Anbieter bei Zweckaenderung)",
      "Mapping, S. 18 (Defektivitaet und 'reasonable safety expectations' als Massstab)"
    ]
  }
};
