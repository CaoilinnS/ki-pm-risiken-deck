# KI im Projektmanagement — Regulatorische und Haftungsrisiken

Slidev-Deck für LL.M. Legal Tech, Modul Projektmanagement · Claudia Bothe & Tobias Huck · April 2026.

- **Live-Deck:** https://caoilinns.github.io/ki-pm-risiken-deck/
- **PDF-Fallback:** `snapshots/deck-v1.pdf`
- **Dauer:** 18–20 Minuten · 20 Folien
- **Design:** Midnight Executive Navy/Gold

## Lokal starten

```bash
npm install
npm run dev    # http://localhost:3030
```

## Build & Export

```bash
npm run build    # GH-Pages-Artefakt unter dist/
npm run export   # PDF nach snapshots/deck-v1.pdf
```

## Struktur

| Pfad | Inhalt |
|---|---|
| `slides.md` | Alle 20 Folien + Speaker Notes |
| `components/HaftungsMatrix.vue` | Interaktive 4×4-Haftungsmatrix |
| `components/RegTimeline.vue` | Zeitstrahl AI Act + ProdHaftRL |
| `components/SourceBadge.vue` | Inline-Quellenzitation |
| `styles/index.css` | Design-System (Navy/Gold, Fraunces/DM Sans) |
| `docs/BIBLIOGRAPHY.md` | Vollständige APA-7-Bibliografie |
| `docs/SOURCE_MAPPING.md` | Folie → Primärquelle |
| `docs/SOURCE_ISSUES.md` | Metadaten-Lücken, offene Belegstellen |
| `docs/DATE_VERIFICATION.md` | Regulatorische Termine verifiziert |
| `docs/SPEAKER_NOTES.md` | Sprechleitfaden gespiegelt |
| `docs/TIMING.md` | Zeitkalkulation pro Folie |
| `docs/A11Y_AUDIT.md` | WCAG-AA-Prüfung |
| `docs/ACCEPTANCE_CHECK.md` | Abnahmekriterien |

## Quellen

32 Primärdokumente aus dem Project Knowledge der Autoren; Rechtsprechung und Gesetze direkt aus EUR-Lex / deutschen Amtsblättern. Details in `docs/BIBLIOGRAPHY.md`.
