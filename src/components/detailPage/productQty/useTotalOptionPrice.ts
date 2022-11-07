import { OptionListType } from "../../../shared/types/types";

export const useTotalOptionPrice = (optionList: OptionListType) => {
  let totalOptionPrice = 0;
  optionList.map((option) => (totalOptionPrice += option.price * option.qty));
  return totalOptionPrice;
};
