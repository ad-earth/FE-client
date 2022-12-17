import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { DetailResponseType } from "./details.type";
import { useAppDispatch } from "../../../redux/store";
import { getDetails } from "../../../shared/apis/api";
import { setDetails } from "../../../redux/reducer/detailSlice";
import toast from "react-hot-toast";

export const useGetDetailQuery = (productNo: string, keyword?: string) => {
  const dispatch = useAppDispatch();

  return useQuery<AxiosResponse<DetailResponseType>, Error>(
    ["detail", productNo],
    () => getDetails(productNo, keyword),
    {
      onSuccess: ({ data }) => {
        dispatch(setDetails(data));
      },
      // onError: ({ message }) => toast.error(message),
    }
  );
};
