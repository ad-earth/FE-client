import styled from "styled-components";
import { theme } from "../../../style/theme";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px auto;
  color: ${theme.fc09};
  text-align: center;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
