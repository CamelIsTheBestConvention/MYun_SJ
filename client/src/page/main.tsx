import Cube from "../components/main/cube"
import MainBox from "../components/main/mainBox"
import "../style/main/main.scss"
import { Canvas } from "@react-three/fiber"

const Main = () => {
    return (
        <>
            <MainBox />
            {/* <Canvas style={{position: "absolute",
                            top: "0",
                            left: "0",
                            height: "100vh",
                            width: "100vw",
                            zIndex: -1}}> */}
                <Cube />
            {/* </Canvas> */}
        </>
    )
}
export default Main