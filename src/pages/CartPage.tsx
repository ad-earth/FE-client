import styled from "styled-components";
import CartList from "../containers/cartPage/cartList/CartList";
import CartReceipt from "../containers/cartPage/cartReceipt/CartReceipt";

const CartPage = () => {
  return (
    <MainContainer>
      <CartList />
      <CartReceipt />
    </MainContainer>
  );
};
export default CartPage;

const MainContainer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 95%;
  }
  @media (max-width: 990px) {
    width: 100%;
  }
`;
