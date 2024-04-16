// import PostImgImg from "../../img/misaemococo.png"
import { Link } from "react-router-dom";
import "../../style/post/postList.scss"

interface postListProps {
    postTitle: string;
    imgUrl: string;
    postId: Number;
}

const PostList:React.FC<postListProps> = ({postId, postTitle, imgUrl}) => {
    return (
        <>
            <Link to={`/postdetail/${postId}`}>
                <div className="postList-box">
                    <div className="postList-text">
                        <h2>{`${postId}. ${postTitle}`}</h2>
                    </div>
                    <div className="postList-img-box">
                        <img src={imgUrl} alt="" />
                    </div>
                </div>
            </Link>
        </>
    )
}
export default PostList