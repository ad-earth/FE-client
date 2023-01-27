import * as t from "./order.style";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";
import OrderInfo from "../../../components/myPage/order/orderInfo/OrderNumber";
import OderList from "../../../components/myPage/order/orderList/OrderList";
import { OrderListType } from "./order.type";
import useIntersectHandler from "../../../hooks/useIntersectHandler";
import useGetOrderQuery from "./useGetOrderQuery";

export default function Order() {
  const pathPattern = useLocation();
  const [, path] = pathPattern.pathname.split("/");
  const {
    isLoading,
    data: orderList,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGetOrderQuery(path);

  const orderProducts = useMemo(() => {
    let result: OrderListType[] = [];
    orderList?.pages.map((item) => {
      for (let i = 0; i < item.result.length; i++) result.push(item.result[i]);
    });
    return result;
  }, [orderList]);

  const target = useIntersectHandler(() => {
    if (!hasNextPage || isFetchingNextPage) return;
    fetchNextPage();
  });

  if (isLoading) return <p>Loading...</p>;
  if (!orderList) return <span>No data found</span>;
  if (orderProducts.length === 0)
    return <t.DataNull>주문 내역이 없습니다.</t.DataNull>;

  return (
    <section>
      <t.Title>주문조회</t.Title>
      <article>
        {orderProducts.map((list: OrderListType, i: number) => (
          <t.List key={i}>
            <OrderInfo orderNo={list.o_No} orderDate={list.o_Date} />
            <OderList products={list.products} orderNo={list.o_No} />
          </t.List>
        ))}
      </article>
      {isFetching && !isFetchingNextPage ? (
        "Loading more..."
      ) : (
        <div ref={target}></div>
      )}
    </section>
  );
}
