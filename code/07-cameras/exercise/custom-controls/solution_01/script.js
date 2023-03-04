import * as THREE from 'three'

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

// Cursor
// We need the mouse coordinates on the page so they can be updated
// in the event listener (mousemove)
const cursor = {
    x: 0,
    y: 0
}

// Update x and y in the `mousemove` event
window.addEventListener('mousemove', (event) =>
{
    // We want to adjust the x/y values (pixels): we want a value
    // with an amplitude of 1 and that can be both negative and positive
    // NOTES: 
    // - x and y go from -0.5 to 0.5
    // - y axis must be negated since cursor.y is + when going done while
    //   three.js `y` is + when going 
    //   This negation could also be done in tick()
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = - (event.clientY / sizes.height - 0.5)
})

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    //new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
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
// OrthographicCamera: lack of perspective
// "An object's size in the rendered image stays constant regardless of its distance from the camera"
// Doc: https://threejs.org/docs/index.html?q=OrthographicCamera#api/en/cameras/OrthographicCamera
//
// 6 Parameters of OrthographicCamera (no fov!)
//  1) how far camera can see in the left direction
//  2) how far camera can see in the right direction
//  3) how far camera can see in the top direction
//  4) how far camera can see in the bottom direction
//  5) near
//  6) far
//
// IMPORTANT: without aspectRatio, cube looks flat
// Since we are rendering a square area into a rectangle canvas.
// We must use the canvas/render ratio (width / height = aspect ratio)
// as applied to the "horizontal amplitude" (left/right direction)
// Our render is not a square (800x600)
// const aspectRatio = sizes.width / sizes.height
// const camera = new THREE.OrthographicCamera(- 1 * aspectRatio, 1 * aspectRatio, 1, - 1, 0.1, 100)
camera.position.z = 3
//camera.lookAt(mesh.position)
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Animate
//const clock = new THREE.Clock()

const tick = () =>
{
    //const elapsedTime = clock.getElapsedTime()
    //mesh.rotation.y = elapsedTime

    // Update camera position with cursor coordinates = custom controls 
    // (vs built-in controls like OrbitControls)
    // NOTE: no need to update the camera when using OrbitControls
    // Solution #1: camera moving in a plane
    camera.position.x = cursor.x * 3
    camera.position.y = cursor.y * 3

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
