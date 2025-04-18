import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  10,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(0, 15, 30);
camera.lookAt(0, 0, 0);

const canvas = document.getElementById("bgCanvas");
const container = document.querySelector(".canvas-wrapper");
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  canvas,
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(10, 20, 10);
scene.add(dirLight);


const rods = [];
const count = 70;
const spacing = 0.25;

const geometry = new THREE.CylinderGeometry(0.1, 0.1, 2.1, 32);
const material = new THREE.MeshStandardMaterial({
  color: 0xffffff,
  metalness: 0,
  roughness: 0.9,
  side: THREE.DoubleSide,
  transparent: true,
  opacity: 0.1,
  depthWrite: false,
});

for (let i = 0; i < count; i++) {
  const rod = new THREE.Mesh(geometry, material.clone());
  rod.position.x = (i - count / 2) * spacing;
  rod.rotation.y = Math.PI / 2; // Stand them upright
  scene.add(rod);
  rods.push(rod);
}


function animate(time) {
  requestAnimationFrame(animate);
  time *= 0.001;

  const duration = 12;
  const t = (time % duration) / duration;
  const ease = 0.5 - 0.5 * Math.cos(Math.PI * 2 * t);

  rods.forEach((rod, index) => {
    rod.rotation.x = ease * Math.PI * 2 + index * 0.2;
  });

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
