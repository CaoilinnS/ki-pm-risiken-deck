---
theme: default
title: "Generative KI in der Projektdokumentation"
highlighter: shiki
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'DM Sans'
  serif: 'Fraunces'
  mono: 'JetBrains Mono'
css: unocss
defaults:
  layout: default
---

<div class="slidev-layout title-layout" style="display:flex;align-items:center;justify-content:flex-start;padding:5rem 6rem 3rem;position:relative;">
  <div style="max-width:80ch;">
    <div class="kicker">LL.M. Legal Tech · Modul Projektmanagement</div>
    <h1 style="font-size:clamp(2.2rem,4.8vw,3.6rem);font-weight:300;line-height:1.08;margin:1rem 0 0.4rem;">Generative KI in der <em style="font-style:italic;color:var(--gold);">Projektdokumentation</em></h1>
    <div style="font-family:var(--font-display);font-size:1.2rem;font-style:italic;font-weight:300;color:var(--cream-70);margin-bottom:0.8rem;">Qualitätsanforderungen · Haftungsfragen · Governance-Rahmen</div>
    <hr class="hairline" />
    <div style="font-family:var(--font-body);font-size:1rem;color:var(--cream-70);letter-spacing:0.02em;">Claudia Bothe · Tobias Huck</div>
  </div>
</div>

<!--
Sprechleitfaden · 30 s
- Begrüßung, Thema, Gruppenvorstellung
- Leitfrage: Wann darf eine KI-erstellte Projektdokumentation als rechtssicher gelten?
- 5 Blöcke · 18-20 Min · Fokus reguliert (FinServ)
- Anspruch: jede Aussage belegt
-->

---

# Agenda

<div class="editorial stagger" style="max-width:75ch;margin-top:1.4rem;">

<div class="kicker">Fünf Blöcke · 20 Folien · 18–20 Min</div>

<div style="display:grid;grid-template-columns:auto 1fr;gap:0.8rem 1.5rem;margin-top:1.2rem;font-size:1rem;">

<div class="mono" style="color:var(--gold);">I.</div>
<div><strong style="color:var(--cream);">Kontext &amp; Nutzungsstand</strong> — Empirie + Jagged Frontier (Folien 3–4)</div>

<div class="mono" style="color:var(--gold);">II.</div>
<div><strong style="color:var(--cream);">Qualitätsanforderungen</strong> — Fünf Dimensionen für KI-Doku (Folien 6–8)</div>

<div class="mono" style="color:var(--gold);">III.</div>
<div><strong style="color:var(--cream);">Haftungsfragen</strong> — § 633 BGB · § 823 BGB · § 416 ZPO · AI Act · DSGVO (Folien 10–14)</div>

<div class="mono" style="color:var(--gold);">IV.</div>
<div><strong style="color:var(--cream);">Governance-Rahmen</strong> — Drei Ebenen · DORA × MaRisk · BaFin · Bitkom (Folien 16–19)</div>

<div class="mono" style="color:var(--gold);">V.</div>
<div><strong style="color:var(--cream);">Fazit &amp; Ausblick</strong> — These + PM2030 (Folie 20)</div>

</div>

<hr class="hairline" />

<p style="font-family:var(--font-display);font-style:italic;font-weight:300;color:var(--cream-70);font-size:0.95rem;line-height:1.45;">These: Generative KI verbessert die Projektdokumentation nur dann nachweis- und revisionsfähig, wenn ein rechtssicherer Governance-Rahmen besteht — andernfalls überwiegen die regulatorischen Haftungsrisiken.</p>

</div>

<!--
Sprechleitfaden · 30 s
- Fünf-Block-Struktur, Schwerpunkt III (Haftung) und IV (Governance)
- These bewusst geschärft auf "nachweis- und revisionsfähig" — bindet § 416 ZPO + DORA-Doku-Pflichten
- Folie 14 (Haftungsmatrix) interaktiv
-->

---

# Projektdokumentation — wo <em style="font-style:italic;color:var(--gold);">GenKI</em> bereits ankommt

<div style="display:grid;grid-template-columns:1.1fr 1fr;gap:1.6rem;margin-top:1rem;" class="stagger">

<div>
<div class="kicker">Typische KI-erzeugte Doku-Artefakte</div>
<ul style="font-size:0.9rem;list-style:none;padding:0;margin-top:0.5rem;">
<li style="margin:0.4rem 0;padding-left:1rem;border-left:2px solid var(--gold-muted);"><strong>Statusbericht</strong> — Zusammenfassung von Reports, KPI-Daten, Tickets</li>
<li style="margin:0.4rem 0;padding-left:1rem;border-left:2px solid var(--gold-muted);"><strong>Risikoregister</strong> — Identifikation, Bewertung, Mitigationspfade</li>
<li style="margin:0.4rem 0;padding-left:1rem;border-left:2px solid var(--gold-muted);"><strong>Change-Request-Begründung</strong> — Impact-Analyse, Abhängigkeiten</li>
<li style="margin:0.4rem 0;padding-left:1rem;border-left:2px solid var(--gold-muted);"><strong>Lastenheft / Pflichtenheft</strong> — Anforderungen aus Stakeholder-Input</li>
<li style="margin:0.4rem 0;padding-left:1rem;border-left:2px solid var(--gold-muted);"><strong>Lessons Learned</strong> — Synthese aus Projektabschluss-Daten</li>
</ul>
</div>

<div class="panel">
<div class="kicker">Empirische Penetration</div>
<ul style="font-size:0.85rem;list-style:none;padding:0;">
<li style="margin:0.5rem 0;">+27 % Produktivitätswachstum in KI-exponierten Branchen <SourceBadge short="PwC, 2025" full="PwC Deutschland (2025). AI Jobs Barometer 2025, Pressemitteilung S. 2." /></li>
<li style="margin:0.5rem 0;">99 % der GenKI-„Trailblazer" melden positiven Einfluss auf Projektarbeit <SourceBadge short="PMI, 2024" full="Project Management Institute (2024). First Movers' Advantage: GenAI Adoption Report, S. 6." /></li>
<li style="margin:0.5rem 0;">86 % nutzen GenKI bereits für Projektplanung <SourceBadge short="Aramali et al., 2025" full="Aramali, V. et al. (2025). Generative AI in project management. Project Leadership and Society, 6, 100191." /></li>
<li style="margin:0.5rem 0;color:var(--cream);">Aber: <strong>74 % gemischte oder negative Gefühle</strong> trotz Adoption <SourceBadge short="Aramali et al., 2025" full="Aramali, V. et al. (2025). Generative AI in project management. Project Leadership and Society, 6, 100191, Abstract S. 1." /></li>
</ul>
</div>

</div>

<p class="pull-quote" style="margin-top:1rem;font-size:1.05rem;">Die Adoption läuft. Die rechtliche Einordnung läuft hinterher.</p>

<!--
Sprechleitfaden · 60 s
- Fünf typische Doku-Artefakte — alle 5 vom Werkvertrag erfasst (Vorgriff auf Folie 10)
- Penetrationszahlen als Kontext — 86 % nutzen GenKI für Planung
- 74-%-Diskrepanz öffnet das Spannungsfeld → Folie 4
-->

---

# Die <em style="font-style:italic;color:var(--gold);">Jagged Technological Frontier</em>

<div style="display:grid;grid-template-columns:1.4fr 1fr;gap:1.4rem;margin-top:1rem;" class="stagger">

<div>
<p style="font-size:0.95rem;line-height:1.5;color:var(--cream);">Dell'Acqua et al. (2026) zeigen mit einem präregistrierten Feldexperiment an <strong>758 BCG-Consultants</strong>: Die Wirkung von GenKI hängt davon ab, ob die Aufgabe <em>innerhalb</em> oder <em>außerhalb</em> der KI-Fähigkeitsgrenze liegt.</p>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.8rem;margin-top:1rem;">

