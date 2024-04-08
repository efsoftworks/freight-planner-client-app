import React, { useEffect } from "react"
import * as THREE from "three"
import { IContainerObjectUtil } from "@/app/types/interfaces/utils/scene/objects/container.object.util.interface.type"
import { scale_meter_px } from "@/app/constants/scene/scene.constants"

const ContainerObjectUtil = (props: IContainerObjectUtil) => {
    const weight = props.width * 100;
    const height = props.height * scale_meter_px;
    const length = props.length * scale_meter_px;
    const containerCapacity = weight * height * length;

    var material = new THREE.MeshLambertMaterial({
        color: 0x949494,
        side: THREE.DoubleSide
    });

    var transparentMaterial = new THREE.MeshLambertMaterial({
        color: 0x949494,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.5,
    });

    useEffect(() => {
        loadContainer();
    }, [props.scene])

    const loadContainer = () => {
        var plane;
        var container = new THREE.Group();

        /**
         * Oluşturulan kutunun alt kısmını temsil eden geometriyi oluşturur.
         * @param {number} weight - Kutunun genişliği.
         * @param {number} length - Kutunun uzunluğu.
         * @returns {THREE.BoxGeometry} - Oluşturulan geometri.
        * */
        const frontGeometry = new THREE.BoxGeometry(weight + 5, 5, length + 5);
        // Geometriyi belirli bir konuma çevirme:
        // Kutunun ortasından -5 birim sol ve yukarıda, ve uzunluğunun yarısı kadar sağ ve geride konumlandırılır.
        frontGeometry.translate(weight / 2 - 5 / 2, - 5 / 2 - 0.1, length / 2 - 5 / 2);

        plane = new THREE.Mesh(frontGeometry, material)
        plane.name = "front"
        container.add(plane)
        plane.castShadow = true;
        plane.receiveShadow = true;

        const backGeometry = new THREE.BoxGeometry(weight + 5, 5, length + 5);
        backGeometry.translate(weight / 2 - 5 / 2, -5 / 2 - 0.1, -(length / 2 - 5 / 2)); // Negative z-axis translation
        plane = new THREE.Mesh(backGeometry, transparentMaterial)
        plane.name = "back"
        //container.add(plane)

        const topGeometry = new THREE.BoxGeometry(weight + 5, height, 5);
        topGeometry.translate(weight / 2 - 5 / 2, height / 2, -5 / 2 - 0.1);
        plane = new THREE.Mesh(topGeometry, transparentMaterial)
        container.add(plane)

        const bottomGeometry = new THREE.BoxGeometry(weight + 5, 5, length + 5);
        bottomGeometry.translate(weight / 2 - 5 / 2, height + 5 / 2 + 0.1, length / 2 - 5 / 2);
        plane = new THREE.Mesh(bottomGeometry, transparentMaterial)
        //container.add(plane)

        const rightSideGeometry = new THREE.BoxGeometry(5, height, length);
        rightSideGeometry.translate(-5 / 2 - 0.1, height / 2, length / 2);
        plane = new THREE.Mesh(rightSideGeometry, transparentMaterial)
        container.add(plane)

        const leftSideGeometry = new THREE.BoxGeometry(5, height, length);
        leftSideGeometry.translate(weight - 5 / 2 + 0.1, height / 2, length / 2);
        plane = new THREE.Mesh(leftSideGeometry, transparentMaterial)
        //container.add(plane)

        loadTruck(container)
    }

    const loadTruck = (container: THREE.Group) => {
        props.scene.add(container);
    }

    return null
}

export default ContainerObjectUtil