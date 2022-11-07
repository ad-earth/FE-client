import { useQuery } from "react-query";
import { getSearch } from "../../../shared/apis/api";

const useSearchDataList = (keyword: string, pageNo: string) => {
  const queryFn = async () => await getSearch(keyword, pageNo);
  const res = useQuery(["orderDetail", [keyword, pageNo]], queryFn, {
    enabled: !![keyword, pageNo],
    refetchOnWindowFocus: false,
  });
  return res.data?.data;
};

export default useSearchDataList;
