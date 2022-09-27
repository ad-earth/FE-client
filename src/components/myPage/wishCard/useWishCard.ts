import { useMutation } from "react-query";
import { postLike } from "../../../shared/apis/api";

const useWishCard = () => {
  return useMutation((id: number) => postLike(id), {});
};

export default useWishCard;
