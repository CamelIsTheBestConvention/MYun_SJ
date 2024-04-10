import PostImgImg from "../../img/misaemococo.png"
import "../../style/post/postList.scss"

interface postList {
    postH2: string; 
    postContent: string;
}

const PostList:React.FC<postList> = ({postH2, postContent}) => {
    return (
        <>
            <div className="postList-box">
                <div className="postList-text">
                    <h2>{postH2}</h2>
                    <div className="postList-content">
                        <span>{postContent}</span>
                    </div>
                </div>

                <div className="postList-img-box">
                    <img src={PostImgImg} alt="" />
                </div>
            </div>
        </>
    )
}
export default PostList