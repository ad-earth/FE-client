export interface Address {
  d_Name: string;
  d_Phone: number;
  d_Address1: string;
  d_Address2: string;
  d_Memo: string;
}
export interface UserInfoType {
  u_Name: string;
  u_Phone: number;
}
export interface ProductsType {
  p_No: number;
  p_Thumbnail: string[];
  p_Category: string;
  a_Brand: string;
  p_Name: string;
  p_Cost: number;
  p_Sale: false;
  p_Discount: number;
  p_Option: Array<
    [string | null, string | null, number | null, number | null, number]
  >;
  p_Price: number;
  p_Cnt: number;
  o_Status: string;
}

export interface OrderType {
  o_No: number;
  o_Date: string;
  o_Price: number;
  products: ProductsType[];
  userInfo: UserInfoType;
  address: Address;
}
