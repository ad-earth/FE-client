import { useQuery } from "react-query";
import { getSearch } from "../../../shared/apis/api";
//products
const getData = async () => {
  const { data } = await getSearch();
  return data;
};
export const useSearchDataList = () => {
  const fallback: [] = [];
  const { data = fallback, status } = useQuery("products", getData);
  if (status === "error") {
    return "error";
  }
  return data;
};
