import { useProgress } from "@react-three/drei";

const Loader = () => {
    const { progress } = useProgress()
    return (
        <div className="flex justify-center items-center w-full h-full" >
            <p className="text-primary font-bold">{progress.toFixed(2)}</p>
        </div>
    );
}

export default Loader;