<div class="panel" style="padding:0.9rem 1rem;">
<div class="kicker" style="color:var(--gold);">Innerhalb der Frontier</div>
<div style="font-family:var(--font-display);font-size:1.6rem;font-weight:300;color:var(--gold);line-height:1;margin:0.3rem 0;">+12,2 %</div>
<p style="font-size:0.75rem;color:var(--cream-70);">mehr Aufgaben, <strong>−25,1 %</strong> Zeit, signifikant höhere Qualität</p>
</div>

<div class="panel" style="padding:0.9rem 1rem;border-color:var(--rust);">
<div class="kicker" style="color:var(--rust);">Außerhalb der Frontier</div>
<div style="font-family:var(--font-display);font-size:1.6rem;font-weight:300;color:var(--rust);line-height:1;margin:0.3rem 0;">−19 %</div>
<p style="font-size:0.75rem;color:var(--cream-70);">seltener korrekte Lösung — ohne dass Nutzer es merken</p>
</div>

</div>

<p style="font-size:0.82rem;color:var(--cream-70);margin-top:0.8rem;font-style:italic;">„Falling asleep at the wheel" — überhöhtes Vertrauen, verstärkt durch die persuasive Wirkung generativer KI. <SourceBadge short="Dell'Acqua et al., 2026, S. 1, 18" full="Dell'Acqua, F. et al. (2026). Navigating the Jagged Technological Frontier. Organization Science (Articles in Advance), DOI 10.1287/orsc.2025.21838." /></p>
</div>

<div class="panel panel-gold">
<div class="kicker">Implikation für Doku</div>
<p style="font-size:0.85rem;line-height:1.45;">Die Frontier-Grenze ist <strong>nicht erkennbar</strong>, ohne dass jemand prüft. Genau hier setzen die fünf Qualitätsdimensionen an — und die Pflicht zu menschlicher Aufsicht (Art. 14 AI Act).</p>
<p style="font-size:0.78rem;color:var(--cream-70);margin-top:0.6rem;">Wenn die KI bei Statusbericht-Zusammenfassung im sweet spot ist, aber bei Risikoanalyse außerhalb — wird der Statusbericht plausibel und das Risikoregister still falsch.</p>
</div>

</div>

<!--
Sprechleitfaden · 70 s
- Dell'Acqua-Studie als Empirie-Anker für gesamtes Deck
- Drei Zahlen merken: +12,2 % / -25,1 % / -19 %
- "Falling asleep at the wheel" als Bild zitieren
- Brücke: deshalb brauchen wir präzise Qualitätsdimensionen → Block II
-->

---

<div class="section-layout" style="display:flex;align-items:center;padding:4rem 6rem;height:100%;">
  <div class="section-inner stagger" style="max-width:70ch;">
    <div class="section-label">Teil II · Folien 6–8</div>
    <h1 class="section-title" style="font-size:clamp(2.6rem,5.5vw,4rem);font-weight:300;font-style:italic;line-height:1.05;margin:1rem 0;">Was <em style="font-style:normal;color:var(--gold);">Qualität</em> bei KI-Doku heißt</h1>
    <hr class="hairline" />
    <p style="font-family:var(--font-display);font-size:1.05rem;font-weight:300;font-style:italic;color:var(--cream-70);max-width:55ch;margin-top:0.8rem;">Fünf Dimensionen, abgeleitet aus NIST AI RMF 1.0 — und was sie für die Praxis bedeuten.</p>
  </div>
</div>

<!--
Sprechleitfaden · 20 s
- Block II: Qualitätsanforderungen
- Fünf Dimensionen sind die LL.M.-Innovation dieses Decks
-->

---

# Fünf Qualitätsdimensionen

<div style="display:grid;grid-template-columns:repeat(5,1fr);gap:0.6rem;margin-top:1.2rem;" class="stagger">

<div class="panel" style="padding:0.7rem 0.7rem;">
<div class="mono" style="color:var(--gold);font-size:0.55rem;letter-spacing:0.18em;">01</div>
<h3 style="font-size:0.95rem;margin:0.3rem 0;color:var(--cream);">Faktentreue</h3>
<p style="font-size:0.72rem;color:var(--cream-70);">Konsistent mit Weltwissen + Projektdaten. Keine fact-conflicting oder misgrounded Aussagen.</p>
</div>

<div class="panel" style="padding:0.7rem 0.7rem;">
<div class="mono" style="color:var(--gold);font-size:0.55rem;letter-spacing:0.18em;">02</div>
<h3 style="font-size:0.95rem;margin:0.3rem 0;color:var(--cream);">Vollständigkeit</h3>
<p style="font-size:0.72rem;color:var(--cream-70);">Alle nach Vertrag/Standard erforderlichen Aspekte abgedeckt. Keine compliance-relevanten Lücken.</p>
</div>

<div class="panel" style="padding:0.7rem 0.7rem;">
<div class="mono" style="color:var(--gold);font-size:0.55rem;letter-spacing:0.18em;">03</div>
<h3 style="font-size:0.95rem;margin:0.3rem 0;color:var(--cream);">Nachvollziehbarkeit</h3>
<p style="font-size:0.72rem;color:var(--cream-70);">Jede Aussage rückführbar auf Prompt, Modellversion, Quellenkette, Retrieval-Kontext.</p>
</div>

<div class="panel panel-gold" style="padding:0.7rem 0.7rem;">
<div class="mono" style="color:var(--gold);font-size:0.55rem;letter-spacing:0.18em;">04</div>
<h3 style="font-size:0.95rem;margin:0.3rem 0;color:var(--cream);">Auditierbarkeit</h3>
<p style="font-size:0.72rem;color:var(--cream-70);">Externe Prüfer rekonstruieren Entstehung + Freigabe ohne Bearbeiter.</p>
</div>

<div class="panel" style="padding:0.7rem 0.7rem;">
<div class="mono" style="color:var(--gold);font-size:0.55rem;letter-spacing:0.18em;">05</div>
<h3 style="font-size:0.95rem;margin:0.3rem 0;color:var(--cream);">Revisionssicherheit</h3>
<p style="font-size:0.72rem;color:var(--cream-70);">Versionen, Zeitstempel, Signaturen manipulationssicher. Aufbewahrungsfristen erfüllt.</p>
</div>

</div>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.4rem;">

<div class="panel" style="padding:0.9rem 1rem;">
<div class="kicker">Belegtheit</div>
<p style="font-size:0.8rem;line-height:1.4;">Verdichtung der <strong>NIST AI RMF Trustworthiness Characteristics</strong> (Abschn. 3.1–3.7, S. 12–17) auf fünf PM-relevante Dimensionen. Einzelanker zu jeder Dimension belegt; die Verdichtung selbst ist eigene Synthese. <SourceBadge short="NIST AI 100-1, S. 12–17" full="NIST (2023). AI Risk Management Framework 1.0 (NIST AI 100-1), Abschnitt 3.1–3.7, S. 12–17." /></p>
</div>

<div class="panel" style="padding:0.9rem 1rem;">
<div class="kicker">AI-Act-Kongruenz</div>
<p style="font-size:0.8rem;line-height:1.4;">Art. 12 (Aufzeichnung) ↔ Nachvollziehbarkeit · Art. 13 (Transparenz) ↔ Vollständigkeit · Art. 14 (Human Oversight) ↔ Auditierbarkeit · Art. 15 (Genauigkeit) ↔ Faktentreue + Revisionssicherheit. <SourceBadge short="VO (EU) 2024/1689" full="Verordnung (EU) 2024/1689, Artikel 12, 13, 14, 15." /></p>
</div>

</div>

<!--
Sprechleitfaden · 70 s
- Fünf Dimensionen ist die Eigenleistung des Decks — verdichtet aus NIST 7
- Jede Dimension auf 1 Satz reduziert für die Folie
- Auditierbarkeit goldhighlighted, weil zentral für FinServ
- AI-Act-Kongruenz zeigt: Framework ist nicht erfunden, sondern in EU-Recht spiegelbar
-->

---

# Faktentreue — der <em style="font-style:italic;color:var(--gold);">Halluzinations-Stresstest</em>

<div style="display:grid;grid-template-columns:1fr 1.2fr;gap:1.4rem;margin-top:1rem;" class="stagger">

