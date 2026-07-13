import "./index.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

//scene
const scene = new THREE.Scene();

const windoww = {
  height: window.innerHeight,
  width: window.innerWidth,
};

//camera
const camera = new THREE.PerspectiveCamera(
  75,
  windoww.width / windoww.height,
  0.1,
  1000,
);
// const gltfloder = new GLTFLoader();

// gltfloder.load("./model.glb", (gltf) => {
//   const model = gltf.scene;

//   scene.add(model);
// });

const meshe = new THREE.Mesh(

new THREE.BoxGeometry(1,1,1),
new THREE.MeshBasicMaterial({color:0x00ff00})

)

scene.add(meshe)

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


const raycaster  = new THREE.Raycaster();
const mouse = new THREE.Vector2();
window.addEventListener("mousemove", (event) => {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -((event.clientY / window.innerHeight) * 2 - 1);

  console.log(mouse.x, mouse.y);
});

window.addEventListener("click",()=>{
  raycaster.setFromCamera(mouse,camera);
const intersect = raycaster.intersectObject(meshe)

if(intersect.length){
  meshe.material.color.set("red")
}
}) 




rendrer.setSize(windoww.width, windoww.height);

window.addEventListener("resize", () => {
  windoww.width = window.innerWidth;
  windoww.height = window.innerHeight;

  camera.aspect = windoww.width / windoww.height;
  camera.updateProjectionMatrix();

  rendrer.setSize(windoww.width, windoww.height);
});

rendrer.render(scene, camera);
const controls = new OrbitControls(camera, rendrer.domElement);

controls.enableDamping = true;

const animate = () => {
  requestAnimationFrame(animate);

  controls.update();

  rendrer.render(scene, camera);
};

animate();
