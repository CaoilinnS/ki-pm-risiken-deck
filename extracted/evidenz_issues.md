# Evidenz-Issues: Nicht belegbare oder zu korrigierende Spec-Aussagen

## 1. Spec-Zahl "58 %" fuer Halluzinationen in Legal RAG - KORREKTUR NOETIG

**Spec-Aussage:** Die Folien-Spec nannte "58 %" Halluzinationsquote mit Verweis
auf Magesh et al. / Stanford RegLab.

**Befund:** Diese Zahl findet sich NICHT als Ergebnis fuer RAG-Tools in Magesh
et al. 2025.

- Die **58 %** entstammen der zitierten Vorarbeit **Dahl et al. 2024** fuer
  **general-purpose LLMs** (nicht RAG). Im Magesh-Paper, S. 1, Zeile 144-146:
  "Previous work has found that general-purpose LLMs hallucinate on legal
  queries on average between **58% and 82% of the time** (Dahl et al. 2024)."
- Die **tatsaechlichen Magesh-Ergebnisse** fuer RAG-gestuetzte Rechts-Tools sind:
  - Lexis+ AI: ca. 17 % ("over 1 in 6")
  - Ask Practical Law AI: ca. 17 % ("over 1 in 6")
  - Westlaw AI-AR: ca. 33 % (one-third)
  - Abstract: "each hallucinate between **17% and 33%** of the time"
    (Abstract, Zeile 29-31).

**Empfehlung fuer Folie 4:** Statt "58 %" besser
- "17-33 %" (Rahmen von Magesh et al. fuer RAG-Rechts-Tools) ODER
- "bis zu 82 %" (Dahl et al., general-purpose LLMs bei Rechtsabfragen)
- je nach gewuenschter Zuspitzung, aber mit der korrekten Quelle.

Wenn die "58 %" unbedingt als griffige Zahl erhalten bleiben sollen,
muss der Quellenanker auf **Dahl et al. 2024** (general-purpose LLMs,
nicht RAG) umgestellt werden und der Framing-Satz erklaeren, dass es
die **untere** Grenze fuer general-purpose LLMs ist.

## 2. Datum 9.12.2026 (ProdHaftRL-Umsetzungsfrist)

Nicht in den Hallucination-/PM-Papers belegbar (auch nicht zu erwarten -
juristisches Datum). Wird laut Task-Briefing durch separaten Agenten
verifiziert. Kein Issue hier.

## 3. § 823 BGB

Transfernorm - kein empirischer Beleg noetig. Kein Issue.

## 4. Unbelegbare Detailangaben zu PM-Artefakten

Die Papers behandeln Halluzinationen und PM **nicht artefakt-spezifisch**
(Risikoregister, Statusbericht, Change Request, Stakeholder-Kommunikation
werden in den gesichteten Quellen nicht als dokumentierte Halluzinations-Case-Studies
beschrieben). Folie 6 ist daher zwingend als **Eigenschluss gestuetzt auf
[Quelle]** zu kennzeichnen - nicht als direktes Zitat.

Konkrete Beispiele fuer Halluzinationen in PM-Artefakten existieren in der
gesichteten Literatur nicht. Der Air-Canada-Moffatt-Fall (bei Shao 2025
zitiert) ist das naechstliegende reale Beispiel fuer Stakeholder-Kommunikation,
aber aus dem Customer-Service-, nicht dem PM-Kontext.

## 5. Keine Widersprueche in den Zahlen festgestellt

Die PM-Produktivitaetszahlen (PwC 27 %, PMI 85-99 %, Hettrich Expertise-Gap)
adressieren unterschiedliche Ebenen (Branchen, High-Adopter-Segmente,
individuelle Task-Performance) und sind nicht unmittelbar vergleichbar -
daher kein Widerspruch, aber sauber getrennt zu zitieren.

## 6. "Halluzinationen sind statistisch unvermeidbar"

Shao (2025, S. 2, Zeilen 72-75) zitiert Kalai & Vempala (2024) fuer einen
statistischen Lower Bound. Diese Primaerquelle liegt im pdf_txt-Set
**nicht vor**; bei Bedarf als Shao-Zitat (Sekundaerbeleg) verwenden.

## 7. Vectara-Rate "1,3-4,1 %"

Shao (2025, S. 2, Zeilen 75-77) zitiert Vectara (2024) fuer Text-Summarization-
Halluzinationsraten von 1,3-4,1 %. Diese Zahl betrifft aber **nur
Summarization**, nicht offene Rechts- oder PM-Abfragen, und darf nicht
als allgemeine Halluzinationsrate verwendet werden.
