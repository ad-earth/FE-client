import { useQuery } from "react-query";
import { getComplete } from "../../../shared/apis/api";

export const useComplete = () => {
  const queryFn = async () => await getComplete();
  const res = useQuery("complete", queryFn, {
    refetchOnWindowFocus: false,
  });
  return res.data?.data;
};
