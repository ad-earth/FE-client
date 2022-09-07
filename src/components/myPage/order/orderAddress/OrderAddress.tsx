import * as t from "./orderAddress.style";

const OrderAddress = () => {
  return (
    <div>
      <t.OrderAddressBox>
        <t.Title>배송지 정보</t.Title>
        <t.Contents>
          <t.Item>
            <span>수령인</span>최수인
          </t.Item>
          <t.Item>
            <span>연락처</span>010-2222-2222
          </t.Item>
          <t.Item>
            <span>배송지</span>
            <div>대구광역시 달서구 장기로 145</div>
          </t.Item>
          <t.Item>
            <span>베송메모</span>젠장!!!!
          </t.Item>
        </t.Contents>
      </t.OrderAddressBox>
    </div>
  );
};

export default OrderAddress;
