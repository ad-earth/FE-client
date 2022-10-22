import { useQuery } from "react-query";
import { getPw } from "../../../../../shared/apis/api";

type PwData = {
  u_Id: string;
  u_Name: string;
  u_Phone: string;
};

const GetPw = async (data: PwData) => {
  const res = await getPw(data.u_Id, data.u_Name, data.u_Phone);
  return res.data;
};

export const useSearchPass = (data: PwData) => {
  return useQuery(["getSearchPw", data], () => GetPw(data), {
    enabled: !!data,
    onSuccess: () => {
      return data;
    },
  });
};
