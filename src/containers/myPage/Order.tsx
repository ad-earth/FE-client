import styled from "styled-components";
import { useState } from "react";
// components
import OderList from "../../components/myPage/order/OderList";
import OrderNumber from "../../components/myPage/order/OrderNumber";

import useMobileMediaQuery from "../../hooks/useMobileMediaQuery";

const Order = () => {
  const [state, setState] = useState(null);
  const isMobile = useMobileMediaQuery();
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
  @media (max-width: 990px) {
    margin: 0 -15px;
  }
`;
const DataNull = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fs15};
  text-align: center;
  color: ${({ theme }) => theme.fc05};
  padding: 70px;
  box-sizing: border-box;
  `;
