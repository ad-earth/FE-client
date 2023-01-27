import * as t from "./orderuserInfo.style";
interface PropsType {
  u_Name: string;
  u_Phone: number;
}
const OrderUserInfo = (props: { user: PropsType }) => {
  const { user } = props;
  return (
    <t.OrderUserInfoBox>
      <t.Title>구매자 정보</t.Title>
      <t.Contents>
        <t.Item>
          <span>주문자</span>
          {user.u_Name}
        </t.Item>
        <t.Item>
          <span>연락처</span>
          {user.u_Phone}
        </t.Item>
      </t.Contents>
    </t.OrderUserInfoBox>
  );
};

export default OrderUserInfo;
