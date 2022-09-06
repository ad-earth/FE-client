import styled from 'styled-components'
import { theme } from '../../../style/theme'

export const PayArea = styled.div`
  margin-left: 16px;
  width: 450px;
  visibility: visible;
  float: right;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  align-items: flex-end;
  @media (max-width: 930px) {
    display: flex;
    width: 120%;
    margin: 10 auto;
    align-items: flex-end;
  }
`
export const TipOff = styled.div`
  width: 79%;
  display: flex;
  padding: 24px;
  margin-bottom: 16px;
  background-color: ${theme.bg01};
  flex-direction: column;
`
export const BtnDiv = styled.div`
  margin-top: 22px;
`
export const OrderInfoDiv = styled.div`
  font-size: ${theme.fs19};
  font-weight: bold;
  padding-bottom: 20px;
}
`
