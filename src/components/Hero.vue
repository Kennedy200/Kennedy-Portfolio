<script setup>
import { defineAsyncComponent } from 'vue'
import { hero } from '../data/content.js'

// Defer Three.js so it doesn't block initial paint.
const ThreeHero = defineAsyncComponent(() => import('./ThreeHero.vue'))
</script>

<template>
  <section class="relative min-h-[90vh] flex items-center overflow-hidden">
    <div class="max-w-content mx-auto w-full px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center pt-20">
      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, ease: 'easeOut' } }"
      >
        <p class="font-script italic text-lg text-ink-muted mb-4">{{ hero.eyebrow }}</p>
        <h1 class="font-script italic text-5xl md:text-7xl text-gold mb-3 leading-tight">
          {{ hero.name }}
        </h1>
        <p class="text-xl md:text-2xl font-semibold text-ink mb-6 leading-snug">
          {{ hero.role }}
        </p>
        <p class="text-base md:text-lg text-ink-muted leading-relaxed max-w-md mb-8">
          {{ hero.supporting }}
        </p>
        <div class="flex flex-wrap gap-4">
          <a
            :href="hero.ctaPrimary.target"
            class="inline-flex items-center px-6 py-3 rounded-xl bg-accent text-surface text-sm font-medium hover:bg-[#253238] transition-colors duration-200"
          >
            {{ hero.ctaPrimary.label }}
          </a>
          <a
            :href="hero.ctaSecondary.target"
            class="inline-flex items-center px-6 py-3 rounded-xl border border-accent text-accent text-sm font-medium hover:bg-accent-soft/40 transition-colors duration-200"
          >
            {{ hero.ctaSecondary.label }}
          </a>
        </div>
      </div>

      <div class="relative h-[320px] md:h-[460px]">
        <ThreeHero />
      </div>
    </div>
  </section>
</template>
