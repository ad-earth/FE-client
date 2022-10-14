import { useQuery } from "react-query";
import { getList, getCate } from "../../../shared/apis/api";

export const useCardList = (sort: string, pageNo: string) => {
  const queryFn = async () => await getList(sort, pageNo);
  const res = useQuery(["cardList", [sort, pageNo]], queryFn, {
    enabled: !![sort, pageNo],
  });
  return res.data?.data;
};

export const useCateList = (category: string, sort: string, pageNo: string) => {
  const queryFn = async () => await getCate(category, sort, pageNo);
  const res = useQuery(["cardList", [category, sort, pageNo]], queryFn, {
    enabled: !![category, sort, pageNo],
  });
  return res.data?.data;
};
