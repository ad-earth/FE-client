import * as t from "../SearchForm.style";
import { theme } from "../../../../../style/theme";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ResetPassValidation,
  SearchPassValidation,
} from "../../../../../shared/utils/yup";
import Input from "../../../../../elements/Input";
import { MainButton } from "../../../../../elements/Buttons";
import { useSearchPass } from "./useSearchPass";
import { useResetPass } from "./useResetPass";

type PassValue = {
  userId: string;
  userName: string;
  contact: string;
};

type ResetValue = {
  password: string;
  password2: string;
};

const SearchPass = () => {
  const [isYourPw, setIsYourPw] = useState<PassValue>({
    userId: "",
    userName: "",
    contact: "",
  });
  const [resetOpen, setResetOpen] = useState(false);
  const [resetPw, setResetPw] = useState<ResetValue>({
    password: "",
    password2: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PassValue>({
    mode: "onSubmit",
    resolver: yupResolver(SearchPassValidation),
    defaultValues: {
      userId: "",
      userName: "",
      contact: "",
    },
  });

  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm<ResetValue>({
    mode: "onChange",
    resolver: yupResolver(ResetPassValidation),
    defaultValues: {
      password: "",
      password2: "",
    },
  });

  const pwData = {
    u_Id: isYourPw.userId,
    u_Name: isYourPw.userName,
    u_Phone: isYourPw.contact,
  };

  const handelSearch = (data: PassValue) => {
    setIsYourPw(data);
    refetch();
  };

  // 비밀번호 찾기 get 요청
  const { data, refetch } = useSearchPass(pwData);

  // 비밀번호 재설정하기 오픈 버튼
  const handleOpen = () => {
    setResetOpen(true);
  };

  const resetData = {
    u_Idx: data?.u_Idx,
    u_Pw: resetPw.password,
  };

  const resetClick = () => {
    console.log(resetData);
    mutate(resetData, {
      onSuccess: () => {
        alert("비밀번호를 변경했습니다!");
      },
      onError: () => {
        console.log("Error");
      },
    });
  };

  const handleReset = (data: ResetValue) => {
    setResetPw(data);
  };

  // 비밀번호 재설정 put 요청
  const { mutate, isSuccess } = useResetPass();

  useEffect(() => {
    if (isSuccess) {
      console.log("Success");
      // alert("비밀번호를 변경하였습니다!");
    }
  }, [isSuccess]);

  return (
    <>
      {!data ? (
        <>
          <form onSubmit={handleSubmit(handelSearch)}>
            <t.InputWrapper>
              <Input
                holderName="가입한 아이디"
                color={theme.fc14}
                bgColor={theme.bg04}
                fontSize={theme.fs14}
                fBorder={`1px solid ${theme.ls16}`}
                {...register("userId")}
              />
              {errors.userId && (
                <t.ErrorMsg>{errors.userId.message}</t.ErrorMsg>
              )}
              <Input
                holderName="이름"
                color={theme.fc14}
                bgColor={theme.bg04}
                fontSize={theme.fs14}
                fBorder={`1px solid ${theme.ls16}`}
                {...register("userName")}
              />
              {errors.userName && (
                <t.ErrorMsg>{errors.userName.message}</t.ErrorMsg>
              )}
              <Input
                holderName="연락처"
                color={theme.fc14}
                bgColor={theme.bg04}
                fontSize={theme.fs14}
                fBorder={`1px solid ${theme.ls16}`}
                marginTop="0"
                {...register("contact")}
              />
              {errors.contact && (
                <t.ErrorMsg>{errors.contact.message}</t.ErrorMsg>
              )}
            </t.InputWrapper>
            <MainButton>비밀번호 찾기</MainButton>
          </form>
        </>
      ) : (
        <>
          <t.InfoDiv>
            <t.InfoTxt>
              <strong>{isYourPw.userId}</strong> 님의 비밀번호가 기억나지
              않으시면
              <br />
              비밀번호를 재설정해주세요.
            </t.InfoTxt>
          </t.InfoDiv>
          {resetOpen ? (
            <>
              <form onSubmit={handleSubmit2(handleReset)}>
                <Input
                  holderName="비밀번호"
                  type="password"
                  color={theme.fc14}
                  bgColor={theme.bg04}
                  fontSize={theme.fs14}
                  fBorder={`1px solid ${theme.ls16}`}
                  marginTop="0"
                  {...register2("password")}
                />
                {errors2.password && (
                  <t.ErrorMsg>{errors2.password.message}</t.ErrorMsg>
                )}
                <Input
                  holderName="비밀번호 확인"
                  type="password"
                  color={theme.fc14}
                  bgColor={theme.bg04}
                  fontSize={theme.fs14}
                  fBorder={`1px solid ${theme.ls16}`}
                  marginTop="0"
                  {...register2("password2")}
                />
                {errors2.password2 && (
                  <t.ErrorMsg>{errors2.password2.message}</t.ErrorMsg>
                )}
                <t.BtnDiv>
                  <MainButton onClick={() => resetClick()}>
                    비밀번호 재설정
                  </MainButton>
                </t.BtnDiv>
              </form>
            </>
          ) : (
            <>
              <t.BtnDiv>
                <MainButton onClick={() => handleOpen()}>
                  비밀번호 재설정
                </MainButton>
              </t.BtnDiv>
            </>
          )}
        </>
      )}
    </>
  );
};

export default SearchPass;
