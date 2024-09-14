"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { loadCamera } from './camera.util';
import { loadSky } from './sky.util';
import { loadLight } from './light.util';
import FloorObjectUtil from './objects/floor.object.util';
import ContainerObjectUtil from './objects/container.object.util';

import ModesSidebarComponent from '@/app/components/sidebars/modes.sidebar.component';
import ModesButtonComponent from '@/app/components/buttons/modes.button.component';

/**
 * The SceneUtils component creates a Three.js scene and loads elements such as camera, sky, and light to the scene 
 * using the respective helper functions.
 * @returns {JSX.Element} The JSX element representing the container for the Three.js scene.
 */
export function SceneUtils(): JSX.Element {
    const containerRef = useRef<HTMLDivElement>(null);

    const [modesSidebar, setModesSidebar] = useState<boolean>(false);

    const [scene, setScene] = useState<THREE.Scene>(new THREE.Scene()); // Scene state



    useEffect(() => {
        // Creates a Three.js scene.
        const scene = new THREE.Scene();

        // Loads the camera.
        loadCamera(scene, containerRef);
        // Loads the sky.
        loadSky(scene);
        // Loads the light.
        loadLight(scene);

        const axesHelper = new THREE.AxesHelper(1200);
        axesHelper.setColors("red","blue","green");
        scene.add(axesHelper);

        setScene(scene); // Set the scene state
    }, []);

    return <div ref={containerRef}>
        {scene &&
            <>
                <FloorObjectUtil scene={scene} />
                <ContainerObjectUtil scene={scene} width={2.45} height={3} length={13.60}  capacity={1} />
            </>
        }
        <ModesButtonComponent open={() => setModesSidebar(!modesSidebar)} />
        <ModesSidebarComponent open={modesSidebar} label="Menu" />
    </div>
}
