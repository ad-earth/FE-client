import { putCancel } from "../../../shared/apis/api";
import { useMutation } from "react-query";

interface Data {
  oNo: string;
  p_No: number[];
}
const PutCancelList = async (data: Data) => {
  const res = await putCancel(data.oNo, data.p_No);
  return res;
};

const useCancelDetail = (data: Data) => {
  return useMutation(() => PutCancelList(data), {});
};

export default useCancelDetail;
