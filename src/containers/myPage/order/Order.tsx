import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import * as t from "./order.style";
import OderList from "../../../components/myPage/order/orderList/OrderList";
import OrderNumber from "../../../components/myPage/order/orderNumber/OrderNumber";
import useOrderQuery from "./useOrderQuery";
import { OrderListType } from "./order.type";

const Order = () => {
  const {
    data: orderListRes,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useOrderQuery();
  const isOrderLength = orderListRes?.pages[0]?.cnt !== 0;

  // observer
  const { ref, inView } = useInView();
  useEffect(() => {
    if (!inView) return;
    hasNextPage && fetchNextPage();
  }, [inView]);

  // 주문 내역이 없을 경우
  if (!isOrderLength) return <t.DataNull>주문 내역이 없습니다.</t.DataNull>;

  return (
    <t.Section>
      {/* 주문정보 */}
      <t.OrderListBox>
        <t.Title>주문조회</t.Title>
        {isOrderLength &&
          orderListRes?.pages.map((_, idx: number) => (
            <div key={idx}>
              {orderListRes.pages[idx].orderList.map(
                (list: OrderListType, idx: number) => (
                  <t.List key={idx}>
                    <OrderNumber orderNo={list.o_No} orderDate={list.o_Date} />
                    <OderList products={list.products} orderNo={list.o_No} />
                  </t.List>
                )
              )}
            </div>
          ))}
        {isFetchingNextPage ? <div>...Loading</div> : <div ref={ref}></div>}
      </t.OrderListBox>
    </t.Section>
  );
};
export default Order;
