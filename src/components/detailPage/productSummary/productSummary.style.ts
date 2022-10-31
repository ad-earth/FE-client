import styled from "styled-components";
import { theme } from "../../../style/theme";

export const MainContainer = styled.div`
  width: 100%;
  margin-top: 24px;
  p {
    font-size: ${theme.fs15};
    color: ${theme.fc09};
    line-height: 1.8;
  }
`;

export const Description = styled.div`
  color: ${theme.fc09};
  margin-top: 30px;
  font-size: ${theme.fs13};
  line-height: 1.8;
  span {
    font-weight: 600;
  }
`;
