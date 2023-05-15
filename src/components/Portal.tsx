import {useFrame, useLoader} from '@react-three/fiber'
import React from 'react';
import {
    AlwaysStencilFunc,
    DoubleSide,
    EquirectangularReflectionMapping,
    LinearEncoding,
    Mesh,
    MeshStandardMaterial,
    ReplaceStencilOp,
    Scene,
    TextureLoader,
    WebGLRenderTarget
} from "three";
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'
import {FillQuad} from "./FillQuad";

const scene = new Scene()
scene.background = new TextureLoader().load(
    '/texture/galaxy.jpg',
    (texture) => {
        texture.encoding = LinearEncoding
        texture.mapping = EquirectangularReflectionMapping
    }
)

const target = new WebGLRenderTarget(window.innerWidth, window.innerHeight)
window.addEventListener('resize', () => {
    target.setSize(window.innerWidth, window.innerHeight)
})

export const Portal = () => {

    const portal = useLoader(GLTFLoader, '/models/portal.glb')
    const mask = useLoader(GLTFLoader, '/models/portal_mask.glb')

    useFrame((state) => {
        state.gl.setRenderTarget(target)
        state.gl.render(scene, state.camera)
        state.gl.setRenderTarget(null)
    })

    React.useEffect(() => {
        const portalMesh = portal.scene.children[0] as Mesh
        (portalMesh.material as MeshStandardMaterial).envMapIntensity = 3.5

        const maskMesh = mask.scene.children[0] as Mesh
        const maskMeshMaterial = maskMesh.material as MeshStandardMaterial
        maskMeshMaterial.side = DoubleSide
        maskMeshMaterial.stencilWrite = true
        maskMeshMaterial.stencilRef = 1
        maskMeshMaterial.stencilFunc = AlwaysStencilFunc
        maskMeshMaterial.stencilZPass = ReplaceStencilOp
    }, [portal, mask])

    return (
        <>
            <primitive object={portal.scene}/>
            <primitive object={mask.scene}/>
            <FillQuad
                map={target.texture}
                maskId={1}
            />
        </>
    );
};
