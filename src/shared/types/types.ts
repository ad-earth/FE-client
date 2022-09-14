// 유저정보
export interface UserType {
  u_Name: string;
  u_Phone: number;
  u_Address1: string;
  u_Address2: string;
}

// 로그인
export interface UserLoginType extends UserType {
  u_Idx: number;
  u_Id: string;
  u_Gender: string;
  u_Img: string;
  token: string;
}

// 주소
export interface AddressType {
  d_No: number;
  d_Name: string;
  d_Phone: number;
  d_Address1: string;
  d_Address2: string;
  d_Memo: string;
}

// 공통 카드타입 (무조건 다 들어가는 타입 내용)
export interface CardType {
  p_No: number;
  p_Thumbnail: string[];
  a_Brand: string;
  p_Name: string;
  p_Cost: number;
  p_Sale: boolean;
  p_Discount: number;
  p_Option: Array<string | number>[];
  p_Best: boolean;
  p_New: boolean;
  p_Soldout: boolean;
  p_Review?: number;
  p_Like?: number;
  k_No?: number;
}

// 공통 카드 추가정보 타입
export interface ProductType extends CardType {
  p_Category: string;
  p_Price: number;
  p_Cnt: number;
  o_status: string;
  p_Desc: string;
}

// mypage
interface OrderListType {
  o_No: number;
  o_Date: string;
  products: ProductType[];
}
export interface OrderType {
  cnt: number;
  o_Price: number;
  oderList: OrderListType[];
}
