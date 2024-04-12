import "../../style/write/writeSidebar.scss"
import pen from "../../img/pen.png"
import file from "../../img/file.png"
import downArrow from "../../img/downArrow.png"
import upArrow from "../../img/upArrow.png"

const WriteSidebar = () => {
    return (
        <>
            <div className="writeSidebar-box">
                <div className="writeSidebar-inner">
                    <p className="writeSidebar-inner-nickname">Navigator</p>
                    <div className="writeSidebar-icon">
                        <a href="/post">
                            <img src={pen} alt="" />
                            <p>complete</p>
                        </a>
                        <a href="/post">
                            <img src={file} alt="" />
                            <p>addfile</p>
                        </a>
                    </div>
                    <div className="postSidebar-arrow">
                        <img src={upArrow} alt="" />
                        <img src={downArrow} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default WriteSidebar