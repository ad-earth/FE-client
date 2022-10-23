import { useMutation, useQuery, useQueryClient } from "react-query";
import { getDetails, postLike } from "../../../shared/apis/api";

export const useGetLikeQuery = (productNo: string) => {
  return useQuery("like", () => getDetails(productNo));
};

export const usePostLikeQuery = (productNo: number) => {
  const queryClient = useQueryClient();
  return useMutation(() => postLike(productNo), {
    onSuccess: () => {
      queryClient.invalidateQueries("like");
    },
  });
};
