import styled from 'styled-components'
import { theme } from '../../../style/theme'

export const PListArea = styled.div`
  width: 470px;
  visibility: visible;
  float: left;
  display: flex;
  flex-direction: column;
  @media (max-width: 930px) {
    display: flex;
    width: 95%;
    margin: 0 20px;
    align-items: center;
  }
`
export const TipOff = styled.div`
  width: 100%;
  display: flex;
  padding: 24px;
  margin-bottom: 16px;
  background-color: ${theme.bg01};
  flex-direction: column;
`
export const OrderInfoDiv = styled.div`
  font-size: ${theme.fs19};
  font-weight: bold;
  padding-bottom: 20px;
}
`
