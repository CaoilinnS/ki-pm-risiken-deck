// regtimeline.js
// Regulatorische Termine fuer den Slidev-Zeitstrahl "KI-Regulierung"
// Quellen: EUR-Lex (VO (EU) 2024/1689; RL (EU) 2024/2853), EU-Kommission
// Verifikationsstand: 2026-04-18
// phase-Regel: live = Datum < 2026-04-18, pending = Datum >= 2026-04-18

export const regEvents = [
  {
    date: "2024-08-01",
    label: "AI Act tritt in Kraft",
    phase: "live",
    detail:
      "VO (EU) 2024/1689 tritt gemaess Art. 113 S. 1 am 20. Tag nach " +
      "Veroeffentlichung im ABl. (12.07.2024) in Kraft.",
    source: "EUR-Lex (ELI: reg/2024/1689)"
  },
  {
    date: "2024-12-09",
    label: "Produkthaftungsrichtlinie tritt in Kraft",
    phase: "live",
    detail:
      "RL (EU) 2024/2853 tritt gemaess Art. 23 am 20. Tag nach " +
      "Veroeffentlichung im ABl. (18.11.2024) in Kraft.",
    source: "EUR-Lex (ELI: dir/2024/2853)"
  },
  {
    date: "2025-02-02",
    label: "AI Act: Verbotene Praktiken (Art. 5) + KI-Kompetenz (Art. 4) gelten",
    phase: "live",
    detail:
      "Art. 113 Abs. 2 lit. a: Geltung Kapitel I (inkl. Art. 4 AI Literacy) " +
      "und Kapitel II (Art. 5 verbotene KI-Praktiken) ab 6 Monaten nach Inkrafttreten.",
    source: "EUR-Lex / EU-Kommission"
  },
  {
    date: "2025-08-02",
    label: "AI Act: GPAI-Pflichten (Art. 51 ff.) gelten",
    phase: "live",
    detail:
      "Art. 113 Abs. 2 lit. b: Pflichten fuer General-Purpose AI Models " +
      "(Kapitel V, Art. 51-56) sowie Governance (Kap. VII) und Sanktionen " +
      "gelten 12 Monate nach Inkrafttreten.",
    source: "EUR-Lex / EU-Kommission"
  },
  {
    date: "2026-08-02",
    label: "AI Act: Volle Geltung - Hochrisiko-Systeme Anhang III",
    phase: "pending",
    detail:
      "Art. 113 S. 1: Allgemeine Geltung 24 Monate nach Inkrafttreten. " +
      "Erfasst insb. Hochrisiko-KI nach Art. 6 Abs. 2 i.V.m. Anhang III " +
      "und Transparenzpflichten nach Art. 50.",
    source: "EUR-Lex / EU-Kommission"
  },
  {
    date: "2026-12-09",
    label: "ProdHaftRL: Umsetzungsfrist fuer Mitgliedstaaten",
    phase: "pending",
    detail:
      "Art. 22 Abs. 1 RL (EU) 2024/2853: Mitgliedstaaten muessen nationale " +
      "Umsetzung bis 09.12.2026 erlassen; neue Regeln fuer Produkte, die " +
      "danach in Verkehr gebracht werden.",
    source: "EUR-Lex (ELI: dir/2024/2853)"
  },
  {
    date: "2027-08-02",
    label: "AI Act: Hochrisiko-Systeme Anhang I (Produktsicherheit) gelten",
    phase: "pending",
    detail:
      "Art. 113 Abs. 3 lit. c: KI-Systeme als Sicherheitsbauteile nach " +
      "Art. 6 Abs. 1 i.V.m. Anhang I (sektorale Harmonisierungsrechtsakte) " +
      "gelten 36 Monate nach Inkrafttreten.",
    source: "EUR-Lex / EU-Kommission"
  }
];

export default regEvents;
