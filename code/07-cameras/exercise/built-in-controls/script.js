import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

console.log('Hello Three.js')

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
// NOTE: these are not the sizes of the viewport but of the canvas
//       Eventually the canvas will take the whole viewport
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
// 4 Parameters of PerspectiveCamera
//  1) fov = 75 (vertica vision angle in degrees)
//     NOTE: if too big, you might get distortions on objects
//  2) aspect ration = width of render/ height of render
//  3) near = 0.1
//  4) far = 100
// NOTE: object invisible if closer than `near` or further than `far`
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
// three.js has multiple built-in controls, see doc @ https://threejs.org/docs/index.html?q=controls
// OrbitControls listens to mousemove event and other events (e.g. touch) on the 
// canvas and update the camera
// NOTES: 
// - you can drag and drop with the right click
// - by default, the camera looks at the center of the scene
const controls = new OrbitControls(camera, canvas)
// Change the target's axes so the camera doesn't look at the center of the scene
//controls.target.y = 2
// IMPORTANT: when changing the target, you need to update controls
//controls.update()
// enable damping so that it feels smooth when looking around the object
// IMPORTANT: don't forget to update the controls on each frame in tick() when using the damping
controls.enableDamping = true

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

const tick = () =>
{   
    // Update controls
    // You need to update controls on each frame in order for the damping to work
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
