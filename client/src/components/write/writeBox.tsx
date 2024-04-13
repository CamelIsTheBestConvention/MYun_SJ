import styled from "styled-components"
import Dropdown from "../common/dropdown"
import WriteTitle from "./writeTitle"
import WriteContent from "./writeContent"
import WriteSidebar from "./writeSidebar"
import React, { useState } from 'react';

const WriteBox = () => {
    const [fileName, setFileName] = useState("");

    const handleFileSelect = (file:any) => {
        setFileName(file.name);
    };

    return (
        <>
            <WriteBoxWrapper>
                <WriteBoxHeader>
                    <Dropdown />
                    <AddFileName>{fileName}</AddFileName>
                </WriteBoxHeader>
                <WriteTitle />
                <WriteContent />
                <WriteSidebar onFileSelect={handleFileSelect} />
            </WriteBoxWrapper>
        </>
    )
}
export default WriteBox

const WriteBoxWrapper = styled.div`
    width: 50%;
    margin: 20px auto;
`

const WriteBoxHeader = styled.div`
    position: relative;
`

const AddFileName = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    border: 3px solid #d9d9d9;
    background-color: #f4f4f4;
    border-radius: 10px;
    padding: 15px;
    font-weight: 700;
`