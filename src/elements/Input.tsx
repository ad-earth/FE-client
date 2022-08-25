import styled from 'styled-components'

interface InputType {
  primary?: string
  fontsize?: string
}

export const MyInput = styled.input<InputType>`
  outline: none;
  font-size: inherit;
  display: block;
  width: 100%;
  border: 1px solid #e5e7eb;
  margin-top: -1px;
  padding: ${(props) => (props.primary ? '8px 12px' : '12px 16px')};
  box-sizing: border-box;
  font-wieght: 400;
  ::selection {
    background-color: ${(props) => (props.primary ? '#009139' : '#212121')};
    color: #fff;
  }
`
