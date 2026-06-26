import "./index.css";
import * as THREE from "three";

//seen
const seane = new THREE.Scene();

//camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

camera.position.z = 5;

//geomatry
const geometry = new THREE.BoxGeometry(1, 1, 1);
const materal = new THREE.MeshBasicMaterial({
  color: "pink",
});

const cube = new THREE.Mesh(geometry, materal);

seane.add(cube);

const canvas = document.querySelector("canvas");

//renderer

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(window.innerHeight, window.innerWidth);

renderer.render(seane, camera);

const animate = () => {
  requestAnimationFrame(animate);

  // Cube rotate karo
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(seane, camera);
};

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
