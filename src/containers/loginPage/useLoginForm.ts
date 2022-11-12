import { postLogin } from "../../shared/apis/api";
import { useMutation } from "react-query";
import { useAppDispatch } from "../../redux/store";
import { setUserData } from "../../redux/reducer/userSlice";
import { LoginDataType } from "./loginForm.type";

const PostLogin = async (data: LoginDataType) => {
  const res = await postLogin(data.u_Id, data.u_Pw);
  return res.data;
};

export const useLoginForm = (data: LoginDataType) => {
  const dispatch = useAppDispatch();
  return useMutation(() => PostLogin(data), {
    onSuccess: (data) => {
      if (data.userInfo) {
        localStorage.setItem("token", data.userInfo.token);
        dispatch(setUserData(data.userInfo));
      }
      if (data.cartList) {
        console.log("data.cartList: ", data.cartList);
        return data.cartList;
      }
    },
  });
};
