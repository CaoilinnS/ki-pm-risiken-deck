---
theme: default
title: "KI im Projektmanagement: Regulatorische und Haftungsrisiken"
info: |
  LL.M. Legal Tech · Modul Projektmanagement
  Claudia Bothe · Tobias Huck
class: text-center
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

<style>
@import '/styles/index.css';
</style>

<div class="slidev-layout title-layout" style="display:flex;align-items:center;justify-content:flex-start;padding:6rem 6rem 4rem;position:relative;">
  <div style="max-width:80ch;">
    <div class="kicker">LL.M. Legal Tech · Modul Projektmanagement</div>
    <h1 style="font-size:clamp(2.4rem,5.5vw,4rem);font-weight:300;line-height:1.08;margin:1rem 0 0.6rem;">Regulatorische und Haftungsrisiken beim Einsatz von <em style="font-style:italic;color:var(--gold);">KI</em> im Projektmanagement</h1>
    <hr class="hairline" />
    <div style="font-family:var(--font-body);font-size:1rem;color:var(--cream-70);letter-spacing:0.02em;">Claudia Bothe · Tobias Huck</div>
  </div>
  <div class="mono" style="position:absolute;bottom:2rem;left:6rem;font-size:0.75rem;color:var(--cream-50);letter-spacing:0.2em;">01 / 20</div>
</div>

<!--
Sprechleitfaden · 30 s
- Begrüßung, Thema und Gruppenvorstellung
- Leitfrage: Wer haftet, wenn KI im Projekt irrt?
- Drei-Block-Struktur ankündigen (Evidenz – Recht – Praxis)
- Unser Anspruch: jede Aussage belegt, keine Erfindung
-->

---

# Agenda

<div class="editorial stagger" style="max-width:70ch;margin-top:2rem;">

<div class="kicker">Drei Blöcke · 20 Folien · 18–20 Min</div>

<div style="display:grid;grid-template-columns:auto 1fr;gap:1rem 1.5rem;margin-top:1.5rem;font-size:1.05rem;">

<div class="mono" style="color:var(--gold);">I.</div>
<div><strong style="color:var(--cream);">Evidenz</strong> — Halluzinationen, PM-Risikoflächen, quantitative Lage (Folien 3–6)</div>

<div class="mono" style="color:var(--gold);">II.</div>
<div><strong style="color:var(--cream);">Rechtsrahmen</strong> — AI Act, ProdHaftRL, § 823 BGB, Haftungsmatrix (Folien 7–14)</div>

<div class="mono" style="color:var(--gold);">III.</div>
<div><strong style="color:var(--cream);">Praxis</strong> — NIST RMF, vier PM-Praktiken, fünf Empfehlungen (Folien 15–19)</div>

</div>

<hr class="hairline" />

<p style="font-family:var(--font-display);font-style:italic;font-weight:300;color:var(--cream-70);">These: Mit dem neuen EU-Rechtsrahmen wird Haftung zwischen Herstellern, Betreibern, Anwendern und Projektleitungen neu verteilt — KI-Governance wird Chefsache im Projekt.</p>

</div>

<!--
Sprechleitfaden · 30 s
- Agenda kurz durchgehen, Schwerpunkt Block II ankündigen (deshalb auch die längste Dauer)
- Interaktive Haftungsmatrix auf Folie 13 als Höhepunkt hervorheben
- These stehen lassen, nicht auflösen — die Folien beantworten sie
-->

---

# KI im Projektmanagement — <em style="font-style:italic;color:var(--gold);">zwei Realitäten</em>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem;margin-top:1.5rem;" class="stagger">

<div class="panel">
<div class="kicker">Produktivitätsversprechen</div>
<ul style="font-size:0.95rem;list-style:none;padding:0;">
<li style="margin:0.8rem 0;">+ Vervierfachung des Produktivitätswachstums in KI-exponierten Branchen (7 % → 27 %) <SourceBadge short="PwC, 2025" full="PwC Deutschland (2025). AI Jobs Barometer. Pressemitteilung, S. 2." /></li>
<li style="margin:0.8rem 0;">+ 99 % der GenAI-„Trailblazer" melden positiven Einfluss auf Projektarbeit <SourceBadge short="PMI, 2024a" full="Project Management Institute (2024). First Movers' Advantage: GenAI Adoption Report, S. 6." /></li>
<li style="margin:0.8rem 0;">+ Novizen mit GenAI erreichen Profi-Niveau bei Projektplanung <SourceBadge short="Hettrich et al., 2025" full="Hettrich, B., Krings, N. & Kock, A. (2025). Bridging the Expertise Gap. Creativity and Innovation Management, 34, S. 789." /></li>
</ul>
</div>

<div class="panel" style="border-color:var(--rust);">
<div class="kicker" style="color:var(--rust);">Risikorealität</div>
<ul style="font-size:0.95rem;list-style:none;padding:0;">
<li style="margin:0.8rem 0;">− 74 % der PM-Fachkräfte haben <strong>gemischte oder negative Gefühle</strong> <SourceBadge short="Aramali et al., 2025" full="Aramali, V. et al. (2025). Generative AI in project management. Project Leadership and Society, 6, 100191, S. 1." /></li>
<li style="margin:0.8rem 0;">− „Unfaithful appropriation" — Nutzung gegen Tool-Design mit unbeabsichtigten Ergebnissen <SourceBadge short="Felicetti et al., 2024" full="Felicetti, A. M. et al. (2024). Artificial intelligence and project management. Journal of Innovation & Knowledge, 9, 100545." /></li>
<li style="margin:0.8rem 0;">− Warnung vor Over-Reliance und algorithmischem Bias <SourceBadge short="Hughes et al., 2025" full="Hughes, L. et al. (2025). Impact of AI on project management. Journal of Innovation & Knowledge, 10, 100772, S. 8." /></li>
</ul>
</div>

</div>

<p class="pull-quote" style="margin-top:1.5rem;font-size:1.1rem;">Produktivität und Risiko wachsen parallel — die juristische Seite hinkt nach.</p>

<!--
Sprechleitfaden · 60 s
- Linke Spalte: belegte Produktivitätsgewinne knapp nennen, nicht einzeln vorlesen
- Rechte Spalte: 74% ist Kernzahl — auch enthusiastische User haben Bedenken
- Übergang: „Woher kommen diese Bedenken konkret?" → Folie 4
-->

---

# Drei Zahlen, die das Deck tragen

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:1.6rem;margin-top:2rem;" class="stagger">

<div class="panel panel-gold" style="text-align:center;padding:2rem 1.2rem;">
<div style="font-family:var(--font-display);font-size:3.6rem;font-weight:300;color:var(--gold);line-height:1;">17–33 %</div>
<div class="mono" style="font-size:0.6rem;letter-spacing:0.2em;color:var(--cream-50);margin-top:0.4rem;">HALLUZINATIONSRATE</div>
<p style="font-size:0.82rem;margin-top:0.8rem;">Auch spezialisierte Rechts-RAG-Tools (Lexis+ AI, Westlaw, Practical Law) halluzinieren — trotz „hallucination-free"-Versprechen.</p>
<div class="mono" style="font-size:0.55rem;color:var(--cream-50);margin-top:0.6rem;"><SourceBadge short="Magesh et al., 2025" full="Magesh, V. et al. (2025). Hallucination-Free? Assessing the Reliability of Leading AI Legal Research Tools. Journal of Empirical Legal Studies. S. 1 (Abstract), S. 9 (Abschnitt 6.1)." /></div>
</div>

