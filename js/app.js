// Create the scene
const scene = new THREE.Scene();
scene.background = new THREE.Color("#000000"); // Set background color

// Set up the camera
const camera = new THREE.PerspectiveCamera(
  75, // Field of view
  window.innerWidth / window.innerHeight, // Aspect ratio
  0.1, // Near clipping plane
  1000 // Far clipping plane
);
camera.position.set(0, 0, 10); // Position the camera

// Set up the renderer
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("scene") });
renderer.setSize(window.innerWidth, window.innerHeight);

// Add a point light to the scene
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

// Define the brands with their properties
const brands = [
  { name: 'Dior', color: '#e6e6e6', position: [-6, 0, 0] },
  { name: 'Gucci', color: '#3a5d3e', position: [-2, 0, 0] },
  { name: 'Hermès', color: '#ff6f00', position: [2, 0, 0] },
  { name: 'Balenciaga', color: '#ffffff', position: [6, 0, 0] },
];

// Create and add a cube for each brand
brands.forEach(brand => {
  const geometry = new THREE.BoxGeometry(2, 2, 2); // Cube dimensions
  const material = new THREE.MeshStandardMaterial({ color: brand.color });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(...brand.position);
  scene.add(cube);
});

// Animation loop to render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

// Start the animation
animate();

// Handle window resize events
window.addEventListener('resize', () => {
  // Update camera aspect ratio and projection matrix
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  // Adjust renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);
});
