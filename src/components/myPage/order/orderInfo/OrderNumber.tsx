import * as t from "./orderInfo.style";
import { Link } from "react-router-dom";
import { useViewport } from "../../../../hooks/useViewport";

export default function OrderInfo(props: {
  orderNo: number;
  orderDate: string;
}) {
  const { orderNo, orderDate } = props;
  const viewport = useViewport();
  return (
    <t.Base>
      <t.OrderNumber>
        <t.Label> 주문번호 </t.Label>
        <Link to={`${orderNo}`} className="link">
          {viewport > 990 ? <span>{orderNo}</span> : <span>주문상세보기</span>}
          <t.ArrowIcon />
        </Link>
      </t.OrderNumber>
      <t.Date>
        <t.Label> 주문일자 </t.Label>
        <span> {orderDate}</span>
      </t.Date>
    </t.Base>
  );
}
