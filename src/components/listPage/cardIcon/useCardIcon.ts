import { useMutation } from "react-query";
import { postLike } from "../../../shared/apis/api";

export const useIcon = () => {
  return useMutation((id: number) => postLike(id), {});
};
