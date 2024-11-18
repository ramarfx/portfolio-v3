import { useEffect, useRef } from "react";
import { ParticleAnimation } from "../components/particle";

const Tes = () => {
    const canvasRef = useRef();

    useEffect(() => {
        const options = {
            quantity: 80,
            staticity: 50,
            ease: 50,
        };
        new ParticleAnimation(canvasRef.current, options);
    }, []);
    return (
        <div className="w-full h-screen bg-black">
            <canvas ref={canvasRef}></canvas>
        </div>
    );
}

export default Tes;