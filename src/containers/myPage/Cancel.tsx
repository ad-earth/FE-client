import styled from "styled-components";
// components
import OderList from "../../components/myPage/order/OderList";
import OrderNumber from "../../components/myPage/order/OrderNumber";

const Cancel = () => {
  return (
    <Section>
      <OrderListBox>
        <Title>주문조회</Title>
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
  font-size: 21px;
  font-weight: 600;
`;
const List = styled.div`
  margin-bottom: 20px;
`;
