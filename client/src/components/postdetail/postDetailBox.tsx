import styled from "styled-components"
import PostDetailCategory from "./postDetailCategory"
import PostDetailTitle from "./postDetailTitle"
import PostDetailContent from "./postDetailContent"
import PostDetailSidebar from "./postDetailSidebar"

const PostDetailBox = () => {
    return (
        <>
            <PostDetailBoxWrapper>
                <PostDetailBoxHeader>
                    <PostDetailCategory />
                </PostDetailBoxHeader>
                <PostDetailTitle />
                <PostDetailContent />
                <PostDetailSidebar />
            </PostDetailBoxWrapper>
        </>
    )
}
export default PostDetailBox

const PostDetailBoxWrapper = styled.div`
    width: 50%;
    margin: 20px auto;
`

const PostDetailBoxHeader = styled.div`
    position: relative;
`