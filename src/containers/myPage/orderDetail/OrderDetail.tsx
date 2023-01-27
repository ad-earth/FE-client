import * as t from "./orderDetail.style";
import { useNavigate, useParams } from "react-router-dom";
import OrderNumerDetail from "../../../components/myPage/order/orderNumerDetail/OrderNumerDetail";
import OrderListDetail from "../../../components/myPage/order/orderListDetail/OrderListDetail";
import OrderUserInfo from "../../../components/myPage/order/orderUserInfo/OrderUserInfo";
import OrderAddress from "../../../components/myPage/order/orderAddress/OrderAddress";
import OrderAmount from "../../../components/myPage/order/orderAmount/OrderAmount";
import OrderPaymentMethod from "../../../components/myPage/order/orderPaymentMethod/OrderPaymentMethod";
import useGetOrderDetail from "./useGetOrderDetail";
import { useViewport } from "../../../hooks/useViewport";

const OrderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const viewport = useViewport();
  const { isLoading, orderInfo, cancelPrice } = useGetOrderDetail(id);

  if (isLoading) return <p>Loading...</p>;
  return (
    <t.Section>
      <t.Title>
        <span onClick={() => navigate(-1)}></span>
        주문 상세 내역
      </t.Title>
      <>
        <OrderNumerDetail no={orderInfo.o_No} date={orderInfo.o_Date} />
        <OrderListDetail
          products={orderInfo.products}
          orderNo={orderInfo.o_No}
        />
        <OrderUserInfo user={orderInfo.userInfo} />
        <OrderAddress address={orderInfo.address} />
        <OrderAmount price={orderInfo.o_Price} />
        {cancelPrice > 0 && (
          <OrderAmount price={orderInfo.o_Price} cancelPrice={cancelPrice} />
        )}
      </>
      {viewport <= 990 && <OrderPaymentMethod />}
    </t.Section>
  );
};

export default OrderDetail;
