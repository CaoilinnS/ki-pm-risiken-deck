# Acceptance Check — Build v1.0

Prüfung gemäß Spec §11. Stand: 18. April 2026.

## Pflichtkriterien

- [x] **20 Folien gemäß Mapping** (Abschnitt 5.2) vorhanden — siehe `SOURCE_MAPPING.md`
- [x] **Jede inhaltliche Aussage hat Quellenbeleg via `<SourceBadge />`** — Ausnahmen sind als Eigenschluss / Synthese gekennzeichnet (Folien 6, 16-Tabelle, 17-Praktiken 3 & 4, 18)
- [x] **Jede zitierte Quelle ist in `BIBLIOGRAPHY.md`** als APA-7-Eintrag vorhanden — 35 Einträge in 3 Gruppen
- [x] **`SOURCE_ISSUES.md` aufgeräumt oder dokumentiert** — 17 Issues dokumentiert (Metadaten-Lücken)
- [x] **`HaftungsMatrix.vue` rendert alle 4 Rollen**, Inhalte gegen WD-7-004-25 und AI-Act-Mapping verifiziert — siehe `extracted/haftungsmatrix.js` + `haftung_issues.md`
- [x] **`RegTimeline.vue` rendert alle Events**, Daten per Wortlaut VO/RL verifiziert — siehe `DATE_VERIFICATION.md`. **Hinweis:** 7 Events (Spec nannte 6) — zusätzlich zu den 5 AI-Act-Phasen sind beide ProdHaftRL-Etappen (Inkrafttreten + Umsetzungsfrist) aufgenommen, da die Inkrafttreten-Etappe für die Abgrenzung „alte/neue Rechtslage" relevant ist
- [x] **`npm run build` läuft fehlerfrei** — 12.15 s, Output in `dist/`
- [x] **`npm run export` liefert PDF** — `snapshots/deck-v1.pdf`, 27 MB, alle 20 Folien exportiert
- [ ] **GH Actions deployed ohne Fehler** — wird beim ersten Push verifiziert (siehe Post-Push-Checks)
- [ ] **Deploy-URL < 3 s Ladezeit** — nach erstem Deploy messen
- [x] **WCAG-AA-Kontraste bestätigt** — siehe `A11Y_AUDIT.md`
- [x] **Speaker Notes für alle 20 Folien** — in `slides.md` als HTML-Kommentare + gespiegelt in `SPEAKER_NOTES.md`
- [x] **Offline-Test mit lokalem PDF** — `snapshots/deck-v1.pdf` öffnet in Acrobat/Edge/Chrome ohne Server
- [x] **Timing-Kalkulation 17:30–20:00 min** — 18:45 min bei Richttempo (`TIMING.md`)

## Abweichungen vom Spec-Plan (dokumentiert)

### 1. Halluzinationsrate Folie 4
Spec nennt „58 %". Verifikation in Magesh et al. 2025 ergibt: Diese Zahl gehört zu Dahl et al. 2024 (LLMs ohne RAG), nicht zu Magesh (RAG-Tools: 17–33 %). Folie 4 verwendet die korrekte Zahl; Erläuterung in `SOURCE_MAPPING.md`.

### 2. Matrix-Datenstruktur
Der React-Prototyp `ki-pm-risiken-deck.jsx` (Spec §6.1) liegt nicht vor. Datenstruktur wurde direkt aus WD-7-004-25 und Rodriguez de Las Heras Ballell (2025) abgeleitet — Spec §6.1 erlaubt das explizit („Bei Konflikt gewinnt die Quelle").

### 3. Anzahl Timeline-Events
Spec nennt 6 Events, implementiert sind 7 (zusätzlich: ProdHaftRL-Inkrafttreten 9.12.2024 als Abgrenzungspunkt „alte/neue Rechtslage"). Inhaltlich konsistent mit Spec-Intent.

### 4. MaRisk/BAIT/MDR auf Folie 14
In Primärquelle (Bitkom 2017) nicht namentlich erwähnt. Auf der Folie als kursiver Zusatz mit klarer Kennzeichnung geführt statt als Zitat-Claim.

### 5. PM-Artefakte auf Folie 6
Keine Studie in der Lektüre dokumentiert PM-Artefakt-spezifische Halluzinationsmodi. Folie 6 kennzeichnet die Zuordnung als „Eigenschluss gestützt auf [Quelle]" — entspricht der Spec-Regel §5.3.

## Post-Push-Checks (nach erstem GH-Actions-Run)

- [ ] Workflow-Run Status = success
- [ ] GH-Pages-URL lädt Folie 01
- [ ] Matrix (Folie 13) interaktiv
- [ ] Timeline (Folie 08) korrekt gerendert
- [ ] Fonts (Fraunces, DM Sans, JetBrains Mono) geladen
- [ ] Mobile Chrome / Firefox funktionsfähig

## Hinweis zu Co-Autor:in Repo-Zugriff

Tobias Huck benötigt Write-Access auf `CaoilinnS/ki-pm-risiken-deck`. Einrichtung manuell nach erstem Push: GitHub → Settings → Collaborators → Add people → `<Tobias-GitHub-Username>`.
