import "./index.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//scene
const scene = new THREE.Scene();

const clock = new THREE.Clock();
const windoww = {
  height: window.innerHeight,
  width: window.innerWidth,
};

//const textureloder
const texturelodeare = new THREE.TextureLoader();
const texture = texturelodeare.load(
  "https://images.unsplash.com/photo-1783764245334-1b40eb8efc94?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
);

//const light
const ambentlight = new THREE.AmbientLight("#ffffff", 0.4);

const directnollight = new THREE.DirectionalLight("#FF0000", 4.5);
const directionallighthelper = new THREE.DirectionalLightHelper(directnollight )



directnollight.position.set(2, 5, 1);

//camera
const camera = new THREE.PerspectiveCamera(
  75,
  windoww.height / windoww.width,
  0.1,
  1000,
);
camera.position.z = 1;
camera.position.y = 1;
camera.position.x = 1;
const geometry = new THREE.BoxGeometry(1, 2, 1);
const material = new THREE.MeshStandardMaterial({ color: "white" });
const cube = new THREE.Mesh(geometry, material);
cube.rotation.y = 1;
cube.rotation.x = 1;
scene.add(cube);
scene.add(ambentlight);
scene.add(directnollight);
scene.add(directionallighthelper)




const canvas = document.querySelector("canvas");

const rendrer = new THREE.WebGLRenderer({
  canvas: canvas,
});
rendrer.setSize(windoww.width, windoww.height);

window.addEventListener("resize", () => {});

rendrer.render(scene, camera);
const controls = new OrbitControls(camera, rendrer.domElement);

controls.enableDamping = true;


const animate = () => {
  // const elapsedTime = clock.getElapsedTime();
  // cube.rotation.y = elapsedTime;
  // cube.rotation.x = elapsedTime * 0.5;
  rendrer.render(scene, camera);
  requestAnimationFrame(animate);
};
animate();
