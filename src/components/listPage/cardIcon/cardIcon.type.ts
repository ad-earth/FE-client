export interface CardIconType {
  list: ListMoType[];
  p_Review?: number;
  p_Like?: number;
  p_No: number;
  userLike: number[];
  isLike?: boolean;
  onClick?: () => void;
}

export interface ListMoType {
  p_Like: number;
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Best: boolean;
  p_New: boolean;
  p_Sale: boolean;
  p_Soldout: boolean;
  p_Cost: number;
  p_Discount: number;
  p_Desc: string;
  p_Option: [string | null, string | null, string | null, number, number][];
}
