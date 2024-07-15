import * as THREE from "three";
import gsap from "gsap";

const scene = new THREE.Scene();

const mesh = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "red" })
);

scene.add(mesh);

const sizes = {
  height: 600,
  width: 500,
};

const camera = new THREE.PerspectiveCamera(110, sizes.height / sizes.width);

const canvas = document.querySelector(".webgl");

scene.add(camera);

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

const renderer = new THREE.WebGLRenderer({ canvas: canvas, sizes: sizes });
renderer.setSize(sizes.width, sizes.height);

camera.position.z = 3;
// camera.position.x = 1;

camera.lookAt(mesh.position);

// by using set interval

// let a = 0;
// setInterval(() => {
//   const rem = 1.3 * Math.sin(a * 0.05);
//   mesh.position.x = rem;
//   const y = 1.3 * Math.cos(a * 0.05);
//   mesh.position.y = y;
//   renderer.render(scene, camera);
//   a++;
//   //   console.log("we are here");
// }, 15);

renderer.render(scene, camera);

let pos = 0;

gsap.to(mesh.position, { duration: 2, delay: 0.5, x: 2 });
gsap.to(mesh.position, { duration: 2, delay: 2.5, x: 0 });

const tick = () => {
  //   console.log("we are inside");
  //   pos += 0.01;
  //   camera.position.x = Math.sin(pos);
  //   camera.position.y = Math.cos(pos);
  //   mesh.rotation.y = pos * 3;
  renderer.render(scene, camera);
  //   camera.lookAt(mesh.position);
  window.requestAnimationFrame(tick);
};

tick();
