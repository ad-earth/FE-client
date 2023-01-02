// import useMobileMediaQuery from "../../../../hooks/useMobileMediaQuery";
import { useViewport } from "../../../../hooks/useViewport";
import * as t from "./orderAmount.style";

const OrderAmount = (props: { price: number; cancelPrice?: number }) => {
  const { cancelPrice, price } = props;
  const viewport = useViewport();
  return (
    <t.OrderAmountBox>
      <t.Title>{!cancelPrice ? "주문 금액 상세" : "취소 금액 상세"}</t.Title>
      <t.Contents>
        <t.Section>
          <t.Box className="topText">
            <span>{!cancelPrice ? "주문금액" : "취소 주문금액"}</span>
            <span className="bigText">
              {!cancelPrice ? `${price}원` : `${cancelPrice}원`}
            </span>
          </t.Box>
          <t.ItemBox>
            <t.Box>
              {viewport <= 990 ? (
                <span>ㄴ 상품 금액</span>
              ) : (
                <span>상품 금액</span>
              )}
              <span>{!cancelPrice ? `${price}원` : `${cancelPrice}원`}</span>
            </t.Box>
            <t.Box>
              <span>
                {viewport <= 990 ? <span>ㄴ 배송비</span> : <span>배송비</span>}
              </span>
              <span>0원</span>
            </t.Box>
          </t.ItemBox>
        </t.Section>
        <t.Section>
          <t.IconBox className="left">&#00;-&#08;</t.IconBox>
          <t.Box className="topText">
            <span>{!cancelPrice ? "할인금액" : "차감금액"}</span>
            <span className="bigText">0원</span>
            <t.IconBox className="right"> &#61;</t.IconBox>
          </t.Box>
        </t.Section>
        <t.Section>
          <t.Box className="topText">
            <span>{!cancelPrice ? "총 주문금액" : "환불금액"}</span>
            <span className="bigText green">
              {!cancelPrice ? `${price}원` : `${cancelPrice}원`}
            </span>
          </t.Box>
          <t.ItemBox className="webItemBox">
            {!cancelPrice && (
              <t.Box>
                <span>
                  <strong>무통장입금</strong>
                  <br />
                  지구은행 0123456789
                  <br />
                  예금주 광고지구
                </span>
              </t.Box>
            )}
          </t.ItemBox>
        </t.Section>
      </t.Contents>
    </t.OrderAmountBox>
  );
};

export default OrderAmount;
