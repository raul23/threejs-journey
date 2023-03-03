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
// Time (solution #1)
// previous time
let time = Date.now()

// Other call it loop()
const tick = () =>
{
    // console.log('tick')
  
    // Adaptation to framerate: we want the same kind of animation irrespective of fps
    // Solution #1: based on deltaTime
    // Time
    // Get current timestamp (milliseconds)
    const currentTime = Date.now()
    // Get deltaTime: difference between current time and previous time
    const deltaTime = currentTime - time
    // Update time for the next time
    time = currentTime
    // console.log(deltaTime)
    
    // Update object  with solution #1
    //mesh.position.x += 0.01
    //mesh.position.y += 0.01
    // Now the cube is rotating at the same speed regardless of the fps
    mesh.rotation.y += 0.001 * deltaTime
  
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame indefinitely
    // requestAnimationFrame() calls the function provided on the next frame
    // 60 ticks per second (60fps)
    window.requestAnimationFrame(tick)
}

tick()
