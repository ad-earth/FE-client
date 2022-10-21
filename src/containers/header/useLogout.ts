import { postCartData } from "../../shared/apis/api";
import { CartType } from "../../shared/types/types";
import { useMutation } from "react-query";

const PostCartData = async (data: CartType) => {
  const res = await postCartData(data);
  return res.data;
};

export const useLogOut = (data: CartType) => {
  return useMutation(() => PostCartData(data), {});
};
