import styled from "styled-components";
import { theme } from "../../style/theme";
import { InputType } from "./Input.type";

export const MyInput = styled.input<InputType>`
  outline: ${(props) => (props.outline ? props.outline : "none")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "inherit")};
  width: ${(props) => (props.width ? props.width : "100%")};
  border: 1px solid ${theme.ls03};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "-1px")};
  padding: ${(props) => (props.padding ? props.padding : "8px 16px")};
  box-sizing: border-box;
  font-weight: 400;
  color: ${(props) => (props.color ? props.color : "#fff")};
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : `${theme.bg01}`};
  :focus {
    border: ${(props) =>
      props.fBorder ? props.fBorder : `1px solid ${theme.ls03}`};
  }
`;
