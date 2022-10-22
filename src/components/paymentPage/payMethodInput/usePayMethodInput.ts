import { useMutation } from "react-query";
import { deletePay } from "../../../shared/apis/api";

export const useDelPay = (dNo: number) => {
  return useMutation(() => deletePay(dNo), {});
};
export default useDelPay;
