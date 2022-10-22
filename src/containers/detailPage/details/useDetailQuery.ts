import { useQuery } from "react-query";
import { getDetails } from "../../../shared/apis/api";

export const useDetailQuery = (productNo: number, keyWord: string) => {
  return useQuery("detail", () => getDetails(productNo, keyWord));
};
