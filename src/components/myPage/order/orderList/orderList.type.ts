import { SetStateAction, Dispatch } from "react";
import { ProductType } from "../../../../containers/myPage/order/order.type";

export interface PropsType {
  products: ProductType[];
  orderNo?: number;
  infoIsOpen?: boolean;
  setInfoIsOpen?: Dispatch<SetStateAction<boolean>>;
  setProduct?: Dispatch<SetStateAction<ProductType>>;
}
