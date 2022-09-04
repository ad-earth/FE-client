import styled from "styled-components";
import CartItem from "../../components/cartPage/CartItem";
import { MainButton } from "../../elements/Buttons";

const CartList = () => {
  return (
    <CartContainer>
      <CartHeader>
        <span>장바구니</span>
        <Count>1</Count>
      </CartHeader>
      <CartItem />
      <BtnDiv>
        <MainButton
          width={"96px"}
          fontWeight={"normal"}
          radius={"30px"}
          border={"0.5px solid #e5e7eb"}
          bgColor={"#fff"}
          color={"#212121"}
          hBorder={"0.5px solid #646464"}
          hBgColor={"#fff"}
        >
          선택상품 삭제
        </MainButton>
        <MainButton
          width={"96px"}
          fontWeight={"normal"}
          radius={"30px"}
          border={"0.5px solid #e5e7eb"}
          bgColor={"#fff"}
          color={"#212121"}
          hBorder={"0.5px solid #646464"}
          hBgColor={"#fff"}
        >
          품절상품 삭제
        </MainButton>
      </BtnDiv>
    </CartContainer>
  );
};

export default CartList;

const CartContainer = styled.div`
  width: 1160px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const CartHeader = styled.div`
  width: 100%;
  margin: 40px 0 24px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    color: #646464;
    font-size: 24px;
    margin-right: 10px;
  }
`;
const Count = styled.div`
  width: 20px;
  height: 20px;
  color: #fff;
  font-size: 11px;
  background-color: #646464;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BtnDiv = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;
