import React from "react";
import styled from "styled-components";

const OrderNumber = () => {
  return (
    <OrderNumberBox>
      <OrderNumberInfo>
        주문번호
        <span>
          20228344848
          <ArrowIcon />
        </span>
      </OrderNumberInfo>
      <OrderDate>
        <span>주문일자 </span>
        2022-08-29
      </OrderDate>
    </OrderNumberBox>
  );
};

export default OrderNumber;
const OrderNumberBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  font-size: 15px;
  line-height: 15px;
`;
const OrderNumberInfo = styled.div`
  color: #333;
  display: flex;
  & span {
    color: ${({ theme }) => theme.colors.green3};
    padding-left: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
`;
const ArrowIcon = styled.button`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.green3};
  position: relative;
  left: 4px;
  background: none;
  :after {
    content: "";
    width: 5px;
    height: 5px;
    position: absolute;
    left: 43%;
    top: 4px;
    border-left: 1px solid ${({ theme }) => theme.colors.green3};
    border-top: 1px solid ${({ theme }) => theme.colors.green3};
    transform: translateX(-50%) rotate(130deg);
  }
`;
const OrderDate = styled.div`
  color: #757575;
`;
