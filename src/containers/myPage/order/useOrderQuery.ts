import { getOrders } from "../../../shared/apis/api";
import { useInfiniteQuery } from "react-query";

const fetchPostList = async (pageParam: number) => {
  const res = await getOrders(pageParam);
  const { cnt, orderList } = res.data;
  return {
    cnt,
    orderList,
    nextPage: pageParam + 1,
    pageParam,
  };
};

const useOrderQuery = () => {
  return useInfiniteQuery(
    ["orderList"],
    ({ pageParam = 1 }) => fetchPostList(pageParam),
    {
      getNextPageParam: (lastPage, pages) =>
        Math.round(lastPage.cnt / 10) > lastPage.pageParam
          ? lastPage.nextPage
          : undefined,
      staleTime: 10 * 1000,
      retry: 1,
    }
  );
};

export default useOrderQuery;