<div class="panel panel-gold" style="text-align:center;padding:1.6rem 1.2rem;">
<div style="font-family:var(--font-display);font-size:3.2rem;font-weight:300;color:var(--gold);line-height:1;">17–33 %</div>
<div class="mono" style="font-size:0.55rem;letter-spacing:0.2em;color:var(--cream-50);margin-top:0.4rem;">HALLUZINATIONSRATE</div>
<p style="font-size:0.78rem;margin-top:0.6rem;color:var(--cream);">Auch spezialisierte Rechts-RAG-Tools — Lexis+ AI, Westlaw, Practical Law.</p>
<p style="font-size:0.65rem;color:var(--cream-50);margin-top:0.4rem;">Trotz „hallucination-free"-Versprechen.</p>
<p class="mono" style="font-size:0.55rem;color:var(--cream-50);margin-top:0.6rem;"><SourceBadge short="Magesh et al., 2025" full="Magesh, V. et al. (2025). Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools. Journal of Empirical Legal Studies. Abstract S. 1, Abschnitt 6.1 S. 9." /></p>
</div>

<div>
<div class="kicker">Vier Halluzinations-Klassen</div>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:0.5rem;margin-top:0.4rem;">

<div class="panel" style="padding:0.55rem 0.7rem;">
<div class="mono" style="color:var(--gold);font-size:0.55rem;">① INTRINSISCH</div>
<p style="font-size:0.7rem;margin:0.2rem 0;">widerspricht dem Input — typisch bei Summarization</p>
</div>

<div class="panel" style="padding:0.55rem 0.7rem;">
<div class="mono" style="color:var(--gold);font-size:0.55rem;">② EXTRINSISCH</div>
<p style="font-size:0.7rem;margin:0.2rem 0;">fügt Information ohne Kontextbezug hinzu</p>
</div>

<div class="panel" style="padding:0.55rem 0.7rem;">
<div class="mono" style="color:var(--gold);font-size:0.55rem;">③ FAKTISCH</div>
<p style="font-size:0.7rem;margin:0.2rem 0;">widerspricht etabliertem Weltwissen</p>
</div>

<div class="panel" style="padding:0.55rem 0.7rem;border-color:var(--rust);">
<div class="mono" style="color:var(--rust);font-size:0.55rem;">④ MISGROUNDED</div>
<p style="font-size:0.7rem;margin:0.2rem 0;">Quelle existiert, stützt die Aussage aber nicht — gefährlichste Klasse</p>
</div>

</div>

<p style="font-size:0.78rem;color:var(--cream-70);margin-top:0.8rem;font-style:italic;font-family:var(--font-display);line-height:1.4;">Magesh definiert Halluzination strenger als Anbieter: nicht nur erfundene Fälle, sondern auch <strong>misgrounded</strong> — die Quelle existiert, stützt die Aussage aber nicht. Genau das, was im Risikoregister oder Change Request still durchrutscht.</p>
<p class="mono" style="font-size:0.55rem;color:var(--cream-50);"><SourceBadge short="Anh-Hoang et al., 2025" full="Anh-Hoang, D., Tran, V. & Nguyen, L.-M. (2025). Survey and analysis of hallucinations in large language models. Frontiers in AI, 8:1622292, S. 3." /> · <SourceBadge short="Magesh et al., 2025, S. 5–6" full="Magesh et al. (2025), Abschnitt 4.3 zur Groundedness-Definition." /></p>
</div>

</div>

<!--
Sprechleitfaden · 70 s
- Korrektur populärer Kurzzitat: 17-33 % stimmt für Magesh, NICHT die oft kursierende 58 %
- Vier Klassen knapp benennen, NICHT auswendig lehren
- Misgrounded (rost) ist die kritische Klasse für Doku — Zitate wirken belegbar
- Brücke: deshalb braucht es Auditierbarkeit (Folie 8)
-->

---

# Auditierbarkeit &amp; Revisionssicherheit

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;margin-top:1rem;" class="stagger">

<div class="panel">
<div class="kicker">Auditierbarkeit (Auditability)</div>
<p style="font-size:0.85rem;line-height:1.4;margin:0.3rem 0;">Externe Prüfer rekonstruieren Entstehung und Freigabe einer KI-Doku ohne den Bearbeiter. Setzt voraus: <strong>Prompts, Outputs, Modellversionen, Reviews</strong> sind zugänglich aufbewahrt.</p>

<hr class="hairline" style="margin:0.6rem 0;" />

<div style="font-size:0.78rem;line-height:1.4;">
<strong style="color:var(--cream);">Verletzungsbeispiel:</strong> Lessons-Learned-Bericht enthält KI-Auswertungen, die intern „aus Datenschutzgründen" gelöscht wurden — spätere BaFin-Prüfung kann nichts mehr verifizieren.
</div>

<p class="mono" style="font-size:0.6rem;color:var(--cream-50);margin-top:0.5rem;">Anker: <SourceBadge short="NIST AI 100-1, S. 15–16" full="NIST AI 100-1, Abschn. 3.4 Accountable and Transparent." /> · <SourceBadge short="NIST GOVERN 1.4, S. 22" full="NIST AI 100-1, GOVERN 1.4: transparent policies, procedures, and other controls." /> · AI Act Art. 12, 14</p>
</div>

<div class="panel panel-gold">
<div class="kicker">Revisionssicherheit (Tamper-evidence)</div>
<p style="font-size:0.85rem;line-height:1.4;margin:0.3rem 0;">Versionsstände, Zeitstempel und Autoren-/Modellsignaturen sind <strong>manipulationssicher</strong> festgehalten — nachträgliche Änderungen sind erkennbar.</p>

<hr class="hairline" style="margin:0.6rem 0;" />

<div style="font-size:0.78rem;line-height:1.4;">
<strong style="color:var(--cream);">Verletzungsbeispiel:</strong> Statusbericht wird nach dem Lenkungsausschuss „nachgeschärft", die ursprüngliche KI-Fassung verschwindet — Beweisführung in einem späteren Haftungsprozess (LG-Kiel-Linie) wird unmöglich.
</div>

<p class="mono" style="font-size:0.6rem;color:var(--cream-50);margin-top:0.5rem;">Anker: <SourceBadge short="NIST AI 100-1, S. 15" full="NIST AI 100-1, Abschn. 3.3 Secure and Resilient — confidentiality, integrity, availability." /> · AI Act Art. 12 · DSGVO Art. 5 Abs. 1 lit. e (Speicherbegrenzung)</p>
</div>

</div>

<p style="margin-top:1rem;font-size:0.85rem;color:var(--cream-70);font-family:var(--font-display);font-style:italic;line-height:1.4;">
Die beiden Dimensionen sind die Brücke zur <strong>Beweisfähigkeit im Prozess</strong> (§ 416 ZPO, Folie 12) und zu den <strong>DORA-Vertragsmindestpflichten</strong> (Art. 30 DORA, Folie 17). Wer KI-Doku ohne Audit-Spur nutzt, gibt im Streitfall die Beweisführung aus der Hand.
</p>

<!--
Sprechleitfaden · 60 s
- Auditierbarkeit + Revisionssicherheit zentral für regulierten Kontext
- Beide Verletzungsbeispiele real beobachtbar
- Brücke zu Block III (§ 416 ZPO) und Block IV (DORA Art. 30) ankündigen
- Block I/II Quintessenz: Qualität ist messbar, dokumentierbar, einklagbar
-->

---

<div class="section-layout" style="display:flex;align-items:center;padding:4rem 6rem;height:100%;">
  <div class="section-inner stagger" style="max-width:70ch;">
    <div class="section-label">Teil III · Folien 10–14</div>
    <h1 class="section-title" style="font-size:clamp(2.6rem,5.5vw,4rem);font-weight:300;font-style:italic;line-height:1.05;margin:1rem 0;">Wer <em style="font-style:normal;color:var(--gold);">haftet</em>?</h1>
    <hr class="hairline" />
    <p style="font-family:var(--font-display);font-size:1.05rem;font-weight:300;font-style:italic;color:var(--cream-70);max-width:55ch;margin-top:0.8rem;">§ 633 BGB · § 823 BGB + LG Kiel · § 416 ZPO · EU AI Act + DSGVO — und die Verteilung auf vier Rollen.</p>
  </div>
