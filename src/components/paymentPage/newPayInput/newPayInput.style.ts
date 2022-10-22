import styled from "styled-components";
import { theme } from "../../../style/theme";

export const DivArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const InputDivArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
export const CheckInputDivArea = styled.div`
  display: flex;
  justify-content: space-between;
  & span {
    position: absolute;
    left: 0px;
    top: 37px;
    font-size: ${theme.fs12};
    color: ${theme.fc19};
  }
`;
export const CheckDiv = styled.div`
  position: relative;
  width: 49%;
`;
