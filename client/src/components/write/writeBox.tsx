import styled from "styled-components"
import Dropdown from "../common/dropdown"
import WriteTitle from "./writeTitle"
import WriteContent from "./writeContent"
import WriteSidebar from "./writeSidebar"
import React, { useState } from 'react';
import axios from 'axios';

const WriteBox = () => {
    const [fileUrl, setFileUrl] = useState("");
    const [categoryValue, setCategoryValue] = useState("");
    const [titleValue, setTitleValue] = useState("");
    const [contentValue, setContentValue] = useState("");

    const handleFileSelect = ({url}: {url:string}) => {
        setFileUrl(url);
    };

    const handleSubmit = async () => {
        const postData = {
            fileUrl,
            category: categoryValue,
            title: titleValue,
            content: contentValue,
        };

        try {
            const response = await axios.post('http://localhost:5000/models/post', postData);
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
                </WriteBoxHeader>
                <WriteTitle onTitleChange={(titleValue) => {
                    setTitleValue(titleValue);
                }} />
                <WriteContent onContentChange={(contentValue) => {
                    setContentValue(contentValue);
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