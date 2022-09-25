import styled from "styled-components";

export const OrderAmountBox = styled.div`
  margin-bottom: 40px;
`;
export const Title = styled.div`
  font-size: ${({ theme }) => theme.fs18};
  font-weight: bold;
  color: ${({ theme }) => theme.fc14};
  margin-bottom: 16px;
  @media (max-width: 990px) {
    padding: 0px 15px;
  }
`;
export const Contents = styled.div`
  border: 1px solid ${({ theme }) => theme.rgba06};
  display: flex;
  justify-content: space-between;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;
export const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    @media (max-width: 990px) {
    margin-top:9px;
  }
  & strong {
    color: #212121;
  }
`;
export const ItemBox = styled.div`
  height: 80px;
  padding: 16px 20px;
  @media (max-width: 990px) {
    padding: 0;
    &.webItemBox {
      display: none;
    }
  }
`;

export const Section = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fs15};;
  position: relative;
  @media (max-width: 990px) {
    border-bottom: 1px solid ${({ theme }) => theme.rgba06};
    padding :12px 15px;
    box-sizing: border-box;
  }
  ${Box} {
    font-size: ${({ theme }) => theme.fs14};
    color: ${({ theme }) => theme.fc05};
  }
  & .topText {
    color: ${({ theme }) => theme.fc14};;
    font-weight: bold;
    border-bottom: 1px solid ${({ theme }) => theme.rgba06};
    padding: 16px 20px;
    @media (max-width: 990px) {
      font-size:${({ theme }) => theme.fs15};
      font-weight: normal;
      border-bottom:none;
      padding:0 ;
  }
  }
  & .bigText {
    font-size: ${({ theme }) => theme.fs22};
    @media (max-width: 990px) {
      font-size: ${({ theme }) => theme.fs15};
    }
  }
  & .green {
    color: ${({ theme }) => theme.fc15};
    @media (max-width: 990px) {
      font-size: ${({ theme }) => theme.fs18};;
      font-weight:bold;
    }
  }
  & {Section}:first-child ${ItemBox} {
  border-right: 1px solid ${({ theme }) => theme.rgba06};
  @media (max-width: 990px) {border:none;}
  }
  & {Section}:last-child ${ItemBox} {
  border-left: 1px solid ${({ theme }) => theme.rgba06};
  @media (max-width: 990px) {border:none;}
  }
`;
export const IconBox = styled.div`
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: ${({ theme }) => theme.fs20};
  color: ${({ theme }) => theme.fc01};
  border-radius: 100%;
  background-color: ${({ theme }) => theme.bg09};
  position: absolute;
  &.left {
    font-weight: 900;
    top: 22px;
    left: -10px;
  }
  &.right {
    top: 22px;
    right: -10px;
  }
  @media (max-width: 990px) {
    display: none;
  }
`;
