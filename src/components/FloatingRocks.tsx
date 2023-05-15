import {Float} from "@react-three/drei";
import {useLoader} from '@react-three/fiber'
import React from 'react';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

export const FloatingRocks = () => {

    const rock1 = useLoader(GLTFLoader, '/models/floating_rock_1.glb')
    const rock2 = useLoader(GLTFLoader, '/models/floating_rock_2.glb')
    const rock3 = useLoader(GLTFLoader, '/models/floating_rock_3.glb')

    console.log(rock1)

    return (
        <>
            <Float
                speed={1.5}
                rotationIntensity={1}
                floatIntensity={1}
            >

                <primitive object={rock1.scene} position={[-20, -7, -19]}/>
            </Float>


            <Float
                speed={1.2}
                rotationIntensity={1.2}
                floatIntensity={0.6}
            >
                <primitive object={rock2.scene} position={[14, 10, -15]}/>
            </Float>

            <Float
                speed={1.8}
                rotationIntensity={1.4}
                floatIntensity={1.1}
            >
                <primitive object={rock3.scene} position={[16, -10, 7]}/>
            </Float>
        </>
    );
};