import * as three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new three.Scene();
const geometry = new three.BoxGeometry(1, 1.4, 1);
const material = new three.MeshBasicMaterial({ color: "red" });

const mesh = new three.Mesh(geometry, material);

scene.add(mesh);

const sizes = { height: 500, width: 500 };

const camera = new three.PerspectiveCamera(55, sizes.height / sizes.width);
scene.add(camera);
const canvas = document.querySelector(".webgl");

const cameraControls = new OrbitControls(camera, canvas);
cameraControls.enableDamping = true;

const renderer = new three.WebGLRenderer({ canvas: canvas, sizes: sizes });
renderer.setSize(sizes.width, sizes.height);
camera.position.z = 3;

renderer.render(scene, camera);

const tick = () => {
  renderer.render(scene, camera);
  cameraControls.update();
  window.requestAnimationFrame(tick);
};

tick();
