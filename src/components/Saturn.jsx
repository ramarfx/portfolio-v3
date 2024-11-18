import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { SaturnModel } from "./model/saturn";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { KernelSize, Resolution } from 'postprocessing'
import { ReinhardToneMapping } from "three";
import { useRef, useState } from "react";
import { lerp } from "three/src/math/MathUtils.js";

const Saturn = () => {
    const [isHover, setIsHover] = useState(false)

    return (
        <div className="h-[350px] -mt-8">
            <Canvas gl={{
                antialias: true,
                toneMapping: ReinhardToneMapping
            }}>
                <Environment preset="sunset" />
                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                />

                <EffectComposer>
                    <Bloom
                        intensity={1.0} // The bloom intensity.
                        kernelSize={KernelSize.LARGE} // blur kernel size
                        luminanceThreshold={0.9} // luminance threshold. Raise this value to mask out darker elements in the scene.
                        luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
                        mipmapBlur={false} // Enables or disables mipmap blur.
                        resolutionX={Resolution.AUTO_SIZE} // The horizontal resolution.
                        resolutionY={Resolution.AUTO_SIZE} // The vertical resolution.
                    />
                </EffectComposer>

                <ControlledDirectionalLight isHover={isHover} setIsHover={setIsHover} />

                <group>
                    <SaturnModel isHover={isHover} setIsHover={setIsHover} />
                </group>


            </Canvas>
        </div>
    );
}

const ControlledDirectionalLight = ({ isHover, ...props }) => {
    const [x, setX] = useState(2.8); // Posisi awal pada sumbu X
    const lightRef = useRef();
    // useHelper(lightRef, DirectionalLightHelper, "red");


    useFrame(() => {
        const targetX = isHover ? -5 : 2.8; // Tujuan posisi x
        setX((prevX) => lerp(prevX, targetX, 0.1)); // Interpolasi
    });

    return (
        <directionalLight
            {...props}
            ref={lightRef}
            power={1000}
            position={[x, 1.9, 4.5]} // Menggunakan x yang terinterpolasi
            color={0xffffff}
        />
    );
};

export default Saturn;