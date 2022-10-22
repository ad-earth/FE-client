import { useQuery } from "react-query";
import { getDetails } from "../../../shared/apis/api";

export const useGetOption = (p_No: number) => {
  const queryFn = async () => await getDetails(p_No);
  const res = useQuery(["Option", p_No], queryFn, {
    enabled: !!p_No,
  });
  return res.data?.data;
};
