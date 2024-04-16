import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components"
import PostDetailCategory from "./postDetailCategory"
import PostDetailTitle from "./postDetailTitle"
import PostDetailContent from "./postDetailContent"
import PostDetailSidebar from "./postDetailSidebar"

const PostDetailBox = () => {
    const { id } = useParams();
    const [post, setPost] = useState({ title: '', content: '' });

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const userToken = localStorage.getItem('userToken');
                const response = await axios.get(`http://localhost:49152/api/posts/${id}`, {
                    headers: {
                        Authorization: `Bearer ${userToken}`
                    }
                });
                setPost(response.data);
            } catch (error) {
                console.error('Error fetching post', error);
            }
        };
    
        if (id) {
            fetchPost();
        }
    }, [id]);
    

    return (
        <>
            <PostDetailBoxWrapper>
                <PostDetailBoxHeader>
                    <PostDetailCategory />
                </PostDetailBoxHeader>
                <div className="detail-title-box">
                    <div>{post.title}</div>
                </div>
                <div className="detail-content-box">
                    <div>{post.content}</div>
                </div>
                <PostDetailSidebar />
            </PostDetailBoxWrapper>
        </>
    )
}

export default PostDetailBox;

const PostDetailBoxWrapper = styled.div`
    width: 50vw;
    margin: 10px 0 0 50px;
`;

const PostDetailBoxHeader = styled.div`
    position: relative;
`;