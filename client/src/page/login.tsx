import Btn from "../components/common/btn"
import Input from "../components/common/input"
import LogoImg from "../components/common/logoImg"
import Title from "../components/common/title"
import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = (e:any) => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e:any) => {
        e.preventDefault();

        const formData = {
            email,
            pw
        };

        try {
            const response = await axios.post('http://localhost:5000/api/users', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            alert('로그인했습니다.');
            console.log(response.data);

            navigate('/post');
        } catch (error) {
            console.log('로그인 실패:', error);
        }
        
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <LogoImg />
                <Title mainText="L O G I N" subText="로그인" />
                <Input type="text" placeholder="이메일 아이디" onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                <Input type="password" placeholder="비밀번호" onChange={(e) => {
                        setPw(e.target.value)
                    }} />
                <Btn type="submit" color="black" fontcolor="white" btnText="LOGIN"/>
            </form>
            <a href="/signup">
                <Btn type="button" color="white" fontcolor="black" btnText="SIGNUP" />
            </a>
        </>
    )
}
export default Login