import styled from "styled-components";
import { theme } from "../../../style/theme";

export const MainContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 50px auto;
  color: ${theme.fc09};

  @media (min-width: 991px) and (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 990px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const TitleWrapper = styled.div`
  width: 32%;
  margin-left: 2%;
  line-height: 1.5;
  font-size: ${theme.fs16};
  @media (max-width: 990px) {
    width: 98%;
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    font-size: ${theme.fs14};
  }
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  span {
    font-size: ${theme.fs20};
    font-weight: 700;
  }
  @media (max-width: 990px) {
    span {
      font-size: ${theme.fs15};
    }
  }
`;
