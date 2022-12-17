import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { MainResponseType } from "./MainList.type";
import { getMain } from "../../../shared/apis/api";

export const useGetMainListQuery = () => {
  return useQuery<AxiosResponse<MainResponseType>, Error>("main", () =>
    getMain()
  );
};
