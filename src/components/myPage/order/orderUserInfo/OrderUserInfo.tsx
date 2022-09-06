import * as t from "./orderuserInfo.style";

const OrderUserInfo = () => {
  return (
    <t.OrderUserInfoBox>
      <t.Title>구매자 정보</t.Title>
      <t.Contents>
        <t.Item>
          <span>주문자</span>최수인
        </t.Item>
        <t.Item>
          <span>연락처</span>010-2222-2222
        </t.Item>
      </t.Contents>
    </t.OrderUserInfoBox>
  );
};

export default OrderUserInfo;
