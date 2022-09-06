import * as t from "./SignUpForm.style";
import { Input } from "../../../elements/Input";

const SignUpForm = () => {
  return (
    <>
      <Input holderName="아이디" />
      <Input holderName="비밀번호" />
      <Input holderName="비밀번호 확인" />
      <t.DescTxt>이름</t.DescTxt>
      <Input holderName="이름을(를) 입력하세요" />
      <t.DescTxt>성별</t.DescTxt>
      <t.BtnWrapper>
        <t.RadioBtn type="radio" name="성별" value="남성" />
        <span>남자</span>
        <t.RadioBtn type="radio" name="성별" value="여성" />
        <span>여자</span>
      </t.BtnWrapper>
      <t.DescTxt>연락처</t.DescTxt>
      <Input holderName="연락처" />
      <t.DescTxt>주소</t.DescTxt>
    </>
  );
};

export default SignUpForm;
