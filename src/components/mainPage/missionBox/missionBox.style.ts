import styled from "styled-components";
import { theme } from "../../../style/theme";

export const MainContainer = styled.div`
  width: 22%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 15px;
  padding: 50px;
  background: ${theme.bg01};
  color: ${theme.fc15};
  @media (max-width: 990px) {
    width: 97%;
    gap: 0px;
    padding: 20px;
  }
`;

export const Category = styled.div`
  font-size: ${theme.fs18};
  font-weight: 600;
  @media (max-width: 990px) {
    font-size: ${theme.fs15};
    font-weight: 400;
  }
`;

export const Amount = styled.div`
  font-size: ${theme.fs30};
  font-weight: 600;
  @media (max-width: 990px) {
    font-size: ${theme.fs26};
  }
`;
