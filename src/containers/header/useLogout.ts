import { postCartData } from "../../shared/apis/api";
import { CartResponseType } from "../../shared/types/types";
import { useMutation } from "react-query";

const PostCartData = async (data: CartResponseType) => {
  const res = await postCartData(data);
  return res.data;
};

export const useLogOut = (data: CartResponseType) => {
  return useMutation(() => PostCartData(data), {});
};
