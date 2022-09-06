import styled from "styled-components";
import { theme } from "../../../style/theme";

export const DescTxt = styled.span`
  width: 100%;
  text-align: left;
  margin: 30px 0 10px 0;
  font-size: ${theme.fs14};
  color: ${theme.fc14};
`;
export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    text-align: left;
    margin: 0 20px 0 5px;
    font-size: ${theme.fs15};
    color: ${theme.fc09};
  }
`;
export const RadioBtn = styled.input`
  width: 20px;
  height: 20px;
  margin: 5px 0;
  accent-color: ${theme.bg16};
  border: 1px solid ${theme.ls10};
`;
