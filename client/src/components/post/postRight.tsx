import styled from "styled-components"
import PostList from "./postList"

const PostRight = () => {
    return (
        <>
            <PostListBox>
                <PostList />
            </PostListBox>
        </>
    )
}
export default PostRight

const PostListBox = styled.div`
    width: 700px;
    background-color: aliceblue;
    margin: 20px;
`