import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();

// const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

const traingleCount = 1000;
const positions = new Float32Array(traingleCount * 3 * 3);

for (let i = 0; i < traingleCount * 3 * 3; i++) {
  positions[i] = Math.random() - 0.5;
}

const positionsAttribute = new THREE.BufferAttribute(positions, 3);

const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", positionsAttribute);

const material = new THREE.MeshBasicMaterial({
  color: "#f2d480",
  wireframe: true,
});

const boxMesh = new THREE.Mesh(geometry, material);

scene.add(boxMesh);
const sizes = { height: window.innerHeight, width: window.innerWidth };

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

window.addEventListener("dblclick", () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});

const camera = new THREE.PerspectiveCamera(55, sizes.width / sizes.height);

scene.add(camera);
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, sizes: sizes });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const orbitControl = new OrbitControls(camera, canvas);
orbitControl.enableDamping = true;

camera.position.z = 5;
// camera.lookAt(boxMesh2.position);

renderer.render(scene, camera);

const tick = () => {
  // Update controls
  // camera.lookAt(boxMesh2.position);
  orbitControl.update();
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
