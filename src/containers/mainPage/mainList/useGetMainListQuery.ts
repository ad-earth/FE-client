import { useQuery } from "react-query";
import { getMain } from "../../../shared/apis/api";

export const useGetMainListQuery = () => {
  return useQuery("main", () => getMain());
};
