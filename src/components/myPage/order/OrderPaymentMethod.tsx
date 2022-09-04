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
  font-size: 18px;
  color: #212121;
  margin-bottom: 16px;
  font-weight: bold;
  @media (max-width: 990px) {
    padding: 0px 15px;
  }
`;
const Contents = styled.div`
  padding: 16px 15px;
  border: 1px solid rgba(100, 100, 100, 0.1);
  line-height: 30px;
`;
