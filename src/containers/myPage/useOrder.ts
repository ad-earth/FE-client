import { useQuery } from "react-query";
import { getOrders } from "../../shared/apis/api";

const useOder = (page: string) => {
  async function queryFn() {
    const { data } = await getOrders(page);
    return data;
  }
  const res = useQuery(["orderList", page], queryFn, {
    enabled: !!page,
  });
  return res;
};
export default useOder;
