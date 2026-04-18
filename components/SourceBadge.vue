<template>
  <span
    class="source-badge"
    :title="full"
    tabindex="0"
    :aria-label="full"
  >
    ({{ short }})
  </span>
</template>

<script setup lang="ts">
defineProps<{
  short: string
  full: string
}>()
</script>

<style scoped>
.source-badge {
  font-family: var(--font-mono);
  font-size: 0.72em;
  color: var(--gold);
  opacity: 0.85;
  padding: 0 0.12em;
  cursor: help;
  border-bottom: 1px dotted var(--gold-muted);
  transition: opacity 0.2s;
}
.source-badge:hover,
.source-badge:focus {
  opacity: 1;
  outline: none;
}
</style>
