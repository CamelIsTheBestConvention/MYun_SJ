import styled from "styled-components"
import PostDetailSidebar from "./postDetailSidebar"
import PostDetailLeft from "./postDetailLeft"
import PostDetailBox from "./postDetailBox"


const PostDetailWrapper = () => {
    return (
        <>
            <PostWrapperBox>
                <PostDetailLeft />
                <PostDetailBox />
                <PostDetailSidebar />
            </PostWrapperBox>
        </>
    )
}
export default PostDetailWrapper

const PostWrapperBox = styled.div`
    width: 92%;
    margin: 0 auto;
    display: flex;
`