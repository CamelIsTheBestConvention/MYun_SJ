import styled from "styled-components"
import PostList from "./postList"

const PostRight = () => {
    return (
        <>
            <PostListBox>
                <PostList postH2="문미새1" postContent="문미새내용1" />
                <PostList postH2="문미새2" postContent="문미새내용2" />
                <PostList postH2="문미새3" postContent="문미새내용3" />
                <PostList postH2="문미새4" postContent="문미새내용4" />
            </PostListBox>
        </>
    )
}
export default PostRight

const PostListBox = styled.div`
    width: 700px;
    background-color: #f4f4f4;
    margin: 20px;
`