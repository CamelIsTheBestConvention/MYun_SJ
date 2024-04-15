import LogoImg from "../components/common/logoImg"
import PostTitle from "../components/post/postTitle"
import PostDetailBox from "../components/postdetail/postDetailBox"

const PostDetail = () => {
    return (
        <>
            <LogoImg />
            <PostTitle mainText="D E T A I L" subText="게시글" />
            <PostDetailBox />
        </>
    )
}
export default PostDetail