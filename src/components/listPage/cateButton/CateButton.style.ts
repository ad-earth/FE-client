import styled from 'styled-components'
import { theme } from '../../../style/theme'

export const BtnArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  min-width: 900px;
  height: auto;
  padding: 0 20px 0 20px;
  margin: 1.5rem auto;
`
export const BtnWrap = styled.div`
  min-width: 550px;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  gap: 0.5rem;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  padding: 0 10px;
`
export const CBtn = styled.button`
  width: 25%;
  padding: 0.4rem 0;
  border: 0.3px solid ${theme.ls07};
  margin: -0 -1px -1px 0;
  vertical-align: middle;
  box-sizing: border-box;
  line-height: 25.6px;
  font-size: ${theme.fs16};
  font-family: 'Noto Sans KR', 'sans-serif';
  background-color: ${theme.bg01};
  color: ${theme.fc09};
  :hover {
    background-color: ${theme.bg20};
    color: ${theme.fc21};
    transition: 0.3s;
    cursor: pointer;
  }
  @media (max-width: 960px) {
    display: none;
  }
`
export const SmallCBtn = styled.button`
  width: 59px;
  padding: 0 3px;
  border: 0.3px solid ${theme.bg01};
  border-radius: 4rem;
  margin: 0 2px;
  vertical-align: middle;
  box-sizing: border-box;
  line-height: 25.6px;
  font-size: ${theme.fs13};
  font-family: 'Noto Sans KR', 'sans-serif';
  background-color: ${theme.bg01};
  color: ${theme.fc15};
  :hover {
    background-color: ${theme.bg16};
    color: ${theme.fc01};
    transition: 0.3s;
    cursor: pointer;
  }
  @media (min-width: 960px) {
    display: none;
  }
`
export const LineArea = styled.div`
  width: 97%;
  display: flex;
  flex-flow: row wrap;
  border-bottom: 1px solid ${theme.ls04};
  margin: 15px auto;
`
