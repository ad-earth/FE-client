import * as t from "./LoginForm.style";
import { useState } from "react";
import { theme } from "../../style/theme";
import { Input } from "../../elements/Input";
import { MainButton } from "../../elements/Buttons";
import SearchModal from "../../components/modal/searchModal/schModal/SearchModal";

const LoginForm = () => {
  const [searchIsOpen, setSearchIsOpen] = useState(false);

  return (
    <>
      <SearchModal
        isOpen={searchIsOpen}
        handleClose={() => setSearchIsOpen(false)}
      />
      <t.LogInWrapper>
        <Input holderName="아이디" />
        <Input holderName="비밀번호" />
        <t.CheckWrapper>
          <t.LogInCheckbox type="checkbox" />
          <t.CheckLabel>로그인 상태유지</t.CheckLabel>
        </t.CheckWrapper>
        <MainButton radius="30px" fontSize={theme.fs14}>
          로그인
        </MainButton>
        <t.AddWrapper>
          <t.AddInfo>회원가입</t.AddInfo>
          <t.AddInfo onClick={() => setSearchIsOpen(true)}>
            아이디 ∙ 비밀번호 찾기
          </t.AddInfo>
        </t.AddWrapper>
      </t.LogInWrapper>
    </>
  );
};

export default LoginForm;
