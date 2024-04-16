import "../../style/post/postCategory.scss"
import { Link } from "react-router-dom";

const PostCategory = () => {
    return (
        <>
            <div className="post-category-box">
                <p className="post-category-title">카테고리</p>
                <ul className="post-category-list">
                    <li><Link to="/post">전체 게시글</Link></li>
                    <li><Link to="/post/크래프톤정글">크래프톤정글</Link></li>
                    <li><Link to="/post/프론트엔드">프론트엔드</Link></li>
                    <li><Link to="/post/백엔드">백엔드</Link></li>
                    <li><Link to="/post/TIL">TIL</Link></li>
                    <li><Link to="/post/로스트아크">로스트아크</Link></li>
                </ul>
            </div>
        </>
    )
}
export default PostCategory