import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import * as t from "./order.style";
// components
import OderList from "../../../components/myPage/order/orderList/OrderList";
import OrderNumber from "../../../components/myPage/order/orderNumber/OrderNumber";
import ReviewModal from "../../../components/modal/reviewModal/ReviewModal";
//hook
import useMobileMediaQuery from "../../../hooks/useMobileMediaQuery";
import useOrder from "./useOrder";
//type
import { OrderListType, ProductType } from "./order.type";

const Order = () => {
  const isMobile = useMobileMediaQuery();
  const [infoIsOpen, setInfoIsOpen] = useState<boolean>(false); // 리뷰모달
  const [product, setProduct] = useState<ProductType>(); // 리뷰모달 데이터

  // 주문정보 hook
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useOrder();

  // observer
  const { ref, inView } = useInView();
  useEffect(() => {
    inView && hasNextPage && fetchNextPage();
  }, [inView]);

  // 주문 내역이 없을 경우
  if (data?.pages[0]?.cnt === 0) {
    return <t.DataNull>주문 내역이 없습니다.</t.DataNull>;
  }

  return (
    <t.Section>
      {/* 리뷰모달  */}
      <ReviewModal
        isOpen={infoIsOpen}
        handleClose={() => setInfoIsOpen(false)}
        product={product}
      />
      {/* 주문정보 */}
      <t.OrderListBox>
        <t.Title>주문조회</t.Title>
        {data &&
          data?.pages.map((_, idx: number) => (
            <div key={idx}>
              {data?.pages[idx].orderList.map(
                (list: OrderListType, idx: number) => (
                  <t.List key={idx}>
                    <OrderNumber
                      isMobile={isMobile}
                      orderNo={list.o_No}
                      orderDate={list.o_Date}
                    />
                    <OderList
                      products={list.products}
                      orderNo={list.o_No}
                      setInfoIsOpen={setInfoIsOpen}
                      infoIsOpen={infoIsOpen}
                      setProduct={setProduct}
                    />
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
