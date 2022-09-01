import styled from "styled-components";
import OrderNumerDetail from "../../components/myPage/order/OrderNumerDetail";
import OrderListDetail from "../../components/myPage/order/OrderListDetail";
import OrderUserInfo from "../../components/myPage/order/OrderUserInfo";
import OrderAddress from "../../components/myPage/order/OrderAddress";
import OrderAmount from "../../components/myPage/order/OrderAmount";

import { useNavigate } from "react-router-dom";

const OrderDetail = () => {
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
    </Section>
  );
};

export default OrderDetail;

const Section = styled.div``;
const Title = styled.div`
  font-size: 21px;
  font-weight: 600;
  margin-bottom: 24px;
  display: flex;
  & span {
    width: 30px;
    position: relative;
    height: 30px;
    display: inline-block;
    margin-right: 12px;
    overflow: hidden;
    cursor: pointer;
    :before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 14px;
      height: 14px;
      transform: translate(-50%, -50%) rotate(-45deg);
      margin-top: 2px;
      border-top: 1px solid #333;
      border-left: 1px solid #333;
    }
  }
`;
