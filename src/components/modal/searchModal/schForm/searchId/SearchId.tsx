import * as t from "../searchForm.style";
import { theme } from "../../../../../style/theme";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSearchId } from "./useSearchId";
import { yupResolver } from "@hookform/resolvers/yup";
import { SearchIdValidation } from "../../../../../shared/utils/yup";
import Input from "../../../../../elements/input/Input";
import { MainButton } from "../../../../../elements/buttons/Buttons";

type IdValue = {
  userName: string;
  contact: string;
};

const SearchId = () => {
  const [isYourId, setIsYourId] = useState<IdValue>({
    userName: "",
    contact: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IdValue>({
    mode: "onSubmit",
    resolver: yupResolver(SearchIdValidation),
    defaultValues: {
      userName: "",
      contact: "",
    },
  });

  const idData = {
    u_Name: isYourId.userName,
    u_Phone: isYourId.contact,
  };

  const handleSearch = (data: IdValue) => {
    setIsYourId(data);
    // refetch();
  };

  const goLogin = () => {
    window.location.reload();
  };

  // 아이디 찾기 get 요청
  const { data, refetch } = useSearchId(idData);

  return (
    <>
      {data ? (
        <>
          <t.InfoDiv>
            <t.InfoTxt>회원님의 아이디는 {data.u_Id}입니다.</t.InfoTxt>
          </t.InfoDiv>
          <t.BtnDiv>
            <MainButton onClick={() => goLogin()}>로그인 하기</MainButton>
          </t.BtnDiv>
        </>
      ) : (
        <>
          <t.InfoTxt>가입한 정보로 아이디를 찾아보세요.</t.InfoTxt>
          <form onSubmit={handleSubmit(handleSearch)}>
            <t.InputDiv>
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
            </t.InputDiv>
            <MainButton>아이디 찾기</MainButton>
          </form>
        </>
      )}
    </>
  );
};

export default SearchId;
