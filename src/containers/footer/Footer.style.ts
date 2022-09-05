import styled from "styled-components";
import { theme } from "../../style/theme";

export const FooterContainer = styled.div`
  width: 100%;
`;
export const FootInfo = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: auto;
  padding: 40px 0;
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 96%;
  }
  @media (max-width: 990px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px;
    background-color: ${theme.bg04};
  }
`;
export const Contact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  p {
    color: ${theme.fc09};
    font-size: ${theme.fs24};
    font-weight: 500;
  }
  span {
    color: ${theme.fc09};
    font-size: ${theme.fs16};
    font-weight: 400;
  }
  @media (max-width: 990px) {
    width: 50%;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid ${theme.ls11};
    border-bottom: 1px solid ${theme.ls11};
  }
`;
export const InfoTxt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  span {
    color: ${theme.fc09};
    font-size: ${theme.fs16};
    font-weight: 400;
    line-height: ${theme.fs24};
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    span {
      font-size: ${theme.fs15};
    }
  }
  @media (max-width: 990px) {
    width: 50%;
    padding-left: 20px;
    span {
      font-size: ${theme.fs13};
    }
  }
`;

export const FootGrWrapper = styled.div`
  width: 100%;
  background-color: ${theme.bg16};
`;
export const FootWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 30px 0;
  img {
    width: 20%;
    margin: auto;
    object-fit: contain;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 100%;
    img {
      width: 18%;
    }
  }
  @media (max-width: 990px) {
    width: 100%;
    img {
      display: none;
    }
  }
`;
export const FootText = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding-left: 60px;
  color: ${theme.fc01};
  font-size: ${theme.fs16};
  font-weight: 600;
  p {
    margin-bottom: 20px;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 100%;
    font-size: ${theme.fs15};
  }
  @media (max-width: 990px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    font-size: ${theme.fs11};
  }
`;
export const SpanTxt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${theme.fc01};
  font-size: ${theme.fs16};
  font-weight: 400;
  line-height: ${theme.fs24};
  @media (min-width: 991px) and (max-width: 1200px) {
    font-size: ${theme.fs15};
  }
  @media (max-width: 990px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: ${theme.fs10};
  }
`;
