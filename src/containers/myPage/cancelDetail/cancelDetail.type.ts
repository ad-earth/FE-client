export interface ProductType {
  o_Status: string;
  p_No: number;
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Option: Array<
    [string | null, string | null, number | null, number | null, number | null]
  >;
  p_Price: number;
}
export interface LocationType {
  products: ProductType[];
  orderNo: number;
}
export interface PutData {
  oNo: string;
  p_No: number[];
}
