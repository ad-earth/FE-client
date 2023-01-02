import { getWishList } from "../../../shared/apis/api";
import { useInfiniteQuery } from "react-query";
import { WishListType } from "./wish.type";
import { useMemo } from "react";

export default function useGetWishQuery() {
  const fetchData = async ({ pageParam = 1 }) => {
    const { data } = await getWishList(pageParam);
    return {
      cnt: data.cnt,
      result: data.wishList,
      nextPage: pageParam + 1,
      pageParam: pageParam,
    };
  };

  const queryInfo = useInfiniteQuery(["WishList"], fetchData, {
    getNextPageParam: (lastPage) =>
      Math.round(lastPage.cnt / 9) > lastPage.pageParam
        ? lastPage.nextPage
        : undefined,
    staleTime: 10 * 1000,
    refetchOnWindowFocus: false,
  });
  return {
    ...queryInfo,
    data: useMemo(() => {
      let result: WishListType[] = [];
      queryInfo.data?.pages.map((item) => {
        for (let i = 0; i < item.result.length; i++)
          result.push(item.result[i]);
      });
      return { wishData: result, cnt: queryInfo.data?.pages[0].cnt };
    }, [queryInfo]),
  };
}
