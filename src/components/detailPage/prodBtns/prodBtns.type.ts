export interface PropsType {
  // like: boolean;
  // likeCnt: number;
  prodNo: number;
  totalPrice: number;
  totalQty: number;
  optionList: {
    id: number;
    color: string;
    size: string;
    colorSize: string;
    optionPrice: number;
    price: number;
    qty: number;
  }[];
}
