import { OptionListType } from "../productOptions/productOptions.type";

export const useTotalPrice = (optionList: OptionListType) => {
  let totalPrice = 0;
  optionList.map((option) => (totalPrice += option.price * option.qty));
  return totalPrice;
};
