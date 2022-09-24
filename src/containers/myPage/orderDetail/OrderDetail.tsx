import { useState } from "react";
import * as t from "./orderDetail.style";
import { useNavigate, useParams } from "react-router-dom";
//components
import OrderNumerDetail from "../../../components/myPage/order/orderNumerDetail/OrderNumerDetail";
import OrderListDetail from "../../../components/myPage/order/orderListDetail/OrderListDetail";
import OrderUserInfo from "../../../components/myPage/order/orderUserInfo/OrderUserInfo";
import OrderAddress from "../../../components/myPage/order/orderAddress/OrderAddress";
import OrderAmount from "../../../components/myPage/order/orderAmount/OrderAmount";
import OrderPaymentMethod from "../../../components/myPage/order/orderPaymentMethod/OrderPaymentMethod";
//hook
import useMobileMediaQuery from "../../../hooks/useMobileMediaQuery";
import useOrderDetail from "./useOrderDetail";
//type
import { OrderType } from "./orderDetail.type";

const OrderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [params, setParams] = useState<string>(id ? id : "");
  const orderDetail: OrderType = useOrderDetail(params);
  const navigate = useNavigate();
  const isMobile = useMobileMediaQuery();

  if (orderDetail) {
    let cancelPrice = 0;

    orderDetail.products
      .filter((data) => data.o_Status.includes("취소완료"))
      .map((data) => {
        for (let i = 0; i < data.p_Option.length; i++) {
          cancelPrice += data.p_Option[i][4];
        }
        return cancelPrice;
      });

    return (
      <t.Section>
        <t.Title>
          <span
            onClick={() => {
              navigate(-1);
            }}
          ></span>
          주문 상세 내역
        </t.Title>
        <OrderNumerDetail no={orderDetail.o_No} date={orderDetail.o_Date} />
        <OrderListDetail products={orderDetail.products} />
        <OrderUserInfo user={orderDetail.userInfo} />
        <OrderAddress address={orderDetail.address} />
        <OrderAmount
          price={orderDetail.o_Price}
          products={orderDetail.products}
        />
        {orderDetail.products.filter(
          (item) => item.o_Status === "취소완료"
        ) && (
          <OrderAmount
            price={orderDetail.o_Price}
            products={orderDetail.products}
            cancelPrice={cancelPrice}
          />
        )}
        {isMobile && <OrderPaymentMethod />}
      </t.Section>
    );
  }
  return <></>;
};
export default OrderDetail;
