import styled from "styled-components";

import { PropsType } from "./../pages/LogInPage";

interface InputType {
  outline?: string;
  fontSize?: string;
  width?: string;
  marginTop?: string;
  padding?: string;
}

export const Input = (props: PropsType) => {
  return <MyInput type="text" placeholder={props.holderName}></MyInput>;
};

const MyInput = styled.input<InputType>`
  outline: ${(props) => (props.outline ? props.outline : "none")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "inherit")};
  width: ${(props) => (props.width ? props.width : "100%")};
  border: 1px solid #e5e7eb;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "-1px")};
  padding: ${(props) => (props.padding ? props.padding : "8px 16px")};
  box-sizing: border-box;
  font-wieght: 400;
`;
