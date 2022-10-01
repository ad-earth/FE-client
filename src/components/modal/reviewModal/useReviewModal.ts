import { postReviews } from "../../../shared/apis/api";
import { useMutation } from "react-query";

interface Data {
  id: number;
  r_Content: string;
  r_Score: number | null;
}
const PostReview = async (data: Data) => {
  console.log(data);
  const res = await postReviews(data.id, data.r_Content, data.r_Score);
  return res;
};

const useReviewModal = (data: Data) => {
  return useMutation(() => PostReview(data), {});
};
export default useReviewModal;
