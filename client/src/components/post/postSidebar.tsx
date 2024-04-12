import "../../style/post/postSidebar.scss"
import write from "../../img/write.png"
import setting from "../../img/gear.png"
import cube from "../../img/cube.png"
import logout from "../../img/logout.png"
import downArrow from "../../img/downArrow.png"
import upArrow from "../../img/upArrow.png"

const PostSidebar = () => {
    return (
        <>
            <div className="postSidebar-box">
                <div className="postSidebar-inner">
                    <p className="postSidebar-inner-nickname">문미새</p>
                    <div className="postSidebar-icon">
                        <a href="/write">
                            <img src={write} alt="" />
                            <p>write</p>
                        </a>
                        <a href="#">
                            <img src={setting} alt="" />
                            <p>setting</p>
                        </a>
                    </div>
                    <div className="postSidebar-icon">
                        <a href="#">
                            <img src={cube} alt="" />
                            <p>cube</p>
                        </a>
                        <a href="#">
                            <img src={logout} alt="" />
                            <p>logout</p>
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
export default PostSidebar