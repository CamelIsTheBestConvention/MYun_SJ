import postProfileImg from "../../img/mr_rbtree.svg"
import "../../style/post/postProfile.scss"

const PostProfile = () => {
    return (
        <>
            <div className="profile-box">
                <div className="profile-img-box">
                    <img className="profile-img" src={postProfileImg} alt="profileImg" />
                </div>
                <h2 className="profile-nickname">문미새</h2>
            </div>
        </>
    )
}
export default PostProfile