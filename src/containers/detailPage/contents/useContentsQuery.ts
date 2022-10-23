import { useQuery } from "react-query";
import { getDetails } from "../../../shared/apis/api";

export const useContentsQuery = (productNo: string) => {
  return useQuery("contents", () => getDetails(productNo));
};
