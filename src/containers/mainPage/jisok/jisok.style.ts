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
  @media (max-width: 990px) {
    width: 90%;
    img {
      width: 15%;
    }
    button {
      font-size: ${theme.fs12};
      margin-left: 30px;
      width: 15%;
      height: 4%;
    }
  }
`;
export const Text = styled.div`
  font-size: ${theme.fs16};
  color: ${theme.fc16};
  margin-left: 50px;
  @media (max-width: 1200px) {
    font-size: ${theme.fs12};
    white-space: nowrap;
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
