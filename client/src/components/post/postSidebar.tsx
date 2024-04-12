import "../../style/post/postSidebar.scss"
import write from "../../img/write.png"
import setting from "../../img/gear.png"
import cube from "../../img/cube.png"
import logout from "../../img/logout.png"
import downArrow from "../../img/downArrow.png"
import upArrow from "../../img/upArrow.png"
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const PostSidebar = () => {
    const navigate = useNavigate();

    const logoutfunc = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/users/logout');
            if (response.data.message === '로그아웃 성공') {
                // 클라이언트 측 인증 정보 삭제
                localStorage.removeItem('userToken');
                sessionStorage.clear();
    
                // 사용자를 로그인 페이지로 리디렉션
                window.location.href = '/login';
            }
        } catch (error) {
            console.error('로그아웃 에러:', error);
        }
    };
    
    

    return (
        <>
            <div className="postSidebar-box">
                <div className="postSidebar-inner">
                    <p className="postSidebar-inner-nickname">Navigator</p>
                    <div className="postSidebar-icon">
                        <a href="/write">
                            <img src={write} alt="" />
                            <p>write</p>
                        </a>
                        <a href="#">
                            <img src={setting} alt="" />
                            <p>settings</p>
                        </a>
                    </div>
                    <div className="postSidebar-icon">
                        <a href="#" onClick={logoutfunc}>
                            <img src={logout} alt="" />
                            <p>logout</p>
                        </a>
                        <a href="#">
                            <img src={cube} alt="" />
                            <p>cube</p>
                        </a>
                    </div>
                    <div className="postSidebar-arrow">
                        <img src={upArrow} alt="" />
                        <img src={downArrow} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default PostSidebar;