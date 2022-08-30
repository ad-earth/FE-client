import styled from "styled-components";

import { Input } from "../elements/Input";
import { MainButton } from "../elements/Buttons";

import Avatar from "@mui/material/Avatar";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";

const SignUpPage = () => {
  return (
    <SignUpContainer>
      <ProfWrapper>
        <Avatar sx={{ width: 85, height: 85 }} src="" alt="userid" />
        <IconDiv>
          <UploadIcon sx={{ width: 20, height: 20 }} />
        </IconDiv>
      </ProfWrapper>
      <FormWrapper>
        <Input holderName={"아이디"} />
        <Input holderName={"비밀번호"} />
        <Input holderName={"비밀번호 확인"} />
        <DescTxt>이름</DescTxt>
        <Input holderName={"이름을(를) 입력하세요"} />
        <DescTxt>성별</DescTxt>
        <BtnWrapper>
          <RadioBtn type="radio" name="성별" value="남성" />
          <DescRadio>남자</DescRadio>
        </BtnWrapper>
        <BtnWrapper>
          <RadioBtn type="radio" name="성별" value="여성" />
          <DescRadio>여자</DescRadio>
        </BtnWrapper>
        <DescTxt>연락처</DescTxt>
        <Input holderName={"연락처"} />
        <DescTxt>주소</DescTxt>
        <AdrDiv>
          <Input holderName={"우편번호"} width={"20%"} />
          <BtnDiv>
            <MainButton
              fontSize={"13px"}
              bgColor={"#f2f2f2"}
              hBgColor={"#f2f2f2"}
              color={"#20252B"}
              border={"2px solid #E5E7EB"}
              hBorder={"2px solid #E5E7EB"}
            >
              {"주소찾기"}
            </MainButton>
          </BtnDiv>
        </AdrDiv>
        <Input holderName={"주소"} marginTop={"14px"} />
        <Input holderName={"상세주소"} />
        <SubmitDiv>
          <MainButton radius={"30px"} fontSize={"14px"}>
            {"가입하기"}
          </MainButton>
        </SubmitDiv>
      </FormWrapper>
    </SignUpContainer>
  );
};
export default SignUpPage;

const SignUpContainer = styled.div`
  width: 1200px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const ProfWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 20px auto;
`;
const IconDiv = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #999999;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: -30px -10px 0 0;
`;
const UploadIcon = styled(PhotoCameraOutlinedIcon)({
  color: "#f6f6f6",
});
const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 20px auto;
`;
const DescTxt = styled.span`
  width: 100%;
  font-size: 14px;
  color: #212121;
  margin: 30px 0 10px 0;
  text-align: left;
`;
const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RadioBtn = styled.input`
  width: 20px;
  height: 20px;
  accent-color: #00913a;
  margin: 5px 0;
  border: 1px solid #cfd6d9;
`;
const DescRadio = styled.span`
  font-size: 15px;
  color: #646464;
  margin-left: 15px;
  text-align: left;
`;
const AdrDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const BtnDiv = styled.div`
  width: 10%;
  margin-left: 10px;
`;
const SubmitDiv = styled.div`
  width: 100%;
  margin-top: 30px;
`;
