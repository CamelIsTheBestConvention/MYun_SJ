import { useState } from "react"
import "../../style/comment/commentBox.scss"
import axios from "axios";

const CommentForm = () => {
    // const [comment, setComment] = useState("");

    // const commentInputChange = (e:any) => {
    //     setComment(e.target.value);
    // };

    // const handleSubmit = async (e:any) => {
    //     e.preventDefault();

    //     try {
    //         await axios.post('http://localhost:', { comment });
    //         setComment("");
    //     } catch (error) {
    //         console.error("댓글 전송 실패:", error);
    //     }
    // }

    return (
        <>
            {/* <form onSubmit={handleSubmit}>
                <div className="commentbox-form">
                    <h3>댓글 달기</h3>
                    <div className="commentbox-input">
                        <input type="text" placeholder="댓글을 입력하세요." value={comment} onChange={commentInputChange} />
                        <button type="submit">COMMENT</button>
                    </div>
                </div>
            </form> */}
        </>
    )
}
export default CommentForm