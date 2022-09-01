import React from "react";
import Product from "./Product";
import styled from "styled-components";

const OrderListDetail = () => {
  return (
    <OderListBox>
      <OrderList>
        <Info>상품정보</Info>
        <Service className="center">배송비</Service>
        <Status>진행상태</Status>
      </OrderList>
      <OrderInfo>
        <Info>
          <Product />
        </Info>
        <Service className="center">0원</Service>
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
  color: ${({ theme }) => theme.colors.gray1};
  font-size: 15px;
`;
const OrderList = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  display: flex;
`;
const OrderInfo = styled.div`
  width: 100%;
  display: flex;
`;
const Info = styled.span`
  width: 100%;
  padding: 10px 20px;
  flex-grow: 1;
`;
const Service = styled.span`
  width: 100%;
  padding: 10px 20px;
  text-align: center;
  border-left: 1px solid rgba(100, 100, 100, 0.1);
  border-right: 1px solid rgba(100, 100, 100, 0.1);
  flex-grow: 1;
`;
const Status = styled.span`
  width: 100%;
  padding: 10px 20px;
  flex-grow: 1;
`;
