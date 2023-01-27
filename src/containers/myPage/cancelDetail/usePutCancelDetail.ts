import { putCancel } from "../../../shared/apis/api";
import { useMutation, useQueryClient } from "react-query";
import { PutData } from "./cancelDetail.type";

export default function usePutCancelDetail(data: PutData) {
  const PutCancelList = async () => await putCancel(data.oNo, data.p_No);
  const queryClient = useQueryClient();
  return useMutation(PutCancelList, {
    onSuccess: () => queryClient.invalidateQueries("orderList"),
  });
}
