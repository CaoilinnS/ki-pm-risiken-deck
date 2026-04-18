<template>
  <div class="timeline-wrap stagger">
    <!-- Achse -->
    <div class="timeline-axis">
      <div class="axis-line" aria-hidden="true"></div>
      <div
        v-for="(ev, i) in regEvents"
        :key="'dot-' + ev.date"
        :class="['axis-event', ev.phase]"
        :style="{ left: positionFor(ev.date) + '%' }"
      >
        <div class="axis-dot" :aria-label="ev.label"></div>
        <div class="axis-num mono">{{ (i + 1).toString().padStart(2, '0') }}</div>
        <div class="axis-date mono">{{ formatShort(ev.date) }}</div>
      </div>
      <div class="today-marker" :style="{ left: positionFor(today) + '%' }">
        <span class="today-label mono">Heute</span>
      </div>
    </div>

    <!-- Event-Karten in fester 7-Spalten-Reihe -->
    <div class="cards-row">
      <div
        v-for="(ev, i) in regEvents"
        :key="'card-' + ev.date"
        :class="['event-card', ev.phase]"
      >
        <div class="card-head">
          <span class="card-num mono">{{ (i + 1).toString().padStart(2, '0') }}</span>
          <span class="card-date mono">{{ formatShort(ev.date) }}</span>
        </div>
        <div class="card-label">{{ ev.label }}</div>
        <div class="card-detail">{{ ev.detail }}</div>
        <div class="card-source mono">{{ ev.source }}</div>
      </div>
    </div>

    <div class="legend mono">
      <span class="legend-item"><span class="dot live"></span> In Kraft</span>
      <span class="legend-item"><span class="dot pending"></span> Zukünftig</span>
      <span class="legend-item"><span class="bar today"></span> Heute · {{ formatShort(today) }}</span>
    </div>
  </div>
</template>

<script setup>
import { regEvents } from '../extracted/regtimeline.js'

const today = "2026-04-18"
const startDate = new Date("2024-07-01")
const endDate = new Date("2027-10-01")
const span = endDate - startDate

function positionFor(dateStr) {
  const d = new Date(dateStr)
  return Math.max(0, Math.min(100, ((d - startDate) / span) * 100))
}

function formatShort(dateStr) {
  const [y, m] = dateStr.split('-')
  const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
  return `${months[parseInt(m) - 1]} ${y}`
}
</script>

<style scoped>
.timeline-wrap {
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  padding: 0.8rem 0.5rem 0;
}

.timeline-axis {
  position: relative;
  height: 78px;
  margin: 0 1.4rem;
}

.axis-line {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: var(--gold-muted);
}

.axis-event {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  width: 60px;
}

.axis-dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
  border: 1.5px solid var(--gold);
  background: var(--ink-navy);
  z-index: 2;
}
.axis-event.live .axis-dot {
  background: var(--gold);
}

.axis-num {
  position: absolute;
  bottom: calc(50% + 10px);
  font-size: 0.55rem;
  color: var(--gold);
  letter-spacing: 0.15em;
}

.axis-date {
  position: absolute;
  top: calc(50% + 10px);
  font-size: 0.55rem;
  color: var(--cream-70);
  letter-spacing: 0.08em;
  white-space: nowrap;
}

.today-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--rust);
  opacity: 0.7;
}

.today-label {
  position: absolute;
  top: -1.1rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--rust);
  font-size: 0.55rem;
  letter-spacing: 0.15em;
  white-space: nowrap;
}

.cards-row {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.45rem;
}

.event-card {
  background: rgba(11, 30, 59, 0.6);
  border: 1px solid var(--gold-muted);
  padding: 0.45rem 0.55rem;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  gap: 0.18rem;
  min-height: 0;
}

.event-card.pending {
  border-style: dashed;
  opacity: 0.9;
}

.card-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 0.55rem;
  color: var(--gold);
  letter-spacing: 0.1em;
}

.card-num { opacity: 0.7; }
.card-date { color: var(--gold); }

.card-label {
  font-family: var(--font-display);
  font-weight: 400;
  color: var(--cream);
  font-size: 0.72rem;
  line-height: 1.15;
}

.card-detail {
  color: var(--cream-70);
  font-size: 0.56rem;
  line-height: 1.32;
  flex: 1;
}

.card-source {
  font-size: 0.5rem;
  color: var(--cream-50);
  letter-spacing: 0.04em;
  margin-top: auto;
}

.legend {
  display: flex;
  gap: 1.2rem;
  font-size: 0.58rem;
  color: var(--cream-70);
  padding-left: 0.4rem;
  letter-spacing: 0.1em;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  border: 1.5px solid var(--gold);
}
.dot.live { background: var(--gold); }
.dot.pending { background: var(--ink-navy); }

.bar.today {
  width: 2px;
  height: 10px;
  background: var(--rust);
  display: inline-block;
}
</style>
