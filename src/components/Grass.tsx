import {useLoader} from '@react-three/fiber'
import React from 'react';
import {Color, DoubleSide, Mesh, MeshStandardMaterial} from "three";
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

export const Grass = () => {

    const grass = useLoader(GLTFLoader, '/models/grass.glb')

    React.useEffect(() => {
        if (!grass) return
        const grassMeshMaterial = (grass.scene.children[0] as Mesh).material as MeshStandardMaterial

        grassMeshMaterial.alphaToCoverage = true
        grassMeshMaterial.transparent = true
        grassMeshMaterial.map = grassMeshMaterial.emissiveMap
        grassMeshMaterial.emissive = new Color(0.5, 0.5, 0.5)
        grassMeshMaterial.side = DoubleSide

    }, [grass])

    return (
        <primitive object={grass.scene}/>
    );
};