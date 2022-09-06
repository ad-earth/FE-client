import styled from "styled-components";
import { theme } from "../../../style/theme";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Name = styled.div`
  color: ${theme.fc10};
  font-size: ${theme.fs16};
`;
export const Price = styled.div`
  color: ${theme.fc15};
  font-size: ${theme.fs16};
  margin-top: 7px;
`;
export const Line = styled.div`
  width: 100%;
  height: 24px;
  border-bottom: 0.5px solid ${theme.ls08};
`;
