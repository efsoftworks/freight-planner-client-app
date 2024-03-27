import * as THREE from 'three';

export function loadLight(scene: THREE.Scene): void {
    let light = new THREE.DirectionalLight(0xFFFFFF, 0.8);
    light.position.set(120, 1000, -150);
    light.castShadow = true;
    light.shadow.bias = -0.001;
    light.shadow.mapSize.width = 4096; // default
    light.shadow.mapSize.height = 4096; // default
    light.shadow.camera.near = 0.5; // default
    light.shadow.camera.far = 3000; // default
    light.name = "directionalLight"

    light.shadow.camera.left = 3000;
    light.shadow.camera.right = -3000;
    light.shadow.camera.top = 1000;
    light.shadow.camera.bottom = -1000;
    scene.add(light);
}