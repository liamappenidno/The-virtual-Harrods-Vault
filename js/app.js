// Set up the scene
const scene = new THREE.Scene();

// Set up the camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 10;

// Set up the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x202020); // Set a different background color
document.body.appendChild(renderer.domElement);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

// Create branded cubes
const createCube = (color, positionX) => {
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshBasicMaterial({ color });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.x = positionX;
  scene.add(cube);
  return cube;
};

const diorCube = createCube(0xd3d3d3, -6); // Light Gray, positioned left
const gucciCube = createCube(0x228B22, -2); // Forest Green, left-center
const hermesCube = createCube(0xFFA500, 2); // Orange, right-center
const balenciagaCube = createCube(0xffffff, 6); // White, positioned right

// Handle resizing
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate the cubes
  diorCube.rotation.x += 0.01;
  diorCube.rotation.y += 0.01;

  gucciCube.rotation.x += 0.01;
  gucciCube.rotation.y += 0.01;

  hermesCube.rotation.x += 0.01;
  hermesCube.rotation.y += 0.01;

  balenciagaCube.rotation.x += 0.01;
  balenciagaCube.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();