</div>

<!--
Sprechleitfaden · 20 s
- Block III ist mengenmäßig größter Teil
- Vier Normen + Matrix
-->

---

# § 633 BGB — KI-Doku als <em style="font-style:italic;color:var(--gold);">mangelhaftes Werk</em>

<div style="display:grid;grid-template-columns:1.1fr 1fr;gap:1.2rem;margin-top:0.8rem;" class="stagger">

<div>
<div class="kicker">Mangelbegriff § 633 Abs. 2 BGB</div>
<ul style="font-size:0.78rem;list-style:none;padding:0;margin:0.3rem 0;">
<li style="margin:0.3rem 0;padding-left:0.8rem;border-left:2px solid var(--gold-muted);">S. 1 — vereinbarte Beschaffenheit</li>
<li style="margin:0.3rem 0;padding-left:0.8rem;border-left:2px solid var(--gold-muted);">S. 2 Nr. 1 — vorausgesetzte Verwendung</li>
<li style="margin:0.3rem 0;padding-left:0.8rem;border-left:2px solid var(--gold-muted);">S. 2 Nr. 2 — übliche Beschaffenheit</li>
</ul>

<div class="kicker" style="margin-top:0.8rem;">Ansprüche § 634 BGB</div>
<p style="font-size:0.75rem;color:var(--cream-70);line-height:1.35;margin:0.3rem 0;">Nacherfüllung (§ 635) · Selbstvornahme (§ 637) · Rücktritt/Minderung (§§ 636, 638) · Schadensersatz (§§ 634 Nr. 4, 280 ff.). Verjährung nach § 634a Abs. 1 Nr. 3 BGB: <strong>3 Jahre</strong>.</p>
</div>

<div class="panel">
<div class="kicker">Typische Mängel KI-Doku</div>
<table style="font-size:0.72rem;width:100%;border-collapse:collapse;margin-top:0.3rem;">
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.3rem 0.4rem;color:var(--cream);"><strong>Halluzinationen</strong></td><td style="padding:0.3rem;color:var(--cream-70);">Abweichung S. 1 + S. 2 Nr. 1</td></tr>
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.3rem 0.4rem;color:var(--cream);"><strong>Fehlende Auditierbarkeit</strong></td><td style="padding:0.3rem;color:var(--cream-70);">Untauglichkeit übl. Verwendung S. 2 Nr. 2 (regulierte Kontexte)</td></tr>
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.3rem 0.4rem;color:var(--cream);"><strong>Misgrounded Zitate</strong></td><td style="padding:0.3rem;color:var(--cream-70);">S. 1 — schwer entdeckbar</td></tr>
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.3rem 0.4rem;color:var(--cream);"><strong>Unvollständigkeit</strong></td><td style="padding:0.3rem;color:var(--cream-70);">§ 633 Abs. 2 S. 3 BGB analog</td></tr>
<tr><td style="padding:0.3rem 0.4rem;color:var(--cream);"><strong>Bias/Diskriminierung</strong></td><td style="padding:0.3rem;color:var(--cream-70);">S. 1 + Rechtsmangel § 633 Abs. 3</td></tr>
</table>
</div>

</div>

<div class="panel panel-gold" style="margin-top:0.8rem;padding:0.7rem 1rem;">
<p style="font-size:0.85rem;color:var(--cream);font-style:italic;font-family:var(--font-display);line-height:1.4;margin:0;">Wer KI-Doku als Werk schuldet, schuldet sie <strong>halluzinationsfrei oder nachvollziehbar geprüft</strong> — die §§ 633 ff. BGB kennen keinen „AI-Bonus".</p>
<p class="mono" style="font-size:0.6rem;color:var(--cream-50);margin-top:0.4rem;">AGB-Schranke: Pauschale Freizeichnung scheitert an §§ 309 Nr. 7, 307 BGB (Kardinalpflichten, grobe Fahrlässigkeit). Eigenständige juristische Analyse, gestützt auf BGB.</p>
</div>

<!--
Sprechleitfaden · 75 s
- § 633 ist die WICHTIGE Lücke der bisherigen KI-Recht-Diskussion — meist wird nur § 823 diskutiert
- IT-Beratungs-Werkverträge schulden meist Erfolg, nicht Tätigkeit
- Tabelle Mängel zeigt: alle 5 Qualitätsdimensionen sind werkvertragsrechtlich relevant
- Konsens-Satz Gold-Panel als Take-away
-->

---

# § 823 BGB + LG Kiel — <em style="font-style:italic;color:var(--gold);">„zu eigen gemacht"</em>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.4rem;margin-top:0.8rem;" class="stagger">

<div>
<div class="kicker">LG Kiel · 29.02.2024 · 6 O 151/23</div>
<p style="font-size:0.85rem;line-height:1.4;margin:0.4rem 0;">
Plattformbetreiber haftet als Verwender der KI-Software für KI-generierte Falschinformationen — nach § 823 Abs. 1 BGB.
</p>
<p class="pull-quote" style="font-size:1rem;margin-top:0.6rem;">
„Der Betreiber haftet auch für von Dritten eingestellte falsche Informationen, wenn er sie sich aus Nutzersicht <em>zu eigen macht</em> und erkennbar die inhaltliche Verantwortung übernimmt."
</p>
<p class="mono" style="font-size:0.6rem;color:var(--cream-50);"><SourceBadge short="LG Kiel, 2024" full="LG Kiel, Urteil vom 29.02.2024 – 6 O 151/23, GRUR-RS 2024, 29599, Rn. 36." /> · <SourceBadge short="WD-7-004-25, S. 8–9" full="Wissenschaftliche Dienste des Bundestages (2025). Sachstand WD 7 - 3000 - 004/25, S. 8–9." /></p>
</div>

