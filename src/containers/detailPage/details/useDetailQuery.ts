import { useQuery } from "react-query";
import { setDetails } from "../../../redux/reducer/detailSlice";
import { setErrorMessage, setIsError } from "../../../redux/reducer/errorSlice";
import { useAppDispatch } from "../../../redux/store";
import { getDetails } from "../../../shared/apis/api";

export const useDetailQuery = (productNo: string, keyWord?: string) => {
  const dispatch = useAppDispatch();

  return useQuery("detail", () => getDetails(productNo, keyWord), {
    onSuccess: ({ data }) => {
      dispatch(setDetails(data));
    },
    onError: ({ message }) => {
      dispatch(setIsError(true)) && dispatch(setErrorMessage(message));
    },
  });
};
