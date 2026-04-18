<template>
  <div class="slidev-layout title-layout">
    <div class="title-inner">
      <div class="kicker">LL.M. Legal Tech · Modul Projektmanagement</div>
      <h1 class="title">
        <slot name="title">
          Regulatorische und Haftungsrisiken beim Einsatz von <em>KI</em> im Projektmanagement
        </slot>
      </h1>
      <hr class="hairline" />
      <div class="meta">
        <slot name="authors">Claudia Bothe · Tobias Huck</slot>
      </div>
      <slot />
    </div>
    <div class="corner-mark mono">01 / 20</div>
  </div>
</template>

<style scoped>
.title-layout {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 6rem 6rem 4rem;
  position: relative;
}
.title-inner {
  max-width: 80ch;
}
.title {
  font-size: clamp(2.4rem, 5.5vw, 4rem);
  font-weight: 300;
  line-height: 1.08;
  margin: 1rem 0 0.6rem;
}
.meta {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--cream-70);
  letter-spacing: 0.02em;
}
.corner-mark {
  position: absolute;
  bottom: 2rem;
  left: 6rem;
  font-size: 0.75rem;
  color: var(--cream-50);
  letter-spacing: 0.2em;
}
</style>
