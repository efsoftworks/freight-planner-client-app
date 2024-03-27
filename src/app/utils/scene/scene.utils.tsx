"use client";
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { loadCamera } from './camera.util';
import { loadSky } from './sky.util';
import { loadLight } from './light.util';

/**
 * The SceneUtils component creates a Three.js scene and loads elements such as camera, sky, and light to the scene 
 * using the respective helper functions.
 * @returns {JSX.Element} The JSX element representing the container for the Three.js scene.
 */
export function SceneUtils() : JSX.Element{
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Creates a Three.js scene.
        const scene = new THREE.Scene();
        // Loads the camera.
        loadCamera(scene, containerRef);
        // Loads the sky.
        loadSky(scene);
        // Loads the light.
        loadLight(scene);

    }, []);

    return <div ref={containerRef}></div>
}
