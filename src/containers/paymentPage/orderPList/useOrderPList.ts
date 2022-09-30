import { useQuery } from "react-query";
import { getPay } from "../../../shared/apis/api";

export const useGetPay = () => {
  const queryFn = async () => await getPay();
  const res = useQuery("getPay", queryFn);
  return res.data?.data;
};
