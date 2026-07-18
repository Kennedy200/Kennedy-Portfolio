<script setup>
import { about } from '../data/content.js'
</script>

<template>
  <section id="about" class="border-t border-border py-14 md:py-32">
    <div class="max-w-content mx-auto px-6 md:px-16">
      <p
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="font-script italic text-lg text-ink-muted mb-6"
      >
        {{ about.eyebrow }}
      </p>

      <div class="grid md:grid-cols-3 gap-10 md:gap-16">
        <div
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="md:col-span-2 space-y-5 text-base md:text-lg text-ink-muted leading-relaxed"
        >
          <p v-for="(p, i) in about.paragraphs" :key="i">{{ p }}</p>
        </div>

        <div
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 100 } }"
          class="flex md:flex-col gap-8 md:gap-6 flex-wrap"
        >
          <div v-for="stat in about.stats" :key="stat.label">
            <p class="text-2xl md:text-3xl font-semibold text-accent">{{ stat.value }}</p>
            <p class="text-sm text-ink-muted mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
