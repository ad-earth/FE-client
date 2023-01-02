import { getCancel, getOrders } from "../../../shared/apis/api";
import { useInfiniteQuery } from "react-query";

export default function useGetOrderQuery(path: string) {
  const fetchData = async ({ pageParam = 1 }) => {
    /** 주문조회 리스트 */
    if (path === "mypage") {
      const { data } = await getOrders(pageParam);
      return {
        cnt: data.cnt,
        result: data.orderList,
        nextPage: pageParam + 1,
        pageParam: pageParam,
      };
      /** 주문취소 리스트 */
    } else if (path === "cancel") {
      const { data } = await getCancel(pageParam);
      return {
        cnt: data.cnt,
        result: data.cancelList,
        nextPage: pageParam + 1,
        pageParam: pageParam,
      };
    }
  };
  const order = useInfiniteQuery("orderList", fetchData, {
    getNextPageParam: (lastPage, pages) =>
      Math.round(lastPage.cnt / 10) > lastPage.pageParam
        ? lastPage.nextPage
        : undefined,
    enabled: Boolean(path === "mypage"),
    staleTime: 10 * 1000,
    refetchOnWindowFocus: false,
  });

  const cancel = useInfiniteQuery("cancelList", fetchData, {
    getNextPageParam: (lastPage, pages) =>
      Math.round(lastPage.cnt / 10) > lastPage.pageParam
        ? lastPage.nextPage
        : undefined,
    enabled: Boolean(path === "cancel"),
    staleTime: 10 * 1000,
    refetchOnWindowFocus: false,
  });

  return path === "mypage" ? order : path === "cancel" ? cancel : undefined;
}
