import { OptionListType } from "./productOptions.type";

// 옵션 추가
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
  optionList.map((option) => {
    option.color + option.size === color + size && (isOption = true);
  });
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

// 옵션 삭제
export const removeOption = (targetId: number, optionList: OptionListType) => {
  let newOptionList = optionList.filter((option) => option.id !== targetId);
  return newOptionList;
};

// 옵션 수량 수정
export const changeOption = (
  newId: number,
  qty: number,
  optionList: OptionListType
) => {
  let index = optionList.findIndex((option) => option.id === newId);
  let newOptionList = [...optionList];
  newOptionList[index].qty = qty;
  return newOptionList;
};
