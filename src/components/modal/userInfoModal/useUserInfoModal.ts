import { putUserInfoChange } from "../../../shared/apis/api";
import { useMutation } from "react-query";

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
  return useMutation(() => PutUserInfoChange(data), {
    onSuccess: () => {
      if (data) {
        localStorage.setItem("u_Name", data.u_Name);
        localStorage.setItem("u_Gender", data.u_Gender);
        localStorage.setItem("u_Phone", data.u_Phone);
      }
    },
  });
};
