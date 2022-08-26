import styled from 'styled-components'

interface InputType {
  type?: string
  outline?: string
  fontSize?: string
  width?: string
  marginTop?: string
  padding?: string
}

export const Input = () => {
  return <MyInput></MyInput>
}

const MyInput = styled.input<InputType>`
  type: ${(props) => (props.type ? props.type : 'text')};
  outline: ${(props) => (props.outline ? props.outline : 'none')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : 'inherit')};
  width: ${(props) => (props.width ? props.width : '100%')};
  border: 1px solid #e5e7eb;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : '-1px')};
  padding: ${(props) => (props.padding ? props.padding : '8px 16px')};
  box-sizing: border-box;
  font-wieght: 400;
`
