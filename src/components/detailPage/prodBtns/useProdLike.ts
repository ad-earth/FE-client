import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "react-query";

import { getProdDetails, postLike } from "../../../shared/apis/api";

// GET LIKE
async function getProdLike(p_No: string) {
  const { data } = await getProdDetails(p_No);
  return data;
}
export function useGetLike(p_No: string) {
  const fallback: [] = [];
  const { data = fallback } = useQuery("like", () => getProdLike(p_No));
  return data;
}

// POST & UPDATE LIKE
async function setProdLike(prodNo: number) {
  await postLike(prodNo);
}
export function useProdLike(): UseMutateFunction<
  void,
  unknown,
  number,
  unknown
> {
  const queryClient = useQueryClient();
  const { mutate } = useMutation((prodNo: number) => setProdLike(prodNo), {
    onSuccess: () => queryClient.invalidateQueries(["like"]),
  });
  return mutate;
}
