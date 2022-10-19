import { useQuery, useMutation } from "react-query";
import { getPay, postPay } from "../../../shared/apis/api";
import { PayDataType } from "./orderPList.type";

export const useGetPay = () => {
  const queryFn = async () => await getPay();
  const res = useQuery("getPay", queryFn);
  return res.data?.data;
};

const postPayList = async (data: PayDataType) => {
  const res = await postPay(
    data.address.d_No,
    data.address.d_Name,
    data.address.d_Phone,
    data.address.d_Address1,
    data.address.d_Address2,
    data.address.d_Address3,
    data.address.d_Memo,
    data.products.kNo,
    data.products.pNo,
    data.products.pThumbnail,
    data.products.pCategory,
    data.products.aBrand,
    data.products.pName,
    data.products.pCost,
    data.products.pDiscount,
    data.products.pSale,
    data.products.pOption,
    data.products.pPrice,
    data.products.pCnt,
    data.oPrice
  );
  return res;
};

export const usePostPay = (data: PayDataType) => {
  return useMutation(() => postPayList(data), {});
};
