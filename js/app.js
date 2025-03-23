const scene = new THREE.Scene();
scene.background = new THREE.Color("#000000");

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("scene") });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

const brands = [
  { name: 'Dior', color: '#e6e6e6', position: [-6, 0, 0] },
  { name: 'Gucci', color: '#3a5d3e', position: [-2, 0, 0] },
  { name: 'Hermès', color: '#ff6f00', position: [2, 0, 0] },
  { name: 'Balenciaga', color: '#ffffff', position: [6, 0, 0] },
];

brands.forEach(brand => {
  const geometry = new THREE.BoxGeometry(2, 2, 2);
  const material = new THREE.MeshStandardMaterial({ color: brand.color });
  const cube = new THREE.Mesh(geometry, material);
  cube.position.set(...brand.position);
  scene.add(cube);
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
