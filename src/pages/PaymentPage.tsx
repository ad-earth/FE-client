import styled from "styled-components";
import { theme } from "../style/theme";
import PayTitle from "../components/paymentPage/payTitle/PayTitle";
import OrderPList from "../containers/paymentPage/orderPList/OrderPList";

const PaymentPage = () => {
  return (
    <>
      <Area>
        <PayTitle />
        <OrderPList />
      </Area>
    </>
  );
};
export default PaymentPage;
const Area = styled.div`
  background-color: ${theme.bg03};
  display: grid;
  justify-content: center;
  width: 100%;
  @media (max-width: 990px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;
