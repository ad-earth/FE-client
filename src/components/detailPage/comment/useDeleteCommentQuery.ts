import { useMutation, useQueryClient } from "react-query";
import { deleteReview } from "../../../shared/apis/api";

export const useDeleteCommentQuery = (reviewNo: number) => {
  const queryClient = useQueryClient();
  return useMutation(() => deleteReview(reviewNo), {
    onSuccess: () => queryClient.invalidateQueries("reviews"),
  });
};
