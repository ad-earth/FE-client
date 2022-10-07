export type PropsType = {
  price?: number;
  optionList?: {
    id: number;
    colorSize: string;
    optionPrice: number;
    price: number;
    qty: number;
  }[];
  changeOptionList?: (id: number, qty: number) => void;
  removeOption?: (id: number) => void;
  setTotalQty?: (qty: number) => void;
};
