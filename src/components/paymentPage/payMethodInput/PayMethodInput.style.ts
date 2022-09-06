import styled from 'styled-components'
import { RadiobtnType } from '../payRadioBtn/PayRadioBtn'

export const DivArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const TbtnDiv = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.fc03};
`
export const Tbtn = styled.div<RadiobtnType>`
  width: 25%;
  display: flex;
  justify-content: center;
  padding: 9px 5px;
  box-sizing: border-box;
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.fc13};
  background-color: ${(props) => (props.bgColor ? props.bgColor : '#fff')}
  border: 1px solid  ${({ theme }) => theme.fc02};
  cursor: pointer;
  &.right {
    border-left: 1px solid  ${({ theme }) => theme.fc03};
  }
`
export const ContentsDiv = styled.div`
  width: 100%;
  margin: 0 auto;
`
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid ${({ theme }) => theme.fc02};
`
