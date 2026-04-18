<template>
  <div class="timeline-wrap stagger">
    <div class="timeline-axis">
      <div
        v-for="(ev, i) in regEvents"
        :key="ev.date"
        :class="['event', ev.phase, i % 2 === 0 ? 'top' : 'bottom']"
        :style="{ left: positionFor(ev.date) + '%' }"
      >
        <div class="event-line" aria-hidden="true"></div>
        <div class="event-dot" :aria-label="ev.label"></div>
        <div class="event-card panel">
          <div class="event-date mono">{{ formatDate(ev.date) }}</div>
          <div class="event-label">{{ ev.label }}</div>
          <div class="event-detail">{{ ev.detail }}</div>
          <div class="event-source mono">{{ ev.source }}</div>
        </div>
      </div>
      <div class="axis-line" aria-hidden="true"></div>
      <div class="today-marker" :style="{ left: positionFor(today) + '%' }">
        <span class="today-label mono">Heute · {{ formatDate(today) }}</span>
      </div>
    </div>

    <div class="legend mono">
      <span class="legend-item"><span class="dot live"></span> In Kraft</span>
      <span class="legend-item"><span class="dot pending"></span> Zukünftig</span>
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
  return ((d - startDate) / span) * 100
}

function formatDate(dateStr) {
  const [y, m, d] = dateStr.split('-')
  const months = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez']
  return `${parseInt(d)}. ${months[parseInt(m) - 1]} ${y}`
}
</script>

<style scoped>
.timeline-wrap {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 1rem;
}

.timeline-axis {
  position: relative;
  height: 340px;
  margin: 0 2rem;
}

.axis-line {
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: var(--gold-muted);
}

.event {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
}

.event-dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  border: 2px solid var(--gold);
  background: var(--ink-navy);
  z-index: 2;
  position: relative;
  transition: transform 0.2s;
}

.event.live .event-dot {
  background: var(--gold);
}

.event-line {
  position: absolute;
  width: 1px;
  background: var(--gold-muted);
  left: 50%;
}

.event.top {
  flex-direction: column-reverse;
  transform: translate(-50%, calc(-50% - 90px));
}
.event.top .event-line {
  bottom: -90px;
  height: 82px;
}

.event.bottom {
  transform: translate(-50%, calc(-50% + 90px));
}
.event.bottom .event-line {
  top: -90px;
  height: 82px;
}

.event-card {
  width: 180px;
  padding: 0.5rem 0.6rem;
  font-size: 0.65rem;
}

.event-date {
  color: var(--gold);
  font-size: 0.6rem;
  letter-spacing: 0.1em;
}

.event-label {
  font-family: var(--font-display);
  font-weight: 400;
  color: var(--cream);
  font-size: 0.78rem;
  line-height: 1.2;
  margin: 0.2rem 0 0.3rem;
}

.event-detail {
  color: var(--cream-70);
  font-size: 0.62rem;
  line-height: 1.35;
}

.event-source {
  margin-top: 0.3rem;
  font-size: 0.55rem;
  color: var(--cream-50);
}

.event.pending .event-card {
  opacity: 0.85;
  border-style: dashed;
}

.today-marker {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--rust);
  opacity: 0.6;
}

.today-label {
  position: absolute;
  top: -1.8rem;
  left: 50%;
  transform: translateX(-50%);
  color: var(--rust);
  font-size: 0.6rem;
  letter-spacing: 0.15em;
  white-space: nowrap;
}

.legend {
  display: flex;
  gap: 1.4rem;
  font-size: 0.65rem;
  color: var(--cream-70);
  margin-top: 0.3rem;
  padding-left: 1rem;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 2px solid var(--gold);
}
.dot.live {
  background: var(--gold);
}
.dot.pending {
  background: var(--ink-navy);
}
</style>
