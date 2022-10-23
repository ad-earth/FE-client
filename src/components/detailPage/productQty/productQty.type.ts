import {
  DetailsType,
  OptionListType,
} from "../productOptions/productOptions.type";

export interface PropsType {
  haveOptions: boolean;
  optionList: OptionListType;
  price: number;
  setOptionList: (optionList: OptionListType) => void;
  details: DetailsType;
}
