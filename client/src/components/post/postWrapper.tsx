import styled from "styled-components"
import PostLeft from "./postLeft"
import PostRight from "./postRight"

const PostWrapper = () => {
    return (
        <>
            <PostWrapperBox>
                <PostLeft />
                <PostRight />
            </PostWrapperBox>
        </>
    )
}
export default PostWrapper

const PostWrapperBox = styled.div`
    width: 92%;
    margin: 0 auto;
    display: flex;
`