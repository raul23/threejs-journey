import * as THREE from 'three'

console.log('Hello Three.js')

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Base
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

/**
 * Animate
 */
// - Animation done with the library gsap (solution #3)
// - Create a tween with gsap.to()
// - gsap has its own clock
// 
// About its arguments:
// - First argument is the mesh's position we want to animate
// - Second argument: duration for the animation, delay before starting animation
gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 })
// To put the cube back to its original position
gsap.to(mesh.position, { duration: 1, delay: 2, x: 0 })

// Other call it loop()
const tick = () =>
{
    // Adaptation to framerate: we want the same kind of animation irrespective of fps
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame indefinitely
    // requestAnimationFrame() calls the function provided on the next frame
    // 60 ticks per second (60fps)
    window.requestAnimationFrame(tick)
}

tick()
