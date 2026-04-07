import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const canvas = document.querySelector('#hero-canvas')

if (!canvas) {
  throw new Error('Canvas element not found')
}

// 1. Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x11161c)

// 2. Camera
const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000)
camera.position.z = 5

// 3. Object
const geometry = new THREE.DodecahedronGeometry()
const material = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585' })
const dodecahedron = new THREE.Mesh(geometry, material)

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2)
const boxMaterial = new THREE.MeshBasicMaterial({ color: '#B4B4B3' })
const box = new THREE.Mesh(boxGeometry, boxMaterial)
box.position.y = -1.5

scene.add(dodecahedron, box)

// 4. Light
const light = new THREE.SpotLight(0x006769, 100)
light.position.set(1, 1, 1)
scene.add(light)

// 5. Renderer
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(canvas.clientWidth, canvas.clientHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))


// Handle resize
// const handleResize = () => {
//   camera.aspect = canvas.clientWidth / canvas.clientHeight
//   camera.updateProjectionMatrix()
//   renderer.setSize(canvas.clientWidth, canvas.clientHeight)
// }s

// window.addEventListener('resize', handleResize)

// 6. Mouse interaction
const mouse = new THREE.Vector2()

const onMouseMove = (event: Event) => {
  const mouseEvent = event as MouseEvent
  const rect = canvas.getBoundingClientRect()
  mouse.x = ((mouseEvent.clientX - rect.left) / rect.width) * 2 - 1
  mouse.y = -((mouseEvent.clientY - rect.top) / rect.height) * 2 + 1
}

canvas.addEventListener('mousemove', onMouseMove)

// 7. add orbitControls
const controls = new OrbitControls(camera, renderer.domElement)
controls.enableDamping = true
controls.dampingFactor = 0.05
controls.enableZoom = false
controls.enablePan = true

// 8. Animation loop
const animate = () => {
  requestAnimationFrame(animate)
  
  // Mouse interaction effects
  dodecahedron.rotation.x += 0.01 + mouse.y * 0.02
  dodecahedron.rotation.y += 0.01 + mouse.x * 0.02
  box.rotation.y += 0.005 + mouse.x * 0.01
  
  // Light follows mouse
  light.position.x = mouse.x * 3
  light.position.y = mouse.y * 3 + 1

  controls.update()
  
  renderer.render(scene, camera)
}

// 9. Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})

animate()