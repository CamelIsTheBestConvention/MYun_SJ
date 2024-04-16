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
    // width: 50%;
    // margin: 20px auto;
    width: 50vw;
    // background-color: #f4f4f4;
    margin: 10px 0 0 50px;
`

const PostDetailBoxHeader = styled.div`
    position: relative;
`