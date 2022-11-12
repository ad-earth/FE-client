import { OptionArrType } from "../../../shared/types/types";

export interface ModalType {
  isOpen?: boolean;
  handleClose: () => void;
  productNo: number;
  option?: OptionArrType[];
  price: number;
  discount: number;
  keywordNo: number;
}
