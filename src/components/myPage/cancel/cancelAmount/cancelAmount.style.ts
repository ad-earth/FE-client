import styled from "styled-components";

export const CancelAmountBox = styled.div`
  border: 1px solid ${({ theme }) => theme.rgba06};
  padding: 20px 20px 80px;
  margin: 30px 0;
  @media (max-width: 990px) {
    border: none;
  }
`;
export const Title = styled.div`
  font-size: ${({ theme }) => theme.fs21};
  font-weight: 600;
  display: flex;
  margin-bottom: 24px;
`;
export const CancelList = styled.div`
  display: flex;
  flex-direction: column;
  & p {
    font-size: 14px;
    color: ${({ theme }) => theme.fc19};
    padding-top: 10px;
  }
`;
export const Content = styled.div`
  position: relative;
  padding: 20px 0;
  &.border {
    border-top: 1px solid ${({ theme }) => theme.ls03};
    border-bottom: 1px solid ${({ theme }) => theme.ls03};
    :before {
      content: "";
      width: 30px;
      height: 30px;
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      border: 1px solid ${({ theme }) => theme.ls03};
      border-radius: 50%;
      background: ${({ theme }) => theme.bg01};
    }
    :after {
      content: "";
      width: 16px;
      height: 4px;
      position: absolute;
      top: 0;
      left: 50%;
      background: ${({ theme }) => theme.bg09};
      margin-left: -8px;
    }
  }
`;
export const Item = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fs15};
  display: flex;
  justify-content: space-between;
  & span {
    line-height: 30px;
  }
  & .green {
    font-weight: bold;
    color: ${({ theme }) => theme.fc15};
  }
`;
export const SubText = styled.span`
  font-size: ${({ theme }) => theme.fs14};
  color: ${({ theme }) => theme.fc09};
`;
export const TitleText = styled.span`
  font-weight: bold;
  color: ${({ theme }) => theme.fc14};
`;
export const ButtomBox = styled.div`
  margin-top: 40px;
`;
