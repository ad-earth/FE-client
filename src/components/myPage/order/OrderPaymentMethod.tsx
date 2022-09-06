import styled from "styled-components";

const OrderPaymentMethod = () => {
  return (
    <OrderPaymentBox>
      <Title>결제수단</Title>
      <Contents>
        <span>
          <strong>무통장입금</strong>
          <br />
          지구은행 0123456789
          <br />
          예금주 광고지구
        </span>
      </Contents>
    </OrderPaymentBox>
  );
};

export default OrderPaymentMethod;
const OrderPaymentBox = styled.div`
  margin-bottom: 40px;
`;
const Title = styled.div`
  font-size: ${({ theme }) => theme.fs18};
  font-weight: bold;
  color: ${({ theme }) => theme.fc14};
  margin-bottom: 16px;
  @media (max-width: 990px) {
    padding: 0px 15px;
  }
`;
const Contents = styled.div`
  line-height: 30px;
  border: 1px solid ${({ theme }) => theme.rgba06};
  padding: 16px 15px;
`;
