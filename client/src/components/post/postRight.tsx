import styled from "styled-components"
import PostList from "./postList"
import React, {useState, useEffect} from "react";
import axios from "axios";

const PostRight = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const response = await axios.get('http://localhost:1111');
                setPosts(response.data)
            } catch (error) {
                console.error(error);
            }
        };
        loadPosts();
    }, [])

    return (
        <>
            <PostListBox>
                {/* {posts.map((post) => (
                    <PostList key={post.id} postTitle={post.title} postContent={post.content} imgUrl={post.imgUrl} />
                ))} */}
            </PostListBox>
        </>
    )
}
export default PostRight

const PostListBox = styled.div`
    width: 57vw;
    background-color: #f4f4f4;
    margin: 20px;
`