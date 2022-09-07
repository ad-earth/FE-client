import styled from "styled-components";

export const OrderPaymentBox = styled.div`
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
  line-height: 30px;
  border: 1px solid ${({ theme }) => theme.rgba06};
  padding: 16px 15px;
`;
