import { postReviews } from "../../../shared/apis/api";
import { useMutation } from "react-query";
import { ReviewType } from "./reviewModal.type";

const useReviewModalQuery = (data: ReviewType) => {
  const PostReview = async () =>
    await postReviews(data.id, data.r_Content, data.r_Score);
  return useMutation(PostReview);
};
export default useReviewModalQuery;
