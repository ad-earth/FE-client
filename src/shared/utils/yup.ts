import * as yup from "yup";

const idCheckPattern = /^[a-zA-Z0-9]{5,10}$/;
const pwCheckPattern =
  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/;
const contactCheckPattern = /^\d{3}-\d{3,4}-\d{4}$/;

export const SignUpValidation = yup
  .object()
  .shape({
    userId: yup
      .string()
      .required("아이디는 영문 소문자와 숫자 포함 5~10자리를 입력해주세요.")
      .max(10, "아이디는 10자리 이하여야 합니다.")
      .min(5, "아이디는 5자리 이상이어야 합니다.")
      .matches(
        idCheckPattern,
        "아이디는 영문 소문자와 숫자 포함 5~10자리를 입력해주세요."
      ),
    password: yup
      .string()
      .required(
        "비밀번호는 영문, 숫자, 특수문자를 혼합하여 8~20자리를 입력해주세요."
      )
      .max(20, "비밀번호는 20자리 이하여야 합니다.")
      .min(8, "비밀번호는 8자리 이상이어야 합니다.")
      .matches(
        pwCheckPattern,
        "비밀번호는 영문, 숫자, 특수문자를 혼합하여 8~20자리를 입력해주세요."
      ),
    password2: yup
      .string()
      .required("비밀번호가 일치하지 않습니다.")
      .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
    userName: yup.string().required("성함을 입력해주세요."),
    gender: yup
      .string()
      .oneOf(["남성", "여성"])
      .required("성별을 선택해주세요."),
    contact: yup
      .string()
      .required("연락처는 하이픈(-)을 포함한 형태로 입력해주세요.")
      .matches(contactCheckPattern, "올바른 연락처를 입력해주세요."),
  })
  .required();

export const UserInfoValidation = yup
  .object()
  .shape({
    userName: yup.string().required("성함을 입력해주세요."),
    gender: yup
      .string()
      .oneOf(["남성", "여성"])
      .required("성별을 선택해주세요."),
    contact: yup
      .string()
      .required("연락처는 하이픈(-)을 포함한 형태로 입력해주세요.")
      .matches(contactCheckPattern, "올바른 연락처를 입력해주세요."),
  })
  .required();

export const SearchIdValidation = yup
  .object()
  .shape({
    userName: yup.string().required("성함을 입력해주세요."),
    contact: yup
      .string()
      .required("연락처는 하이픈(-)을 포함한 형태로 입력해주세요.")
      .matches(contactCheckPattern, "올바른 연락처를 입력해주세요."),
  })
  .required();

export const SearchPassValidation = yup
  .object()
  .shape({
    userId: yup
      .string()
      .required("아이디는 영문 소문자와 숫자 포함 5~10자리를 입력해주세요.")
      .max(10, "아이디는 10자리 이하여야 합니다.")
      .min(5, "아이디는 5자리 이상이어야 합니다.")
      .matches(
        idCheckPattern,
        "아이디는 영문 소문자와 숫자 포함 5~10자리를 입력해주세요."
      ),
    userName: yup.string().required("성함을 입력해주세요."),
    contact: yup
      .string()
      .required("연락처는 하이픈(-)을 포함한 형태로 입력해주세요.")
      .matches(contactCheckPattern, "올바른 연락처를 입력해주세요."),
  })
  .required();

export const ResetPassValidation = yup
  .object()
  .shape({
    password: yup
      .string()
      .required(
        "비밀번호는 영문, 숫자, 특수문자를 혼합하여 8~20자리를 입력해주세요."
      )
      .max(20, "비밀번호는 20자리 이하여야 합니다.")
      .min(8, "비밀번호는 8자리 이상이어야 합니다.")
      .matches(
        pwCheckPattern,
        "비밀번호는 영문, 숫자, 특수문자를 혼합하여 8~20자리를 입력해주세요."
      ),
    password2: yup
      .string()
      .required("비밀번호가 일치하지 않습니다.")
      .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다."),
  })
  .required();
