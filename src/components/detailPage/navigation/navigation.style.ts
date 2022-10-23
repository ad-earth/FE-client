import styled from "styled-components";
import { theme } from "../../../style/theme";

export const HistoryNav = styled.div`
  width: 1200px;
  height: 30px;
  display: flex;
  align-items: center;
  margin: 10px auto;
  padding: 13px 15px;
  box-sizing: border-box;
  font-size: ${theme.fs15};
  color: ${theme.fc09};
  cursor: pointer;
  span {
    color: ${theme.fc04};
  }
`;
