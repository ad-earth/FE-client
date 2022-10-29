import * as t from "./orderDetail.style";
import { useNavigate, useParams } from "react-router-dom";
import OrderNumerDetail from "../../../components/myPage/order/orderNumerDetail/OrderNumerDetail";
import OrderListDetail from "../../../components/myPage/order/orderListDetail/OrderListDetail";
import OrderUserInfo from "../../../components/myPage/order/orderUserInfo/OrderUserInfo";
import OrderAddress from "../../../components/myPage/order/orderAddress/OrderAddress";
import OrderAmount from "../../../components/myPage/order/orderAmount/OrderAmount";
import OrderPaymentMethod from "../../../components/myPage/order/orderPaymentMethod/OrderPaymentMethod";
import useOrderDetail from "./useOrderDetail";
import { OrderType } from "./orderDetail.type";
import { useViewport } from "../../../hooks/useViewport";

const OrderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const viewport = useViewport();
  const orderDetail: OrderType = useOrderDetail(id);

  // 취소금액 확인
  const findCancelPrice: number[] = orderDetail?.products
    .filter((data) => data.o_Status.includes("취소완료"))
    .map((data) => {
      let price: number = 0;
      for (let i = 0; i < data.p_Option.length; i++)
        price += data.p_Option[i][4];
      return price;
    });

  return (
    <t.Section>
      <t.Title>
        <span onClick={() => navigate(-1)}></span>
        주문 상세 내역
      </t.Title>
      {orderDetail && (
        <>
          <OrderNumerDetail no={orderDetail.o_No} date={orderDetail.o_Date} />
          <OrderListDetail products={orderDetail.products} />
          <OrderUserInfo user={orderDetail.userInfo} />
          <OrderAddress address={orderDetail.address} />
          <OrderAmount
            price={orderDetail.o_Price}
            products={orderDetail.products}
          />
          {findCancelPrice && (
            <OrderAmount
              price={orderDetail.o_Price}
              products={orderDetail.products}
              cancelPrice={findCancelPrice[0]}
            />
          )}
        </>
      )}
      {viewport <= 990 && <OrderPaymentMethod />}
    </t.Section>
  );
};

export default OrderDetail;
