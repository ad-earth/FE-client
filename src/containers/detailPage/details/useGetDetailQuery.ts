import { useQuery } from "react-query";
import { setDetails } from "../../../redux/reducer/detailSlice";
import { setErrorMessage, setIsError } from "../../../redux/reducer/errorSlice";
import { useAppDispatch } from "../../../redux/store";
import { getDetails } from "../../../shared/apis/api";

export const useGetDetailQuery = (productNo: string, keyword?: string) => {
  const dispatch = useAppDispatch();

  return useQuery("detail", () => getDetails(productNo, keyword), {
    onSuccess: ({ data }) => {
      dispatch(setDetails(data));
    },
    onError: ({ message }) => {
      dispatch(setIsError(true)) && dispatch(setErrorMessage(message));
    },
  });
};
