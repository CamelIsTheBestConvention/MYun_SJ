import React, { useState, useEffect } from 'react';
import postProfileImg from "../../img/mr_rbtree.svg";

const PostDetailProfile = () => {
    const [nickname, setNickname] = useState('');

    // useEffect(() => {
    //     fetch('/api/users/profile', { credentials: 'include' })
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data.nickname) {
    //                 setNickname(data.nickname);
    //             }
    //         })
    //         .catch(error => console.error('Error fetching nickname:', error));
    // }, []);

    return (
        <>
            {/* <div className="profile-box">
                <div className="profile-img-box">
                    <img className="profile-img" src={postProfileImg} alt="profileImg" />
                </div>
                <h2 className="profile-nickname">{nickname},"fff"</h2>
            </div> */}
        </>
    )
}
export default PostDetailProfile