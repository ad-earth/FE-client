import * as t from "./orderNumber.style";
import { Link } from "react-router-dom";
import { PropsType } from "./orderNumber.type";
import { useViewport } from "../../../../hooks/useViewport";

const OrderNumber = ({ orderNo, orderDate }: PropsType) => {
  const viewport = useViewport();
  return (
    <t.OrderNumberBox>
      <t.OrderNumberInfo>
        <t.Label>주문번호</t.Label>
        <Link to={`${orderNo}`} className="link">
          {viewport > 990 ? <span>{orderNo}</span> : <span>주문상세보기</span>}
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
