import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/Addons.js";
/**
 * Loads the camera to the given Three.js scene and attaches the renderer to the provided container reference.
 * @param {THREE.Scene} scene - The Three.js scene where the camera will be loaded.
 * @param {React.RefObject<HTMLDivElement>} containerRef - The reference to the container element where the renderer will be attached.
 * @returns {void}
 */
export function loadCamera(scene: THREE.Scene, containerRef: React.RefObject<HTMLDivElement>): void {

    // Define the camera parameters.
    const fov = 60;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 1.0;
    const far = 10000.0;

    // Create a PerspectiveCamera with the defined parameters.
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    // Set the initial position of the camera.
    camera.position.set(0, 100, 500)

    // Add fog to the scene for depth perception.
    scene.fog = new THREE.FogExp2(0x89b2eb, 0.000002);


    if (containerRef.current) {
        // Create a WebGL renderer with antialiasing and alpha transparency.

        // Set renderer properties.
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        // Attach the renderer to the container element.
        containerRef.current.appendChild(renderer.domElement);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.minDistance = 100;
        controls.maxDistance = 3000;
        controls.enablePan = false;
        controls.maxPolarAngle = Math.PI / 2;
        controls.minPolarAngle = - Math.PI / 2;
        
        const renderScene = () => {
            requestAnimationFrame(renderScene);
            renderer.render(scene, camera);
        };

        renderScene();
    }

}