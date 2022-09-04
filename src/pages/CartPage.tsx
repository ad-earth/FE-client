import styled from "styled-components";
import CartList from "../containers/cartPage/CartList";
import CartReceipt from "../containers/cartPage/CartReceipt";

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
`;
