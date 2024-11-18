import { useGLTF } from '@react-three/drei'

export function CeluritModel(props) {
    const { nodes, materials } = useGLTF('/model/celurit.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={materials.Material}
                    position={[-0.143, 1.171, 0.006]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={0.053}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/model/celurit.glb')
