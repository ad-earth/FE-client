import { ProductType } from "../../../../containers/myPage/order/order.type";

export interface PropsType {
  products: ProductType[];
  orderNo?: number;
}
