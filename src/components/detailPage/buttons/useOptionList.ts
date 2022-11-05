import { useEffect } from "react";
import { OptionArrType } from "../../../shared/types/types";
import { useAppSelector } from "../../../redux/store";

export const useOptionList = (finalPrice: number) => {
  const optionData = useAppSelector((state) => state.optionSlice.optionData);
  let optionList: OptionArrType[] = [];
  useEffect(() => {
    let optionArr: OptionArrType;
    optionData.map((option) => {
      optionArr = [
        option.color,
        option.colorCode,
        option.size,
        option.extraCost,
        option.qty,
        (finalPrice + option.extraCost) * option.qty,
      ];
      optionList.push(optionArr);
    });
  }, [optionData]);
  return optionList;
};
