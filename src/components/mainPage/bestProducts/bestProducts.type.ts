export interface PropsType {
  bestList: {
    a_Brand: string;
    p_Best: boolean;
    p_Cost: number;
    p_Discount: number;
    p_Name: string;
    p_New: boolean;
    p_No: number;
    p_Option: (string | number)[];
    p_Sale: boolean;
    p_Soldout: boolean;
    p_Thumbnail: string[];
  }[];
}
