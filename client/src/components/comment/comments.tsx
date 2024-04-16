import "../../style/comment/commentBox.scss"

const Comments = () => {
    return (
        <>
        <div className="commentbox-comments">
            <div className="commentbox-comment">
                <div style={{width: "100%", display: 'flex', justifyContent: "space-between"}}>
                    <h3>닉네임</h3>
                    <span style={{color: "gray"}}>24/03/17</span>
                </div>
                <div className="commentbox-content">
                    <p>댓글 내용</p>
                    <div className="commentbox-content-btn">
                        <p>수정</p>
                        <p>삭제</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Comments