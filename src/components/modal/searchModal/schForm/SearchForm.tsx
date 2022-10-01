import * as t from "./SearchForm.style";
import { theme } from "../../../../style/theme";
import Input from "../../../../elements/Input";
import { MainButton } from "../../../../elements/Buttons";

export const IdSearch = () => {
  return (
    <>
      <t.InfoTxt>가입한 정보로 아이디를 찾아보세요.</t.InfoTxt>
      <t.InputDiv>
        <Input
          holderName="이름"
          bgColor={theme.bg04}
          fontSize={theme.fs14}
          fBorder={`1px solid ${theme.ls16}`}
        ></Input>
        <Input
          holderName="연락처"
          bgColor={theme.bg04}
          fontSize={theme.fs14}
          fBorder={`1px solid ${theme.ls16}`}
          marginTop="0"
        ></Input>
      </t.InputDiv>
      <MainButton>아이디 찾기</MainButton>
    </>
  );
};

export const PassSearch = () => {
  return (
    <>
      <t.InputWrapper>
        <Input
          holderName="가입한 아이디"
          bgColor={theme.bg04}
          fontSize={theme.fs14}
          fBorder={`1px solid ${theme.ls16}`}
        ></Input>
      </t.InputWrapper>
      <MainButton>비밀번호 찾기</MainButton>
    </>
  );
};
