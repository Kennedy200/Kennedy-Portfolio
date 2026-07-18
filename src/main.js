// Animation library choice: using @vueuse/motion (Vue-native wrapper around Motion One)
// instead of raw Motion One, because it integrates directly with Vue's template syntax
// via the v-motion directive and preset variants (fade-visible-once, etc.), which is a
// cleaner fit for Composition API / <script setup> than manually wiring Motion One's
// imperative API to component lifecycle hooks.
import { createApp } from 'vue'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import './style.css'

createApp(App).use(MotionPlugin).mount('#app')
