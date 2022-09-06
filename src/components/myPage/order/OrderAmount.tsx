import styled from "styled-components";
import useMobileMediaQuery from "../../../hooks/useMobileMediaQuery";

const OrderAmount = () => {
  const isMobile = useMobileMediaQuery()
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
  )
}

export default OrderAmount

const OrderAmountBox = styled.div`
  margin-bottom: 40px;
`
const Title = styled.div`
  font-size: ${({ theme }) => theme.fs18};
  font-weight: bold;
  color: ${({ theme }) => theme.fc14};
  margin-bottom: 16px;
  @media (max-width: 990px) {
    padding: 0px 15px;
  }
`
const Contents = styled.div`
  border: 1px solid ${({ theme }) => theme.rgba06};
  display: flex;
  justify-content: space-between;
  @media (max-width: 990px) {
    flex-direction: column;
  }
`
const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    @media (max-width: 990px) {
    margin-top:9px;
  }
  & strong {
    color: #212121;
  }
`

const ItemBox = styled.div`
  height: 80px;
  padding: 16px 20px;
  @media (max-width: 990px) {
    padding: 0;
    &.webItemBox {
      display: none;
    }
  }
`

const Section = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fs15};;
  position: relative;
  @media (max-width: 990px) {
    border-bottom: 1px solid ${({ theme }) => theme.rgba06};
    padding :12px 15px;
    box-sizing: border-box;
  }
  ${Box} {
    font-size: ${({ theme }) => theme.fs14};
    color: ${({ theme }) => theme.fc05};
  }
  & .topText {
    color: ${({ theme }) => theme.fc14};;
    font-weight: bold;
    border-bottom: 1px solid ${({ theme }) => theme.rgba06};
    padding: 16px 20px;
    @media (max-width: 990px) {
      font-size:${({ theme }) => theme.fs15};
      font-weight: normal;
      border-bottom:none;
      padding:0 ;
  }
  }
  & .bigText {
    font-size: ${({ theme }) => theme.fs22};
    @media (max-width: 990px) {
      font-size: ${({ theme }) => theme.fs15};
    }
  }
  & .green {
    color: ${({ theme }) => theme.fc15};
    @media (max-width: 990px) {
      font-size: ${({ theme }) => theme.fs18};;
      font-weight:bold;
    }
  }
  & {Section}:first-child ${ItemBox} {
  border-right: 1px solid ${({ theme }) => theme.rgba06};
  @media (max-width: 990px) {border:none;}
  }
  & {Section}:last-child ${ItemBox} {
  border-left: 1px solid ${({ theme }) => theme.rgba06};
  @media (max-width: 990px) {border:none;}
  }
`
const IconBox = styled.div`
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: ${({ theme }) => theme.fs20};
  color: ${({ theme }) => theme.fc01};
  border-radius: 100%;
  background-color: ${({ theme }) => theme.bg09};
  position: absolute;
  &.left {
    font-weight: 900;
    top: 22px;
    left: -10px;
  }
  &.right {
    top: 22px;
    right: -10px;
  }
  @media (max-width: 990px) {
    display: none;
  }
`
