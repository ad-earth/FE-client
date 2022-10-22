import styled from "styled-components";

export const Section = styled.div`
  @media (max-width: 990px) {
    margin: 0 -15px;
  }
`;
export const Title = styled.div`
  font-size: ${({ theme }) => theme.fs21};
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
  & span {
    width: 30px;
    height: 30px;
    display: inline-block;
    position: relative;
    margin-right: 12px;
    overflow: hidden;
    cursor: pointer;
    :before {
      content: "";
      width: 14px;
      height: 14px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      margin-top: 2px;
      border-top: 1px solid ${({ theme }) => theme.ls13};
      border-left: 1px solid ${({ theme }) => theme.ls13};
    }
  }
  @media (max-width: 990px) {
    font-size: ${({ theme }) => theme.fs18};
    border-bottom: 1px solid ${({ theme }) => theme.rgba02};
    padding: 0 15px 15px;
    & span {
      width: 18px;
      height: 18px;
      :before {
        width: 10px;
        height: 10px;
        top: 50%;
      }
    }
  }
`;
export const OrderNumber = styled.div`
  color: ${({ theme }) => theme.fc21};
  padding-left: 10px;
`;
export const Contents = styled.div`
  width: 100%;
  display: flex;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;
export const ContentsBox = styled.div`
  width: 50%;
  margin-right: 30px;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 990px) {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.rgba02};
    flex-direction: column;
    margin: 0;
  }
`;
export const ButtomBox = styled.div`
  width: 100px;
  margin: 0 auto;
  @media (max-width: 990px) {
    display: none;
  }
`;
export const MobileButtomBox = styled.div`
  padding: 0 10px;
`;