<div class="panel">
<div class="kicker">PM-Transfer: Wann „zu eigen"?</div>
<ul style="font-size:0.8rem;list-style:none;padding:0;">
<li style="margin:0.4rem 0;">— KI-Texte <strong>unverändert</strong> in Statusbericht / Steering-Vorlage / Kunden-Deliverable</li>
<li style="margin:0.4rem 0;">— Veröffentlichung im eigenen Namen (Chatbot, automatisierte Mandantenantwort)</li>
<li style="margin:0.4rem 0;">— erkennbare Verantwortungsübernahme („<em>Unsere</em> Risiko-Analyse zeigt …")</li>
<li style="margin:0.4rem 0;">— auch ohne explizite Prüfung oder Kennzeichnung</li>
</ul>
<hr class="hairline" style="margin:0.6rem 0;" />
<p style="font-size:0.75rem;color:var(--cream);line-height:1.4;">Ergänzend: <strong>§ 630h Abs. 1 BGB</strong> — Beweislastumkehr im Arzthaftungsrecht, analog auf KI-gestützte Diagnose anwendbar.</p>
</div>

</div>

<!--
Sprechleitfaden · 70 s
- LG Kiel ist das erste deutsche KI-Haftungsurteil — wegweisend
- "Zu eigen machen" ist der zentrale Begriff
- Die vier PM-Konstellationen rechts decken den Praxisalltag ab
- § 630h Brücke für medizinische Projektkontexte
-->

---

# § 416 ZPO — KI-Doku als <em style="font-style:italic;color:var(--gold);">Privaturkunde</em>?

<div style="display:grid;grid-template-columns:1.2fr 1fr;gap:1.2rem;margin-top:0.8rem;" class="stagger">

<div>
<p style="font-size:0.85rem;line-height:1.45;margin:0.3rem 0;">
<strong>§ 416 ZPO:</strong> „Privaturkunden begründen, sofern sie von dem Aussteller unterschrieben oder mittels notariell beglaubigten Handzeichens unterzeichnet sind, vollen Beweis dafür, dass die in ihnen enthaltenen Erklärungen von dem Aussteller abgegeben sind."
</p>

<div class="panel" style="margin-top:0.7rem;padding:0.7rem 0.9rem;">
<div class="kicker" style="color:var(--rust);">Reine KI-Erzeugnisse</div>
<p style="font-size:0.78rem;line-height:1.4;margin:0.2rem 0;">Kein menschlicher Aussteller, keine Zurechenbarkeit → <strong>keine Urkunde</strong>. Allenfalls Augenscheinsobjekt nach § 371 ZPO (freie Beweiswürdigung, § 286 ZPO).</p>
</div>

<div class="panel panel-gold" style="margin-top:0.6rem;padding:0.7rem 0.9rem;">
<div class="kicker">Menschliche Freigabe schafft Urkundenqualität</div>
<ul style="font-size:0.75rem;list-style:none;padding:0;">
<li style="margin:0.25rem 0;">✓ <strong>Klassisch:</strong> PL prüft, korrigiert, unterschreibt KI-Statusbericht → § 416 ZPO greift</li>
<li style="margin:0.25rem 0;">✓ <strong>Elektronisch:</strong> PDF mit qualifizierter elektronischer Signatur (eIDAS, § 126a BGB) → § 371a Abs. 1 ZPO erweitert § 416 ZPO entsprechend</li>
<li style="margin:0.25rem 0;color:var(--rust);">✗ <strong>Nicht ausreichend:</strong> Workflow-Approval ohne qeS, einfache E-Mail-Zustimmung, Footer „erstellt durch KI"</li>
</ul>
</div>
</div>

<div class="panel">
<div class="kicker">Brücke zum LG Kiel</div>
<p style="font-size:0.78rem;line-height:1.4;">§ 416 ZPO und LG Kiel laufen <strong>kongruent, aber dogmatisch getrennt</strong>:</p>
<table style="font-size:0.72rem;width:100%;margin-top:0.4rem;border-collapse:collapse;">
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.3rem;color:var(--gold);">§ 416 ZPO</td><td style="padding:0.3rem;color:var(--cream-70);"><strong>formell</strong> — Erklärung wurde abgegeben</td></tr>
<tr><td style="padding:0.3rem;color:var(--gold);">LG Kiel</td><td style="padding:0.3rem;color:var(--cream-70);"><strong>materiell</strong> — Inhalt wurde zu eigen gemacht, Haftung folgt</td></tr>
</table>
<hr class="hairline" style="margin:0.7rem 0;" />
<p style="font-size:0.78rem;color:var(--cream);font-style:italic;font-family:var(--font-display);line-height:1.4;">Ohne signierte Freigabe ist KI-Doku im Streitfall nur Augenscheinsobjekt — die Signatur ist die <strong>einzige zivilprozessual wirksame Versicherungspolice</strong>.</p>
</div>

</div>

<!--
Sprechleitfaden · 70 s
- § 416 ZPO ist der LL.M.-Hebel — vom Prof explizit angefragt
- Kernaussage: ohne Signatur keine Urkunde, nur Augenscheinsobjekt
- Goldene Liste rechts oben — drei Varianten klar machen
- Brücke LG Kiel: zwei Spuren, kongruent aber dogmatisch getrennt
-->

---

# AI Act + DSGVO — die <em style="font-style:italic;color:var(--gold);">EU-Klammer</em>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;margin-top:0.8rem;" class="stagger">

<div class="panel">
<div class="kicker">EU AI Act (VO 2024/1689)</div>
<table style="font-size:0.72rem;width:100%;border-collapse:collapse;margin-top:0.3rem;">
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.25rem;color:var(--gold);width:80px;">Art. 4</td><td style="padding:0.25rem;color:var(--cream-70);">KI-Kompetenz von Personal sicherstellen</td></tr>
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.25rem;color:var(--gold);">Art. 12</td><td style="padding:0.25rem;color:var(--cream-70);">Aufzeichnungspflichten für Hochrisiko-KI</td></tr>
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.25rem;color:var(--gold);">Art. 13</td><td style="padding:0.25rem;color:var(--cream-70);">Transparenz / Information für Deployer</td></tr>
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.25rem;color:var(--gold);">Art. 14</td><td style="padding:0.25rem;color:var(--cream-70);"><strong>Human Oversight</strong> — wirksame Aufsicht</td></tr>
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.25rem;color:var(--gold);">Art. 15</td><td style="padding:0.25rem;color:var(--cream-70);">Genauigkeit, Robustheit, Cybersicherheit</td></tr>
<tr><td style="padding:0.25rem;color:var(--gold);">Art. 25</td><td style="padding:0.25rem;color:var(--cream-70);">Rollen-Flip: Betreiber → Anbieter bei Zweckänderung</td></tr>
</table>
</div>

<div class="panel">
<div class="kicker">DSGVO bei KI-Projektdoku</div>
<table style="font-size:0.72rem;width:100%;border-collapse:collapse;margin-top:0.3rem;">
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.25rem;color:var(--gold);width:80px;">Art. 5</td><td style="padding:0.25rem;color:var(--cream-70);">Grundsätze: Zweckbindung, Datenminimierung, Speicherbegrenzung</td></tr>
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.25rem;color:var(--gold);">Art. 22</td><td style="padding:0.25rem;color:var(--cream-70);">Verbot ausschl. autom. Entscheidungen mit Rechtsfolge</td></tr>
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.25rem;color:var(--gold);">Art. 28</td><td style="padding:0.25rem;color:var(--cream-70);">AVV bei KI-Anbieter (OpenAI, Anthropic …)</td></tr>
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.25rem;color:var(--gold);">Art. 32</td><td style="padding:0.25rem;color:var(--cream-70);">Sicherheit der Verarbeitung</td></tr>
<tr><td style="padding:0.25rem;color:var(--gold);">Art. 35</td><td style="padding:0.25rem;color:var(--cream-70);"><strong>DSFA-Pflicht</strong> bei systematischer KI-Bewertung</td></tr>
</table>
</div>

</div>

<div class="panel" style="margin-top:0.8rem;padding:0.7rem 1rem;">
<p style="font-size:0.78rem;line-height:1.4;color:var(--cream);font-style:italic;font-family:var(--font-display);margin:0;">
<strong>Dreifach-Sandwich:</strong> Eine KI-gestützte HR-Bewerber-Bewertung in einem Bank-Projekt unterliegt <strong>Art. 22 DSGVO</strong> (Verbot rein automatisierter Entscheidung) + <strong>Anhang III AI Act</strong> (Hochrisiko-System) + <strong>§ 22 BDSG / DGUV</strong>. Drei parallele Erlaubnis- und Pflichtenrahmen, die gleichzeitig erfüllt werden müssen.
</p>
</div>

<!--
Sprechleitfaden · 60 s
- Zwei Tabellen knapp vorstellen — nicht jede Norm einzeln durchgehen
- Art. 22 DSGVO als Scharnier — am häufigsten unterschätzte Norm
- Dreifach-Sandwich-Beispiel: HR + FinServ ist der härteste Use Case
-->

---

# Die <em style="font-style:italic;color:var(--gold);">Haftungsmatrix</em> — klicken Sie eine Rolle

<HaftungsMatrix />

<!--
Sprechleitfaden · 130 s — INTERAKTIVES HERZSTÜCK
- "Wählen Sie eine Rolle"
- Empfohlene Reihenfolge: Projektleitung (04) → Hersteller (01) für Kontrast
- Pro Rolle Pointe:
  - Hersteller: Beweislastumkehr strukturell (Art. 10 ProdHaftRL)
  - Betreiber: LG Kiel schlägt direkt ein
  - Anwender: persönliche deliktische Haftung trotz Art. 4
  - Projektleitung: Dokumentationsmängel = § 630h-Parallele
- Quellen sind unten eingeblendet
-->

---

<div class="section-layout" style="display:flex;align-items:center;padding:4rem 6rem;height:100%;">
  <div class="section-inner stagger" style="max-width:70ch;">
    <div class="section-label">Teil IV · Folien 16–19</div>
    <h1 class="section-title" style="font-size:clamp(2.6rem,5.5vw,4rem);font-weight:300;font-style:italic;line-height:1.05;margin:1rem 0;">Der <em style="font-style:normal;color:var(--gold);">Governance-Rahmen</em></h1>
    <hr class="hairline" />
    <p style="font-family:var(--font-display);font-size:1.05rem;font-weight:300;font-style:italic;color:var(--cream-70);max-width:55ch;margin-top:0.8rem;">Drei Ebenen · DORA × MaRisk · BaFin · Bitkom — wie Compliance im FinServ-Projekt operativ wird.</p>
  </div>
</div>

<!--
Sprechleitfaden · 15 s
- Block IV — konkrete Governance
- Praxisorientierter, weniger Norm-Diskussion
-->

---

# Drei-Ebenen-Modell

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:0.8rem;margin-top:1rem;" class="stagger">

<div class="panel" style="padding:0.8rem 0.9rem;">
<div class="mono" style="color:var(--gold);font-size:0.55rem;letter-spacing:0.2em;">EBENE 01</div>
<h3 style="font-size:1.1rem;margin:0.3rem 0;color:var(--cream);">Strategisch</h3>
<p style="font-size:0.72rem;color:var(--cream-70);margin:0.3rem 0;"><strong>Wer:</strong> PAG, PLA, PMO-Leitung</p>
<p style="font-size:0.72rem;color:var(--cream-70);margin:0.3rem 0;"><strong>Was:</strong> KI-Policy, Use-Case-Schwellwerte, Risikoappetit, Hochrisiko-Klassifizierung, Schulungsbudget (Art. 4 AI Act)</p>
<p style="font-size:0.72rem;color:var(--cream-70);margin:0.3rem 0;"><strong>Artefakte:</strong> KI-Policy, Charta-Klausel, AI-Inventar</p>
<p class="mono" style="font-size:0.58rem;color:var(--cream-50);margin-top:0.4rem;">NIST GOVERN (S. 21–23)</p>
</div>

<div class="panel panel-gold" style="padding:0.8rem 0.9rem;">
<div class="mono" style="color:var(--gold);font-size:0.55rem;letter-spacing:0.2em;">EBENE 02</div>
<h3 style="font-size:1.1rem;margin:0.3rem 0;color:var(--cream);">Taktisch</h3>
<p style="font-size:0.72rem;color:var(--cream-70);margin:0.3rem 0;"><strong>Wer:</strong> PMO, PL, Risk Owner, Quality Lead</p>
<p style="font-size:0.72rem;color:var(--cream-70);margin:0.3rem 0;"><strong>Was:</strong> Use-Case auf Risikoregister mappen, Modell-/Anbieter-Auswahl (DPA, Drittland), KPI/TEVV-Metriken, Freigabepfade</p>
<p style="font-size:0.72rem;color:var(--cream-70);margin:0.3rem 0;"><strong>Artefakte:</strong> Use-Case-Steckbrief, AVV nach Art. 28 DSGVO, Messplan</p>
<p class="mono" style="font-size:0.58rem;color:var(--cream-50);margin-top:0.4rem;">NIST MAP + MEASURE (S. 24–30)</p>
</div>

<div class="panel" style="padding:0.8rem 0.9rem;">
<div class="mono" style="color:var(--gold);font-size:0.55rem;letter-spacing:0.2em;">EBENE 03</div>
<h3 style="font-size:1.1rem;margin:0.3rem 0;color:var(--cream);">Operativ</h3>
<p style="font-size:0.72rem;color:var(--cream-70);margin:0.3rem 0;"><strong>Wer:</strong> Anwender, Reviewer, Data Steward</p>
<p style="font-size:0.72rem;color:var(--cream-70);margin:0.3rem 0;"><strong>Was:</strong> Prompt-Formulierung, Übernahme/Ablehnung KI-Output, Versionierung + qeS-Signatur, Incident-Eskalation</p>
<p style="font-size:0.72rem;color:var(--cream-70);margin:0.3rem 0;"><strong>Artefakte:</strong> Prompt-Log, signierte Freigabe, Incident-Report</p>
<p class="mono" style="font-size:0.58rem;color:var(--cream-50);margin-top:0.4rem;">NIST MANAGE (S. 31–32)</p>
</div>

</div>

<p style="margin-top:0.9rem;font-size:0.8rem;color:var(--cream-70);font-family:var(--font-display);font-style:italic;line-height:1.4;">
<strong>Verbindungslinie:</strong> Top-down setzt Strategie taktische Schwellen, taktische Schwellen werden operativ vollzogen. Bottom-up: ein operativer Vorfall → MEASURE → MAP → ggf. GOVERN-Revision. <strong>Art. 14 AI Act</strong> ist Querschnitt: jede Ebene übt Aufsicht in eigener Tiefe aus.
</p>

<p class="mono" style="font-size:0.6rem;color:var(--cream-50);">Synthese aus NIST-Funktionen + Bitkom-Architekturschichten + AI Act Art. 14. <SourceBadge short="NIST AI 100-1, S. 20–32" full="NIST (2023). AI Risk Management Framework 1.0, Abschnitt 5.1–5.4." /> · <SourceBadge short="Bitkom, 2017, S. 2–4, 7" full="Bitkom (2017). IT-gestützte Compliance im Finanzsektor — Konzept und Vorgehensweise, S. 2–4, 7." /></p>

<!--
Sprechleitfaden · 65 s
- Drei Ebenen ist die zweite LL.M.-Eigenleistung neben Fünf-Dimensionen
- Mittlere Ebene Goldhighlighted — taktisch ist sektoral am stärksten betroffen
- Verbindungslinie unten: Top-down + Bottom-up + Querschnitt Art. 14
- Synthese-Hinweis: NIST + Bitkom als Anker, keine Erfindung
-->

---

# DORA × MaRisk — wenn GenKI zum <em style="font-style:italic;color:var(--gold);">IKT-Drittdienst</em> wird

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;margin-top:0.6rem;" class="stagger">

<div class="panel">
<div class="kicker">DORA Art. 28 ff. (gilt seit 17.01.2025)</div>
<ul style="font-size:0.72rem;list-style:none;padding:0;margin:0.3rem 0;">
<li style="margin:0.25rem 0;"><strong>Art. 28 Abs. 3:</strong> Aufnahme ins <strong>Informationsregister</strong> kritischer IKT-Funktionen</li>
<li style="margin:0.25rem 0;"><strong>Art. 28 Abs. 4 + Art. 29:</strong> Vorabbewertung Konzentrations-/Substituierbarkeitsrisiko</li>
<li style="margin:0.25rem 0;"><strong>Art. 30 Abs. 2:</strong> Vertraglicher <strong>Mindestinhalt</strong> (Standorte, Audit, Datenrückgabe)</li>
<li style="margin:0.25rem 0;"><strong>Art. 30 Abs. 3:</strong> Bei kritischen/wichtigen Funktionen erweiterter Vertragskatalog</li>
<li style="margin:0.25rem 0;"><strong>Art. 28 Abs. 8:</strong> getestete <strong>Exit-Strategie</strong></li>
</ul>
<p style="font-size:0.7rem;color:var(--cream-70);margin-top:0.4rem;line-height:1.35;">Greift, sobald ein FinServ-Institut OpenAI/Azure-OpenAI/Anthropic-Enterprise für Projektdoku einsetzt — auch indirekt über SaaS-Tools.</p>
</div>

<div class="panel">
<div class="kicker">MaRisk AT 9 (Auslagerung)</div>
<ul style="font-size:0.72rem;list-style:none;padding:0;margin:0.3rem 0;">
<li style="margin:0.25rem 0;">Prinzipienbasierter Auslagerungsbegriff — relevant ab „typischer Bezug" wesentlicher Funktion</li>
<li style="margin:0.25rem 0;">Anforderungen vor Auslagerung: Risikoanalyse, Eignungsprüfung Anbieter</li>
<li style="margin:0.25rem 0;">Während: Steuerung, Kontrolle, Eingriffsrechte, Berichtswesen</li>
<li style="margin:0.25rem 0;">Abgrenzung: „sonstiger Fremdbezug" unterliegt geringeren Pflichten</li>
</ul>
<p style="font-size:0.7rem;color:var(--cream-70);margin-top:0.4rem;line-height:1.35;">DORA ist <strong>lex specialis</strong> — schlägt für IKT-Bezug zu, MaRisk bleibt für Geschäfts-Auslagerung.</p>
</div>

</div>

<div class="panel panel-gold" style="margin-top:0.8rem;padding:0.7rem 1rem;">
<div class="kicker">Konfliktzone</div>
<p style="font-size:0.78rem;line-height:1.4;color:var(--cream);margin:0.2rem 0;">
<strong>① Doppelregister:</strong> DORA-Informationsregister vs. MaRisk-AT-9-Auslagerungsregister — Konsolidierung erwartet, bis 8. MaRisk-Novelle ungelöst. <strong>② Exit bei Modell-Lock-in:</strong> Closed-Source-LLMs (GPT-4o, Claude) machen 1:1-Migration praktisch unmöglich — DORA-Exit-Pflicht trifft auf technische Realität.
</p>
</div>

<!--
Sprechleitfaden · 75 s
- Prof-Anregung 1: DORA × MaRisk als LL.M.-Alleinstellungsmerkmal
- DORA gilt seit 17.01.2025 — bereits scharfes Recht
- Lex specialis: DORA für IKT, MaRisk für Geschäft
- Konflikte unten — Doppelregister + Exit-Strategie sind die offenen Aufsichtspraxisfragen 2025/26
-->

---

# BaFin — die <em style="font-style:italic;color:var(--gold);">nationale Konkretisierung</em>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;margin-top:0.8rem;" class="stagger">

<div class="panel">
<div class="kicker">Fachartikel · 01.08.2024</div>
<p style="font-size:0.8rem;color:var(--cream);margin:0.3rem 0;font-style:italic;font-family:var(--font-display);">„KI bei Banken und Versicherern: Automatisch fair?"</p>
<ul style="font-size:0.74rem;list-style:none;padding:0;margin:0.4rem 0;">
<li style="margin:0.3rem 0;"><strong>Erklärbarkeit:</strong> bei vergleichbaren Ergebnissen einfachere Modelle bevorzugen — Transparenz als Auswahlkriterium</li>
<li style="margin:0.3rem 0;"><strong>Human Oversight:</strong> bei generativer KI ohne Filter/menschliche Kontrolle entstehen Haftungs- und Reputationsrisiken</li>
<li style="margin:0.3rem 0;"><strong>Drittanbieter:</strong> bei externer GenKI bleiben Trainingsdaten + Funktionsweise unbekannt — Risiko</li>
</ul>
<p class="mono" style="font-size:0.58rem;color:var(--cream-50);">bafin.de/SharedDocs/Veroeffentlichungen/DE/Fachartikel/2024/fa-bj_0801_KI_Finanzindustrie</p>
</div>

<div class="panel panel-gold">
<div class="kicker">Orientierungshilfe IKT-Risiken bei KI · 18.12.2025</div>
<p style="font-size:0.8rem;color:var(--cream);margin:0.3rem 0;">BaFin Referat CTF 5 — operationalisiert <strong>DORA</strong> für KI-Einsatz in CRR-Instituten und SII-Versicherern.</p>
<ul style="font-size:0.74rem;list-style:none;padding:0;margin:0.4rem 0;">
<li style="margin:0.3rem 0;">KI-Sicherheit/-Resilienz <strong>in jeder Lebenszyklus-Phase</strong> (Datenakquise, Entwicklung, Betrieb, Außerdienststellung)</li>
<li style="margin:0.3rem 0;">KI-Systeme MÜSSEN ins bestehende <strong>IKT-Risikomanagement</strong> integriert werden</li>
<li style="margin:0.3rem 0;">Explizit: <strong>IKT-Drittparteienrisiko</strong> bei externen KI-Anbietern</li>
</ul>
<p class="mono" style="font-size:0.58rem;color:var(--cream-50);">bafin.de/SharedDocs/Downloads/DE/Anlage/neu/dl_Anlage_orientierungshilfe_IKT_Risiken_bei_KI</p>
</div>

</div>

<p style="margin-top:0.9rem;font-size:0.82rem;color:var(--cream-70);font-family:var(--font-display);font-style:italic;line-height:1.4;">
Beide Dokumente sind <strong>nicht-bindende Verlautbarungen</strong>, prägen aber die aufsichtliche Erwartungshaltung — und damit die faktische Compliance-Schwelle. Die Orientierungshilfe ist die <strong>nationale Konkretisierung</strong> von Art. 14 AI Act für den Finanzsektor.
</p>

<!--
Sprechleitfaden · 65 s
- Prof-Anregung 3: BaFin-Hinweise als Scharnier zu Art. 14 AI Act
- Zwei Dokumente: Fachartikel 2024 (Erklärbarkeit/Oversight) + Orientierungshilfe 12/2025 (IKT/DORA)
- Beide nicht bindend, aber prägend für Aufsichtspraxis
- Orientierungshilfe = nationale Konkretisierung des AI Act
-->

---

# Bitkom-Referenzmodell für <em style="font-style:italic;color:var(--gold);">FinServ</em>

<div style="display:grid;grid-template-columns:1fr 1.1fr;gap:1.4rem;margin-top:0.8rem;" class="stagger">

<div>
<p style="font-size:0.85rem;line-height:1.45;">
Das <strong>Bitkom-/QIRM-Referenzmodell</strong> für IT-gestützte Compliance im Finanzsektor (seit 2015) liefert die methodische Brücke zwischen abstraktem Recht (DORA, MaRisk, BaFin) und konkreter Architektur.
</p>

<div class="panel" style="margin-top:0.8rem;padding:0.8rem 0.9rem;">
<div class="kicker">Vier Architekturschichten</div>
<ul style="font-size:0.78rem;list-style:none;padding:0;margin:0.3rem 0;">
<li style="margin:0.3rem 0;">— Geschäftsarchitektur</li>
<li style="margin:0.3rem 0;">— Daten­architektur</li>
<li style="margin:0.3rem 0;">— Anwendungsarchitektur</li>
<li style="margin:0.3rem 0;">— Technologie­architektur</li>
</ul>
<p class="mono" style="font-size:0.58rem;color:var(--cream-50);margin-top:0.3rem;"><SourceBadge short="Bitkom, 2017, S. 3, 7" full="Bitkom e.V. (2017). IT-gestützte Compliance im Finanzsektor — Konzept und Vorgehensweise, S. 3, 7." /></p>
</div>
</div>

<div class="panel">
<div class="kicker">Mapping auf KI-Doku-Compliance</div>
<table style="font-size:0.72rem;width:100%;border-collapse:collapse;margin-top:0.3rem;">
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.3rem;color:var(--gold);width:35%;"><strong>Geschäft</strong></td><td style="padding:0.3rem;color:var(--cream-70);">KI-Use-Cases pro Funktion (Onboarding, AML, Reporting)</td></tr>
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.3rem;color:var(--gold);"><strong>Daten</strong></td><td style="padding:0.3rem;color:var(--cream-70);">KY-Customer/Transaction/Process · DSGVO-Konformität · Trainingsdaten-Provenienz</td></tr>
<tr style="border-bottom:1px solid var(--gold-muted);"><td style="padding:0.3rem;color:var(--gold);"><strong>Anwendung</strong></td><td style="padding:0.3rem;color:var(--cream-70);">Prompt-Versionierung, Output-Logging, qeS-Workflow</td></tr>
<tr><td style="padding:0.3rem;color:var(--gold);"><strong>Technologie</strong></td><td style="padding:0.3rem;color:var(--cream-70);">DORA-Drittanbieter-Stack (Modell, RAG, Hosting)</td></tr>
</table>
<hr class="hairline" style="margin:0.6rem 0;" />
<p style="font-size:0.74rem;color:var(--cream);font-style:italic;font-family:var(--font-display);line-height:1.4;">Bitkom liefert die <strong>taktische Übersetzungsschicht</strong>: zwischen DORA-Anforderung und konkretem KI-Workflow.</p>
</div>

</div>

<!--
Sprechleitfaden · 50 s
- Bitkom als Referenzarchitektur, nicht als KI-Compliance-Leitfaden
- Vier Schichten zeigen, wo welche Pflicht greift
- Mapping rechts: Geschäft → DORA-relevante Funktion; Daten → DSGVO; Anwendung → AI Act/qeS; Technologie → DORA Art. 28
- Gibt der Praxis ein Strukturraster
-->

---

# Fazit: <em style="font-style:italic;color:var(--gold);">nachweisfähig</em> oder gar nicht

<div style="max-width:78ch;margin-top:1rem;" class="stagger">

<p style="font-family:var(--font-display);font-size:1.3rem;font-weight:300;line-height:1.4;color:var(--cream);">
Generative KI verbessert die Projektdokumentation nur dann <em style="color:var(--gold);">nachweis- und revisionsfähig</em>, wenn ein rechtssicherer Governance-Rahmen besteht — andernfalls überwiegen die regulatorischen Haftungsrisiken.
</p>

<hr class="hairline" style="margin:1.2rem 0;" />

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.2rem;">

<div>
<div class="kicker">Drei Take-Aways</div>
<ul style="font-size:0.85rem;list-style:none;padding:0;margin:0.4rem 0;">
<li style="margin:0.5rem 0;padding-left:1rem;border-left:2px solid var(--gold);"><strong>§ 633 + § 416 ZPO + LG Kiel</strong> bilden einen Dreiklang: Werkvertrag, Beweisfähigkeit, Haftung — ohne signierte Freigabe greifen alle drei gegen den KI-Nutzer.</li>
<li style="margin:0.5rem 0;padding-left:1rem;border-left:2px solid var(--gold);"><strong>DORA Art. 28 ff.</strong> ist seit 17.01.2025 Pflicht — wer GenKI ohne Vertragsmindestinhalt + Exit-Strategie nutzt, agiert aufsichtsrechtlich unsicher.</li>
<li style="margin:0.5rem 0;padding-left:1rem;border-left:2px solid var(--gold);"><strong>Drei-Ebenen-Governance</strong> verteilt die fünf Qualitätsdimensionen organisatorisch — KI-Compliance ist Chefsache, nicht Anwender­problem.</li>
</ul>
</div>

<div class="panel">
<div class="kicker">Ausblick PM2030</div>
<p style="font-size:0.82rem;line-height:1.4;color:var(--cream-70);">
Gartner prognostiziert: 80 % der heutigen PM-Routinen werden bis 2030 durch KI eliminiert oder transformiert. <SourceBadge short="Hughes et al., 2025" full="Hughes, L. et al. (2025). Impact of AI on project management. Journal of Innovation & Knowledge, 10, 100772, S. 2 (zitiert Gartner/Costello 2019)." />
</p>
<p style="font-size:0.82rem;line-height:1.4;color:var(--cream);margin-top:0.5rem;font-style:italic;font-family:var(--font-display);">
Bleibt: die Verantwortung. Eliminiert wird die Routine, nicht die Haftung.
</p>
</div>

</div>

<p style="margin-top:1.2rem;font-family:var(--font-display);font-style:italic;color:var(--gold);font-size:1.05rem;text-align:right;">
— Vielen Dank. Fragen?
</p>

</div>

<!--
Sprechleitfaden · 60 s
- These vom Anfang auflösen — auf Folie 2 zeigen
- Drei Take-Aways pointiert
- PM2030: Routine wird automatisiert, Haftung bleibt menschlich
- Übergang zur Diskussion
-->

---
layout: default
---

# Quellen

<div style="font-size:0.7rem;line-height:1.4;column-count:2;column-gap:1.8rem;margin-top:0.8rem;font-family:var(--font-mono);color:var(--cream-70);">

<div style="break-inside:avoid;margin-bottom:0.7rem;">
<strong style="color:var(--gold);font-family:var(--font-display);font-style:italic;font-weight:400;">Rechtsprechung &amp; Gesetze</strong>
<div style="margin:0.25rem 0;">LG Kiel, Urteil v. 29.02.2024 – 6 O 151/23, GRUR-RS 2024, 29599.</div>
<div style="margin:0.25rem 0;">VO (EU) 2024/1689 v. 13.06.2024 (AI Act).</div>
<div style="margin:0.25rem 0;">VO (EU) 2022/2554 v. 14.12.2022 (DORA).</div>
<div style="margin:0.25rem 0;">VO (EU) 2016/679 (DSGVO).</div>
<div style="margin:0.25rem 0;">RL (EU) 2024/2853 (ProdHaftRL).</div>
<div style="margin:0.25rem 0;">BGB §§ 631, 633, 634, 634a, 823, 630h, 126a.</div>
<div style="margin:0.25rem 0;">ZPO §§ 286, 371, 371a, 415, 416.</div>
</div>

<div style="break-inside:avoid;margin-bottom:0.7rem;">
<strong style="color:var(--gold);font-family:var(--font-display);font-style:italic;font-weight:400;">Aufsicht &amp; Standards</strong>
<div style="margin:0.25rem 0;">BaFin (2024). KI bei Banken und Versicherern: Automatisch fair? Fachartikel v. 01.08.2024.</div>
<div style="margin:0.25rem 0;">BaFin (2025). Orientierungshilfe zu IKT-Risiken beim Einsatz von KI. Stand 18.12.2025, Referat CTF 5.</div>
<div style="margin:0.25rem 0;">MaRisk (Mindestanforderungen an das Risikomanagement), aktuelle Fassung.</div>
<div style="margin:0.25rem 0;">NIST (2023). AI RMF 1.0 (NIST AI 100-1).</div>
<div style="margin:0.25rem 0;">Wissenschaftliche Dienste des Bundestages (2025). Sachstand WD 7-3000-004/25.</div>
<div style="margin:0.25rem 0;">Bitkom e.V. (2017). IT-gestützte Compliance im Finanzsektor.</div>
</div>

<div style="break-inside:avoid;">
<strong style="color:var(--gold);font-family:var(--font-display);font-style:italic;font-weight:400;">Wissenschaft</strong>
<div style="margin:0.25rem 0;">Magesh, V. et al. (2025). Hallucination-Free? J. Empirical Legal Studies.</div>
<div style="margin:0.25rem 0;">Dell'Acqua, F. et al. (2026). Navigating the Jagged Technological Frontier. Organization Science.</div>
<div style="margin:0.25rem 0;">Anh-Hoang, D. et al. (2025). Survey of hallucinations in LLMs. Frontiers in AI.</div>
<div style="margin:0.25rem 0;">Aramali, V. et al. (2025). GenAI in PM. Project Leadership and Society.</div>
<div style="margin:0.25rem 0;">Hughes, L. et al. (2025). AI on PM. J. Innovation &amp; Knowledge.</div>
<div style="margin:0.25rem 0;">Almeida, P. M. et al. (2025). AI tools for PM. Project Leadership and Society.</div>
<div style="margin:0.25rem 0;">Felicetti, A. M. et al. (2024). AI and PM. J. Innovation &amp; Knowledge.</div>
<div style="margin:0.25rem 0;">Hettrich, B. et al. (2025). Bridging the Expertise Gap. Creativity and Innovation Management.</div>
<div style="margin:0.25rem 0;">Rodriguez de Las Heras Ballell (2025). Mapping generative AI rules. Cambridge Forum on AI.</div>
<div style="margin:0.25rem 0;">Bernert, C. et al. (Hrsg.) (2024). KI in der Projektwirtschaft 2. UVK.</div>
<div style="margin:0.25rem 0;">PwC Deutschland (2025). AI Jobs Barometer 2025.</div>
</div>

</div>

<p class="mono" style="font-size:0.6rem;color:var(--cream-50);margin-top:0.6rem;">Vollständige APA-7-Bibliografie: <code>docs/BIBLIOGRAPHY.md</code> · Legal-Analyse: <code>docs/LEGAL_QUALITY_ANALYSIS.md</code> · FinServ-Regulatorik: <code>docs/FINSERV_REGULATORIK.md</code></p>

<!--
Sprechleitfaden · 10 s
- Nicht vorlesen
- "Vollständige Bibliografie im Repo"
-->
