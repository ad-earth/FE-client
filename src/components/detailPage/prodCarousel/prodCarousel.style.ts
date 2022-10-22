import styled from "styled-components";
import { theme } from "../../../style/theme";

export const MainContainer = styled.div`
  /* position: relative; */
  width: 98%;
  margin: 0 auto;
`;
export const ProdImg = styled.img`
  width: 100%;
  object-fit: contain;
`;
export const Page = styled.div`
  position: absolute;
  width: 40px;
  margin-left: 10px;
  padding: 3px 8px;
  box-sizing: border-box;
  background: ${theme.bg11};
  color: ${theme.fc01};
  font-size: ${theme.fs12};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  bottom: 10px;
`;
