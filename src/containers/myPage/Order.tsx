import styled from "styled-components";
import { useState } from "react";
// components
import OderList from "../../components/myPage/order/OderList";
import OrderNumber from "../../components/myPage/order/OrderNumber";

const Order = () => {
  const [state, setState] = useState(null);
  return (
    <Section>
      <OrderListBox>
        <Title>주문조회</Title>
        {state === null && <DataNull>주문 내역이 없습니다.</DataNull>}
        {["1", "2", "3"].map((data, i: number) => (
          <List key={i}>
            <OrderNumber />
            <OderList />
          </List>
        ))}
      </OrderListBox>
    </Section>
  );
};

export default Order;

const Section = styled.div``;
const OrderListBox = styled.div``;
const Title = styled.div`
  font-size: 21px;
  font-weight: 600;
`;
const List = styled.div`
  margin-bottom: 20px;
`;
const DataNull = styled.div`
width: 100%;
  text-align: center;
  padding: 70px;
  box-sizing: border-box;
  color: #999999;
  size: 15px;
`;
