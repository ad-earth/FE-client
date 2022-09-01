import styled from "styled-components";

const OrderAmount = () => {
  return (
    <OrderAmountBox>
      <Title>주문 금액 상세</Title>
      <Contents>
        <TitleBoxBlod>
          <Box>
            <span>주문금액</span>
            <Price>9,900원</Price>
          </Box>
          <IconBox>
            <Icon style={{ marginTop: "-4px" }}>&#00;-&#08;</Icon>
          </IconBox>

          <Box>
            <span>주문금액</span>
            <Price className="selector">0원</Price>
          </Box>
          <IconBox>
            <Icon style={{ marginTop: "-2px" }}> &#61;</Icon>
          </IconBox>

          <Box>
            <span>총 주문금액</span>
            <Price className="green">9,900원</Price>
          </Box>
        </TitleBoxBlod>
        <TableBody>
          <section>
            <Box>
              <span>상품금액</span>
              <span>6,900원</span>
            </Box>
            <Box className="boxTop">
              <span>배송비</span>
              <span>무료</span>
            </Box>
          </section>
          <section>
            <Box>
              <span>주문금액</span>
              <span></span>
            </Box>
          </section>
          <section>
            <Box>
              <span>
                <strong>무통장입금</strong>
                지구은행 0123456789
                <br /> 예금주 광고지구
              </span>
            </Box>
          </section>
        </TableBody>
      </Contents>
    </OrderAmountBox>
  );
};

export default OrderAmount;

const OrderAmountBox = styled.div`
  margin-bottom: 40px;
`;
const Contents = styled.div`
  border: 1px solid rgba(100, 100, 100, 0.1);
  margin-bottom: 40px;
  box-sizing: border-box;
`;
const Title = styled.div`
  font-size: 18px;
  color: #212121;
  margin-bottom: 16px;
  font-weight: bold;
`;
const TitleBoxBlod = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  display: flex;
  align-items: center;

  & span {
    color: #212121;
    font-weight: bold;
    font-size: 15px;
  }
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  box-sizing: border-box;
  &.boxTop {
    padding-top: 0;
  }
`;
const IconBox = styled.div`
  width: 70px;
  height: 20px;
  background-color: gray;
  border-radius: 100%;
  text-align: center;
  background-color: gray;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
const Icon = styled.strong``;
const Price = styled.p`
  font-size: 22.5px;
  color: #212121;
  font-weight: bold;
  &.green {
    color: ${({ theme }) => theme.colors.green2};
  }
`;
const TableBody = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: nomal;
  & section:nth-child(2) {
    border-left: 1px solid rgba(100, 100, 100, 0.1);
    border-right: 1px solid rgba(100, 100, 100, 0.1);
  }
  & section {
    width: 100%;
    font-size: 14px;
  }
  & strong {
    display: block;
  }
`;
