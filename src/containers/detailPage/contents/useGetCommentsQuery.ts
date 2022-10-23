import { useQuery } from "react-query";
import { getReviews } from "../../../shared/apis/api";

export const useGetCommentsQuery = (productNo: string, page: number) => {
  return useQuery(["reviews", { page: page }], () =>
    getReviews(productNo, page)
  );
};
