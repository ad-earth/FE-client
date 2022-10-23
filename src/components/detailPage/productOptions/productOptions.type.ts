export interface PropsType {
  options: [string, string, string, number, number][];
  price: number;
  discount: number;
  productNo: number;
  details?: DetailsType;
}

export interface StyleType {
  drop?: boolean;
  colorCode?: string;
}

export type OptionListType = {
  id: number;
  color: string;
  size: string;
  extraCost: number;
  price: number;
  qty: number;
}[];

export type ProductType = {
  a_Brand: string;
  p_Best: boolean;
  p_Category: string;
  p_Cnt: number;
  p_Content: string;
  p_Cost: number;
  p_Desc: string;
  p_Discount: number;
  p_Like: number;
  p_Name: string;
  p_New: boolean;
  p_No: number;
  p_Option: [string, string, string, number, number][];
  p_Review: number;
  p_Sale: boolean;
  p_Soldout: boolean;
  p_Thumbnail: string[];
};

export type DetailsType = {
  k_No: number;
  product: ProductType;
  userLike: boolean;
};
