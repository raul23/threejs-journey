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

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

const tick = () =>
{
    // Update camera position with cursor coordinates = custom controls 
    // (vs built-in controls like OrbitControls)
    // NOTE: no need to update the camera when using OrbitControls
    // Solution #2: camera moving around the cube
    // In order to see around the cube, we will rotate the camera around the object
    // NOTES: 
    // - the camera is rotating on the x-z plane
    // - Math.PI * 2 to go full revolution around the cube
    camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 3
    camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 3
    camera.position.y = cursor.y * 5
    // So that the camera is always centered on the cube regardless of the camera position
    camera.lookAt(mesh.position)

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
