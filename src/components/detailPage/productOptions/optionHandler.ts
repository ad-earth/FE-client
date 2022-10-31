import { OptionListType } from "../../../shared/types/types";

export const addUserOption = (
  selectedColor: string,
  selectedSize: string,
  selectedExtraPrice: number,
  price: number,
  userOptionList: OptionListType,
  optionId: number
) => {
  let isUserOption = false;
  let userQty = 1;
  userOptionList.map(
    (userOption) =>
      userOption.color + userOption.size === selectedColor + selectedSize &&
      (isUserOption = true)
  );
  if (isUserOption) {
    alert("선택한 옵션입니다.");
  } else {
    let userOption = {
      id: optionId,
      color: selectedColor,
      size: selectedSize,
      extraCost: selectedExtraPrice,
      price: price + selectedExtraPrice,
      qty: userQty,
    };
    return { userOption: userOption, newOptionId: optionId + 1 };
  }
};

export const removeUserOption = (
  targetId: number,
  userOptionList: OptionListType
) => {
  return userOptionList.filter((option) => option.id !== targetId);
};

export const changeUserOptionQty = (
  targetId: number,
  selectedQty: number,
  userOptionList: OptionListType
) => {
  let findIndex = userOptionList.findIndex(
    (userOption) => userOption.id === targetId
  );
  let result = [...userOptionList];
  if (findIndex != -1) {
    result[findIndex] = { ...result[findIndex], qty: selectedQty };
  }
  return result;
};
