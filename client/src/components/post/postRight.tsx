import styled from "styled-components";
import PostList from "./postList";
import React, { useState, useEffect } from "react";
import axios from "axios";

const PostRight = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    interface Post {
        id: number;
        title: string;
        content: string;
        imgUrl: string;
    }
    
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const token = localStorage.getItem('userToken'); // 사용자 토큰 가져오기
                const response = await axios.get("http://localhost:49152/api/posts", {
                    headers: {
                        Authorization: `Bearer ${token}` // 토큰을 포함시켜서 요청 보내기
                    }
                });
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <PostListBox>
            {posts.map((post) => (
                <PostList key={post.id} postTitle={post.title} postContent={post.content} imgUrl={post.imgUrl} />
            ))}
        </PostListBox>
    );
};
export default PostRight;

const PostListBox = styled.div`
    width: 57vw;
    background-color: #f4f4f4;
    margin: 20px;
`;
