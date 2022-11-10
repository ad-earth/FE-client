import styled from "styled-components";
import { theme } from "../../../style/theme";

export const BtnArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1220px;
  min-width: 900px;
  height: auto;
  margin: 0.5rem auto;
  @media (max-width: 960px) {
    display: none;
  }
`;
export const SBtnArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1220px;
  min-width: 900px;
  height: auto;
  margin: 0.5rem auto;
`;
export const BtnWrap = styled.div`
  justify-content: center;
  width: 100%;
  height: auto;
  padding: 0 10px;
  margin: 30px 0 10px 0;
  min-width: 550px;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  gap: 0.5rem;
  box-sizing: border-box;
`;
export const CBtn = styled.button<{ active: boolean }>`
  width: 25%;
  padding: 0.4rem 0;
  border: 0.3px solid ${theme.ls07};
  margin: -0 -1px -1px 0;
  line-height: 25.6px;
  font-size: ${theme.fs16};
  font-family: "Noto Sans KR", "sans-serif";
  background-color: ${(props) => (props.active ? theme.bg16 : theme.bg01)};
  color: ${(props) => (props.active ? theme.fc01 : theme.fc09)};
  &:hover {
    background-color: ${theme.bg20};
    color: ${theme.fc15};
    transition: 0.3s;
    cursor: pointer;
  }
  @media (max-width: 960px) {
    display: none;
  }
`;
export const SmallCBtn = styled.button<{ active: boolean }>`
  width: 53px;
  padding: 0 1px;
  border: 0.2px solid ${theme.bg01};
  border-radius: 4rem;
  margin: 0px 2px;
  vertical-align: middle;
  box-sizing: border-box;
  line-height: 25.6px;
  font-size: ${theme.fs13};
  font-family: "Noto Sans KR", "sans-serif";
  background-color: ${(props) => (props.active ? theme.bg16 : theme.bg01)};
  color: ${(props) => (props.active ? theme.fc01 : theme.fc15)};
  :hover {
    background-color: ${theme.bg16};
    color: ${theme.fc01};
    transition: 0.3s;
    cursor: pointer;
  }
  @media (min-width: 960px) {
    display: none;
  }
`;
export const LineArea = styled.div`
  width: 100%;
  border-bottom: 1px solid ${theme.ls04};
  margin: 5px auto;
`;
