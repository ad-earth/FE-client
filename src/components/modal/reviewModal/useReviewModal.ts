import { postReviews } from "../../../shared/apis/api";
import { useMutation } from "react-query";

interface Data {
  id: number;
  r_Content: string;
  r_Score: number | null;
}
const PostReview = async (data: Data) => {
  console.log(data);
  const body: any = {
    r_Content: data.r_Content,
    r_Score: data.r_Score,
  };
  const res = await postReviews(data.id, body);
  return res;
};

const useReviewModal = (data: Data) => {
  return useMutation(() => PostReview(data), {});
};
export default useReviewModal;
