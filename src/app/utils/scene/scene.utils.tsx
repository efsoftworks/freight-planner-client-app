"use client";
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { loadCamera } from './camera.util';
import { loadSky } from './sky.util';
import { loadLight } from './light.util';
import { loadFloor } from './floor.util';
import ModesSidebarComponent from '@/app/components/sidebars/modes.sidebar.component';
import ModesButtonComponent from '@/app/components/buttons/modes.button.component';

/**
 * The SceneUtils component creates a Three.js scene and loads elements such as camera, sky, and light to the scene 
 * using the respective helper functions.
 * @returns {JSX.Element} The JSX element representing the container for the Three.js scene.
 */
export function SceneUtils() : JSX.Element{
    const containerRef = useRef<HTMLDivElement>(null);

    const [modesSidebar, setModesSidebar] = useState<boolean>(false);

    useEffect(() => {
        // Creates a Three.js scene.
        const scene = new THREE.Scene();
        // Loads the camera.
        loadCamera(scene, containerRef);
        // Loads the sky.
        loadSky(scene);
        // Loads the light.
        loadLight(scene);
        //
        loadFloor(scene);

        const axesHelper = new THREE.AxesHelper( 1200 );
        scene.add( axesHelper );
    }, []);

    return <div ref={containerRef}>
        <ModesButtonComponent open={() => setModesSidebar(!modesSidebar)}/>
        <ModesSidebarComponent open={modesSidebar} label="Menu"/>
    </div>
}
