import * as THREE from "three"


export function loadFloor(scene: any): void {
    const textureLoader = new THREE.TextureLoader();

    const WIDTH = 1800
    const LENGTH = 1800
    const NUM_X = 6
    const NUM_Z = 6

    const geometry = new THREE.PlaneGeometry(WIDTH, LENGTH, 1, 1);

    const material = new THREE.MeshStandardMaterial(
        {
            displacementScale: 0.3,
            roughness: 1,
        })
    for (let i = 0; i < NUM_X; i++) {
        for (let j = 0; j < NUM_Z; j++) {
            const floor = new THREE.Mesh(geometry, material)
            floor.castShadow = false;
            floor.receiveShadow = true;
            floor.rotation.x = - Math.PI / 2
            floor.position.y = - 110



            scene.add(floor)
        }
    }
}