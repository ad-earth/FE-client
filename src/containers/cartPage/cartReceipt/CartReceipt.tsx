import * as t from "./CartReceipt.style";
import { theme } from "../../../style/theme";
import { MainButton } from "../../../elements/Buttons";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context";

const CartReceipt = () => {
  const [viewport, setViewport] = useState(visualViewport.width);
  const { cartData } = useContext(UserContext);

  useEffect(() => {
    const resizeListener = () => {
      setViewport(visualViewport.width);
    };
    window.addEventListener("resize", resizeListener);
  });

  return (
    <t.Container>
      {viewport <= 990 ? (
        <>
          <t.TxtWrap>
            <t.TxtDiv>
              <t.SmallTxt>
                상품금액(총 <span>1</span>개)
              </t.SmallTxt>
              <t.SmallTxt>2,000원</t.SmallTxt>
            </t.TxtDiv>
            <t.TxtDiv>
              <t.SmallTxt>배송비</t.SmallTxt>
              <t.SmallTxt> + 0원</t.SmallTxt>
            </t.TxtDiv>
          </t.TxtWrap>
          <t.TxtWrap>
            <t.TxtDiv>
              <t.SmallTxt>
                <p>총 주문금액</p>
              </t.SmallTxt>
              <t.SmallTxt className="total">8,600원</t.SmallTxt>
            </t.TxtDiv>
            <t.SmallBtnDiv>
              <MainButton
                width={"100%"}
                fontSize={theme.fc16}
                radius={"30px"}
                padding={"16px 0"}
              >
                주문하기
              </MainButton>
              <a>계속 쇼핑하기</a>
            </t.SmallBtnDiv>
          </t.TxtWrap>
        </>
      ) : (
        <>
          <t.TopTxt>
            총 주문 상품 <span>1</span>개
          </t.TopTxt>
          <t.BottomTxt>
            <t.Price>
              2,800원<span>상품금액</span>
            </t.Price>
            +
            <t.Price>
              0원<span>배송비</span>
            </t.Price>
            =
            <t.Price className="total">
              2,800원<span>총 주문금액</span>
            </t.Price>
          </t.BottomTxt>
          <t.BtnDiv>
            <MainButton
              width={"100%"}
              fontSize={theme.fc16}
              radius={"30px"}
              padding={"16px 0"}
            >
              주문하기
            </MainButton>
            <a>계속 쇼핑하기</a>
          </t.BtnDiv>
        </>
      )}
    </t.Container>
  );
};

export default CartReceipt;
