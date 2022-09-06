import styled from "styled-components";
import { theme } from "../../../style/theme";

export const MainContainer = styled.div`
  width: 98%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  p {
    color: ${theme.fc09};
    font-size: ${theme.fs13};
    margin: 10px 0;
  }
`;
export const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${theme.ls13};
  margin-top: 30px;
`;
export const Page = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;