<div class="panel" style="text-align:center;padding:2rem 1.2rem;">
<div style="font-family:var(--font-display);font-size:3.6rem;font-weight:300;color:var(--gold);line-height:1;">§&nbsp;823</div>
<div class="mono" style="font-size:0.6rem;letter-spacing:0.2em;color:var(--cream-50);margin-top:0.4rem;">BGB ABS. 1</div>
<p style="font-size:0.82rem;margin-top:0.8rem;">Wer fahrlässig unverifizierte KI-Ausgaben übernimmt und einem Dritten Schaden zufügt, haftet persönlich. Die Verantwortung bleibt beim Menschen.</p>
<div class="mono" style="font-size:0.55rem;color:var(--cream-50);margin-top:0.6rem;">Deliktische Grundnorm</div>
</div>

<div class="panel" style="text-align:center;padding:2rem 1.2rem;">
<div style="font-family:var(--font-display);font-size:3.6rem;font-weight:300;color:var(--gold);line-height:1;">09.12.<br/>2026</div>
<div class="mono" style="font-size:0.6rem;letter-spacing:0.2em;color:var(--cream-50);margin-top:0.4rem;">UMSETZUNGSFRIST</div>
<p style="font-size:0.82rem;margin-top:0.8rem;">Ab diesem Datum erfasst die neue ProdHaftRL Software und KI als Produkt — verschuldensunabhängige Haftung droht.</p>
<div class="mono" style="font-size:0.55rem;color:var(--cream-50);margin-top:0.6rem;"><SourceBadge short="RL 2024/2853 Art. 22" full="Richtlinie (EU) 2024/2853 des Europäischen Parlaments und des Rates vom 23. Oktober 2024 über die Haftung für fehlerhafte Produkte, Art. 22 Abs. 1." /></div>
</div>

</div>

<!--
Sprechleitfaden · 60 s
- Ankerzahl 1: 17–33% sind die Stanford-RegLab-Zahlen (Magesh 2025), NICHT die 58% (die stammen aus Dahl 2024 für LLMs ohne RAG — wichtige Korrektur ggü. populärem Kurzzitat)
- Zahl 2: § 823 BGB als juristischer Anker — der Mensch bleibt verantwortlich
- Zahl 3: 9.12.2026 — alles was danach in Verkehr gebracht wird, fällt unter neue ProdHaftRL
- Übergang zur Taxonomie: „Aber was heißt Halluzination eigentlich präzise?"
-->

---

# Halluzinationen — eine <em style="font-style:italic;color:var(--gold);">Taxonomie</em>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1.2rem;" class="stagger">

<div class="panel">
<div class="kicker">① Intrinsisch (faithfulness)</div>
<p style="font-size:0.85rem;">Output <strong>widerspricht dem Input</strong>. Typisch bei Summarization.</p>
<p class="mono" style="font-size:0.7rem;color:var(--cream-50);">Input: „Einstein wurde in Ulm geboren." → Output: „in Berlin geboren." <SourceBadge short="Anh-Hoang et al., 2025" full="Anh-Hoang, D., Tran, V. & Nguyen, L.-M. (2025). Survey and analysis of hallucinations in large language models. Frontiers in AI, 8:1622292, S. 3." /></p>
</div>

<div class="panel">
<div class="kicker">② Extrinsisch (unverankerte Ergänzung)</div>
<p style="font-size:0.85rem;">Output fügt <strong>Information hinzu</strong>, die nicht im Kontext steht — nicht unmittelbar falsch, aber ungegroundet.</p>
<p class="mono" style="font-size:0.7rem;color:var(--cream-50);">Erfundener Kausalmechanismus in offener QA. <SourceBadge short="Anh-Hoang et al., 2025" full="Anh-Hoang et al. (2025), S. 3, Zeilen 148-151." /></p>
</div>

<div class="panel">
<div class="kicker">③ Faktisch (factualness)</div>
<p style="font-size:0.85rem;">Output widerspricht <strong>real-weltlichem Wissen</strong>, unabhängig vom Kontext.</p>
<p class="mono" style="font-size:0.7rem;color:var(--cream-50);">„Hauptstadt Kanadas: Toronto." <SourceBadge short="Li et al., 2024" full="Li, Y., Sheng, D., Zhou, Z. & Wu, Y. (2024). AI hallucination: towards a comprehensive classification of distorted information in AIGC. Humanities and Social Sciences Communications, 11:1278, S. 2." /></p>
</div>

<div class="panel">
<div class="kicker">④ Logisch / misgrounded</div>
<p style="font-size:0.85rem;">Syntax korrekt, <strong>Schlussfolgerung widersprüchlich</strong> — oder Zitation existiert, stützt die Aussage aber nicht.</p>
<p class="mono" style="font-size:0.7rem;color:var(--cream-50);">Die gefährlichste Klasse in juristischen Kontexten. <SourceBadge short="Magesh et al., 2025" full="Magesh et al. (2025). Abschnitt 4.3, S. 5–6." /></p>
</div>

</div>

<p style="margin-top:1.2rem;font-size:0.85rem;color:var(--cream-70);font-family:var(--font-display);font-style:italic;">
Shao (2025) verdichtet die Typen auf zwei Kernfehler: <strong>faithfulness errors</strong> (Widerspruch zu Input) und <strong>factualness errors</strong> (Widerspruch zu Weltwissen). <SourceBadge short="Shao, 2025" full="Shao, A. (2025). Beyond Misinformation: A Conceptual Framework for Studying AI Hallucinations in (Science) Communication. arXiv:2504.13777v1, S. 5–6." />
</p>

<!--
Sprechleitfaden · 60 s
- Vier Kategorien: intrinsisch/extrinsisch/faktisch/logisch — Zuhörer müssen die Unterscheidung nicht auswendig können
- Kernbotschaft: NICHT jede Halluzination ist erfundene Quelle. Besonders gefährlich: misgrounded (4) — die Zitation existiert, stützt aber die Aussage nicht
- Shao-Kondensat als Brücke zur nächsten Folie (PM-Artefakte)
-->

---

# Wo Halluzinationen auf <em style="font-style:italic;color:var(--gold);">PM-Artefakte</em> treffen

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1rem;" class="stagger">

<div class="panel">
<div class="kicker">Risikoregister</div>
<p style="font-size:0.82rem;"><strong>Modus:</strong> erfundene Risiken oder falsch zitierte Standards (extrinsisch + misgrounded).</p>
<p style="font-size:0.82rem;color:var(--cream);"><strong>Konsequenz:</strong> Fehlpriorisierung; echte Risiken bleiben unbeachtet.</p>
<p class="mono" style="font-size:0.65rem;color:var(--cream-50);">Eigenschluss gestützt auf <SourceBadge short="Hughes et al., 2025" full="Hughes et al. (2025), S. 8: Warnung vor algorithmischer Verzerrung bei risk pattern recognition." /> · <SourceBadge short="Aramali et al., 2025" full="Aramali et al. (2025), S. 2: Qualität hängt von Datenlage und Nutzeranweisungen ab; Bedenken bei Root-Cause-Analyse." /></p>
</div>

