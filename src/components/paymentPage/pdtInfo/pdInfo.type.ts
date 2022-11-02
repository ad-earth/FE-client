export interface DbDataType {
  data: DataType[];
}

export interface DataType {
  data: {
    id: number;
    keywordNo: number;
    prodNo: string;
    thumbnail: string;
    category: string;
    brand: string;
    name: string;
    price: number;
    discount: number;
    option: [string | null, string | null, number | null, number, number][];
    totalPrice: number;
    totalCnt: number;
  }[];

  // id: number;
  // keywordNo: string;
  // prodNo: number;
  // thumbnail: string;
  // category: string;
  // brand: string;
  // name: string;
  // price: number;
  // discount: number;
  // option: [string | null, string | null, string | null, number, number][];
  // totalPrice: number;
  // totalCnt: number;
}
export type OptionType = {
  id: number;
  color: string;
  size: string;
  extraCost: number;
  price: number;
  qty: number;
};
export interface DataPropsType {
  id: number;
  keywordNo: number;
  prodNo: string;
  thumbnail: string;
  category: string;
  brand: string;
  name: string;
  price: number;
  discount: number;
  option: OptionType[];
  totalPrice: number;
  totalCnt: number;
}
