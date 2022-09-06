import React from "react";
import { Link } from "react-router-dom";

import * as t from "./orderNumber.style";

interface MobileType {
  isMobile?: boolean;
}
const OrderNumber = (props: MobileType) => {
  return (
    <t.OrderNumberBox>
      <t.OrderNumberInfo>
        <t.Label>주문번호</t.Label>
        <Link to={`${"1?detail=true"}`} className="link">
          {props.isMobile ? (
            <span>주문상세보기</span>
          ) : (
            <span>20228344848</span>
          )}
          <t.ArrowIcon />
        </Link>
      </t.OrderNumberInfo>
      <t.OrderDate>
        <t.Label> 주문일자 </t.Label>
        <span> 2022-08-29</span>
      </t.OrderDate>
    </t.OrderNumberBox>
  );
};

export default OrderNumber;
