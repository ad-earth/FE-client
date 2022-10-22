import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import * as t from "./cancel.style";
// components
import OderList from "../../../components/myPage/order/orderList/OrderList";
import OrderNumber from "../../../components/myPage/order/orderNumber/OrderNumber";
//hook
import useCancel from "./useCancel";
//type
import { CancelListType } from "./cancel.type";

const Cancel = () => {
  const [state, setState] = useState(null);
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useCancel();

  useEffect(() => {
    inView && hasNextPage && fetchNextPage();
  }, [inView]);

  if (data?.pages[0]?.cnt === 0) {
    return <t.DataNull>취소 내역이 없습니다.</t.DataNull>;
  }
  return (
    <t.Section>
      <t.OrderListBox>
        <t.Title>주문조회</t.Title>
        {data &&
          data.pages.map((_, idx: number) => (
            <div key={idx}>
              {data.pages[idx].cancelList.map(
                (list: CancelListType, idx: number) => (
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

export default Cancel;
