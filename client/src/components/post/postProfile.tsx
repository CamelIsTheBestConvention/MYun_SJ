import React, { useState, useEffect } from 'react';
import axios from 'axios';
import postProfileImg from "../../img/mr_rbtree.svg";
import "../../style/post/postProfile.scss";

const PostProfile = () => {
    const [nickname, setNickname] = useState('');
    
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                // 로컬 스토리지에서 사용자 토큰을 가져옵니다.
                const token = localStorage.getItem('token');
                // 토큰을 포함하여 서버에 요청을 보냅니다.
                const response = await axios.get('/api/users/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                // 응답에서 닉네임을 추출하여 상태를 업데이트합니다.
                setNickname(response.data.user.nickname);
            } catch (error) {
                console.error('Profile fetch failed:', error);
            }
        };

        fetchProfile();
    }, []);

    return (
        <div className="profile-box">
            <div className="profile-img-box">
                <img className="profile-img" src={postProfileImg} alt="profile image" />
            </div>
            <h2 className="profile-nickname">{nickname}</h2>
        </div>
    );
}

export default PostProfile;
