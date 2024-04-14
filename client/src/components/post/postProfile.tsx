import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../types';
import postProfileImg from "../../img/mr_rbtree.svg";
import "../../style/post/postProfile.scss";

const PostProfile = () => {

    return (
        <div className="profile-box">
            <div className="profile-img-box">
                <img className="profile-img" src={postProfileImg} alt="profileImg" />
            </div>
            <h2 className="profile-nickname">문미새</h2>
        </div>
    );
}

export default PostProfile;


// // PostProfile 컴포넌트
// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../../types'; // 타입 정의를 불러옵니다
// import postProfileImg from "../../img/mr_rbtree.svg";
// import "../../style/post/postProfile.scss";

// const PostProfile = () => {
//     const userNickname = useSelector((state: RootState) => state.user.nickname); // 타입을 적용합니다.

//     return (
//         <div className="profile-box">
//             <div className="profile-img-box">
//                 <img className="profile-img" src={postProfileImg} alt="profileImg" />
//             </div>
//             <h2 className="profile-nickname">{userNickname}</h2>
//         </div>
//     );
// }

// export default PostProfile;
