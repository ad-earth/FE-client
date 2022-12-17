import { useQuery } from "react-query";
import { getCate } from "../../../shared/apis/api";

export const useCateList = (category: string, sort: string, pageNo: string) => {
  const queryFn = async () => await getCate(category, sort, pageNo);
  const res = useQuery(["cardList", [category, sort, pageNo]], queryFn, {
    enabled: !![category, sort, pageNo],
    refetchOnWindowFocus: false,
  });
  return res.data?.data;
};
