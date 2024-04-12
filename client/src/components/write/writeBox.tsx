import styled from "styled-components"
import Dropdown from "../common/dropdown"
import WriteTitle from "./writeTitle"
import WriteContent from "./writeContent"
import WriteSidebar from "./writeSidebar"

const WriteBox = () => {
    return (
        <>
            <WriteBoxWrapper>
                <Dropdown />
                <WriteTitle />
                <WriteContent />
                <WriteSidebar />
            </WriteBoxWrapper>

        </>
    )
}
export default WriteBox

const WriteBoxWrapper = styled.div`
    width: 50%;
    margin: 20px auto;
    // background-color: #f4f4f4;
`