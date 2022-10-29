import { useQuery } from "react-query";
import { getMain } from "../../../shared/apis/api";

export const useMainListQuery = () => {
  return useQuery("main", () => getMain());
};
