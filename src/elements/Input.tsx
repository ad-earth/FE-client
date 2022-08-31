import styled from "styled-components";

interface InputType {
  outline?: string;
  fontSize?: string;
  width?: string;
  marginTop?: string;
  padding?: string;
  holderName?: string;
}

export const Input = (props: InputType) => {
  return (
    <MyInput type="text" placeholder={props.holderName} {...props}></MyInput>
  );
};

const MyInput = styled.input<InputType>`
  outline: ${(props) => (props.outline ? props.outline : "none")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "inherit")};
  width: ${(props) => (props.width ? props.width : "100%")};
  border: 1px solid #e5e7eb;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "-1px")};
  padding: ${(props) => (props.padding ? props.padding : "8px 16px")};
  box-sizing: border-box;
  font-weight: 400;
`;
