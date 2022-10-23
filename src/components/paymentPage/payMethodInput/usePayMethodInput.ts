import { useMutation } from "react-query";
import { deletePay } from "../../../shared/apis/api";

export const useDelPay = () => {
  return useMutation((dNo: string) => deletePay(dNo), {});
};
export default useDelPay;