<div class="panel">
<div class="kicker">Statusbericht</div>
<p style="font-size:0.82rem;"><strong>Modus:</strong> intrinsische Zahlen-/Meilenstein­verdrehung beim Zusammenfassen.</p>
<p style="font-size:0.82rem;color:var(--cream);"><strong>Konsequenz:</strong> falsche Lenkungsausschuss-Entscheidungen, Vertrauensverlust.</p>
<p class="mono" style="font-size:0.65rem;color:var(--cream-50);">Summarization-Fehlerklasse <SourceBadge short="Anh-Hoang et al., 2025" full="Anh-Hoang et al. (2025), S. 3: Intrinsische Halluzinationen treten häufig bei Summarization auf." /> · „subtle hallucinations" <SourceBadge short="Shao, 2025" full="Shao (2025), S. 5: Leichte Zahlenabweichungen sind besonders schwer zu entdecken." /></p>
</div>

<div class="panel">
<div class="kicker">Change Request</div>
<p style="font-size:0.82rem;"><strong>Modus:</strong> faktische + misgrounded — nicht existente Abhängigkeiten, unpassende Präzedenz-Dokumente.</p>
<p style="font-size:0.82rem;color:var(--cream);"><strong>Konsequenz:</strong> Genehmigungen auf falscher Faktenbasis; Budget-/Termin­überschreitung.</p>
<p class="mono" style="font-size:0.65rem;color:var(--cream-50);"><SourceBadge short="Magesh et al., 2025" full="Magesh et al. (2025), S. 6: Misgrounded errors sind gefährlicher als erfundene, weil schwerer zu entdecken." /> · <SourceBadge short="Felicetti et al., 2024" full="Felicetti et al. (2024): Unfaithful appropriation von GenAI-Tools." /></p>
</div>

<div class="panel" style="border-color:var(--rust);">
<div class="kicker" style="color:var(--rust);">Stakeholder-Kommunikation</div>
<p style="font-size:0.82rem;"><strong>Modus:</strong> plausibel-ausgeschmückte Zusagen (Air-Canada-Muster).</p>
<p style="font-size:0.82rem;color:var(--cream);"><strong>Konsequenz:</strong> konkrete Haftung — <em>Moffatt v. Air Canada</em> (2024): Unternehmen haftet für Chatbot-Falschauskunft.</p>
<p class="mono" style="font-size:0.65rem;color:var(--cream-50);"><SourceBadge short="Shao, 2025" full="Shao (2025), S. 2: Air Canada chatbot liability precedent." /></p>
</div>

</div>

<!--
Sprechleitfaden · 70 s
- Transparenz: „In der Fachliteratur sind diese PM-Artefakte nicht direkt durchdekliniert — wir leiten ab." Das steht auch so auf der Folie (Eigenschluss-Hinweis)
- Pointe Stakeholder-Kommunikation: Moffatt v. Air Canada ist ein reales Urteil — das ist nicht mehr Theorie
- Überleitung: „Welcher Rechtsrahmen greift nun genau?"
-->

---
layout: section
---

<div class="slidev-layout section-layout" style="display:flex;align-items:center;padding:4rem 6rem;">
  <div class="section-inner stagger" style="max-width:70ch;">
    <div class="section-label">Teil II · Folien 8–14</div>
    <h1 class="section-title" style="font-size:clamp(2.8rem,6vw,4.4rem);font-weight:300;font-style:italic;line-height:1.05;margin:1rem 0;">Der <em style="font-style:normal;color:var(--gold);">Rechtsrahmen</em></h1>
    <hr class="hairline" />
    <p style="font-family:var(--font-display);font-size:1.1rem;font-weight:300;font-style:italic;color:var(--cream-70);max-width:55ch;margin-top:0.8rem;">AI Act, Produkthaftungsrichtlinie, § 823 BGB — und die Frage, wie sich Haftung auf vier Rollen im Projekt verteilt.</p>
  </div>
</div>

<!--
Sprechleitfaden · 20 s
- Kurze Überleitung, keine inhaltlichen Aussagen
- Dieser Block ist der umfangreichste — inhaltlich die Mitte des Vortrags
-->

---

# Regulatorischer Zeithorizont <span style="color:var(--gold);">2024 – 2027</span>

<RegTimeline />

<div style="margin-top:1rem;font-size:0.82rem;color:var(--cream-70);font-family:var(--font-display);font-style:italic;max-width:78ch;">
Drei regulatorische Stränge laufen parallel: AI Act in gestaffelter Geltung, neue ProdHaftRL, nationale Umsetzung. Für Projekte, die jetzt starten, endet das Fenster „alte Rechtslage" in weniger als neun Monaten.
</div>

<!--
Sprechleitfaden · 75 s
- Die Timeline visualisiert 7 Events (5 AI-Act-Phasen + 2 ProdHaftRL-Etappen)
- Roter „Heute"-Marker bei 18.04.2026 — Verbote und GPAI-Regeln schon live, Hochrisiko-Anhang III in 3,5 Monaten
- ProdHaftRL-Umsetzungsfrist 9.12.2026: Deutschland hat noch nicht umgesetzt (Stand April 2026) — Zeitdruck beim BMJ
- Quellen: EUR-Lex, Art. 113 AI Act und Art. 22 ProdHaftRL
-->

---

# EU AI Act — drei zentrale Artikel für das PM

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;margin-top:1.2rem;" class="stagger">

<div class="panel">
<div class="kicker">Art. 4 — KI-Kompetenz</div>
<p style="font-size:0.82rem;">Anbieter <strong>und</strong> Betreiber müssen ein „ausreichendes Maß an KI-Kompetenz" ihres Personals sicherstellen. Maßstab: technische Kenntnisse, Ausbildung, Einsatzkontext.</p>
<p style="font-size:0.8rem;color:var(--cream);margin-top:0.5rem;"><strong>PM:</strong> Schulungs- und Kompetenznachweise dokumentieren — Unterlassen = struktureller Pflichtverstoß.</p>
</div>

<div class="panel">
<div class="kicker">Art. 14 — Human Oversight</div>
<p style="font-size:0.82rem;">Hochrisiko-KI muss während der Nutzung wirksam beaufsichtigt werden können. Aufsichtsperson muss Grenzen verstehen, Ausgaben interpretieren, abbrechen und überstimmen können.</p>
<p style="font-size:0.8rem;color:var(--cream);margin-top:0.5rem;"><strong>PM:</strong> benannte, qualifizierte Aufsichtsperson mit Abbruchbefugnis pro Use-Case.</p>
</div>

