export interface PropsType {
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Option: Array<
    [string | null, string | null, number | null, number | null, number | null]
  >;
  o_Status: string;
  p_No: number;
  r_Status: boolean; //리뷰 등록 여부
  p_Status: boolean; // 상품 존재 여부
}
