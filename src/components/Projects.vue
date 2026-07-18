<script setup>
import { projects } from '../data/content.js'
</script>

<template>
  <section id="projects" class="border-t border-border py-14 md:py-32">
    <div class="max-w-content mx-auto px-6 md:px-16">
      <p
        v-motion
        :initial="{ opacity: 0, y: 12 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="font-script italic text-lg text-ink-muted mb-10"
      >
        {{ projects.eyebrow }}
      </p>

      <div class="grid md:grid-cols-2 gap-6">
        <a
          v-for="(project, i) in projects.items"
          :key="project.name"
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 500, delay: (i % 2) * 80 } }"
          class="group block rounded-xl border border-border bg-surface p-7 shadow-sm hover:shadow-md hover:border-accent hover:-translate-y-1 transition-all duration-200"
          :class="i === 4 ? 'md:col-span-2' : ''"
        >
          <h3 class="text-lg font-semibold text-ink">{{ project.name }}</h3>
          <p class="text-sm text-accent mb-3">{{ project.tagline }}</p>
          <p class="text-sm text-ink-muted leading-relaxed mb-4">{{ project.description }}</p>

          <ul class="flex flex-wrap gap-2 mb-4">
            <li
              v-for="tech in project.tech"
              :key="tech"
              class="text-xs px-2.5 py-1 rounded-full bg-accent-soft text-accent"
            >
              {{ tech }}
            </li>
          </ul>

          <span class="inline-flex items-center gap-1.5 text-sm font-medium text-ink group-hover:text-accent transition-colors duration-200">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.4 9.4 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z"/>
            </svg>
            View on GitHub
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
