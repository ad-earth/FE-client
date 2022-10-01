export interface PropsType {
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
