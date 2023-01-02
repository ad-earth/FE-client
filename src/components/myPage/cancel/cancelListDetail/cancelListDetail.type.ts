import { SetStateAction, Dispatch } from "react";

export interface ProductsType {
  p_No: number;
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Option: Array<
    [string | null, string | null, number | null, number | null, number | null]
  >;
}

export interface PropsType {
  products: ProductsType[];
  checkedItems: number[];
  setCheckedItems: Dispatch<SetStateAction<number[]>>;
}
