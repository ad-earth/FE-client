import { useQuery } from "react-query";
import { getId } from "../../../../../shared/apis/api";

type IdData = {
  u_Name: string;
  u_Phone: string;
};

const GetId = async (data: IdData) => {
  const res = await getId(data.u_Name, data.u_Phone);
  return res.data;
};

export const useSearchId = (data: IdData) => {
  return useQuery(["getSearchId", data], () => GetId(data), {
    enabled: !!data,
    onSuccess: () => {
      return data;
    },
  });
};
