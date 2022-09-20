import { Link } from "react-router-dom";
import * as t from "./orderNumber.style";
interface PropsType {
  isMobile?: boolean;
  orderNo: number;
  orderDate: string;
}

const OrderNumber = (props: PropsType) => {
  return (
    <t.OrderNumberBox>
      <t.OrderNumberInfo>
        <t.Label>주문번호</t.Label>
        <Link to={`${props.orderNo}`} className="link">
          {props.isMobile ? (
            <span>주문상세보기</span>
          ) : (
            <span>{props.orderNo}</span>
          )}
          <t.ArrowIcon />
        </Link>
      </t.OrderNumberInfo>
      <t.OrderDate>
        <t.Label> 주문일자 </t.Label>
        <span> {props.orderDate}</span>
      </t.OrderDate>
    </t.OrderNumberBox>
  );
};

export default OrderNumber;
