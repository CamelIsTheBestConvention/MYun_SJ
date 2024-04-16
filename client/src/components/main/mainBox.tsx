import mainLogo from "../../img/main_myun.png"
import "../../style/main/mainBox.scss"

const MainBox = () => {

    return (
        <>
            <div className="mainBox-wrapper">
                <div className="mainBox-logoWrapper">
                    <img src={mainLogo} alt="" />
                </div>
                <div className="mainBox-btnWrapper">
                    <button>L O G I N</button>
                </div>
                <div className="mainBox-btnWrapper">
                    <button>S I G N - U P</button>
                </div>
            </div>
        </>
    )
}
export default MainBox