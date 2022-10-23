import styled from "styled-components";
import { theme } from "../../../style/theme";

export const DivArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & span {
    position: absolute;
    left: 0px;
    top: 37px;
    font-size: ${theme.fs12};
    color: ${theme.fc19};
  }
`;
export const Div = styled.div`
  position: relative;
  width: 49%;
`;
