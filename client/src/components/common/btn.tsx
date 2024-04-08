import styled from "styled-components"

interface BtnProps {
    type: "button" | "submit";
    color: string;
    fontColor: string;
    btnText: string;
}

const Btn:React.FC<BtnProps> = ({type, color, fontColor, btnText}) => {
    return (
        <>
            <BtnBox>
                <BtnBtn type={type} color={color} fontColor={fontColor}>{btnText}</BtnBtn>
            </BtnBox>
        </>
    )
}
export default Btn

const BtnBox = styled.div`
    width: 400px;
    margin: 0 auto;
`

const BtnBtn = styled.button<{color: string; fontColor: string}>`
    width: 100%;
    margin-bottom: 10px;
    padding: 15px 0;
    background-color: ${(props) => props.color};
    cursor: pointer;
    color: ${(props) => props.fontColor};
    border: 1px solid black;
`