import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { DetailResponseType } from "../../../containers/detailPage/details/details.type";
import { getDetails } from "../../../shared/apis/api";

export const useGetLikeQuery = (productNo: string) => {
  return useQuery<AxiosResponse<DetailResponseType>, Error>("like", () =>
    getDetails(productNo)
  );
};
