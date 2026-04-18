# Folie → Primärquelle

Mapping gemäß Spec §5.2. Bei Abweichungen vom Spec-Plan siehe Kommentare.

| # | Titel | Primärquelle(n) |
|---|---|---|
| 01 | Titel | — |
| 02 | Agenda | — |
| 03 | Einstieg: KI-Produktivität vs. Risiko | PwC (2025); PMI GenAI Adoption Report (2024); Hettrich et al. (2025); Aramali et al. (2025); Felicetti et al. (2024); Hughes et al. (2025) |
| 04 | Drei Zahlen | **Korrigiert ggü. Spec:** 17–33 % statt 58 % (Magesh et al. 2025 — die 58 % der Spec stammen aus Dahl et al. 2024 für LLMs ohne RAG, nicht aus Magesh); § 823 BGB; ProdHaftRL Art. 22 (RL 2024/2853) |
| 05 | Taxonomie Halluzinationen | Anh-Hoang et al. (2025); Li et al. (2024); Shao (2025); Magesh et al. (2025) |
| 06 | PM-Artefakte × Halluzinationsmodi | Hughes et al. (2025); Aramali et al. (2025); Anh-Hoang et al. (2025); Shao (2025); Magesh et al. (2025); Felicetti et al. (2024) — PM-Artefakt-Zuordnung als **Eigenschluss** gekennzeichnet |
| 07 | Abschnittstrenner II | — |
| 08 | Regulatorische Timeline | EUR-Lex: Art. 113 AI Act, Art. 22/23 ProdHaftRL; siehe `DATE_VERIFICATION.md` |
| 09 | AI Act Art. 4 / 14 / Anhang III | VO (EU) 2024/1689; Rodriguez de Las Heras Ballell (2025) |
| 10 | ProdHaftRL Paradigmenwechsel | WD-7-004-25 (2025), S. 9–12; RL (EU) 2024/2853, Art. 4, 8, 10 |
| 11 | § 823 BGB + LG Kiel | WD-7-004-25 (2025), S. 8–9; LG Kiel, 29.02.2024 – 6 O 151/23, GRUR-RS 2024, 29599, Rn. 36 |
| 12 | Rollen-Teaser | WD-7-004-25 (2025); Rodriguez de Las Heras Ballell (2025) |
| 13 | **Haftungsmatrix** (interaktiv) | Datenstruktur aus `extracted/haftungsmatrix.js`; Quellen pro Rolle siehe dort |
| 14 | Regulierte Industrien | Bitkom (2017); WD-7-004-25 (2025), S. 4–15; sektorales Branchenrecht (MaRisk, MDR, DORA) als nicht aus Primärquelle belegt gekennzeichnet |
| 15 | Abschnittstrenner III | — |
| 16 | NIST RMF × PM-Rollen | NIST AI 100-1 (2023), Abschnitt 5, S. 20–33; PM-Rollen-Synthese aus Modulkapiteln K1/K4 |
| 17 | Vier PM-Praktiken | Dell'Acqua et al. (2026); Almeida et al. (2025); Bitkom (2017); Modulkapitel K2/K3/K6; Bernert et al. (2024) |
| 18 | Fünf Empfehlungen | Synthese aus allen PM-Quellen + NIST + AI Act |
| 19 | Fazit | These-Rückgriff, kein neuer Beleg |
| 20 | Quellen | Alle |

## Abweichungen vom Spec-Plan

- **Folie 4:** Halluzinationsrate korrigiert auf 17–33 % (Magesh 2025) statt der in der Spec genannten 58 % — diese Zahl ist im Paper nur als Sekundärreferenz auf Dahl et al. 2024 (LLMs ohne RAG) nachweisbar und beschreibt eine andere Systemklasse. Korrektur dokumentiert in `extracted/evidenz_issues.md`.
- **Folie 6:** Die spezifische PM-Artefakt-Zuordnung (Risikoregister, Statusbericht, Change Request, Stakeholder-Kommunikation) ist in der Literatur nicht mit dokumentierten Fehlermodi hinterlegt. Auf der Folie als „Eigenschluss gestützt auf [Quelle]" gekennzeichnet.
- **Folie 14:** Die Spec nannte „MaRisk IT-Anforderungen, BAIT"; die Primärquelle Bitkom 2017 adressiert diese Regelwerke jedoch nicht namentlich (s. `extracted/haftung_issues.md`). Auf der Folie als ergänzender kursiver Hinweis mit Quellenkennzeichnung behandelt.
- **Folie 17 Praktik 4 (Vier-Augen-Prinzip):** In den ISBN-Büchern nicht explizit als KI-Kontrollmechanismus eingeführt — auf der Folie als Synthese mit Begründung aus Dell'Acqua 2026 dargestellt.

## Folien mit 100 % primärquellengestütztem Kern

03, 04 (Zahl 1 und 3), 05, 08, 09, 10, 11, 13, 16, 17 (Praktik 1), 20.
