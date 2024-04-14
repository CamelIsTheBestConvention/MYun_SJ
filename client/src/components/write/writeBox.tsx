import styled from "styled-components"
import Dropdown from "../common/dropdown"
import WriteTitle from "./writeTitle"
import WriteContent from "./writeContent"
import WriteSidebar from "./writeSidebar"
import React, { useState } from 'react';
import axios from 'axios';

const WriteBox = () => {
    const [fileURL, setFileName] = useState("");
    const [categoryValue, setCategoryValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    const [contentValue, setContentValue] = useState("");

    const handleFileSelect = (file:any) => {
        setFileName(file.name);
    };

    const handleSubmit = async () => {
        const postData = {
            fileURL,
            category: categoryValue,
            title: titleValue,
            content: contentValue
        };

        try {
            const response = await axios.post('http://localhost:5000/api/posts', postData);
            console.log(response.data);
        } catch (error) {
            console.error('전송 실패: ', error);
        }
    }

    return (
        <>
            <WriteBoxWrapper>
                <WriteBoxHeader>
                    <Dropdown onCategoryChange={(categoryValue) => {
                        setCategoryValue(categoryValue);
                    }} />
                    {fileURL && <AddFileName>{fileURL}</AddFileName>}
                </WriteBoxHeader>
                <WriteTitle onTitleChange={(titleValue) => {
                    setTitleValue(titleValue);
                }} />
                <WriteContent onContentChange={(contentValue) => {
                    setContentValue(contentValue);
                    console.log(contentValue);
                }} />
                <WriteSidebar onFileSelect={handleFileSelect} onSubmit={handleSubmit} />
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
    padding: 10px;
    font-weight: 700;
    display: {fileName ? block : hidden};
`