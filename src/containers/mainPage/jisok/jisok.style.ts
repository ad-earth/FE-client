import styled from "styled-components";
import { theme } from "../../../style/theme";

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
export const Contents = styled.div`
  width: 1200px;
  display: flex;
  align-items: center;
  margin: 20px auto;
  position: absolute;
  img {
    width: 120px;
  }
  button {
    font-size: ${theme.fs14};
    margin-left: 30px;
    width: 178px;
    height: 48px;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 90%;
  }
`;
export const Text = styled.div`
  font-size: ${theme.fs16};
  color: ${theme.fc16};
  margin-left: 50px;
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const Background = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: contain;
  }
`;
