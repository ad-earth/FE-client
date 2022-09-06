import styled from "styled-components";
import { theme } from "../../../style/theme";

export const Background = styled.div`
  width: 100%;
  padding: 4% 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.bg16};
`;
export const MissionWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${theme.fc01};
  span {
    font-size: ${theme.fs28};
    font-weight: 700;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 990px) {
    width: 97%;
    span {
      font-size: ${theme.fs20};
    }
  }
`;
export const BoxWrapper = styled.div`
  width: 97%;
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 990px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
export const Date = styled.div`
  width: 97%;
  text-align: right;
  font-size: ${theme.fs16};
  @media (min-width: 991px) and (max-width: 1200px) {
    font-size: ${theme.fs14};
  }
  @media (max-width: 990px) {
    font-size: ${theme.fs12};
  }
`;
