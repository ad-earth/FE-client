import styled from 'styled-components'
import { theme } from '../../../style/theme'

export const CardCp = styled.div`
  width: 100%;
  margin-bottom: 10px;
  margin: -10px 0 25px 0;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: inherit;
`
export const Count = styled.span`
  font-size: ${theme.fs13};
  color: ${theme.bg09};
`
export const IconSpan = styled.span`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 0 !important;
  gap: 5px;
  cursor: pointer;
`
export const IconDiv = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 10px;
  margin-top: 0.75em;
  text-align: center;
`
