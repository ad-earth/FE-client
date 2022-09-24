import { useMutation } from "react-query";
import { deleteUserWithdrawal } from "../../../shared/apis/api";

// const mutation = useMutation(newTodo => {
//   return axios.post('/todos', newTodo)
// })

const useWithdrawalModal = () => {
  return useMutation(() => deleteUserWithdrawal(), {});
};
export default useWithdrawalModal;
