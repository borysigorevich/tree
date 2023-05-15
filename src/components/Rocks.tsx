import {useLoader} from '@react-three/fiber'
import React from 'react';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

export const Rocks = () => {

    const rocks = useLoader(GLTFLoader, '/models/rocks.glb')

    return (
        <>
            <primitive object={rocks.scene}/>
        </>
    );
}