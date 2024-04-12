import Btn from "../components/common/btn";
import Input from "../components/common/input";
import LogoImg from "../components/common/logoImg";
import Title from "../components/common/title";
import React, { useState } from "react";
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [isLoading, setIsLoading] = useState(false);  // 로딩 상태 추가
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        const formData = {
            email,
            pw
        };

        try {
            const response = await axios.post('http://localhost:5000/api/users/login', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(response.data);
            alert('로그인했습니다.');
            navigate('/post');
        } catch (error: unknown) {
            setIsLoading(false);
            if (axios.isAxiosError(error) && error.response) {
                // AxiosError 타입 확인 및 response 객체가 있는지 확인
                const message = error.response.data?.message || '없는 계정이거나 비밀번호가 틀렸습니다. 다시 시도해주세요.';
                alert(message);
            } else {
                // 네트워크 에러나 기타 예측하지 못한 에러
                alert('알 수 없는 에러가 발생했습니다.');
            }
        }
    };
    

    return (
        <>
            <form onSubmit={handleSubmit}>
                <LogoImg />
                <Title mainText="L O G I N" subText="로그인" />
                <Input
                    type="text"
                    placeholder="이메일 아이디"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    type="password"
                    placeholder="비밀번호"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />
                <Btn type="submit" color="black" fontcolor="white" btnText={isLoading ? "로그인 중..." : "LOGIN"} />
            </form>
            <a href="/signup">
                <Btn type="button" color="white" fontcolor="black" btnText="SIGNUP" />
            </a>
        </>
    );
};

export default Login;