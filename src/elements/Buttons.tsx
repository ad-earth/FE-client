import React from "react";
import styled from "styled-components";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

//컬러 옵션 버튼

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
}

export const MainButton = (props: BtnType) => {
  return <Btn>{props.children}</Btn>;
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

const Btn = styled.button<BtnType>`
  text-align: center;
  width: ${(props) => (props.width ? props.width : " 100%")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "bold")};
  color: ${(props) => (props.color ? props.color : "#fff")};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.radius ? props.radius : "none")};
  background-color: ${(props) => (props.bgColor ? props.bgColor : "green2")};
  padding: ${(props) => (props.padding ? props.padding : "12px 0")};
  :hover {
    color: ${(props) => (props.hColor ? props.hColor : "#fff")};
    border: ${(props) => (props.hBorder ? props.hBorder : "none")};
    background-color: ${(props) =>
      props.hBgColor ? props.hBgColor : "green1"};
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
