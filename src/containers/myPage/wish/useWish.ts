import { getWishList } from "../../../shared/apis/api";
import { useInfiniteQuery } from "react-query";

const fetchPostList = async (pageParam: number) => {
  const res = await getWishList(pageParam);
  const { cnt, wishList } = res.data;
  return {
    cnt,
    wishList,
    nextPage: pageParam + 1,
    pageParam,
  };
};

const useWish = () => {
  return useInfiniteQuery(
    ["WishList"],
    ({ pageParam = 1 }) => fetchPostList(pageParam),
    {
      getNextPageParam: (lastPage) =>
        Math.round(lastPage.cnt / 9) > lastPage.pageParam
          ? lastPage.nextPage
          : undefined,
      retry: 1,
    }
  );
};
export default useWish;
