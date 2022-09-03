import { MainButton } from "../../../elements/Buttons";
import { Input } from "../../../elements/Input";
import { theme } from "../../../style/theme";
import * as t from "./SearchModalStyle";

const PassSearch = () => {
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

export default PassSearch;
