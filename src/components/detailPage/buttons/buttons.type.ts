import { OptionListType } from "../productOptions/productOptions.type";

export interface PropsType {
  optionList: OptionListType;
  qty: number;
  totalPrice: number;
  totalQty: number;
}

export interface DetailType {
  userLike: boolean;
  k_No: number;
  product: {
    p_Best: boolean;
    p_No: number;
    p_Category: string;
    p_Thumbnail: string[];
    a_Brand: string;
    p_Name: string;
    p_Cost: number;
    p_Sale: boolean;
    p_Discount: number;
    p_Option: [[string, string, string, number, number]];
    p_Desc: string;
    p_Soldout: boolean;
    p_Review: number;
    p_Like: number;
    p_New: boolean;
  };
}
