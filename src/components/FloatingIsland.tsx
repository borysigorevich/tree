import {useLoader} from '@react-three/fiber'
import React from 'react';
import {BufferAttribute, Color, Mesh, MeshStandardMaterial} from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

export const FloatingIsland = () => {

    const gltf = useLoader(GLTFLoader, '/models/floating_island.glb')

    React.useEffect(() => {
        if (!gltf) return

        const mesh = gltf.scene.children[0] as Mesh
        const uvc = (mesh.geometry.attributes.uv as BufferAttribute).array
        mesh.geometry.setAttribute('uv2', new BufferAttribute(uvc, 2));
        const meshMaterial = mesh.material as MeshStandardMaterial

        meshMaterial.lightMap = meshMaterial.map
        meshMaterial.lightMapIntensity = 400
        meshMaterial.color = new Color(0.04, 0.06, 0.1)


    }, [gltf])

    return (
        <primitive object={gltf.scene}/>
    );
};