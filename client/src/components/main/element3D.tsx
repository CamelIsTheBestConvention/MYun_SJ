import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react"
import { Mesh } from "three"
import * as THREE from "three"

const Element3D = () => {
    const refMesh = useRef<Mesh | null>(null);

    return (
        <>
            <directionalLight position={[1, 1, 1]} />

            <axesHelper scale={10} />
            <OrbitControls />

            <mesh ref={refMesh}
                position-y={2}
                rotation-z={THREE.MathUtils.degToRad(45)}
                scale={[2, 1, 1]}
            >
                <boxGeometry />
                <meshStandardMaterial color="#e67e22" />
                <axesHelper />

                <mesh>
                    <sphereGeometry />
                    <meshStandardMaterial color="red" />
                </mesh>
            </mesh>
        </>
    )
}
export default Element3D