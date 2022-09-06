import styled from "styled-components";
import { theme } from "../../../style/theme";

export const MainContainer = styled.div`
  width: 1200px;
  margin: 35px auto;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;
export const MenuWrapper = styled.div`
  width: 98%;
  border: 1px solid ${theme.ls03};
  display: flex;
  margin: 0 auto;
`;
export const Menu = styled.div`
  width: 50%;
  color: ${theme.fc09};
  font-size: ${theme.fs15};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
  &.right {
    border-left: 1px solid ${theme.ls03};
  }
`;
export const ContentsWrapper = styled.div`
  width: 98%;
  margin: 0 auto;
`;
