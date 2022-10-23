import { useQuery } from "react-query";
import { getReviews } from "../../../shared/apis/api";

export const useGetCommentsQuery = (productNo: string, page: number) => {
  return useQuery(["comments", { page: page }], () =>
    getReviews(productNo, page)
  );
};
