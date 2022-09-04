import styled from "styled-components";
import useMobileMediaQuery from "../../../hook/useMobileMediaQuery";
const OrderAmount = () => {
  const isMobile = useMobileMediaQuery();
  return (
    <OrderAmountBox>
      <Title>주문 금액 상세</Title>
      <Contents>
        <Section>
          <Box className="topText">
            <span>주문금액</span>
            <span className="bigText">1000원</span>
          </Box>
          <ItemBox>
            <Box>
              {isMobile ? <span>ㄴ 상품 금액</span> : <span>상품 금액</span>}
              <span>1000원</span>
            </Box>
            <Box>
              <span>
                {isMobile ? <span>ㄴ 배송비</span> : <span>배송비</span>}
              </span>
              <span>1000원</span>
            </Box>
          </ItemBox>
        </Section>
        <Section>
          <IconBox className="left">&#00;-&#08;</IconBox>
          <Box className="topText">
            <span>할인금액</span>
            <span className="bigText">0원</span>
            <IconBox className="right"> &#61;</IconBox>
          </Box>
        </Section>
        <Section>
          <Box className="topText">
            <span>총 주문금액</span>
            <span className="bigText green">6000원</span>
          </Box>
          <ItemBox className="webItemBox">
            <Box>
              <span>
                <strong>무통장입금</strong>
                <br />
                지구은행 0123456789
                <br />
                예금주 광고지구
              </span>
            </Box>
          </ItemBox>
        </Section>
      </Contents>
    </OrderAmountBox>
  );
};

export default OrderAmount;

const OrderAmountBox = styled.div`
  margin-bottom: 40px;
`;
const Title = styled.div`
  font-size: 18px;
  color: #212121;
  margin-bottom: 16px;
  font-weight: bold;
  @media (max-width: 990px) {
    padding: 0px 15px;
  }

  //
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid rgba(100, 100, 100, 0.1);
  @media (max-width: 990px) {
    flex-direction: column;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    /* line-height: 24px; */
    @media (max-width: 990px) {
    margin-top:9px;
  }
  & strong {
    color: #212121;
  }
  & i {
    :before {
      content: "";
      width: 30px;
      height: 30px;
      position: absolute;
      left: 50%;
      top: -15px;
      background: #fff;
      border-radius: 50%;
      border: 1px solid ${({ theme }) => theme.colors.gray3};
      transform: translateX(-50%);
    }
  }
`;

const ItemBox = styled.div`
  padding: 16px 20px;
  height: 80px;
  @media (max-width: 990px) {
    padding: 0;
    &.webItemBox {
      display: none;
    }
  }
`;

const Section = styled.div`
  position: relative;
  font-size: 15px;
  width: 100%;
  @media (max-width: 990px) {
      padding :12px 15px;
      box-sizing: border-box;
      border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
  ${Box} {
    font-size:14px;
    color: gray;
  }
  & .topText {
    color: #212121;
    font-weight: bold;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
    @media (max-width: 990px) {
      font-weight: normal;
      font-size:15px;
      border-bottom:none;
      padding:0 ;
  }
  }
  & .bigText {
    font-size: 22px;
    @media (max-width: 990px) {
      font-size: 15px;
    }
  }
  & .green {
    color: ${({ theme }) => theme.colors.green2};
    @media (max-width: 990px) {
      font-size: 18px;
      font-weight:bold;
    }
  }
  & {Section}:first-child ${ItemBox} {
  border-right: 1px solid rgba(100, 100, 100, 0.1);
  @media (max-width: 990px) {border:none;}
  }
  & {Section}:last-child ${ItemBox} {
  border-left: 1px solid rgba(100, 100, 100, 0.1);
  @media (max-width: 990px) {border:none;}
  }
`;
const IconBox = styled.div`
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 100%;
  text-align: center;
  background-color: gray;
  color: #fff;
  font-size: 20px;
`;
const Icon = styled.strong``;
const Price = styled.p`
  font-size: 22px;
  color: #212121;
  font-weight: bold;
  &.green {
    color: ${({ theme }) => theme.fc15};
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
  &.right {
    top: 22px;
    right: -10px;
  }
  @media (max-width: 990px) {
    display: none;
  }
`;
