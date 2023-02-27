import { putUserInfoChange } from "../../../shared/apis/api";
import { useMutation } from "react-query";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { setUserData } from "../../../redux/reducer/userSlice";

interface Data {
  u_Name: string;
  u_Address1: string;
  u_Address2: string;
  u_Address3: string;
  u_Gender: string;
  u_Phone: string;
  u_Img: string;
}

const PutUserInfoChange = async (data: Data) => {
  const res = await putUserInfoChange(
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

export const useUserInfoModal = (data: Data) => {
  // const dispatch = useAppDispatch();
  // const userData = useAppSelector((state) => state.userSlice.userData);
  return useMutation(() => PutUserInfoChange(data), {
    onSuccess: () => {
      if (data) {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        const editUserData = {
          // token: userData.token,
          u_Idx: userInfo.u_Idx,
          u_Id: userInfo.u_Id,
          u_Address1: data.u_Address1,
          u_Address2: data.u_Address2,
          u_Address3: data.u_Address3,
          u_Gender: data.u_Gender,
          u_Img: data.u_Img,
          u_Name: data.u_Name,
          u_Phone: data.u_Phone,
        };
        localStorage.setItem("userInfo", JSON.stringify(editUserData));
        // dispatch(setUserData(editUserData));
      }
    },
  });
};
