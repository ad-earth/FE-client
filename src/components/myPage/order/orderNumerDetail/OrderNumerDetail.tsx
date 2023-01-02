import * as t from "./orderNumberDetail.style";

const OrderNumerDetail = (props: { no: number; date: string }) => {
  const { no, date } = props;
  return (
    <t.OrderNumberBox>
      <t.OrderDate>
        <span>주문일자 </span>
        <strong>{date}</strong>
      </t.OrderDate>
      <t.OrderNumberInfo>
        <span>주문번호</span>
        <strong>{no}</strong>
      </t.OrderNumberInfo>
    </t.OrderNumberBox>
  );
};

export default OrderNumerDetail;
