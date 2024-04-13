import styled from "styled-components"
import Dropdown from "../common/dropdown"
import WriteTitle from "./writeTitle"
import WriteContent from "./writeContent"
import WriteSidebar from "./writeSidebar"
import React, { useState } from 'react';

const WriteBox = () => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    return (
        <>
            <WriteBoxWrapper>
                <Dropdown />
                <WriteTitle />
                <WriteContent imagePreview={imagePreview} />
                <WriteSidebar setImagePreview={setImagePreview} />
            </WriteBoxWrapper>
        </>
    )
}
export default WriteBox

const WriteBoxWrapper = styled.div`
    width: 50%;
    margin: 20px auto;
`