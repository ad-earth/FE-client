import { useQuery } from "react-query";
import { getList } from "../../../shared/apis/api";

export const useCardList = (sort: string, pageNo: string) => {
  const queryFn = async () => await getList(sort, pageNo);
  const res = useQuery(["cardList", [sort, pageNo]], queryFn, {
    enabled: !![sort, pageNo],
  });
  return res.data?.data;
};
