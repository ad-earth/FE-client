import * as t from "./orderPaymentMethod.style";

const OrderPaymentMethod = () => {
  return (
    <t.OrderPaymentBox>
      <t.Title>결제수단</t.Title>
      <t.Contents>
        <span>
          <strong>무통장입금</strong>
          <br />
          지구은행 0123456789
          <br />
          예금주 광고지구
        </span>
      </t.Contents>
    </t.OrderPaymentBox>
  );
};

export default OrderPaymentMethod;
