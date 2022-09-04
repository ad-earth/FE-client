import styled from "styled-components";
import { useState } from "react";
// components
import OderList from "../../components/myPage/order/OderList";
import OrderNumber from "../../components/myPage/order/OrderNumber";

const Cancel = () => {
  const [state, setState] = useState(null);
  return (
    <Section>
      <OrderListBox>
        <Title>주문조회</Title>
        {state === null && <DataNull>취소 내역이 없습니다.</DataNull>}
        {["1", "2"].map((data, i: number) => (
          <List key={i}>
            <OrderNumber />
            <OderList />
          </List>
        ))}
      </OrderListBox>
    </Section>
  );
};

export default Cancel;

const Section = styled.div``;
const OrderListBox = styled.div``;
const Title = styled.div`
  font-size: ${({ theme }) => theme.fs21};
  font-weight: 600;
`;
const List = styled.div`
  margin-bottom: 20px;
`;
const DataNull = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fs15};
  text-align: center;
  color: ${({ theme }) => theme.fc05};
  padding: 70px;
  box-sizing: border-box;
`;
