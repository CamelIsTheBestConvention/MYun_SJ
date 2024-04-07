import Btn from "../components/common/btn"
import Input from "../components/common/input"
import LogoImg from "../components/common/logoImg"
import Title from "../components/common/title"


const Signup = () => {
    return (
        <>
            <LogoImg />
            <Title mainText="S I G N U P" subText="회원가입" />
            <Input type="text" placeholder="이메일 아이디" />
            <Input type="password" placeholder="비밀번호" />
            <Btn color="black" fontColor="white" btnText="LOGIN"/>
            <Btn color="white" fontColor="black" btnText="SIGNUP" />
        </>
    )
}
export default Signup