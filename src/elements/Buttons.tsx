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
  return <Btn {...props}>{props.children}</Btn>;
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
`;
const Minus = styled.a`
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${theme.ls07};
  color: ${theme.fc06};
`;
const Plus = styled.a`
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${theme.ls07};
  color: ${theme.fc06};
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
