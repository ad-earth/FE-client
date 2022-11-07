export interface ProductType {
  p_No: number;
  p_Category: string;
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Cost: number;
  p_Sale: boolean;
  p_Discount: number;
  p_Option: [string, string, string, number, number][];
  p_Soldout: boolean;
  p_Best: boolean;
  p_New: boolean;
}

export interface ProductDetailType extends ProductType {
  p_Cnt: number;
  p_Content: string;
  p_Desc: string;
  p_Like: number;
  p_Review: number;
}

export type OptionListType = {
  id: number;
  color: string;
  colorCode: string;
  size: string;
  extraCost: number;
  price: number;
  qty: number;
}[];

export type OptionArrType = [string, string, string, number, number, number];

export interface ReviewType {
  r_No: number;
  u_Id: string;
  r_Score: number;
  r_Content: string;
  createdAt: string;
}

// cart
// 인덱스에서 get하는 데이터
export interface CartType {
  id: number;
  keywordNo: number;
  prodNo: string;
  thumbnail: string[];
  category: string;
  brand: string;
  name: string;
  price: number;
  discount: number;
  option: Array<string | number | null>[];
  totalPrice: number;
  totalCnt: number;
}
//get으로 받는 데이터
export interface CartResponseType {
  cartList: {
    k_No: number;
    p_No: string;
    p_Thumbnail: string[];
    p_Category: string;
    a_Brand: string;
    p_Name: string;
    p_Cost: number;
    p_Discount: number;
    p_Option: Array<string | number | null>[];
    p_Price: number;
    p_Cnt: number;
  }[];
}
