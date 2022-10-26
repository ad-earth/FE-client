import * as t from "./signUpForm.style";
import { theme } from "../../style/theme";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpValidation } from "../../shared/utils/yup";
import { useSignUpForm } from "./useSignUpForm";
import Profile from "../../components/signUpPage/profile/Profile";
import AddressForm from "../../components/signUpPage/addressForm/AddressForm";
import Input from "../../elements/input/Input";
import { MainButton } from "../../elements/buttons/Buttons";

interface FormValue {
  userId: string;
  password: string;
  password2: string;
  userName: string;
  gender: string;
  contact: string;
}

const SignUpForm = () => {
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [extraAddress, setExtraAddress] = useState("");
  const [formValue, setFormValue] = useState<FormValue>({
    userId: "",
    password: "",
    password2: "",
    userName: "",
    gender: "",
    contact: "",
  });

  // react-hook-form 유효성 검사
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>({
    mode: "onChange",
    resolver: yupResolver(SignUpValidation),
    defaultValues: {
      userId: "",
      password: "",
      password2: "",
      userName: "",
      gender: "",
      contact: "",
    },
  });

  const submitHandler = (data: FormValue) => {
    setFormValue(data);
    mutate();
  };

  const signUpData = {
    u_Id: formValue.userId,
    u_Pw: formValue.password,
    u_Name: formValue.userName,
    u_Address1: zipcode,
    u_Address2: address,
    u_Address3: extraAddress,
    u_Gender: formValue.gender,
    u_Phone: formValue.contact,
    u_Img: imgUrl,
  };

  // 회원가입 post 요청
  const { mutate, isSuccess } = useSignUpForm(signUpData);

  useEffect(() => {
    if (isSuccess) {
      alert("회원가입에 성공하였습니다!");
      navigate("/login");
    }
  }, [isSuccess]);

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <t.ProfWrapper>
        <Profile imgUrl={imgUrl} setImgUrl={setImgUrl} />
      </t.ProfWrapper>
      <t.FormWrapper>
        <Input holderName="아이디" color={theme.fc14} {...register("userId")} />
        {errors.userId && <t.ErrorMsg>{errors.userId.message}</t.ErrorMsg>}
        <Input
          type="password"
          holderName="비밀번호"
          color={theme.fc14}
          {...register("password")}
        />
        {errors.password && <t.ErrorMsg>{errors.password.message}</t.ErrorMsg>}
        <Input
          type="password"
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
          <t.RadioBtn type="radio" value="남성" {...register("gender")} />
          <span>남자</span>
          <t.RadioBtn type="radio" value="여성" {...register("gender")} />
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
        <AddressForm
          zipcode={zipcode}
          address={address}
          extraAddress={extraAddress}
          setZipcode={setZipcode}
          setAddress={setAddress}
          setExtraAddress={setExtraAddress}
        />
        <t.SubmitDiv>
          {imgUrl.length &&
          zipcode.length &&
          address.length &&
          extraAddress.length > 0 &&
          formValue ? (
            <MainButton radius="30px" fontSize={theme.fs14}>
              가입하기
            </MainButton>
          ) : (
            <MainButton
              radius="30px"
              fontSize={theme.fs14}
              onClick={() => alert("모든 항목을 입력해주세요!")}
            >
              가입하기
            </MainButton>
          )}
        </t.SubmitDiv>
      </t.FormWrapper>
    </form>
  );
};

export default SignUpForm;
