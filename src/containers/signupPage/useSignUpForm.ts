import { postSignup } from "../../shared/apis/api";
import { useMutation } from "react-query";

interface Data {
  u_Id: string;
  u_Pw: string;
  u_Name: string;
  u_Address1: string;
  u_Address2: string;
  u_Address3: string;
  u_Gender: string;
  u_Phone: string;
  u_Img: string;
}

const PostSignup = async (data: Data) => {
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
  return res;
};

export const useSignUpForm = (data: Data) => {
  return useMutation(() => PostSignup(data), {});
};
