import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { AxiosResponse } from "axios";
import { DetailResponseType } from "./details.type";
import { useAppDispatch } from "../../../redux/store";
import { getDetails } from "../../../shared/apis/api";
import { setDetails } from "../../../redux/reducer/detailSlice";

export const useGetDetailQuery = (productNo: string, keyword?: string) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return useQuery<AxiosResponse<DetailResponseType>, Error>(["detail", productNo], () => getDetails(productNo, keyword), {
    onSuccess: ({ data }) => {
      dispatch(setDetails(data));
    },
    onError: () => navigate("/notfound"),
  });
};
