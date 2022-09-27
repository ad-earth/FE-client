export interface CardListType {
  products: ProductsType[];
  sortClick: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  cnt: number;
  userLike: number[];
  pageNo?: number;
  sort?: string;
}

export interface ProductsType {
  p_No: number;
  pNo: number;
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Cost: number;
  p_Sale: boolean;
  p_Discount: number;
  p_Option: [string | null, string | null, string | null, number, number][];
  p_New: boolean;
  p_Best: boolean;
  p_Soldout: boolean;
  p_Desc: string;
  p_Review: number;
  p_Like: number;
}
