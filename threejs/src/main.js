// import * as THREE from "three";



// //set ready 
// const scene = new THREE.Scene();

// //camera setuped how wide it is and how much things it see and all 
// const camera = new THREE.PerspectiveCamera(75,window.innerWidth,window.innerHeight,0.01,1000);

// const geometry = new THREE.BoxGeometry(1,2,1);
// const material = new THREE.MeshBasicMaterial({color: "#EF4444"});
// const sylander  = new THREE.Mesh(geometry,material);



// scene.add(sylander);

// const canvas = document.querySelector("canvas")


// camera.position.z = 5
// camera.position.y= 1
// camera.position.x=1



// const rendrer = new THREE.WebGLRenderer({
//   canvas: canvas,
// });


// rendrer.setSize(window.innerWidth, window.innerHeight); 
// rendrer.render(scene,camera);

















import "./index.css";
import * as THREE from "three";

//scene

const scene = new THREE.Scene();

//camera

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.z = 5
camera.position.y= 1
camera.position.x=1
const geometry = new THREE.BoxGeometry(1, 2, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
 cube.rotation.y=1
 cube.rotation.x = 1

scene.add(cube);

const canvas = document.querySelector("canvas");

const rendrer = new THREE.WebGLRenderer({
  canvas: canvas,
});
rendrer.setSize(window.innerWidth, window.innerHeight);

rendrer.render(scene,camera);
