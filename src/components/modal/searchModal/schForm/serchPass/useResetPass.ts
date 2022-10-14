import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { putNewPw } from "../../../../../shared/apis/api";

interface Data {
  u_Idx: number;
  u_Pw: string;
}

const PutNewPw = async (data: Data) => {
  const res = await putNewPw(data.u_Idx, data.u_Pw);
  return res;
};

export const useResetPass = () => {
  const navigate = useNavigate();
  return useMutation((data: Data) => PutNewPw(data), {
    // onSuccess: () => {
    //   alert("비밀번호를 변경했습니다!");
    // },
    // onError: () => {
    //   console.log("Error");
    // },
  });
};
