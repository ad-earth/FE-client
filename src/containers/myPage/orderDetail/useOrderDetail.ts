import { useQuery } from "react-query";
import { getOrderDetail } from "../../../shared/apis/api";

const useOrderDetail = (id: string) => {
  const queryFn = async () => await getOrderDetail(id);
  const res = useQuery(["orderDetail", id], queryFn, {
    enabled: !!id,
  });
  return res.data?.data;
};

export default useOrderDetail;
