import Btn from "../components/common/btn"
import LogoImg from "../components/common/logoImg"
import Title from "../components/common/title"
import SignupInputBox from "../components/signup/signupInput"
import React, {useState, useEffect} from "react";


const Signup = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [pw, setPw] = useState('');
    const [pwcheck, setPwcheck] = useState('');

    useEffect(() => {
        console.log('이메일', email);
        console.log('이름', name);
        console.log('닉네임', nickname);
        console.log('비번', pw);
        console.log('비번확인', pwcheck);
    }, [email, name, nickname, pw, pwcheck]);

    return (
        <>
            <form>
                <LogoImg />
                <Title mainText="J O I N" subText="회원가입" />
                <SignupInputBox
                    type="email"
                    placeholder="myun@test.com"
                    title="이메일"
                    msg="메일"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                <SignupInputBox
                    type="text"
                    placeholder="문성준"
                    title="이름"
                    msg="이름"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                    }} />
                <SignupInputBox
                    type="text"
                    placeholder="문미새"
                    title="닉네임"
                    msg="닉네임"
                    value={nickname}
                    onChange={(e) => {
                        setNickname(e.target.value)
                    }} />
                <SignupInputBox
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    title="비밀번호"
                    msg="비번"
                    value={pw}
                    onChange={(e) => {
                        setPw(e.target.value)
                    }} />
                <SignupInputBox
                    type="password"
                    placeholder="비밀번호를 확인해주세요."
                    title="비밀번호 확인"
                    msg="비번확인"
                    value={pwcheck}
                    onChange={(e) => {
                        setPwcheck(e.target.value)
                    }} />
                <Btn color="black" fontColor="white" btnText="회원가입" />
            </form>
        </>
    )
}
export default Signup