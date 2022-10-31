import styled from "styled-components";
import { theme } from "../../../style/theme";
import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-top: 25px;
`;

export const HeartIcon = styled(Heart)`
  fill: ${theme.bg16};
  color: ${theme.fc15};
  padding-right: 4px;
`;

export const NoHeartIcon = styled(Heart)`
  color: ${theme.fc04};
  padding-right: 4px;
`;
