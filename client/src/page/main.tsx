import Cube from "../components/main/cube"
import MainBox from "../components/main/mainBox"
import "../style/main/main.scss"
import { Canvas } from "@react-three/fiber"

const Main = () => {
    return (
        <>
            <MainBox />
            <Cube />
        </>
    )
}
export default Main