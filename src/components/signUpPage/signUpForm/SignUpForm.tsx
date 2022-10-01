import * as t from "./SignUpForm.style";
import Input from "../../../elements/Input";
import { theme } from "../../../style/theme";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpValidation } from "../../../shared/utils/yup";

interface FormValue {
  userId?: string;
  password?: string;
  password2?: string;
  userName?: string;
  gender?: boolean;
  contact?: string;
  onSubmit: () => void;
}

const SignUpForm = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    mode: "onChange",
    resolver: yupResolver(SignUpValidation),
  });
  console.log(errors.userId);
  console.log(errors.password);
  console.log(errors.password2);
  console.log(errors.userName);
  console.log(errors.contact);
  // const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Input holderName="아이디" color={theme.fc14} {...register("userId")} />
        {errors.userId && <t.ErrorMsg>{errors.userId.message}</t.ErrorMsg>}
        <Input
          holderName="비밀번호"
          color={theme.fc14}
          {...register("password")}
        />
        {errors.password && <t.ErrorMsg>{errors.password.message}</t.ErrorMsg>}
        <Input
          holderName="비밀번호 확인"
          color={theme.fc14}
          {...register("password2")}
        />
        {errors.password2 && (
          <t.ErrorMsg>{errors.password2.message}</t.ErrorMsg>
        )}
        <t.DescTxt>이름</t.DescTxt>
        <Input
          holderName="이름을(를) 입력하세요"
          color={theme.fc14}
          {...register("userName")}
        />
        {errors.userName && <t.ErrorMsg>{errors.userName.message}</t.ErrorMsg>}
        <t.DescTxt>성별</t.DescTxt>
        <t.BtnWrapper>
          <t.RadioBtn type="radio" value="true" {...register("gender")} />
          <span>남자</span>
          <t.RadioBtn type="radio" value="false" {...register("gender")} />
          <span>여자</span>
        </t.BtnWrapper>
        {errors.gender && <t.ErrorMsg>{errors.gender.message}</t.ErrorMsg>}
        <t.DescTxt>연락처</t.DescTxt>
        <Input
          holderName="연락처"
          color={theme.fc14}
          {...register("contact")}
        />
        {errors.contact && <t.ErrorMsg>{errors.contact.message}</t.ErrorMsg>}
        <t.DescTxt>주소</t.DescTxt>
      </form>
    </>
  );
};

export default SignUpForm;
