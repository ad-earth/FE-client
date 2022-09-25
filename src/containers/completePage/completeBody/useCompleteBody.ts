import { useQuery } from "react-query";
import { getComplete } from "../../../shared/apis/api";

export const useComplete = () => {
  const queryFn = async () => await getComplete();
  const res = useQuery("complete", queryFn);
  console.log(res.data?.data);
  return res.data?.data;
};

// axios.get(api, { headers: { Authorization: `Bearer ${token}` } });
