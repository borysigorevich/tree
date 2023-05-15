import {Environment, Float, OrbitControls, PerspectiveCamera} from "@react-three/drei";
import React from 'react';
import {FloatingIsland} from "./FloatingIsland";
import {FloatingRocks} from "./FloatingRocks";
import {Grass} from "./Grass";
import {Portal} from "./Portal";
import {Rocks} from "./Rocks";
import {Three} from "./Three";

const SceneContainer = () => {
    return (
        <React.Suspense fallback={null}>
            <Environment background='only' files='/texture/bg.hdr'/>
            <Environment background={false} files='/texture/envmap.hdr'/>


            <Float
                speed={0.5}
                rotationIntensity={0.6}
                floatIntensity={0.6}
            >
                <FloatingIsland/>
                <Portal/>
                <Rocks/>
                <Three/>
                <Grass/>
            </Float>

            <FloatingRocks/>

            <PerspectiveCamera
                makeDefault
                fov={50}
                position={[-1.75, 10.85, 20.35]}
            />
            <OrbitControls
                target={[1, 5, 0]}
                maxPolarAngle={Math.PI * 0.5}
            />
        </React.Suspense>
    );
};

export default SceneContainer;