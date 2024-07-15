import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Axes Helper
 */
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

/**
 * Objects
 */
const group = new THREE.Group();
group.scale.y = 3;
group.scale.x = 1.5;
group.rotation.y = 6;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube1.position.x = -1.5;
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube2.position.x = 0;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: "brown" })
);
cube3.position.x = 1.5;
group.add(cube3);

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
// camera.lookAt(new THREE.Vector3(0, - 1, 0))
scene.add(camera);

// group.position.y = 2;

camera.lookAt(group.position);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

// import * as THREE from "three";

// const scene = new THREE.Scene();
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: "red" });

// const mesh = new THREE.Mesh(geometry, material);

// scene.add(mesh);

// const sizes = {
//   height: 600,
//   width: 500,
// };

// const camera = new THREE.PerspectiveCamera(110, sizes.height / sizes.width);

// const canvas = document.querySelector(".webgl");

// scene.add(camera);

// const axesHelper = new THREE.AxesHelper();
// scene.add(axesHelper);

// const renderer = new THREE.WebGLRenderer({ canvas: canvas, sizes: sizes });
// renderer.setSize(sizes.width, sizes.height);

// camera.position.z = 3;
// // camera.position.x = 1;

// camera.lookAt(mesh.position);

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

// // renderer.render(scene, camera);
