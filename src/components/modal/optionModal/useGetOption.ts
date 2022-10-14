import { useQuery } from "react-query";
import { getProdDetails } from "../../../shared/apis/api";

export const useGetOption = (p_No: string) => {
  const queryFn = async () => await getProdDetails(p_No);
  const res = useQuery(["Option", p_No], queryFn, {
    enabled: !!p_No,
  });
  return res.data?.data;
};
