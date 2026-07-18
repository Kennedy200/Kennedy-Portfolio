<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const canvasWrap = ref(null)
let renderer, scene, camera, mesh, rafId, observer
let mouseX = 0
let mouseY = 0
let visible = true

function init() {
  const el = canvasWrap.value
  const width = el.clientWidth
  const height = el.clientHeight

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
  camera.position.z = 6

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(width, height)
  el.appendChild(renderer.domElement)

  const geometry = new THREE.IcosahedronGeometry(2, 1)
  const wireframe = new THREE.WireframeGeometry(geometry)
  const material = new THREE.LineBasicMaterial({
    color: new THREE.Color('#2F3E46'),
    transparent: true,
    opacity: 0.25,
  })
  mesh = new THREE.LineSegments(wireframe, material)
  scene.add(mesh)

  animate()
}

function animate() {
  rafId = requestAnimationFrame(animate)
  if (!visible) return

  mesh.rotation.y += 0.0009
  mesh.rotation.x += 0.0004

  // gentle mouse-parallax, max ~6deg tilt
  const targetX = mouseY * (Math.PI / 30)
  const targetZ = mouseX * (Math.PI / 30)
  mesh.rotation.x += (targetX - mesh.rotation.x) * 0.02
  mesh.rotation.z += (targetZ - mesh.rotation.z) * 0.02

  renderer.render(scene, camera)
}

function handleMouseMove(e) {
  const el = canvasWrap.value
  if (!el) return
  const rect = el.getBoundingClientRect()
  mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2
  mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2
}

function handleResize() {
  const el = canvasWrap.value
  if (!el || !renderer || !camera) return
  const width = el.clientWidth
  const height = el.clientHeight
  camera.aspect = width / height
  camera.updateProjectionMatrix()
  renderer.setSize(width, height)
}

onMounted(() => {
  init()
  window.addEventListener('resize', handleResize)
  window.addEventListener('mousemove', handleMouseMove, { passive: true })

  observer = new IntersectionObserver(
    (entries) => {
      visible = entries[0]?.isIntersecting ?? true
    },
    { threshold: 0.05 }
  )
  observer.observe(canvasWrap.value)
})

onUnmounted(() => {
  cancelAnimationFrame(rafId)
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('mousemove', handleMouseMove)
  observer?.disconnect()
  renderer?.dispose()
})
</script>

<template>
  <div ref="canvasWrap" class="w-full h-full" aria-hidden="true"></div>
</template>
