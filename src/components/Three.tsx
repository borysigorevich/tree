import {useLoader} from '@react-three/fiber'
import React from 'react';
import {Mesh, MeshStandardMaterial} from "three";
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

export const Three = () => {

    const three = useLoader(GLTFLoader, '/models/trees.glb')

    React.useEffect(() => {
        if(!three) return

        const threeMeshMaterial = (three.scene.children[0] as Mesh).material as MeshStandardMaterial

        threeMeshMaterial.envMapIntensity = 2.5
    }, [three])

    return (
        <>
            <primitive object={three.scene}/>
        </>
    );
};