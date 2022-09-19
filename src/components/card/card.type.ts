export interface CardCompoType {
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name?: string;
  p_Cost: number;
  p_Sale: boolean;
  p_Discount: number;
  p_Option?: Array<string | number>[];
  type?: "wish" | "ad";
  p_New: boolean;
  p_Best: boolean;
  p_Soldout: boolean;
  p_No?: number;
}
