import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { ReviewResponseType } from "./contents.type";
import { getReviews } from "../../../shared/apis/api";

export const useGetReviewsQuery = (productNo: string, page: number) => {
  return useQuery<AxiosResponse<ReviewResponseType>, Error>(
    ["reviews", page],
    () => getReviews(productNo, page)
  );
};
