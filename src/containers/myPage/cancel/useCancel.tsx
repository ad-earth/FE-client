import { getCancel } from "../../../shared/apis/api";
import { useInfiniteQuery } from "react-query";

const fetchPostList = async (pageParam: number) => {
  const res = await getCancel(pageParam);
  const { cnt, cancelList } = res.data;
  return {
    cnt,
    cancelList,
    nextPage: pageParam + 1,
    pageParam,
  };
};

const useCancel = () => {
  return useInfiniteQuery(
    ["cancelList"],
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

export default useCancel;
