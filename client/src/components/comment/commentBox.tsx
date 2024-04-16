import { useState } from "react"
import "../../style/comment/commentBox.scss"
import CommentForm from "./commentForm"
import Comments from "./comments"

const CommentBox = () => {
    // const [comments, setComments] = useState<comment[]>([]);

    interface Comment {
        
    }

    return (
        <>
            <div className="commentbox-wrapper">
                <CommentForm />
                <Comments />
            </div>
        </>
    )
}
export default CommentBox