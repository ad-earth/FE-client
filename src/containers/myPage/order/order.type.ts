interface ProductsType {
  p_No: number;
  p_Thumbnail: string[];
  p_Category: string;
  a_Brand: string;
  p_Name: string;
  p_Cost: number;
  p_Sale: false;
  p_Discount: number;
  p_Option: Array<
    [string | null, string | null, number | null, number | null, number | null]
  >;
  p_Price: number;
  p_Cnt: number;
  o_Status: string;
  r_Status: boolean;
}
export interface OrderListType {
  o_No: number;
  o_Date: string;
  o_Price: number;
  products: ProductsType[];
}

export interface OrderType {
  cnt: 30;
  orderList: OrderListType[];
}
