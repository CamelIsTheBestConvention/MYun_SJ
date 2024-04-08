import Btn from "../components/common/btn"
import Input from "../components/common/input"
import LogoImg from "../components/common/logoImg"
import Title from "../components/common/title"


const Login = () => {
    return (
        <>
            <LogoImg />
            <Title mainText="L O G I N" subText="로그인" />
            <Input type="text" placeholder="이메일 아이디" />
            <Input type="password" placeholder="비밀번호" />
            <Btn color="black" fontColor="white" btnText="LOGIN"/>
            <Btn color="white" fontColor="black" btnText="SIGNUP" />
        </>
    )
}
export default Login