import { OptionListType } from "../productOptions/productOptions.type";

export const useTotalQty = (optionList: OptionListType) => {
  let totalQty = 0;
  optionList.map((option) => (totalQty += option.qty));
  return totalQty;
};
