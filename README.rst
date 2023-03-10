====================
``three.js`` Journey
====================
Following the `three.js journey course <https://threejs-journey.com/>`_ given by Bruno Simon

.. contents:: **Contents**
   :depth: 5
   :local:
   :backlinks: top

Information about the course and teacher
========================================
Course
------
- **Course link:** `threejs-journey.com <https://threejs-journey.com/>`_
- **Course content:**

  - 7 chapters, 53 lessons, 71 hours of videos
  - The first 4 lessons are free 
- **Course description:**

   "The course is complete, yet accessible for beginners. We will start by discovering what WebGL is and why using 
   the Three.js library is a must. We will then discover the various components of Three.js and once the basics are acquired, 
   we will move on to more advanced techniques to display millions of particles, add physics, add interactions, create a 
   galaxy, animate a raging sea, etc.
   
   At the end of the course, you will have a deep understanding of Three.js and enough experience to start your own projects.
   
   As a bonus, we will also learn how to use the 3D software Blender to be able to create our own models."
- **Prerequisites:**

  - JavaScript basics: like variables, objects, arrays, loops, functions, conditions and events
  - Code editor: He recommends Visual Studio Code but you can use any editor you like
  - Browser: He recommends Chrome and Firefox (for their good developer tools) but you can use any browser you like
  - Blender: "Eventually, you will have to install Blender, but the software is free and works on all major OS"

Teacher: Bruno Simon
--------------------
"Bruno Simon is a French creative developer specialized in WebGL. He has worked on many projects for renowned clients 
to create interactive 3D experiences accessible to everyone from their browser.

Bruno has been teaching web development and WebGL in various schools for more than 7 years, making him a pedagogical 
trainer, alternating theory and practice."

- **Twitter:** `@bruno_simon <https://twitter.com/bruno_simon>`_
- **GitHub :** `@brunosimon <https://github.com/brunosimon>`_
- **Linkedin :** `@simonbruno77 <https://www.linkedin.com/in/simonbruno77/>`_
- **Some of his projects:**

  - `bruno-simon.com <https://bruno-simon.com/>`_ (portfolio)
  - `madbox.io <https://madbox.io/>`_
  - `chartogne-taillet.com <https://chartogne-taillet.com/en>`_ (wine maker)
  - `fromscout.com <https://www.fromscout.com/>`_
    
Lessons
=======
Chapter 1
---------
`:information_source:` 14 lessons ??? 9h 59mn

