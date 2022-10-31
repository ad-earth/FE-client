//제품 정보 (products)
export interface ProdType {
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Option: Array<
    [string | null, string | null, number | null, number | null, number | null]
  >;
}
export interface ProductType extends ProdType {
  p_No: number;
  o_Status: string;
  r_Status: boolean; //리뷰 등록 여부
  p_Status: boolean; // 상품 존재 여부
}

//주문 정보
export interface OrderListType {
  o_No: number;
  o_Date: string;
  o_Price: number;
  products: ProductType[];
}

// api data
export interface OrderType {
  cnt: 30;
  orderList: OrderListType[];
}
