import styled from 'styled-components'
import { RadiobtnType } from './PayRadioBtn'

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  box-sizing: border-box;
`
export const Item = styled.div`
  height: 48px;
  position: relative;
  display: flex;
  align-items: center;
`
export const RadioButtonLabel = styled.label<RadiobtnType>`
  width: 20px;
  height: 20px;
  position: absolute;
  top: ${(props) => (props.top ? props.top : '25%')};
  border-radius: 50%;
  background: white;
  border: 1px solid #bebebe;
`
export const RadioButton = styled.input`
  width: 24px;
  height: 24px;
  margin-right: 10px;
  opacity: 0;
  z-index: 1;
  border-radius: 50%;
  &:hover ~ ${RadioButtonLabel} {
    background: #fff;
    &::after {
      width: 1px;
      height: 1px;
      display: block;
      margin: 6px;
      content: '';
      border-radius: 50%;
      background: #eeeeee;
    }
  }
  ${(props) =>
    props.checked &&
    ` 
    &:checked + ${RadioButtonLabel} {
      background: #00913A;
      border: 1px solid #00913A;
      &::after {
        width: 10px;
        height: 10px;
        display: block;
        margin: 5px;
        background: white;
        content: "";
        border-radius: 50%;
      }
    }
  `}
`
export const Text = styled.span`
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.fc13};
`
export const PayText = styled.div`
  font-size: ${({ theme }) => theme.fs13};
  color: ${({ theme }) => theme.fc08};
  margin-top: 8px;
`
export const CheckBtn = styled.input`
  width: 20px;
  height: 20px;
  accent-color: ${({ theme }) => theme.bg16};
  margin: 0px 8px 0 0px;
  border: 1px solid ${({ theme }) => theme.ls10};
`
export const LineDiv = styled.div`
  width: 100%;
  border-width: 0 0 1px;
  border-style: solid;
  border-color: rgba(33, 33, 33, 0.15);
  padding: 5px 0 25px;
`
