import { useMemo } from "react";
import { useQuery } from "react-query";
import { getOrderDetail } from "../../../shared/apis/api";
import { ProductsType } from "./orderDetail.type";

export default function useGetOrderDetail(id: string) {
  const queryFn = async () => await getOrderDetail(id);
  const res = useQuery(["orderDetail", id], queryFn, {
    enabled: !!id,
  });
  return {
    ...res,
    orderInfo: res.data?.data,
    cancelPrice: useMemo(() => {
      let price: number = 0;
      res.data?.data.products
        .filter((data: ProductsType) => data.o_Status.includes("취소완료"))
        .map((data: ProductsType) => {
          for (let i = 0; i < data.p_Option.length; i++)
            price += data.p_Option[i][4];
        });
      return price;
    }, [res]),
  };
}
