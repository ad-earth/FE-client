import styled from "styled-components";
import { theme } from "../../../style/theme";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${theme.fc09};
  font-size: ${theme.fs15};
  p {
    line-height: 25px;
  }
`;

export const Title = styled.div`
  padding: 10px 0;
  box-sizing: border-box;
  border-bottom: 0.5px solid ${theme.ls08};
`;
