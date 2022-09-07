import * as t from "./orderNumberDetail.style";

const OrderNumerDetail = () => {
  return (
    <t.OrderNumberBox>
      <t.OrderDate>
        <span>주문일자 </span>
        <strong>2022-08-29</strong>
      </t.OrderDate>
      <t.OrderNumberInfo>
        <span>주문번호</span>
        <strong>20228344848</strong>
      </t.OrderNumberInfo>
    </t.OrderNumberBox>
  );
};

export default OrderNumerDetail;
