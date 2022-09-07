import useMobileMediaQuery from "../../../../hooks/useMobileMediaQuery";
import * as t from "./orderAmount.style";

const OrderAmount = () => {
  const isMobile = useMobileMediaQuery();
  return (
    <t.OrderAmountBox>
      <t.Title>주문 금액 상세</t.Title>
      <t.Contents>
        <t.Section>
          <t.Box className="topText">
            <span>주문금액</span>
            <span className="bigText">1000원</span>
          </t.Box>
          <t.ItemBox>
            <t.Box>
              {isMobile ? <span>ㄴ 상품 금액</span> : <span>상품 금액</span>}
              <span>1000원</span>
            </t.Box>
            <t.Box>
              <span>
                {isMobile ? <span>ㄴ 배송비</span> : <span>배송비</span>}
              </span>
              <span>1000원</span>
            </t.Box>
          </t.ItemBox>
        </t.Section>
        <t.Section>
          <t.IconBox className="left">&#00;-&#08;</t.IconBox>
          <t.Box className="topText">
            <span>할인금액</span>
            <span className="bigText">0원</span>
            <t.IconBox className="right"> &#61;</t.IconBox>
          </t.Box>
        </t.Section>
        <t.Section>
          <t.Box className="topText">
            <span>총 주문금액</span>
            <span className="bigText green">6000원</span>
          </t.Box>
          <t.ItemBox className="webItemBox">
            <t.Box>
              <span>
                <strong>무통장입금</strong>
                <br />
                지구은행 0123456789
                <br />
                예금주 광고지구
              </span>
            </t.Box>
          </t.ItemBox>
        </t.Section>
      </t.Contents>
    </t.OrderAmountBox>
  );
};

export default OrderAmount;
