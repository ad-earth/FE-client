import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import * as t from "./order.style";
// components
import OderList from "../../../components/myPage/order/orderList/OrderList";
import OrderNumber from "../../../components/myPage/order/orderNumber/OrderNumber";
//hook
import useMobileMediaQuery from "../../../hooks/useMobileMediaQuery";
import useOrder from "./useOrder";
//type
import { OrderListType } from "./order.type";

const Order = () => {
  const isMobile = useMobileMediaQuery();
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useOrder();
  useEffect(() => {
    inView && hasNextPage && fetchNextPage();
  }, [inView]);

  if (data?.pages[0]?.cnt === 0) {
    return <t.DataNull>주문 내역이 없습니다.</t.DataNull>;
  }
  return (
    <t.Section>
      <t.OrderListBox>
        <t.Title>주문조회</t.Title>
        {data &&
          data.pages.map((_, idx: number) => (
            <div key={idx}>
              {data.pages[idx].orderList.map(
                (list: OrderListType, idx: number) => (
                  <t.List key={idx}>
                    <OrderNumber
                      isMobile={isMobile}
                      orderNo={list.o_No}
                      orderDate={list.o_Date}
                    />
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
