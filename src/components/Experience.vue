<script setup>
import { experience, education } from '../data/content.js'
</script>

<template>
  <section id="experience" class="border-t border-border py-14 md:py-32">
    <div class="max-w-content mx-auto px-6 md:px-16">
      <p
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="font-script italic text-lg text-ink-muted mb-10"
      >
        {{ experience.eyebrow }}
      </p>

      <ol class="relative border-l border-border pl-8 space-y-14">
        <li
          v-for="(entry, i) in experience.entries"
          :key="entry.company"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 80 } }"
          class="relative"
        >
          <span class="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent"></span>
          <p class="text-xs text-ink-muted mb-1">{{ entry.period }} · {{ entry.location }}</p>
          <h3 class="text-lg font-semibold text-ink">{{ entry.role }}</h3>
          <p class="text-sm text-accent mb-3">{{ entry.company }}</p>
          <ul class="space-y-2 text-sm md:text-base text-ink-muted leading-relaxed list-disc list-outside ml-4">
            <li v-for="(point, j) in entry.points" :key="j">{{ point }}</li>
          </ul>
        </li>

        <li
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: experience.entries.length * 80 } }"
          class="relative"
        >
          <span class="absolute -left-[37px] top-1.5 w-2.5 h-2.5 rounded-full bg-accent-soft border border-accent"></span>
          <p class="text-xs text-ink-muted mb-1">{{ education.period }}</p>
          <h3 class="text-lg font-semibold text-ink">{{ education.degree }}</h3>
          <p class="text-sm text-accent">{{ education.school }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
