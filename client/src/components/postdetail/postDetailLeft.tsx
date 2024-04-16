import styled from "styled-components"
import PostDetailList from "./postDetailList"
import PostDetailProfile from "./postDetailProfile"

const PostDetailLeft = () => {
    return (
        <>
            <PostDetailLeftBox>
                <PostDetailProfile />
                <PostDetailList />
            </PostDetailLeftBox>
        </>
    )
}
export default PostDetailLeft

const PostDetailLeftBox = styled.div`
    width: 230px;
`