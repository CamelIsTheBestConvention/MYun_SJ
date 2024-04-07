import "../../style/common/logoImg.scss"
import LogoImgImg from "../../img/myun_logo.svg"

const LogoImg:React.FC<{}> = () => {
    return (
        <>
            <div className="logo-img-box">
                <img src={LogoImgImg} alt="" />
            </div>
        </>
    )
}
export default LogoImg