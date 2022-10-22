import styled from "styled-components";
import { theme } from "../../../style/theme";

export const WishCardBox = styled.div`
  margin-bottom: 35px;
`;

export const Count = styled.span`
  font-size: ${theme.fs13};
  color: ${theme.bg09};
`;
export const Icons = styled.div`
  display: inline-flex;
  gap: 10px;
  padding: 0 10px;
`;
export const IconSpan = styled.span`
  cursor: pointer;
  display: inline-flex !important;
  gap: 5px;
`;
