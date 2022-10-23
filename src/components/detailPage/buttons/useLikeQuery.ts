import { useMutation, useQuery, useQueryClient } from "react-query";
import { getDetails, postLike } from "../../../shared/apis/api";

export const useGetLikeQuery = (productNo: number) => {
  return useQuery("like", () => getDetails(productNo));
};

const queryClient = useQueryClient();
export const usePostLikeQuery = (productNo: number) => {
  return useMutation(() => postLike(productNo), {
    onSuccess: () => {
      queryClient.invalidateQueries("like");
    },
  });
};
