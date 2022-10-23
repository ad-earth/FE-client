import * as t from "./orderNumber.style";
import { Link } from "react-router-dom";
import { PropsType } from "./orderNumber.type";

const OrderNumber = (props: PropsType) => {
  const { isMobile, orderNo, orderDate } = props;
  return (
    <t.OrderNumberBox>
      <t.OrderNumberInfo>
        <t.Label>주문번호</t.Label>
        <Link to={`${props.orderNo}`} className="link">
          {isMobile ? <span>주문상세보기</span> : <span>{orderNo}</span>}
          <t.ArrowIcon />
        </Link>
      </t.OrderNumberInfo>
      <t.OrderDate>
        <t.Label> 주문일자 </t.Label>
        <span> {orderDate}</span>
      </t.OrderDate>
    </t.OrderNumberBox>
  );
};

export default OrderNumber;
