import "./index.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//scene
const scene = new THREE.Scene();

const clock = new THREE.Clock();
const windoww = {
  height: window.innerHeight,
  width: window.innerWidth,
};

//camera
const camera = new THREE.PerspectiveCamera(
  75,
  windoww.height / windoww.width,
  0.1,
  1000,
);

const gltfloder  = new GLTFLoader();

gltfloder.load("./model.glb",(gltf)=>{
const model = gltf.scene

scene.add(model)
})


//const light
const ambentlight = new THREE.AmbientLight("#ffffff", 1.01);

const directnollight = new THREE.DirectionalLight("#ffffff", 4.5);

directnollight.position.set(2, 5, 1);

camera.position.z = 1;
camera.position.y = 1;
camera.position.x = 1;

scene.add(ambentlight);
scene.add(directnollight);
const canvas = document.querySelector("canvas");

const rendrer = new THREE.WebGLRenderer({
  canvas: canvas,
});
rendrer.setSize(windoww.width, windoww.height);

window.addEventListener("resize", () => {
  ((windoww.width = window.innerWidth), (windoww.height = window.innerHeight));
});

rendrer.render(scene, camera);
const controls = new OrbitControls(camera, rendrer.domElement);

controls.enableDamping = true;

const animate = () => {
  const elapsedTime = clock.getElapsedTime();

  rendrer.render(scene, camera);
  requestAnimationFrame(animate);
};
animate();
