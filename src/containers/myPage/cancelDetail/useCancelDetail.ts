import { putCancel } from "../../../shared/apis/api";
import { useMutation, useQueryClient } from "react-query";

interface Data {
  oNo: string;
  p_No: number[];
}
const PutCancelList = async (data: Data) => {
  const res = await putCancel(data.oNo, data.p_No);
  return res;
};

const useCancelDetail = (data: Data) => {
  const queryClient = useQueryClient();
  return useMutation(() => PutCancelList(data), {
    onSuccess: () => queryClient.invalidateQueries("orderList"),
  });
};

export default useCancelDetail;
