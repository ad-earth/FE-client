export interface CartData {
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
export type CartDataType = {
  cartData: CartData[];
};
