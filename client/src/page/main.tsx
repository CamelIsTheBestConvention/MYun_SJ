import MyElement3D3 from "../components/main/MyElement3D3"
import "../style/main/main.scss"
import { Canvas } from "@react-three/fiber"

const Main = () => {
    return (
        <>
            <Canvas camera={{near: 3.5, far: 6}} style={{width: '100%', height: '100vh'}}>
                <MyElement3D3 />
            </Canvas>
        </>
    )
}
export default Main