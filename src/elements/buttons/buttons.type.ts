import { Dispatch, SetStateAction } from "react";
import { OptionListType } from "../../components/detailPage/productOptions/productOptions.type";

export interface BtnType {
  width?: string;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
  border?: string;
  radius?: string;
  bgColor?: string;
  padding?: string;
  hColor?: string;
  hBorder?: string;
  hBgColor?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}
export interface PropsType {
  id?: number;
  qty?: number;
  optionList?: OptionListType;
  setQty?: Dispatch<SetStateAction<number>>;
}

export interface NotFoundType {
  type: string;
  onClick: () => void;
  text: string;
  children?: React.ReactNode;
}
