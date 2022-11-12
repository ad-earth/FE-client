import styled from "styled-components";
import { theme } from "../../../style/theme";

export const CartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (max-width: 990px) {
    width: 95%;
  }
`;
export const CartHeader = styled.div`
  width: 100%;
  margin: 40px 0 24px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    color: ${theme.fc09};
    font-size: ${theme.fs24};
    margin-right: 10px;
  }
  @media (max-width: 990px) {
    display: none;
  }
`;
export const SmallHeader = styled.div`
  width: 100%;
  margin: 40px 0 10px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 1201px) {
    display: none;
  }
  @media (min-width: 991px) and (max-width: 1200px) {
    display: none;
  }
`;
export const Count = styled.div`
  width: 20px;
  height: 20px;
  color: ${theme.fc01};
  font-size: ${theme.fs11};
  background-color: ${theme.fc09};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CartItemDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-top: 1.5px solid ${theme.rgba07};
  border-bottom: 0.5px solid ${theme.rgba07};
  margin-bottom: 20px;
`;
export const TopWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
  color: ${theme.rgba10};
  font-size: ${theme.fs14};
  border-bottom: 1px solid ${theme.rgba07};
  @media (max-width: 990px) {
    display: none;
  }
`;
export const ProdInfo = styled.div`
  width: 63%;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
    margin-right: 20px;
  }
  @media (max-width: 990px) {
    color: ${theme.rgba10};
    font-size: ${theme.fs14};
  }
`;
export const CheckBox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: ${theme.bg16};
  border: 1px solid ${theme.rgba10};
  margin-right: 20px;
`;
export const TopInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  &.mid {
    width: 19%;
  }
  &.small {
    width: 15%;
  }
`;
export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const BtnDiv = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  @media (max-width: 990px) {
    width: 200px;
    margin: 0;
    &.max {
      display: none;
    }
  }
`;
