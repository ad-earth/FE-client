import React from "react";
import styled from "styled-components";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

import { theme } from "../style/theme";

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

export const MainButton = (props: BtnType) => {
  return (
    <Btn
      radius={props.radius}
      border={props.border}
      bgColor={props.bgColor}
      color={props.color}
      hBorder={props.hBorder}
      hBgColor={props.hBgColor}
      onClick={props.onClick}
    >
      {props.children}
    </Btn>
  );
};

export const CountButton = () => {
  return (
    <CountBtn>
      <Minus>
        <RemoveRoundedIcon sx={{ fontSize: 18, cursor: "pointer" }} />
      </Minus>
      <Input type="text" />
      <Plus>
        <AddRoundedIcon sx={{ fontSize: 18, cursor: "pointer" }} />
      </Plus>
    </CountBtn>
  );
};

export const ColorButton: React.FC = () => {
  return <button></button>;
};

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "100%")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bold")};
  color: ${(props) => (props.color ? props.color : "#fff")};
  border: ${(props: BtnType) => (props.border ? props.border : "none")};
  border-radius: ${(props: BtnType) => (props.radius ? props.radius : "none")};
  background-color: ${(props: BtnType) =>
    props.bgColor ? props.bgColor : theme.colors.green2};
  padding: ${(props) => (props.padding ? props.padding : "10px 0")};
  :hover {
    border: ${(props: BtnType) => (props.hBorder ? props.hBorder : "none")};
    background-color: ${(props) =>
      props.hBgColor ? props.hBgColor : theme.colors.green1};
    transition: 0.5s;
    cursor: pointer;
  }
`;
const CountBtn = styled.div<BtnType>`
  width: 100px;
  height: 27px;
  border: 1px solid #ccc;
  background: #fff;
  display: flex;
`;
const Minus = styled.a<BtnType>`
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #ccc;
  color: #888;
`;
const Plus = styled.a<BtnType>`
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #ccc;
  color: #888;
`;
const Input = styled.input`
  width: 46px;
  border: none;
  font-size: small;
  text-align: center;
  :focus {
    outline: none;
  }
`;
