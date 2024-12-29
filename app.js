// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

const container = document.getElementById('3d-container');
renderer.setSize(container.offsetWidth, container.offsetHeight);
container.appendChild(renderer.domElement);

// Add lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

// Load the 3D model
const loader = new THREE.GLTFLoader();
loader.load(
    '3d-model.gltf', // Path to your model file
    (gltf) => {
        const model = gltf.scene;
        model.scale.set(1, 1, 1); // Adjust size if necessary
        model.position.set(0, 0, 0); // Adjust position if necessary
        scene.add(model);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error('An error occurred loading the model:', error);
    }
);

camera.position.z = 5;

// Render loop
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
