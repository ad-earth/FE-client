import { OptionListType } from "../../../shared/types/types";

export const addOption = (
  color: string,
  size: string,
  extraCost: number,
  price: number,
  optionList: OptionListType,
  optionId: number
) => {
  let isOption = false;
  let qty = 1;
  optionList.map(
    (option) => option.color + option.size === color + size && (isOption = true)
  );
  if (isOption) {
    alert("선택한 옵션입니다.");
  } else {
    let newOption = {
      id: optionId,
      color: color,
      size: size,
      extraCost: extraCost,
      price: price + extraCost,
      qty: qty,
    };
    return { newOption: newOption, newOptionId: optionId + 1 };
  }
};

export const removeOption = (targetId: number, optionList: OptionListType) => {
  let newOptionList = optionList.filter((option) => option.id !== targetId);
  return newOptionList;
};

export const changeOption = (
  newId: number,
  newQty: number,
  optionList: OptionListType
) => {
  let findIndex = optionList.findIndex((option) => option.id === newId);
  let copyList = [...optionList];
  if (findIndex != -1) {
    copyList[findIndex] = { ...copyList[findIndex], qty: newQty };
  }
  return copyList;
};
