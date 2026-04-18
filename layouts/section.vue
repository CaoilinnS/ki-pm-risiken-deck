<template>
  <div class="slidev-layout section-layout">
    <div class="section-inner stagger">
      <div class="section-label"><slot name="number">Teil</slot></div>
      <h1 class="section-title">
        <slot name="title"><slot /></slot>
      </h1>
      <hr class="hairline" />
      <p class="section-tagline">
        <slot name="tagline" />
      </p>
    </div>
  </div>
</template>

<style scoped>
.section-layout {
  display: flex;
  align-items: center;
  padding: 4rem 6rem;
}
.section-inner {
  max-width: 70ch;
}
.section-title {
  font-size: clamp(2.8rem, 6vw, 4.4rem);
  font-weight: 300;
  font-style: italic;
  line-height: 1.05;
  margin: 1rem 0;
}
.section-title em {
  font-style: normal;
  color: var(--gold);
}
.section-tagline {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 300;
  font-style: italic;
  color: var(--cream-70);
  max-width: 55ch;
  margin-top: 0.8rem;
}
</style>
