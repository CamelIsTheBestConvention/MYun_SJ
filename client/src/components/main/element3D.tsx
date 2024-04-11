import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react"
import { Mesh } from "three"

const Element3D = () => {
    const refMesh = useRef<Mesh | null>(null);

    return (
        <>
            <directionalLight position={[1, 1, 1]} />

            <axesHelper scale={10} />
            <OrbitControls />

            <mesh ref={refMesh} position={[2, 0, 0]}>
                <boxGeometry />
                <meshStandardMaterial color="#e67e22" />
            </mesh>
        </>
    )
}
export default Element3D