import { OptionListType } from "../../../shared/types/types";

export const useTotalOptionQty = (optionList: OptionListType) => {
  let totalOptionQty = 0;
  optionList.map((option) => (totalOptionQty += option.qty));
  return totalOptionQty;
};
