<script setup>
import { skills } from '../data/content.js'
</script>

<template>
  <section id="skills" class="border-t border-border py-14 md:py-32">
    <div class="max-w-content mx-auto px-6 md:px-16">
      <p
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="font-script italic text-lg text-ink-muted mb-10"
      >
        {{ skills.eyebrow }}
      </p>

      <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div
          v-for="(group, i) in skills.groups"
          :key="group.title"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: i * 80 } }"
        >
          <h3 class="text-sm font-semibold text-ink mb-4 tracking-tight">{{ group.title }}</h3>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="item in group.items"
              :key="item"
              class="text-xs px-3 py-1.5 rounded-full bg-accent-soft text-accent"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
