import styled from "styled-components";
import { Input } from "../elements/Input";

import logInLogo from "./../assets/logo/logInLogo.jpeg";
import Checkbox from "@mui/material/Checkbox";
import { MainButton } from "../elements/Buttons";
export interface PropsType {
  holderName?: string;
}

const LogInPage = () => {
  return (
    <LogInContainer>
      <LogInWrapper>
        <LogInLogo src={logInLogo} />
        <Input holderName={"아이디"} />
        <Input holderName={"비밀번호"} />
        <CheckWrapper>
          <LogInCheckbox type="checkbox" />
          <CheckLabel>로그인 상태유지</CheckLabel>
        </CheckWrapper>
        <MainButton radius={"30px"} fontSize={"14px"}>
          {"로그인"}
        </MainButton>
        <AddWrapper>
          <AddInfo>회원가입</AddInfo>
          <AddInfo>아이디 ∙ 비밀번호 찾기</AddInfo>
        </AddWrapper>
      </LogInWrapper>
    </LogInContainer>
  );
};
export default LogInPage;

const LogInContainer = styled.div`
  width: 1200px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
`;
const LogInLogo = styled.img`
  width: 210px;
  margin: auto;
  object-fit: contain;
`;
const LogInWrapper = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const CheckWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;
const CheckLabel = styled.span`
  font-size: 15px;
  color: #646464;
  margin-left: 4px;
`;
const LogInCheckbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #00913a;
  border: 1px solid #cfd6d9;
`;
const AddWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;
const AddInfo = styled.span`
  font-size: 15px;
  color: #646464;
`;
