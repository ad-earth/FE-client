import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { DetailResponseType } from "./details.type";
import { useAppDispatch } from "../../../redux/store";
import { getDetails } from "../../../shared/apis/api";
import { setDetails } from "../../../redux/reducer/detailSlice";
import { setErrorMessage, setIsError } from "../../../redux/reducer/errorSlice";

export const useGetDetailQuery = (productNo: string, keyword?: string) => {
  const dispatch = useAppDispatch();

  return useQuery<AxiosResponse<DetailResponseType>, Error>(
    ["detail", productNo],
    () => getDetails(productNo, keyword),
    {
      enabled: !!productNo,
      refetchOnWindowFocus: false,
      onSuccess: ({ data }) => {
        dispatch(setDetails(data));
      },
      onError: ({ message }) => {
        dispatch(setIsError(true)) && dispatch(setErrorMessage(message));
      },
    }
  );
};
