<template>
  <div class="slidev-layout closing-layout">
    <div class="closing-inner">
      <div class="kicker"><slot name="kicker">Fazit</slot></div>
      <h1 class="closing-title">
        <slot name="title"><slot /></slot>
      </h1>
      <hr class="hairline" />
      <div class="closing-body">
        <slot name="body" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.closing-layout {
  display: flex;
  align-items: center;
  padding: 4rem 6rem;
}
.closing-inner {
  max-width: 70ch;
}
.closing-title {
  font-size: clamp(2.4rem, 5vw, 3.6rem);
  font-weight: 300;
  line-height: 1.1;
}
.closing-title em {
  font-style: italic;
  color: var(--gold);
}
.closing-body {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5;
  color: var(--cream);
  margin-top: 1rem;
}
</style>
