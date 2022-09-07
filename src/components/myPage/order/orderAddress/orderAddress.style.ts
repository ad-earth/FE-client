import styled from "styled-components";

export const OrderAddressBox = styled.div`
  margin-bottom: 40px;
`;
export const Title = styled.div`
  font-size: ${({ theme }) => theme.fs18};
  color: ${({ theme }) => theme.fc14};
  display: inline-block;

  margin-bottom: 16px;
  font-weight: bold;
  @media (max-width: 990px) {
    padding: 0px 15px;
  }
`;
export const Contents = styled.div`
  border: 1px solid ${({ theme }) => theme.rgba06};
  margin-bottom: 40px;
  padding: 20px;
  box-sizing: border-box;
`;
export const Item = styled.div`
  color: ${({ theme }) => theme.fc14};
  display: flex;
  align-items: flex-start;
  margin-top: 12px;
  &:first-child {
    margin-top: 0;
  }
  & span {
    width: 80px;
    color: ${({ theme }) => theme.fc09};
    margin-right: 20px;
  }
`;
