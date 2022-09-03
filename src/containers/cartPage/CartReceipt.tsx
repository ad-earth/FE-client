import styled from "styled-components";
import { MainButton } from "../../elements/Buttons";

const CartReceipt = () => {
  return (
    <Container>
      <TopTxt>
        총 주문 상품 <span>1</span>개
      </TopTxt>
      <BottomTxt>
        <Price>
          2,800원<span>상품금액</span>
        </Price>
        +
        <Price>
          0원<span>배송비</span>
        </Price>
        =
        <Price className="total">
          2,800원<span>총 주문금액</span>
        </Price>
      </BottomTxt>
      <BtnDiv>
        <MainButton
          width={"300px"}
          fontSize={"16px"}
          radius={"30px"}
          padding={"16px 0"}
        >
          주문하기
        </MainButton>
        <a>계속 쇼핑하기</a>
      </BtnDiv>
    </Container>
  );
};

export default CartReceipt;

const Container = styled.div`
  width: 1160px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
const TopTxt = styled.div`
  width: 100%;
  border-top: 1px solid rgba(33, 33, 33, 0.15);
  padding: 10px 0;
  font-size: 14px;
  color: #646464;
  span {
    color: #00913a;
    font-weight: 500;
  }
  border-bottom: 1px solid rgba(33, 33, 33, 0.15);
`;
const BottomTxt = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 32px 0;
  color: #646464;
  font-size: 24px;
  font-weight: 600;
  border-bottom: 2px solid rgba(33, 33, 33, 0.15);
`;
const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px 10px;
  span {
    font-size: 13px;
    font-weight: 400;
    margin-top: 10px;
    color: #646464;
  }
  &.total {
    color: #00913a;
  }
`;
const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
  a {
    margin-top: 20px;
    color: #00913a;
    text-decoration: underline;
    font-size: 15px;
  }
`;
