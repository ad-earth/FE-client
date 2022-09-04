import React from "react";
import Product from "./Product";
import styled from "styled-components";

const OrderListDetail = () => {
  return (
    <OderListBox>
      <OrderList>
        <Info>상품정보</Info>
        <Service className="info_center">배송비</Service>
        <Status>진행상태</Status>
      </OrderList>
      <OrderInfo>
        <Info>
          <Product />
        </Info>
        <Service className="servie_center">0원</Service>
        <Status>
          <strong>취소완료</strong>
        </Status>
      </OrderInfo>
    </OderListBox>
  );
};

export default OrderListDetail;

const OderListBox = styled.div`
  width: 100%;
  border: 1px solid rgba(100, 100, 100, 0.1);
  margin-bottom: 40px;
  color: ${({ theme }) => theme.fc09};
  font-size: 15px;
`;
const OrderList = styled.div`
  width: 100%;
  height: 42px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  display: flex;
  align-items: center;
`;
const OrderInfo = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;
const Info = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 10px 16px;
`;
const Service = styled.div`
  width: 100%;
  text-align: center;
  border-left: 1px solid rgba(100, 100, 100, 0.1);
  border-right: 1px solid rgba(100, 100, 100, 0.1);
  flex-grow: 1;
  padding: 0 16px;
  &.info_center {
    line-height: 42px;
  }
  &.servie_center {
    line-height: 100px;
  }
`;
const Status = styled.div`
  width: 100%;
  flex-grow: 1;
  padding: 10px 16px;
`;