<div class="panel">
<div class="kicker">Anhang III — Hochrisiko</div>
<p style="font-size:0.82rem;">Zweckbezogene Einstufung: HR, Bildung, Kreditvergabe, Strafverfolgung, Justiz u. a. <strong>Art. 25</strong>: Betreiber wird zum Anbieter, wenn er den Zweck ändert.</p>
<p style="font-size:0.8rem;color:var(--cream);margin-top:0.5rem;"><strong>PM:</strong> Use-Case-Klassifizierung <em>zu Projektbeginn</em>.</p>
</div>

</div>

<p class="mono" style="font-size:0.65rem;color:var(--cream-50);margin-top:1rem;">
Quellen: <SourceBadge short="VO (EU) 2024/1689, Art. 4, 14, 25, Anhang III" full="Verordnung (EU) 2024/1689 des Europäischen Parlaments und des Rates vom 13. Juni 2024, AI Act." /> · <SourceBadge short="Rodriguez de Las Heras Ballell, 2025, S. 9" full="Rodriguez de Las Heras Ballell (2025). Mapping generative AI rules and liability scenarios in the AI Act. Cambridge Forum on AI: Law and Governance, 1, e5. Art. 25 AI Act: Rollenwechsel Betreiber → Anbieter." />
</p>

<!--
Sprechleitfaden · 70 s
- Drei Artikel, nicht mehr — für PM die wichtigsten
- Art. 4 gilt schon (seit 2.2.2025): Kompetenznachweise sind ab sofort Pflicht
- Art. 14 setzt die Rolle der Projektleitung formal als Human-Oversight-Verantwortliche
- Art. 25 ist der „Flip-Moment": wenn Beratung ChatGPT-Enterprise für HR-Ranking zweckentfremdet, wird sie zum Anbieter mit vollen Pflichten
-->

---

# Neue ProdHaftRL — <em style="font-style:italic;color:var(--gold);">Software ist jetzt Produkt</em>

<div style="display:grid;grid-template-columns:1fr 1.2fr;gap:1.6rem;margin-top:1rem;" class="stagger">

<div>
<div class="kicker">Alte Rechtslage (ProdHaftG 1989)</div>
<ul style="font-size:0.85rem;list-style:none;padding:0;">
<li style="margin:0.5rem 0;padding-left:1rem;border-left:2px solid var(--gold-muted);">§ 2 ProdHaftG: Produkt = bewegliche Sache + Elektrizität</li>
<li style="margin:0.5rem 0;padding-left:1rem;border-left:2px solid var(--gold-muted);">Software nicht ausdrücklich erfasst — <strong>umstritten</strong> bei KI</li>
<li style="margin:0.5rem 0;padding-left:1rem;border-left:2px solid var(--gold-muted);">Nur hardware-eingebettete KI sicher Produkt</li>
</ul>
</div>

<div class="panel panel-gold">
<div class="kicker">Neue Rechtslage (RL 2024/2853)</div>
<ul style="font-size:0.85rem;list-style:none;padding:0;">
<li style="margin:0.5rem 0;">🟡 <strong>Art. 4 Nr. 1 S. 2:</strong> Software ist Produkt</li>
<li style="margin:0.5rem 0;">🟡 <strong>ErwG 3:</strong> KI explizit erfasst</li>
<li style="margin:0.5rem 0;">🟡 <strong>Art. 4 Abs. 3, 4:</strong> auch „related services" (Cloud, Datenlieferdienste) als Komponente</li>
<li style="margin:0.5rem 0;">🟡 <strong>Art. 8 Abs. 2:</strong> Integrator = „refurbisher" → Haftungsübernahme möglich</li>
</ul>
</div>

</div>

<div class="panel" style="margin-top:1rem;background:rgba(139,58,58,0.08);border-color:var(--rust);">
<div class="kicker" style="color:var(--rust);">Beweiserleichterungen — Art. 10 ProdHaftRL</div>
<p style="font-size:0.82rem;margin:0.3rem 0;">① Fehlerhaftigkeit wird <strong>vermutet</strong> bei verschwiegenen Informationen / nicht eingehaltenen Sicherheitsstandards / offensichtlichem Versagen bei normaler Nutzung.</p>
<p style="font-size:0.82rem;margin:0.3rem 0;">② Kausalzusammenhang wird <strong>vermutet</strong>, wenn Fehler offensichtlich und Schaden typisch ist (Abs. 3).</p>
<p style="font-size:0.82rem;margin:0.3rem 0;">③ In „besonders komplizierten Fällen" werden <strong>beide</strong> vermutet, wenn Kläger Wahrscheinlichkeit nachweist (Abs. 4).</p>
</div>

<p class="mono" style="font-size:0.65rem;color:var(--cream-50);margin-top:0.8rem;">
Quellen: <SourceBadge short="WD-7-004-25, S. 9–12" full="Wissenschaftliche Dienste des Bundestags (2025). Sachstand WD 7 - 3000 - 004/25, S. 9–12 (Kap. 4.2 Herstellerhaftung)." /> · <SourceBadge short="RL (EU) 2024/2853, Art. 4, 8, 10" full="Richtlinie (EU) 2024/2853 vom 23. Oktober 2024 über die Haftung für fehlerhafte Produkte." />
</p>

<!--
Sprechleitfaden · 60 s
- Kernbotschaft: Paradigmenwechsel — Software/KI ist jetzt Produkt im Sinne der ProdHaftRL
- Die dreifache Beweisvermutung (Art. 10 Abs. 3, 4) ist die eigentliche Systemveränderung: Beweislast kippt strukturell zulasten des Herstellers
- „Refurbisher"-Status: Wer eine KI substantiell modifiziert (Finetuning!), kann selbst zum Hersteller werden
-->

---

# § 823 BGB + LG Kiel — <em style="font-style:italic;color:var(--gold);">„Zu eigen gemacht"</em>

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1.6rem;margin-top:1rem;" class="stagger">

<div>
<div class="kicker">LG Kiel, 29.02.2024 · Az. 6 O 151/23</div>
<p style="font-size:0.9rem;margin-top:0.6rem;">
Der Plattformbetreiber einer KI-gestützten Suchmaschine haftet <strong>als Verwender der Software</strong> für KI-generierte Falschinformationen — nach allgemeinen deliktischen Grundsätzen (§ 823 Abs. 1 BGB).
</p>
<p class="pull-quote" style="font-size:1.05rem;margin-top:0.8rem;">
„Der Betreiber haftet auch für von Dritten eingestellte falsche Informationen, wenn er sie sich aus Nutzersicht <em>zu eigen macht</em> und erkennbar die inhaltliche Verantwortung übernimmt."
</p>
<p class="mono" style="font-size:0.65rem;color:var(--cream-50);"><SourceBadge short="LG Kiel, 2024" full="LG Kiel, Urteil vom 29.02.2024 – 6 O 151/23, GRUR-RS 2024, 29599, Rn. 36." /> · ergänzend <SourceBadge short="WD-7-004-25, S. 8–9" full="Wissenschaftliche Dienste des Bundestags (2025). Sachstand WD 7 - 3000 - 004/25, S. 8–9 (Kap. 4.1 Haftung des Anwenders)." /></p>
</div>

