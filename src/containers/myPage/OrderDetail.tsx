import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import useMobileMediaQuery from "../../hooks/useMobileMediaQuery";

import OrderNumerDetail from "../../components/myPage/order/orderNumerDetail/OrderNumerDetail";
import OrderListDetail from "../../components/myPage/order/orderListDetail/OrderListDetail";
import OrderUserInfo from "../../components/myPage/order/orderUserInfo/OrderUserInfo";
import OrderAddress from "../../components/myPage/order/orderAddress/OrderAddress";
import OrderAmount from "../../components/myPage/order/orderAmount/OrderAmount";
import OrderPaymentMethod from "../../components/myPage/order/orderPaymentMethod/OrderPaymentMethod";

const OrderDetail = () => {
  const isMobile = useMobileMediaQuery();
  const navigate = useNavigate();
  return (
    <Section>
      <Title>
        <span
          onClick={() => {
            navigate(-1);
          }}
        ></span>
        주문 상세 내역
      </Title>
      <OrderNumerDetail />
      <OrderListDetail />
      <OrderUserInfo />
      <OrderAddress />
      <OrderAmount />
      {isMobile && <OrderPaymentMethod />}
    </Section>
  );
};

export default OrderDetail;

const Section = styled.div`
  @media (max-width: 990px) {
    margin: 0 -15px;
  }
`;
const Title = styled.div`
  font-size: ${({ theme }) => theme.fs21};
  font-weight: 600;
  display: flex;
  margin-bottom: 24px;
  @media (max-width: 990px) {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.rgba02};
    margin: 0;
    padding: 0 20px 20px;
  }
  & span {
    width: 30px;
    height: 30px;
    display: inline-block;
    position: relative;
    margin-right: 12px;
    overflow: hidden;
    cursor: pointer;
    :before {
      content: "";
      width: 14px;
      height: 14px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(-45deg);
      margin-top: 2px;
      border-top: 1px solid ${({ theme }) => theme.ls13};
      border-left: 1px solid ${({ theme }) => theme.ls13};
    }
  }
`;
