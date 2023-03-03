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
// Clock (solution #2)
// Clock always start at 0 and it is in seconds
const clock = new THREE.Clock()

// Other call it loop()
const tick = () =>
{
    // console.log('tick')
  
    // Adaptation to framerate: we want the same kind of animation irrespective of fps
  
    // Solution #2: based on Clock and getElapsedTime()
    // IMPORTANT: don't use Clock.getDelta() or you might get weird results!
    const elapsedTime = clock.getElapsedTime()
    // console.log(elapsedTime)
    
    // Update object with solution #2
    // Solution #2: don't increment rotation like we did with solution #1
    // To move object one revolution per second: elapsedTime * Math.PI * 2
    //mesh.rotation.y = elapsedTime * Math.PI * 2
    // With y=sin(elapsedTime) only, cube is going up and down
    //mesh.position.y = Math.sin(elapsedTime)
    // With y=sin(elapsedTime) and x=cos(elapsedTime), cube is going in circle
    //mesh.position.x = Math.cos(elapsedTime) 
  
    // We can also animate the camera, similar result as with mesh (previously) but it is
    // the camera that is moving this time (the cube is not moving thus
    // comment previous code for rotation of mesh)
    camera.position.y = Math.sin(elapsedTime)
    camera.position.x = Math.cos(elapsedTime) 
    // Tell the camera to look at the cube that is not moving
    //camera.lookAt(mesh.position)
  
    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame indefinitely
    // requestAnimationFrame() calls the function provided on the next frame
    // 60 ticks per second (60fps)
    window.requestAnimationFrame(tick)
}

tick()
