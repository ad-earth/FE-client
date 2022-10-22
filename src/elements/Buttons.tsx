import { Dispatch, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import { theme } from "../style/theme";
import { OptionListType } from "../components/detailPage/productOptions/productOptions.type";
import { changeOption } from "../components/detailPage/productOptions/optionsHandler";

interface BtnType {
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
interface PropsType {
  id?: number;
  qty?: number;
  optionList?: OptionListType;
  setQty?: Dispatch<SetStateAction<number>>;
  setOptionList?: (optionList: OptionListType) => void;
}

export const MainButton = (props: BtnType) => {
  return <Btn {...props}>{props.children}</Btn>;
};

// 수량 수정 버튼
export const CountButton = (props: PropsType) => {
  let qty = props.qty;
  function addQty() {
    qty += 1;
    props.setQty(qty);
  }
  function substractQty() {
    if (qty !== 0) {
      qty -= 1;
      props.setQty(qty);
    }
  }
  return (
    <CountBtn>
      <Minus onClick={() => substractQty()}>
        <RemoveRoundedIcon sx={{ fontSize: 18, cursor: "pointer" }} />
      </Minus>
      <Input>{qty}</Input>
      <Plus onClick={() => addQty()}>
        <AddRoundedIcon sx={{ fontSize: 18, cursor: "pointer" }} />
      </Plus>
    </CountBtn>
  );
};

// 수량 수정 버튼(상품 옵션이 있는 경우)
export const OptionCountButton = (props: PropsType) => {
  let qty = props.qty;
  function addQty() {
    qty += 1;
    props.setOptionList(changeOption(props.id, qty, props.optionList));
  }
  function substractQty() {
    if (qty !== 1) {
      qty -= 1;
      props.setOptionList(changeOption(props.id, qty, props.optionList));
    }
  }
  return (
    <CountBtn>
      <Minus onClick={() => substractQty()}>
        <RemoveRoundedIcon sx={{ fontSize: 18, cursor: "pointer" }} />
      </Minus>
      <Input>{qty}</Input>
      <Plus onClick={() => addQty()}>
        <AddRoundedIcon sx={{ fontSize: 18, cursor: "pointer" }} />
      </Plus>
    </CountBtn>
  );
};

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : theme.fs14)};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bold")};
  color: ${(props) => (props.color ? props.color : theme.fc01)};
  border: ${(props: BtnType) => (props.border ? props.border : "none")};
  border-radius: ${(props: BtnType) => (props.radius ? props.radius : "none")};
  background-color: ${(props: BtnType) =>
    props.bgColor ? props.bgColor : theme.bg16};
  padding: ${(props) => (props.padding ? `${props.padding}` : "10px 0")};
  :hover {
    border: ${(props: BtnType) => (props.hBorder ? props.hBorder : "none")};
    background-color: ${(props) =>
      props.hBgColor ? props.hBgColor : theme.bg16};
    transition: 0.5s;
    cursor: pointer;
  }
`;
const CountBtn = styled.div`
  width: 100px;
  height: 27px;
  border: 1px solid ${theme.ls07};
  background: ${theme.bg01};
  display: flex;
  justify-content: space-between;
`;
const Minus = styled.button`
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-right: 1px solid ${theme.ls07};
  color: ${theme.fc06};
`;
const Plus = styled.button`
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-left: 1px solid ${theme.ls07};
  color: ${theme.fc06};
`;
const Input = styled.div`
  width: 46px;
  font-size: small;
  display: flex;
  justify-content: center;
  align-items: center;
`;
