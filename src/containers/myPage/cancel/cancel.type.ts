interface ProductsType {
  p_No: number;
  p_Thumbnail: ["https://cdn.imweb.me/thumbnail/20220304/3ae1ed5a06cf4.jpg"];
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
export interface CancelListType {
  o_No: number;
  o_Date: string;
  o_Price: number;
  products: ProductsType[];
}

export interface CancelType {
  cnt: 30;
  cancelList: CancelListType[];
}
