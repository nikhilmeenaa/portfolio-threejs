import * as THREE from "./three.js";

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1.4, 1);
const material = new THREE.MeshBasicMaterial({ color: "red" });

const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

const sizes = {
  height: 500,
  width: 700,
};

const camera = new THREE.PerspectiveCamera(140, sizes.height / sizes.width);
scene.add(camera);

const canvas = document.querySelector(".webgl");

const renderer = new THREE.WebGLRenderer({ canvas: canvas, sizes: sizes });

renderer.setSize(sizes.width, sizes.height);

camera.position.z = 3;
camera.position.y = -2;
camera.position.x = 1;
// camera.
renderer.render(scene, camera);
