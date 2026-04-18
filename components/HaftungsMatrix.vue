<template>
  <div class="matrix-wrap stagger">
    <div class="matrix-roles" role="tablist" aria-label="Haftungsrollen">
      <button
        v-for="(role, key) in data"
        :key="key"
        :class="['role-tab', { active: active === key }]"
        role="tab"
        :aria-selected="active === key"
        :tabindex="active === key ? 0 : -1"
        @click="active = key"
        @keydown="onKeydown($event, key)"
      >
        <span class="role-num mono">0{{ indexOf(key) + 1 }}</span>
        <span class="role-label">{{ role.label }}</span>
      </button>
    </div>

    <div class="matrix-body panel" role="tabpanel">
      <div class="dim">
        <h3 class="dim-head">Rechtsgrundlage</h3>
        <ul class="dim-list">
          <li v-for="g in current.grundlage" :key="g">{{ g }}</li>
        </ul>
      </div>

      <div class="dim">
        <h3 class="dim-head">Rechtsprechung</h3>
        <p>{{ current.rechtsprechung }}</p>
      </div>

      <div class="dim">
        <h3 class="dim-head">Beweislast</h3>
        <p>{{ current.beweislast }}</p>
      </div>

      <div class="dim dim-highlight">
        <h3 class="dim-head">Folge für das Projektmanagement</h3>
        <p>{{ current.pm }}</p>
      </div>

      <div class="dim-sources mono">
        <span class="kicker-inline">Quellen</span>
        <span v-for="(q, i) in current.quellen" :key="q">
          <span>{{ q }}</span><span v-if="i &lt; current.quellen.length - 1"> · </span>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { haftungsmatrix } from '../extracted/haftungsmatrix.js'

const data = haftungsmatrix
const keys = Object.keys(data)
const active = ref(keys[0])
const current = computed(() => data[active.value])

function indexOf(k) { return keys.indexOf(k) }

function onKeydown(e, key) {
  const i = keys.indexOf(key)
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
    e.preventDefault()
    active.value = keys[(i + 1) % keys.length]
    focusTab(active.value)
  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
    e.preventDefault()
    active.value = keys[(i - 1 + keys.length) % keys.length]
    focusTab(active.value)
  } else if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    active.value = key
  }
}

function focusTab(key) {
  requestAnimationFrame(() => {
    const btn = document.querySelector(`.role-tab.active`)
    btn?.focus()
  })
}
</script>

<style scoped>
.matrix-wrap {
  display: grid;
  grid-template-columns: 1fr 2.2fr;
  gap: 1.6rem;
  max-width: 100%;
  margin-top: 0.8rem;
}

.matrix-roles {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.role-tab {
  all: unset;
  cursor: pointer;
  padding: 0.9rem 1rem 0.9rem 1.2rem;
  border-left: 2px solid transparent;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  background: transparent;
  color: var(--cream-70);
  transition: all 0.2s;
}

.role-tab:hover {
  color: var(--cream);
  background: var(--cream-10);
}

.role-tab:focus-visible {
  outline: 1px dotted var(--gold);
  outline-offset: 2px;
}

.role-tab.active {
  border-left-color: var(--gold);
  background: var(--gold-bg);
  color: var(--cream);
}

.role-num {
  font-size: 0.65rem;
  color: var(--gold);
  letter-spacing: 0.18em;
}

.role-label {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.2;
}

.matrix-body {
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1.4rem 1.6rem;
}

.dim {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.dim-head {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--gold);
  margin: 0;
  opacity: 0.9;
}

.dim p {
  font-size: 0.82rem;
  line-height: 1.45;
  margin: 0;
  color: var(--cream-70);
}

.dim-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.dim-list li {
  font-size: 0.78rem;
  line-height: 1.35;
  color: var(--cream-70);
  padding-left: 0.8rem;
  position: relative;
}

.dim-list li::before {
  content: "—";
  position: absolute;
  left: 0;
  color: var(--gold);
  opacity: 0.6;
}

.dim-highlight p {
  color: var(--cream);
  font-style: italic;
  font-family: var(--font-display);
  font-size: 0.95rem;
  line-height: 1.4;
}

.dim-sources {
  font-size: 0.62rem;
  color: var(--cream-50);
  letter-spacing: 0.01em;
  border-top: 1px solid var(--gold-muted);
  padding-top: 0.6rem;
  line-height: 1.5;
}

.kicker-inline {
  color: var(--gold);
  margin-right: 0.5em;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-size: 0.6rem;
}
</style>
