import { useMutation } from "react-query";
import { deleteUserWithdrawal } from "../../../shared/apis/api";

const useWithdrawalModal = () => {
  return useMutation(() => deleteUserWithdrawal(), {});
};
export default useWithdrawalModal;
