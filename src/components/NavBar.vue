<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { nav, site } from '../data/content.js'

const scrolled = ref(false)
const mobileOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 80
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

function closeMobile() {
  mobileOpen.value = false
}
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
    :class="scrolled ? 'bg-surface border-b border-border' : 'bg-transparent border-b border-transparent'"
  >
    <nav class="max-w-content mx-auto flex items-center justify-between px-6 md:px-16 py-5">
      <a href="#" class="font-script italic text-xl text-gold" aria-label="Kennedy Gabriel home">
        {{ site.name }}
      </a>

      <ul class="hidden md:flex items-center gap-8 text-sm text-ink-muted">
        <li v-for="link in nav.links" :key="link.label">
          <a :href="link.target" class="hover:text-accent transition-colors duration-200">{{ link.label }}</a>
        </li>
      </ul>

      <button
        class="md:hidden text-ink"
        aria-label="Toggle menu"
        :aria-expanded="mobileOpen"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
          <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" />
        </svg>
        <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75">
          <path d="M6 6l12 12M18 6L6 18" stroke-linecap="round" />
        </svg>
      </button>
    </nav>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ul v-if="mobileOpen" class="md:hidden bg-surface border-b border-border px-6 py-4 flex flex-col gap-4 text-sm">
        <li v-for="link in nav.links" :key="link.label">
          <a :href="link.target" class="text-ink-muted hover:text-accent" @click="closeMobile">{{ link.label }}</a>
        </li>
      </ul>
    </transition>
  </header>
</template>
