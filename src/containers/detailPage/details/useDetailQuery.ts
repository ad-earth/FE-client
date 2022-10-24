import { useQuery } from "react-query";
import { getDetails } from "../../../shared/apis/api";

export const useDetailQuery = (productNo: string, keyWord?: string) => {
  return useQuery("detail", () => getDetails(productNo, keyWord), {
    onError: ({ response }) => {
      return response.data.errorMessage;
    },
  });
};
