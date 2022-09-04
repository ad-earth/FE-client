import styled from "styled-components";
const OrderNumerDetail = () => {
  return (
    <OrderNumberBox>
      <OrderDate>
        <span>주문일자 </span>
        <strong>2022-08-29</strong>
      </OrderDate>
      <OrderNumberInfo>
        <span>주문번호</span>
        <strong>20228344848</strong>
      </OrderNumberInfo>
    </OrderNumberBox>
  );
};

export default OrderNumerDetail;

const OrderNumberBox = styled.div`
  border: 1px solid rgba(100, 100, 100, 0.1);
  padding: 16px 20px;
  display: flex;
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 10px;
  & span {
    margin-right: 4px;
  }
  @media (max-width: 990px) {
    border: none;
    flex-direction: column;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
`;
const OrderDate = styled.div`
  margin-right: 20px;
`;
const OrderNumberInfo = styled.div``;
