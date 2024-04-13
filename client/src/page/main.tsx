import Element3D from "../components/main/element3D"
import "../style/main/main.scss"
import { Canvas } from "@react-three/fiber"

const Main = () => {
    return (
        <>
            <Canvas style={{width: '100%', height: '100vh'}}>
                <Element3D />
            </Canvas>
        </>
    )
}
export default Main