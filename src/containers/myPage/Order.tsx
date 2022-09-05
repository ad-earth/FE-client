import styled from "styled-components";
import { useState } from "react";
// components
import OderList from "../../components/myPage/order/OderList";
import OrderNumber from "../../components/myPage/order/OrderNumber";

import useMobileMediaQuery from "../../hooks/useMobileMediaQuery";

const Order = () => {
  const [state, setState] = useState(null);

  const isMobile = useMobileMediaQuery();

  // console.log(isMobile);
  return (
    <Section>
      <OrderListBox>
        <Title>주문조회</Title>
        {state === null && <DataNull>주문 내역이 없습니다.</DataNull>}
        {["1", "2", "3"].map((data, i: number) => (
          <List key={i}>
            <OrderNumber isMobile={isMobile} />
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
  @media (max-width: 990px) {
    display: none;
  }
`;
const List = styled.div`
  margin-bottom: 20px;
  /* background: red; */
  /* margin: 0 -15px; */
  @media (max-width: 990px) {
    /* padding: 0 15px; */
    margin: 0 -15px;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.07); */
  }
`;
const DataNull = styled.div`
  width: 100%;
  text-align: center;
  padding: 70px;
  box-sizing: border-box;
  color: #999999;
  size: 15px;
`;
