import { useMutation, useQueryClient } from "react-query";
import { postLike } from "../../../shared/apis/api";

export const usePostLikeQuery = (productNo: string) => {
  const queryClient = useQueryClient();
  return useMutation(() => postLike(Number(productNo)), {
    onSuccess: () => {
      queryClient.invalidateQueries("detail");
    },
  });
};
