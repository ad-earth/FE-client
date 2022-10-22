import * as t from "./orderNumberDetail.style";
interface PropsType {
  no: number;
  date: string;
}
const OrderNumerDetail = ({ no, date }: PropsType) => {
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
