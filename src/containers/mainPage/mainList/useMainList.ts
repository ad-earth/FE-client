import { useQuery } from "react-query";
import { getMain } from "../../../shared/apis/api";

export const useMainList = () => {
  return useQuery("main", () => getMain());
};
