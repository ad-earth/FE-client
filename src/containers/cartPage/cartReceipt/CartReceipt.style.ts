import styled from "styled-components";
import { theme } from "../../../style/theme";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 990px) {
    width: 95%;
  }
`;
export const TopTxt = styled.div`
  width: 100%;
  border-top: 1px solid ${theme.rgba04};
  padding: 10px 0;
  font-size: ${theme.fs14};
  color: ${theme.fc09};
  span {
    color: ${theme.fc15};
    font-weight: 500;
  }
  border-bottom: 1px solid ${theme.rgba04};
`;
export const BottomTxt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 32px 0;
  color: ${theme.fc09};
  font-size: ${theme.fs24};
  font-weight: 600;
  border-bottom: 2px solid ${theme.rgba04};
`;
export const TxtWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  box-sizing: border-box;
  border-bottom: 1px solid ${theme.rgba04};
`;
export const TxtDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const SmallTxt = styled.div`
  font-weight: 400;
  font-size: ${theme.fs15};
  color: ${theme.fc09};
  p {
    font-weight: 600;
  }
  span {
    color: ${theme.fc15};
  }
  &.total {
    font-weight: 600;
    font-size: ${theme.fs20};
    color: ${theme.fc15};
  }
`;
export const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px 10px;
  span {
    font-size: ${theme.fs13};
    font-weight: 400;
    margin-top: 10px;
    color: ${theme.fc09};
  }
  &.total {
    color: ${theme.fc15};
  }
`;
export const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
  a {
    margin-top: 20px;
    color: ${theme.fc15};
    text-decoration: underline;
    font-size: ${theme.fs15};
  }
`;
export const SmallBtnDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px 0 40px 0;
  a {
    margin-top: 40px;
    color: ${theme.fc15};
    text-decoration: underline;
  }
`;
