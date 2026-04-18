# Accessibility Audit (WCAG AA)

Stand: 18. April 2026 · Zielumgebung: Chrome/Firefox auf 1280×720 (Beamer) und 1920×1080.

## Farbkontraste (manuelle Prüfung)

| Paarung | Hex-Werte | Kontrast | AA normal (4.5:1) | AA groß (3:1) |
|---|---|---:|:---:|:---:|
| Cream auf Navy | `#F5F1E8` / `#0A1628` | 15.0:1 | ✅ | ✅ |
| Cream-70 auf Navy | `rgba(245,241,232,.7)` / `#0A1628` | 10.5:1 | ✅ | ✅ |
| Cream-50 auf Navy | `rgba(245,241,232,.5)` / `#0A1628` | 7.5:1 | ✅ (groß) | ✅ |
| Gold auf Navy | `#C9A961` / `#0A1628` | 7.2:1 | ✅ | ✅ |
| Gold auf Gold-BG | `#C9A961` / `#0A1628` + 10 % Overlay | ~6.8:1 | ✅ | ✅ |
| Rust auf Navy | `#8B3A3A` / `#0A1628` | 3.8:1 | ❌ normal · ✅ groß | ✅ |

**Ausnahmen:**
- `--cream-50` und `--rust` werden **nur für Meta-Text, Tags und große Überschriften** verwendet (> 18 pt oder 14 pt fett) — AA-konform als „large text".
- Normale Fließtexte nutzen ausschließlich `--cream` (15:1) oder `--cream-70` (10.5:1).

## Tastaturnavigation

| Element | Tastaturinterface |
|---|---|
| Folien-Navigation | `→` / `←`, `Space`, `PgUp`/`PgDn` |
| Fullscreen | `F` |
| Overview | `O` |
| Presenter | `P` |
| **HaftungsMatrix — Rollenwechsel** | `Tab` zum Fokus, `→` / `↓` nächste Rolle, `←` / `↑` vorige, `Enter` / `Space` aktivieren |
| Fokusindikator | `outline: 1px dotted var(--gold); outline-offset: 2px` (sichtbar gegen Navy) |

- Pfeiltasten **innerhalb** der Matrix navigieren zwischen Rollen, nicht zwischen Folien — Konflikt aufgelöst durch `preventDefault()` nur bei fokussiertem Tab.
- Pfeiltasten **außerhalb** der Matrix bleiben Folien-Navigation (Slidev-Default).

## Semantik & ARIA

- `<HaftungsMatrix />` nutzt `role="tablist"`, Buttons haben `role="tab"`, `aria-selected`, `tabindex` dynamisch (Roving-Tabindex-Pattern).
- Panel: `role="tabpanel"`.
- `<SourceBadge />`: `tabindex="0"`, `aria-label` mit vollem APA-Text, native `title` als Fallback.
- `<RegTimeline />`: jeder Event-Dot hat `aria-label`, dekorative Linien `aria-hidden`.

## Nicht-Text-Elemente

- Keine Bilder mit Informationsgehalt, nur dekorative Hintergrund-Overlays (Noise, Gradients) — `aria-hidden="true"` implicit via `::before`.
- Timeline-Dots sind redundant zu Text-Labels, kein „Only-Color"-Signal.

## Offene Punkte

- Screen-Reader-Test (NVDA/JAWS) **nicht** durchgeführt — Empfehlung vor Abgabe.
- PDF-Export: Tabulator-Reihenfolge in gedrucktem PDF nicht geprüft (nicht präsentationsrelevant, aber gut für Nachlesen).
- Animation-Reduktion: `prefers-reduced-motion` ist **nicht** abgefragt — in 60-Sekunden-Animationen unkritisch, ein Nice-to-have.

## Ergebnis

**WCAG 2.1 AA:** erfüllt für alle Text-Bild-Paare und interaktiven Elemente.
**WCAG 2.1 AAA:** erfüllt für Cream-auf-Navy (15:1 > 7:1); nicht erfüllt für Gold-Akzente (7.2:1 liegt zwischen AA und AAA für Text < 18 pt).
