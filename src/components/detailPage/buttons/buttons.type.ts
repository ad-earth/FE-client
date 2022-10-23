import {
  DetailsType,
  OptionListType,
} from "../productOptions/productOptions.type";

export interface PropsType {
  optionList: OptionListType;
  details: DetailsType;
  totalPrice: number;
  totalQty: number;
}
