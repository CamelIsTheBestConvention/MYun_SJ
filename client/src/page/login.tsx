import Btn from "../components/common/btn"
import Input from "../components/common/input"
import LogoImg from "../components/common/logoImg"
import Title from "../components/common/title"
import React, {useState} from "react";
import axios from "axios";


const Login = () => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const handleSubmit = (e:any) => {
        e.preventDefault();

        const formData = {
            email,
            pw
        };

        axios.post('localhost:5000/login', formData)
            .then(response => {
                alert('로그인 성공!');
                console.log(response.data);
            })
            .catch(error => {
                console.error('로그인 에러:', error);
            });
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
                <Btn type="submit" color="black" fontColor="white" btnText="LOGIN"/>
            </form>
            <a href="/signup">
                <Btn type="button" color="white" fontColor="black" btnText="SIGNUP" />
            </a>
        </>
    )
}
export default Login