<div class="panel">
<div class="kicker">PM-Transfer: Wann „zu eigen"?</div>
<ul style="font-size:0.85rem;list-style:none;padding:0;">
<li style="margin:0.5rem 0;">— KI-Texte <strong>unverändert</strong> in Statusbericht, Steering-Vorlage, Kunden-Deliverable</li>
<li style="margin:0.5rem 0;">— Veröffentlichung im eigenen Namen (Chatbot, automatisierte Kundenantwort)</li>
<li style="margin:0.5rem 0;">— erkennbare Verantwortungsübernahme („<em>Unsere</em> Risiko-Analyse zeigt …")</li>
<li style="margin:0.5rem 0;">— auch ohne explizite Prüfung oder Kennzeichnung</li>
</ul>
<hr class="hairline" style="margin:0.8rem 0;" />
<p style="font-size:0.8rem;color:var(--cream);">Ergänzend: § 630h BGB — Beweislastumkehr im Arzthaftungsrecht, analog auf KI-gestützte Diagnose anwendbar.</p>
</div>

</div>

<!--
Sprechleitfaden · 70 s
- LG Kiel ist das erste deutsche Urteil, das KI-Haftung konkret adjudiziert
- „Zu eigen machen" ist der zentrale Begriff — subtil, aber folgenreich
- Die vier PM-Konstellationen rechts decken 90% der Projektalltag-Fälle ab
- § 630h als Klammer: medizinische Projekte haben eine noch schärfere Beweislastregel
-->

---

# Vier Rollen, <em style="font-style:italic;color:var(--gold);">eine Wertschöpfungskette</em>

<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem;margin-top:1.5rem;" class="stagger">

<div class="panel" style="text-align:center;">
<div class="mono" style="color:var(--gold);font-size:0.7rem;letter-spacing:0.2em;">01</div>
<h3 style="font-size:1rem;margin:0.4rem 0;">Hersteller</h3>
<p style="font-size:0.78rem;color:var(--cream-70);">Anbieter des KI-Systems (z. B. OpenAI, Anthropic). Eintrittspunkt in die Haftungskette — ProdHaftRL-Gefährdungshaftung + Produzentenhaftung mit Beweislastumkehr.</p>
</div>

<div class="panel" style="text-align:center;">
<div class="mono" style="color:var(--gold);font-size:0.7rem;letter-spacing:0.2em;">02</div>
<h3 style="font-size:1rem;margin:0.4rem 0;">Betreiber</h3>
<p style="font-size:0.78rem;color:var(--cream-70);">Einsetzendes Unternehmen. Deliktische + vertragliche Haftung, besonders bei „zu eigen gemachten" Ausgaben (LG Kiel). AI-Act-Pflichten nach Art. 26.</p>
</div>

<div class="panel" style="text-align:center;">
<div class="mono" style="color:var(--gold);font-size:0.7rem;letter-spacing:0.2em;">03</div>
<h3 style="font-size:1rem;margin:0.4rem 0;">Anwender</h3>
<p style="font-size:0.78rem;color:var(--cream-70);">Individueller Mitarbeiter. Persönlich verantwortlich für im eigenen Namen verwendete KI-Inhalte; Prüfpflicht gegen Halluzinationen und Bias.</p>
</div>

<div class="panel panel-gold" style="text-align:center;">
<div class="mono" style="color:var(--gold);font-size:0.7rem;letter-spacing:0.2em;">04</div>
<h3 style="font-size:1rem;margin:0.4rem 0;">Projektleitung</h3>
<p style="font-size:0.78rem;color:var(--cream-70);">Auswahl-, Instruktions- und Überwachungspflichten. Organisiert Human Oversight (Art. 14 AI Act) und ist <strong>Adressat</strong> von Compliance-Rückfragen.</p>
</div>

</div>

<p style="margin-top:1.8rem;font-family:var(--font-display);font-style:italic;text-align:center;color:var(--cream);">
→ Welche Rechtsgrundlage, welche Rechtsprechung, welche Beweislast trifft wen?
</p>

<!--
Sprechleitfaden · 45 s
- Vier Rollen benennen, nicht durchdeklinieren — das macht die Matrix auf Folie 13
- Visuell die Kette betonen: 01 → 02 → 03 → 04
- Projektleitung bewusst am Ende und Gold hervorgehoben — die eigentliche Zielgruppe des Decks
-->

---

# Die <em style="font-style:italic;color:var(--gold);">Haftungsmatrix</em> — klicken Sie eine Rolle

<HaftungsMatrix />

<!--
Sprechleitfaden · 150 s — HERZSTÜCK DES DECKS
- Einstieg: „Wählen Sie eine Rolle aus — wir gehen sie durch."
- Empfohlene Reihenfolge beim Vortrag: Projektleitung (04) zuerst — das ist die Zielgruppe; dann Hersteller (01) für Kontrast
- Pro Rolle die 4 Dimensionen kurz anreißen, ABER nicht vorlesen — die Folie ist Nachlesestoff. Pointe pro Rolle:
  - Hersteller: Beweislastumkehr ist strukturell
  - Betreiber: LG Kiel schlägt hier direkt ein
  - Anwender: AI Act Art. 4 adressiert den Betreiber, nicht den Mitarbeiter — ABER der Mitarbeiter haftet persönlich deliktisch
  - Projektleitung: Dokumentationsmängel wirken haftungsverschärfend (Parallele § 630h)
- Bei Fragen: Quellenangaben sind unten eingeblendet
- Diese Folie rechtfertigt die 150 s — nicht beschleunigen
-->

---

# Regulierte Industrien — <em style="font-style:italic;color:var(--gold);">Zusatzpflichten</em>

<div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;margin-top:1rem;" class="stagger">

<div class="panel">
<div class="kicker">Financial Services</div>
<p style="font-size:0.82rem;">BaFin/Bundesbank/EZB-Aufsicht vergrößert den Adressatenkreis. Know-Your-Prinzipien (Customer, Transaction, Process) strukturieren Compliance-Datenarchitektur bei KI-Onboarding und Geldwäsche-Screening. <SourceBadge short="Bitkom, 2017, S. 2–5" full="Bitkom e.V. (2017). IT-gestützte Compliance im Finanzsektor — Konzept und Vorgehensweise, S. 2–5." /></p>
<p style="font-size:0.75rem;color:var(--cream-50);margin-top:0.4rem;font-style:italic;">Sektoral ergänzend (nicht in Primärquelle): MaRisk AT 4.3.1, BAIT, DORA (seit 17.01.2025).</p>
</div>

<div class="panel">
<div class="kicker">Health Care</div>
<p style="font-size:0.82rem;">§ 630h Abs. 1 BGB (Beweislastumkehr bei Behandlungsfehlern) ist auf KI-gestützte Diagnosesysteme anwendbar. Halluzinationen im medizinischen Kontext können zu „rechtlichen Nachteilen" führen. <SourceBadge short="WD-7-004-25, S. 8–9, 13" full="Wissenschaftliche Dienste (2025), S. 8–9, 13." /></p>
<p style="font-size:0.75rem;color:var(--cream-50);margin-top:0.4rem;font-style:italic;">Sektoral ergänzend: MDR (VO 2017/745) für Software-as-Medical-Device.</p>
</div>

<div class="panel">
<div class="kicker">Öffentliche Hand</div>
<p style="font-size:0.82rem;">BMI-BeKI listet 179 KI-Systeme der Bundesverwaltung (Stand 02/2025). BMJ-Digitalisierungsinitiative für die Justiz: Sprachmodell, Aktenstrukturierung, Massenverfahren-Assistenz. BSI teilt Risiken in 3 Kategorien. <SourceBadge short="WD-7-004-25, S. 4–8, 14–15" full="Wissenschaftliche Dienste (2025), S. 4–8, 14–15." /></p>
</div>

</div>

<p style="margin-top:1rem;font-size:0.82rem;color:var(--cream-70);font-family:var(--font-display);font-style:italic;">
Drei Sektoren, drei Logiken — eine gemeinsame Forderung: <strong>Dokumentieren, was KI tut.</strong>
</p>

<!--
Sprechleitfaden · 65 s
- Transparent sein: MaRisk/BAIT/DORA sind sektorales Allgemeinwissen, nicht aus den Primärquellen der heutigen Lektüre belegt — deshalb in kursiv und klar gekennzeichnet
- § 630h ist der stärkste Einzelpunkt: medizinische Projekte haben eine schon heute scharfe Beweislastregel
- Öffentliche Hand als dritter Anker: der Staat ist längst KI-Anwender — 179 Systeme
-->

---
layout: section
---

<div class="slidev-layout section-layout" style="display:flex;align-items:center;padding:4rem 6rem;">
  <div class="section-inner stagger" style="max-width:70ch;">
    <div class="section-label">Teil III · Folien 16–19</div>
    <h1 class="section-title" style="font-size:clamp(2.8rem,6vw,4.4rem);font-weight:300;font-style:italic;line-height:1.05;margin:1rem 0;">Die <em style="font-style:normal;color:var(--gold);">Praxis</em></h1>
    <hr class="hairline" />
    <p style="font-family:var(--font-display);font-size:1.1rem;font-weight:300;font-style:italic;color:var(--cream-70);max-width:55ch;margin-top:0.8rem;">Governance, vier Praktiken, fünf Empfehlungen — so wird aus der Rechtslage Projektalltag.</p>
  </div>
</div>

<!--
Sprechleitfaden · 15 s
- Schneller Übergang
- Deutlich machen: ab hier konkrete Handlungsebene
-->

---

# NIST AI RMF × Projektrollen

<div style="display:grid;grid-template-columns:1fr 1.3fr;gap:1.5rem;margin-top:1rem;" class="stagger">

<div>
<div class="kicker">Die vier Kernfunktionen</div>
<ul style="list-style:none;padding:0;font-size:0.85rem;">
<li style="margin:0.6rem 0;padding:0.5rem 0.8rem;border-left:2px solid var(--gold);"><strong style="color:var(--gold);">GOVERN</strong> — Risk-Management-Kultur; quer zu allem.</li>
<li style="margin:0.6rem 0;padding:0.5rem 0.8rem;border-left:2px solid var(--gold-muted);"><strong>MAP</strong> — Kontext und Risiken eines KI-Systems identifizieren.</li>
<li style="margin:0.6rem 0;padding:0.5rem 0.8rem;border-left:2px solid var(--gold-muted);"><strong>MEASURE</strong> — quantitativ/qualitativ analysieren, monitoren.</li>
<li style="margin:0.6rem 0;padding:0.5rem 0.8rem;border-left:2px solid var(--gold-muted);"><strong>MANAGE</strong> — Ressourcen zuweisen, Incidents behandeln.</li>
</ul>
<p class="mono" style="font-size:0.65rem;color:var(--cream-50);"><SourceBadge short="NIST AI 100-1, S. 20–33" full="NIST (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0), NIST AI 100-1, Abschnitt 5, S. 20–33." /></p>
</div>

<div class="panel">
<div class="kicker">Übersetzung in PM-Rollen</div>
<div style="display:grid;grid-template-columns:auto 1fr;gap:0.4rem 0.8rem;font-size:0.78rem;">
<strong style="color:var(--gold);">Govern</strong>
<span>PAG + PLA / PMO — KI-Leitlinie und Freigabeprozess in Projektcharta</span>
<strong style="color:var(--gold);">Map</strong>
<span>PL + Risk Owner — KI-Risiken ins Risikoregister</span>
<strong style="color:var(--gold);">Measure</strong>
<span>PMO / Data-Steward — KPIs für KI-Output, TEVV-Praktiken</span>
<strong style="color:var(--gold);">Manage</strong>
<span>PL operativ, PLA bei Eskalation — HITL, Incident-Response</span>
</div>
<p style="font-size:0.7rem;color:var(--cream-50);font-style:italic;margin-top:0.6rem;">Synthese aus NIST + WINGS-Modulkapiteln (Rollen K1 / K4).</p>
</div>

</div>

<!--
Sprechleitfaden · 60 s
- NIST RMF ist freiwillig, aber inzwischen De-facto-Standard; AI Act verweist implizit darauf
- Govern ist cross-cutting — deshalb quer gelegt, nicht sequenziell
- Rechte Tabelle: die Zuordnung ist UNSERE Synthese aus Modulkapiteln. Wichtig für LL.M.-Prüfenden: Synthese vs. Zitat sauber trennen
-->

---

# Vier konkrete PM-Praktiken

<div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-top:1rem;" class="stagger">

<div class="panel">
<div class="kicker">① Human-in-the-Loop</div>
<p style="font-size:0.82rem;">Innerhalb der „jagged frontier" +12,2 % Output und –25,1 % Zeit; <strong>außerhalb –19 % korrekte Lösungen</strong>. „Falling asleep at the wheel"-Effekt durch überhöhtes Vertrauen.</p>
<p style="font-size:0.8rem;color:var(--cream);margin-top:0.4rem;"><strong>Praktik:</strong> Definierte Entscheidungspunkte, an denen ein Mensch KI-Output freigibt.</p>
<p class="mono" style="font-size:0.65rem;color:var(--cream-50);"><SourceBadge short="Dell'Acqua et al., 2026" full="Dell'Acqua, F. et al. (2026). Navigating the Jagged Technological Frontier. Organization Science (Articles in Advance), S. 1 + S. 18." /> (n = 758)</p>
</div>

<div class="panel">
<div class="kicker">② Dokumentierte Freigabe</div>
<p style="font-size:0.82rem;">„It is important to always check whether the information provided by AI is trustworthy and correct." Ohne Freigabeprozess Verlust von „control and oversight over processes and progress".</p>
<p style="font-size:0.8rem;color:var(--cream);margin-top:0.4rem;"><strong>Praktik:</strong> Freigabe analog CRF-Prozess — Datum, Prüfer, Prüfumfang, Ergebnis.</p>
<p class="mono" style="font-size:0.65rem;color:var(--cream-50);"><SourceBadge short="Almeida et al., 2025" full="Almeida, P. M., Fernandes, G. & Santos, J. M. R. C. A. (2025). Artificial intelligence tools for project management. Project Leadership and Society, 6, 100196, S. 3." /> · Modul K3 (CRF)</p>
</div>

<div class="panel">
<div class="kicker">③ Versionierung</div>
<p style="font-size:0.82rem;">KI-Ausgaben und menschliche Bearbeitungsstände als <strong>separate Versionen</strong> mit Zeitstempel, Autorenkennzeichnung (Mensch vs. Modellversion) und Ausgangs-Prompt ablegen.</p>
<p style="font-size:0.8rem;color:var(--cream);margin-top:0.4rem;"><strong>Praktik:</strong> Sprint-Inkrement-Logik + Arbeitspaket-Dokumentation auf KI-Artefakte übertragen.</p>
<p class="mono" style="font-size:0.65rem;color:var(--cream-50);">Modul K6 (Sprint Review) · K2 (Arbeitspaket). <em>Prompt-Versionierung: Synthese.</em></p>
</div>

<div class="panel">
<div class="kicker">④ Vier-Augen-Prinzip</div>
<p style="font-size:0.82rem;">Kritische KI-Ausgaben (Zahlen, Zitate, rechtliche Aussagen, Priorisierungen) werden durch <strong>eine zweite qualifizierte Person</strong> gegengeprüft, bevor sie in Entscheidungen einfließen.</p>
<p style="font-size:0.8rem;color:var(--cream);margin-top:0.4rem;"><strong>Praktik:</strong> Fachstandard aus Compliance/Audit — begründet durch Frontier-Risiko (Dell'Acqua 2026).</p>
<p class="mono" style="font-size:0.65rem;color:var(--cream-50);">Anwendung auf KI-Output: Synthese, gestützt auf <SourceBadge short="Dell'Acqua et al., 2026" full="Dell'Acqua et al. (2026), S. 1 und S. 18: empirische Evidenz des Frontier-Risikos." /> und <SourceBadge short="Bernert et al., 2024" full="Bernert, C., Scheurer, S. & Wehnes, H. (Hrsg.) (2024). KI in der Projektwirtschaft 2. UVK/Narr Francke." />.</p>
</div>

</div>

<!--
Sprechleitfaden · 70 s
- Jede Praktik mit einer Quantifizierung oder einem klaren Anker: +12,2%/-25,1%/-19% für HITL ist die stärkste Zahl im Deck
- Versionierung und Vier-Augen sind teilweise Synthese — ehrlich benennen
- Keine der vier Praktiken ist teuer oder neu — nur die Anwendung auf KI-Output ist neu
-->

---

# Fünf Empfehlungen für <em style="font-style:italic;color:var(--gold);">KI-einsetzende Projektleitungen</em>

<div style="display:flex;flex-direction:column;gap:0.6rem;margin-top:1rem;" class="stagger">

<div style="display:grid;grid-template-columns:auto 1fr auto;gap:1rem;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--gold-muted);">
<div class="mono" style="color:var(--gold);font-size:1.4rem;">01</div>
<div>
<strong style="color:var(--cream);">KI-Kompetenz-Briefing mit Nachweis</strong> verankern — <em>bevor</em> Teammitglieder KI-Werkzeuge nutzen.
<p style="font-size:0.72rem;color:var(--cream-70);margin:0.2rem 0 0;">Adressiert: unkritische Übernahme, Organisationsverschulden. <SourceBadge short="AI Act Art. 4" full="VO (EU) 2024/1689, Art. 4." /> · <SourceBadge short="NIST GOVERN 2.2" full="NIST (2023). AI RMF 1.0, S. 22, GOVERN 2.2." /></p>
</div>
<div class="mono" style="font-size:0.6rem;color:var(--cream-50);">PFLICHT</div>
</div>

<div style="display:grid;grid-template-columns:auto 1fr auto;gap:1rem;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--gold-muted);">
<div class="mono" style="color:var(--gold);font-size:1.4rem;">02</div>
<div>
<strong style="color:var(--cream);">Freigabepfad mit benanntem Reviewer</strong> für jeden KI-Use-Case — Review-Tiefe und Dokumentation geregelt.
<p style="font-size:0.72rem;color:var(--cream-70);margin:0.2rem 0 0;">Adressiert: Halluzinationen, Haftungslücke bei undokumentierter Übernahme. <SourceBadge short="Dell'Acqua et al., 2026" full="Dell'Acqua et al. (2026), S. 1, 18." /> · Modul K3 (CRF)</p>
</div>
<div class="mono" style="font-size:0.6rem;color:var(--cream-50);">PROZESS</div>
</div>

<div style="display:grid;grid-template-columns:auto 1fr auto;gap:1rem;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--gold-muted);">
<div class="mono" style="color:var(--gold);font-size:1.4rem;">03</div>
<div>
<strong style="color:var(--cream);">Versionierte Trennung</strong> von KI- und Mensch-Erzeugnissen im Artefaktmanagement (PSP, Sprint).
<p style="font-size:0.72rem;color:var(--cream-70);margin:0.2rem 0 0;">Adressiert: Urheber-/Haftungszurechnung, Nicht-Rekonstruierbarkeit bei regulatorischer Prüfung. <SourceBadge short="NIST MEASURE, S. 28" full="NIST (2023), S. 28, Abschnitt 5.3 MEASURE." /></p>
</div>
<div class="mono" style="font-size:0.6rem;color:var(--cream-50);">ARTEFAKT</div>
</div>

<div style="display:grid;grid-template-columns:auto 1fr auto;gap:1rem;align-items:center;padding:0.5rem 0;border-bottom:1px solid var(--gold-muted);">
<div class="mono" style="color:var(--gold);font-size:1.4rem;">04</div>
<div>
<strong style="color:var(--cream);">NIST-RMF-Mapping in die Projektcharta</strong> — wer nimmt Govern / Map / Measure / Manage wahr?
<p style="font-size:0.72rem;color:var(--cream-70);margin:0.2rem 0 0;">Adressiert: unklare Verantwortlichkeit, ad-hoc-Governance unter Zeitdruck. <SourceBadge short="NIST GOVERN 1.1 / 2.1" full="NIST (2023), S. 22, GOVERN 1.1 und 2.1." /></p>
</div>
<div class="mono" style="font-size:0.6rem;color:var(--cream-50);">STRUKTUR</div>
</div>

<div style="display:grid;grid-template-columns:auto 1fr auto;gap:1rem;align-items:center;padding:0.5rem 0;">
<div class="mono" style="color:var(--gold);font-size:1.4rem;">05</div>
<div>
<strong style="color:var(--cream);">Branchenspezifische Zusatzpflichten</strong> im Projekt-Setup prüfen — MaRisk/BAIT, MDR/IVDR, DSGVO je nach Sektor.
<p style="font-size:0.72rem;color:var(--cream-70);margin:0.2rem 0 0;">Adressiert: nachträgliche Compliance-Lücken, Bußgeldrisiken, Aufsichtsfragen. <SourceBadge short="Bitkom, 2017, S. 2–4" full="Bitkom (2017). IT-gestützte Compliance im Finanzsektor, S. 2–4." /> · <SourceBadge short="NIST GOVERN 6" full="NIST (2023), S. 23, GOVERN 6." /></p>
</div>
<div class="mono" style="font-size:0.6rem;color:var(--cream-50);">SEKTOR</div>
</div>

</div>

<!--
Sprechleitfaden · 60 s
- Fünf Empfehlungen in 60 Sekunden — pro Empfehlung 10–12 Sekunden
- Struktur ist mnemotechnisch: PFLICHT → PROZESS → ARTEFAKT → STRUKTUR → SEKTOR
- Nicht vorlesen — Zuhörer können mitlesen, Vortrag pointiert auf die Risiken
-->

---

# Haftung wird <em style="font-style:italic;color:var(--gold);">neu verteilt</em>

<div style="max-width:68ch;margin-top:1.5rem;" class="stagger">

<p style="font-family:var(--font-display);font-size:1.4rem;font-weight:300;line-height:1.45;color:var(--cream);">
Die neue ProdHaftRL, der AI Act und die erste deutsche Rechtsprechung (LG Kiel) verschieben Haftung <strong>strukturell</strong> — weg von der individuellen Fahrlässigkeit, hin zu dokumentierter Governance.
</p>

<hr class="hairline" style="margin:1.5rem 0;" />

<p style="font-family:var(--font-display);font-style:italic;font-size:1.2rem;font-weight:300;line-height:1.5;color:var(--cream-70);">
Für Projektleitungen heißt das:
</p>

<ul style="font-size:1.05rem;list-style:none;padding:0;margin-top:0.6rem;">
<li style="margin:0.5rem 0;padding-left:1rem;border-left:2px solid var(--gold);">Wer KI einsetzt, ohne Kompetenz, Freigabe, Versionierung und Vier-Augen-Prinzip zu dokumentieren, liefert der Gegenseite die Beweisführung frei Haus.</li>
<li style="margin:0.5rem 0;padding-left:1rem;border-left:2px solid var(--gold);">Wer KI-Governance in die Projektcharta schreibt, macht sie <strong>zur Chefsache</strong> — und schafft die einzige belastbare Verteidigung.</li>
</ul>

<p style="font-family:var(--font-display);font-style:italic;color:var(--gold);font-size:1.1rem;margin-top:1.2rem;text-align:right;">
— Vielen Dank. Fragen?
</p>

</div>

<!--
Sprechleitfaden · 45 s
- These vom Anfang auflösen
- Zwei Sätze als Take-away: ohne Dokumentation — mit Dokumentation
- Dank + Übergang zur Diskussion
- Quellenfolie folgt, darf aber knapp bleiben
-->

---
layout: default
---

# Quellen

<div style="font-size:0.72rem;line-height:1.45;column-count:2;column-gap:2rem;margin-top:1rem;font-family:var(--font-mono);color:var(--cream-70);">

<div style="break-inside:avoid;margin-bottom:1rem;">
<strong style="color:var(--gold);font-family:var(--font-display);font-style:italic;font-weight:400;">Rechtsprechung &amp; Gesetze</strong><br/>
<div style="margin:0.3rem 0;">LG Kiel, Urteil v. 29.02.2024 – 6 O 151/23, GRUR-RS 2024, 29599.</div>
<div style="margin:0.3rem 0;">VO (EU) 2024/1689 v. 13.06.2024 (AI Act).</div>
<div style="margin:0.3rem 0;">RL (EU) 2024/2853 v. 23.10.2024 (ProdHaftRL).</div>
<div style="margin:0.3rem 0;">ProdHaftG vom 15.12.1989 i. d. F. v. 10.08.2021.</div>
<div style="margin:0.3rem 0;">BGB §§ 823, 831, 630h.</div>
</div>

<div style="break-inside:avoid;margin-bottom:1rem;">
<strong style="color:var(--gold);font-family:var(--font-display);font-style:italic;font-weight:400;">Studien &amp; Reports</strong><br/>
<div style="margin:0.3rem 0;">Wissenschaftliche Dienste des Bundestags (2025). Sachstand WD 7 - 3000 - 004/25.</div>
<div style="margin:0.3rem 0;">NIST (2023). AI Risk Management Framework 1.0 (AI 100-1).</div>
<div style="margin:0.3rem 0;">PwC Deutschland (2025). AI Jobs Barometer.</div>
<div style="margin:0.3rem 0;">Project Management Institute (2024). First Movers' Advantage (GenAI Adoption Report).</div>
<div style="margin:0.3rem 0;">Project Management Institute (2024). Pushing the Limits.</div>
<div style="margin:0.3rem 0;">Bitkom (2017). IT-gestützte Compliance im Finanzsektor.</div>
</div>

<div style="break-inside:avoid;">
<strong style="color:var(--gold);font-family:var(--font-display);font-style:italic;font-weight:400;">Wissenschaft &amp; Lehrmaterial</strong><br/>
<div style="margin:0.3rem 0;">Magesh, V. et al. (2025). Hallucination-Free? J. Empirical Legal Studies.</div>
<div style="margin:0.3rem 0;">Dell'Acqua, F. et al. (2026). Navigating the Jagged Technological Frontier. Organization Science.</div>
<div style="margin:0.3rem 0;">Almeida, P. M. et al. (2025). AI tools for PM. Project Leadership and Society.</div>
<div style="margin:0.3rem 0;">Aramali, V. et al. (2025). Generative AI in PM. Project Leadership and Society.</div>
<div style="margin:0.3rem 0;">Felicetti, A. M. et al. (2024). AI and project management. J. Innovation &amp; Knowledge.</div>
<div style="margin:0.3rem 0;">Hettrich, B., Krings, N. &amp; Kock, A. (2025). Bridging the Expertise Gap. Creativity and Innovation Management.</div>
<div style="margin:0.3rem 0;">Hughes, L. et al. (2025). Impact of AI on PM. J. Innovation &amp; Knowledge.</div>
<div style="margin:0.3rem 0;">Anh-Hoang, D., Tran, V. &amp; Nguyen, L.-M. (2025). Survey of hallucinations in LLMs. Frontiers in AI.</div>
<div style="margin:0.3rem 0;">Li, Y., Sheng, D., Zhou, Z. &amp; Wu, Y. (2024). AI hallucination classification. HSSC.</div>
<div style="margin:0.3rem 0;">Shao, A. (2025). Beyond Misinformation. arXiv:2504.13777.</div>
<div style="margin:0.3rem 0;">Rodriguez de Las Heras Ballell (2025). Mapping generative AI rules. Cambridge Forum on AI.</div>
<div style="margin:0.3rem 0;">Bernert/Scheurer/Wehnes (Hrsg.) (2024). KI in der Projektwirtschaft 2. UVK.</div>
<div style="margin:0.3rem 0;">Jakoby, W. (2025). Projektmanagement für Ingenieure, 6. Aufl. Springer Vieweg.</div>
</div>

</div>

<p class="mono" style="font-size:0.6rem;color:var(--cream-50);margin-top:1rem;">Vollständige APA-7-Bibliografie mit DOIs im Repo: <code>docs/BIBLIOGRAPHY.md</code></p>

<!--
Sprechleitfaden · 10 s
- Nicht vorlesen — nur sagen: "Vollständige Bibliografie im Repo"
- Bei Rückfragen ist diese Folie Nachweis
-->