Lesson #3: Basic scene [easy]
"""""""""""""""""""""""""""""
.. raw:: html

   <div align="center">
    <a href="https://codepen.io/raul23/pen/PodmqJZ" target="_blank">
      <img src="./images/03_basic_scene.png" width="528.5" height="423.5">
    </a>
    <p align="center">Camera moved on the z axis only (camera facing the cube -> only square is seen)</p>
  </div>
   
|

.. raw:: html

   <div align="center">
    <a href="https://codepen.io/raul23/pen/PodmqJZ" target="_blank">
      <img src="./images/03_basic_scene_xz.png">
    </a>
    <p align="center">Camera moved on the x and z axis</p>
  </div>

`:information_source:` 

 - **Code:** 
 
   - `codepen.io <https://codepen.io/raul23/pen/PodmqJZ>`_ (run the code directly from the browser, commented code from the video lecture)
   - `github.com <https://github.com/raul23/threejs-journey/tree/main/code/03-basic-scene/exercise>`_ (source code)
 - **Reference:** code from `03. Basic scene (threejs-journey.com) 
   <https://threejs-journey.com/lessons/basic-scene>`_
 
Lesson #5: Transform object [medium]
""""""""""""""""""""""""""""""""""""
.. raw:: html

  <p align="center">
    <a href="https://codepen.io/raul23/pen/BaORKKo" target="_blank">
      <img src="./images/05_transforms_objects.png">
    </a>
  </p>
  
`:information_source:` 

 - **Code:** 
 
   - `codepen.io <https://codepen.io/raul23/pen/BaORKKo>`_ (run the code directly from the browser, commented code from the video lecture)
   - `github.com <https://github.com/raul23/threejs-journey/tree/main/code/05-transforms-objects/exercise>`_ (source code)
 - **Reference:** code from `05. Transform objects (threejs-journey.com) \
   <https://threejs-journey.com/lessons/transform-objects>`_
  
Lesson #6: Animations [medium]
""""""""""""""""""""""""""""""
Animations can be done based on:

- ``Date.now()`` and computing ``deltaTime``
- ``THREE.Clock`` and ``THREE.Clock.getElapsedTime()``
- GSAP: "JavaScript library for building high-performance animations that work in **every** major browser"

Solution #1: animations based on ``Date.now()``
'''''''''''''''''''''''''''''''''''''''''''''''
.. raw:: html

  <p align="center">
    <a href="https://codepen.io/raul23/pen/jOvmrJJ" target="_blank">
      <img src="./images/06_animations_solution_01.png">
    </a>
  </p>

`:information_source:` 

 - **Code:** 
 
   - `codepen.io <https://codepen.io/raul23/pen/jOvmrJJ>`_ (run the code directly from the browser, commented code from the video lecture)
   - `github.com <https://github.com/raul23/threejs-journey/tree/main/code/06-animations/exercise/solution_01>`_ (source code)
 - **Reference:** code from `06. Animations (threejs-journey.com) \
   <https://threejs-journey.com/lessons/animations>`_

Solution #2: animations based on ``THREE.Clock``
''''''''''''''''''''''''''''''''''''''''''''''''
.. raw:: html

  <p align="center">
    <a href="https://codepen.io/raul23/pen/LYJybEg" target="_blank">
      <img src="./images/06_animations_solution_02.png">
    </a>
  </p>
  
`:information_source:` 

 - **Code:** 
 
   - `codepen.io <https://codepen.io/raul23/pen/LYJybEg>`_ (run the code directly from the browser, commented code from the video lecture)
   - `github.com <https://github.com/raul23/threejs-journey/tree/main/code/06-animations/exercise/solution_02>`_ (source code)
 - **Reference:** code from `06. Animations (threejs-journey.com) \
   <https://threejs-journey.com/lessons/animations>`_

Solution #3: animations based on GSAP (JavaScript library)
''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
.. raw:: html

  <p align="center">
    <a href="https://codepen.io/raul23/pen/wvEdoBa" target="_blank">
      <img src="./images/06_animations_solution_03.png">
    </a>
  </p>

`:information_source:` 

 - **Code:** 
 
   - `codepen.io <https://codepen.io/raul23/pen/wvEdoBa>`_ (run the code directly from the browser, commented code from the video lecture)
   - `github.com <https://github.com/raul23/threejs-journey/tree/main/code/06-animations/exercise/solution_03>`_ (source code)
 - **Reference:** code from `06. Animations (threejs-journey.com) \
   <https://threejs-journey.com/lessons/animations>`_
   
Lesson #7: Cameras [medium]
"""""""""""""""""""""""""""
Custom controls
'''''''''''''''
Solution #1: camera moving in a plane
||||||||||||||||||||||||||||||||||||||
.. raw:: html

  <p align="center">
    <a href="https://codepen.io/raul23/pen/OJombjM" target="_blank">
      <img src="./images/07_cameras_solution_01.png">
    </a>
  </p>

`:information_source:` 

 - **Code:** 
 
   - `codepen.io <https://codepen.io/raul23/pen/OJombjM>`_ (run the code directly from the browser, commented code from the video lecture)
   - `github.com <https://github.com/raul23/threejs-journey/tree/main/code/07-cameras/exercise/custom-controls/solution_01>`_ (source code)
 - **Reference:** code from `07. Cameras (threejs-journey.com) \
   <https://threejs-journey.com/lessons/cameras>`_

Solution #2: camera rotating around the cube
||||||||||||||||||||||||||||||||||||||||||||
.. raw:: html

  <p align="center">
    <a href="https://codepen.io/raul23/pen/rNZmEpb" target="_blank">
      <img src="./images/07_cameras_solution_02.png">
    </a>
  </p>

`:information_source:` 

 - **Code:** 
 
   - `codepen.io <https://codepen.io/raul23/pen/rNZmEpb>`_ (run the code directly from the browser, commented code from the video lecture)
   - `github.com <https://github.com/raul23/threejs-journey/tree/main/code/07-cameras/exercise/custom-controls/solution_02>`_ (source code)
 - **Reference:** code from `07. Cameras (threejs-journey.com) \
   <https://threejs-journey.com/lessons/cameras>`_

Built-in controls: ``OrbitControls``
''''''''''''''''''''''''''''''''''''
.. raw:: html

  <p align="center">
    <a href="https://codepen.io/raul23/pen/rNZmEpb" target="_blank">
      <img src="./images/07_cameras_OrbitControls.png">
    </a>
  </p>

`:information_source:` 

 - **Code:** 
 
   - `codepen.io <https://codepen.io/raul23/pen/rNZmEpb>`_ (run the code directly from the browser, commented code from the video lecture)
   - `github.com <https://github.com/raul23/threejs-journey/tree/main/code/07-cameras/exercise/built-in-controls>`_ (source code)
 - **Reference:** code from `07. Cameras (threejs-journey.com) \
   <https://threejs-journey.com/lessons/cameras>`_
   
Lesson #8: Fullscreen and resizing [medium]
"""""""""""""""""""""""""""""""""""""""""""
TODO
