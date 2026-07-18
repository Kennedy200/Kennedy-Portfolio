<script setup>
import { contact } from '../data/content.js'
</script>

<template>
  <section id="contact" class="border-t border-border py-14 md:py-32">
    <div class="max-w-content mx-auto px-6 md:px-16">
      <p
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="font-script italic text-lg text-ink-muted mb-4"
      >
        {{ contact.eyebrow }}
      </p>

      <h2
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="text-3xl md:text-5xl font-semibold text-ink leading-tight max-w-2xl mb-10"
      >
        {{ contact.headline }}
      </h2>

      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: 100 } }"
        class="flex flex-col md:flex-row md:items-end justify-between gap-10"
      >
        <dl class="space-y-3 text-sm md:text-base">
          <div class="flex gap-3">
            <dt class="text-ink-muted w-20">Email</dt>
            <dd><a :href="`mailto:${contact.email}`" class="text-ink hover:text-accent transition-colors">{{ contact.email }}</a></dd>
          </div>
          <div class="flex gap-3">
            <dt class="text-ink-muted w-20">Phone</dt>
            <dd class="text-ink">{{ contact.phone }}</dd>
          </div>
          <div class="flex gap-3">
            <dt class="text-ink-muted w-20">GitHub</dt>
            <dd><a :href="contact.github" target="_blank" rel="noopener noreferrer" class="text-ink hover:text-accent transition-colors">{{ contact.github.replace('https://', '') }}</a></dd>
          </div>
          <div class="flex gap-3">
            <dt class="text-ink-muted w-20">Location</dt>
            <dd class="text-ink">{{ contact.location }}</dd>
          </div>
        </dl>

        <a
          :href="`mailto:${contact.email}`"
          class="inline-flex items-center px-7 py-3.5 rounded-xl bg-accent text-surface text-sm font-medium hover:bg-[#253238] transition-colors duration-200 self-start"
        >
          Email Me
        </a>
      </div>
    </div>
  </section>
</template>
