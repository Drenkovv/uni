// Анимация кнопок GSAP
gsap.from(".btn", {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out"
});

// THREE.js: Голографический эффект
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(300, 300);
document.getElementById('holoCanvas').appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({
    color: 0x00ffcc, wireframe: true
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 3;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
