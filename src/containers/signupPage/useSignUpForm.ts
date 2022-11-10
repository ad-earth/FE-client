import { postSignup } from "../../shared/apis/api";
import { useMutation } from "react-query";
import { SignUpDataType } from "./signUpForm.type";

const PostSignup = async (data: SignUpDataType) => {
  const res = await postSignup(
    data.u_Id,
    data.u_Pw,
    data.u_Name,
    data.u_Address1,
    data.u_Address2,
    data.u_Address3,
    data.u_Gender,
    data.u_Phone,
    data.u_Img
  );
  return res.data;
};

export const useSignUpForm = (data: SignUpDataType) => {
  return useMutation(() => PostSignup(data), {});
};
