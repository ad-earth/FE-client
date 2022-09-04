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
  font-size: ${({ theme }) => theme.fs15};
  line-height: 1.6;
  border: 1px solid ${({ theme }) => theme.rgba06};
  display: flex;
  margin-bottom: 10px;
  padding: 16px 20px;
  & span {
    margin-right: 4px;
  }
  @media (max-width: 990px) {
    border: none;
    flex-direction: column;
    border-bottom: 1px solid ${({ theme }) => theme.rgba06};
  }
`;
const OrderDate = styled.div`
  margin-right: 20px;
`;
const OrderNumberInfo = styled.div``;
