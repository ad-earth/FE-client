import * as t from "./orderAddress.style";

interface PropsType {
  d_Name: string;
  d_Address1: string;
  d_Address2: string;
  d_Memo: string;
  d_Phone: number;
}
const OrderAddress = ({ address }: { address: PropsType }) => {
  return (
    <div>
      <t.OrderAddressBox>
        <t.Title>배송지 정보</t.Title>
        <t.Contents>
          <t.Item>
            <span>수령인</span>
            {address.d_Name}
          </t.Item>
          <t.Item>
            <span>연락처</span>
            {address.d_Phone}
          </t.Item>
          <t.Item>
            <span>배송지</span>
            <p>
              {address.d_Address1}
              <br />
              {address.d_Address2}
            </p>
            address
          </t.Item>
          <t.Item>
            <span>베송메모</span>
            {address.d_Memo}
          </t.Item>
        </t.Contents>
      </t.OrderAddressBox>
    </div>
  );
};

export default OrderAddress;
