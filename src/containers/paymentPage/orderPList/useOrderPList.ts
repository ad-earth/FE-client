import { useQuery, useMutation } from "react-query";
import { getPay, postPay } from "../../../shared/apis/api";
import { PayAddressData } from "./orderPList.type";

export const useGetPay = () => {
  const queryFn = async () => await getPay();
  const res = useQuery("getPay", queryFn);
  return res.data?.data;
};

const postPayList = async (data: PayAddressData) => {
  const res = await postPay(
    data.address.d_No,
    data.address.d_Name,
    data.address.d_Phone,
    data.address.d_Address1,
    data.address.d_Address2,
    data.address.d_Address3,
    data.address.d_Memo
  );
  return res;
};

export const usePostPay = (data: PayAddressData) => {
  return useMutation(() => postPayList(data), {});
};
//  data.address.d_No,
//    data.address.d_Name,
//    data.address.d_Phone,
//    data.address.d_Address1,
//    data.address.d_Address2,
//    data.address.d_Memo;
