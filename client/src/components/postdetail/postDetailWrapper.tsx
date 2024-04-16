import styled from "styled-components"
import PostDetailSidebar from "./postDetailSidebar"
import PostDetailBox from "./postDetailBox"
import PostLeft from "../post/postLeft"


const PostDetailWrapper = () => {
    return (
        <>
            <PostWrapperBox>
                <PostLeft />
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