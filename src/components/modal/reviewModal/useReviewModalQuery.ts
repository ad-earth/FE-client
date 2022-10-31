import { postReviews } from "../../../shared/apis/api";
import { useMutation } from "react-query";
import { ReviewType } from "./reviewModal.type";

const useReviewModalQuery = (id: number, data: ReviewType) => {
  const PostReview = async () =>
    await postReviews(id, data.r_Content, data.r_Score);
  return useMutation(PostReview, {
    onSuccess: () => {
      alert("리뷰등록이 완료되었습니다!");
    },
  });
};
export default useReviewModalQuery;
