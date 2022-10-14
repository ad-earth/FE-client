import { postLogin } from "../../shared/apis/api";
import { useMutation } from "react-query";

interface Data {
  u_Id: string;
  u_Pw: string;
}

const PostLogin = async (data: Data) => {
  const res = await postLogin(data.u_Id, data.u_Pw);
  return res.data;
};

export const useLoginForm = (data: Data) => {
  return useMutation(() => PostLogin(data), {
    onSuccess: (data) => {
      if (data.userInfo) {
        localStorage.setItem("token", data.userInfo.token);
        localStorage.setItem("u_Idx", data.userInfo.u_Idx);
        localStorage.setItem("u_Id", data.userInfo.u_Id);
        localStorage.setItem("u_Address1", data.userInfo.u_Address1);
        localStorage.setItem("u_Address2", data.userInfo.u_Address2);
        localStorage.setItem("u_Address3", data.userInfo.u_Address3);
        localStorage.setItem("u_Gender", data.userInfo.u_Gender);
        localStorage.setItem("u_Img", data.userInfo.u_Img);
        localStorage.setItem("u_Name", data.userInfo.u_Name);
        localStorage.setItem("u_Phone", data.userInfo.u_Phone);
      }
      if (data.cartList) {
        return data.cartList;
      }
    },
  });
};
