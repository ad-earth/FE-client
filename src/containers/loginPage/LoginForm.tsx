import * as t from "./LoginForm.style";
import { theme } from "../../style/theme";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLoginForm } from "./useLoginForm";
import { putAllCartDB } from "../../shared/utils/putCartDB";
import { MainButton } from "../../elements/buttons/Buttons";
import Input from "../../elements/input/Input";
import SearchModal from "../../components/modal/searchModal/schModal/SearchModal";

const LoginForm = () => {
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const navigate = useNavigate();

  const loginData = {
    u_Id: id,
    u_Pw: pw,
  };

  const { mutate, isSuccess, data } = useLoginForm(loginData);

  useEffect(() => {
    if (isSuccess) {
      putAllCartDB(data);
      console.log("Success", data);
      navigate("/");
      window.location.href = "/";
    }
  }, [isSuccess]);

  const submitId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };
  const submitPw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  const LoginClick = () => {
    mutate();
  };

  return (
    <>
      <SearchModal
        isOpen={searchIsOpen}
        handleClose={() => setSearchIsOpen(false)}
      />
      <t.LogInWrapper>
        <Input
          holderName="아이디"
          color={theme.fc14}
          value={id}
          onChange={submitId}
        />
        <Input
          holderName="비밀번호"
          color={theme.fc14}
          type="password"
          value={pw}
          onChange={submitPw}
        />
        <t.BtnDiv>
          <MainButton
            radius="30px"
            fontSize={theme.fs14}
            onClick={() => LoginClick()}
          >
            로그인
          </MainButton>
        </t.BtnDiv>
        <t.AddWrapper>
          <Link to={"/signup"}>
            <t.AddInfo>회원가입</t.AddInfo>
          </Link>
          <t.AddInfo onClick={() => setSearchIsOpen(true)}>
            아이디 ∙ 비밀번호 찾기
          </t.AddInfo>
        </t.AddWrapper>
      </t.LogInWrapper>
    </>
  );
};

export default LoginForm;
