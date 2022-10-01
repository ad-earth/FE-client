import styled from "styled-components";
import { theme } from "../style/theme";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface InputType {
  outline?: string;
  fontSize?: string;
  width?: string;
  marginTop?: string;
  padding?: string;
  holderName?: string;
  color?: string;
  bgColor?: string;
  fBorder?: string;
  value?: string;
  type?: string;
  ref?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, InputType> = (
  { ...props },
  ref
) => {
  return (
    <MyInput
      type={props.type}
      placeholder={props.holderName}
      ref={ref}
      {...props}
    ></MyInput>
  );
};

export default forwardRef(Input);

const MyInput = styled.input<InputType>`
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
