import React, { useEffect } from "react";
import * as THREE from "three";

import { IFloorObjectUtil } from "@/app/types/interfaces/utils/scene/objects/floor.object.util.interface.type";

const FloorObjectUtil = (props:IFloorObjectUtil) => {

    useEffect(() => {
        const textureLoader = new THREE.TextureLoader();

        const WIDTH: number = 3000;
        const LENGTH: number = 3000;
        const NUM_X: number = 6;
        const NUM_Z: number = 6;

        const geometry: THREE.PlaneGeometry = new THREE.PlaneGeometry(WIDTH, LENGTH, 1, 1);

        const material: THREE.MeshStandardMaterial = new THREE.MeshStandardMaterial({
            displacementScale: 0.3,
            roughness: 1,
        });

        for (let i: number = 0; i < NUM_X; i++) {
            for (let j: number = 0; j < NUM_Z; j++) {
                const floor: THREE.Mesh = new THREE.Mesh(geometry, material);
                floor.castShadow = false;
                floor.receiveShadow = true;
                floor.rotation.x = -Math.PI / 2;
                floor.position.y = -10;

                props.scene.add(floor);
            }
        }
        
    }, [props.scene]);

    return null; // No need to render anything
};

export default FloorObjectUtil;