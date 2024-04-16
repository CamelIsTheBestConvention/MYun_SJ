// import PostImgImg from "../../img/misaemococo.png"
import "../../style/post/postList.scss"

interface postListProps {
    postTitle: string;
    imgUrl: string;
}

const PostList:React.FC<postListProps> = ({postTitle, imgUrl}) => {
    return (
        <>
            <div className="postList-box">
                <div className="postList-text">
                    <h2>{postTitle}</h2>
                </div>

                <div className="postList-img-box">
                    <img src={imgUrl} alt="" />
                </div>
            </div>
        </>
    )
}
export default PostList