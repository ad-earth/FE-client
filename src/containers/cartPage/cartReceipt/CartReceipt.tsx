import * as t from "./CartReceipt.style";
import { theme } from "../../../style/theme";
import { useEffect, useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { MainButton } from "../../../elements/buttons/Buttons";
import { useViewport } from "../../../hooks/useViewport";
import { getAllCartDB } from "../../../hooks/useAllCartDB";
import { CartType } from "../../../shared/types/types";

type ObjType = {
  [id: string]: number;
};

const CartReceipt = () => {
  const viewport = useViewport();
  const [cartData, setCartData] = useState<CartType[]>();
  const checkedItems = useAppSelector((state) => state.cartSlice.checkedItems);

  useEffect(() => {
    const result = getAllCartDB();
    result.then((res) => setCartData(res));
  }, []);

  // 총 주문 금액
  const totalAmount = useMemo(() => {
    if (checkedItems.length > 0) {
      const total = cartData.map((el) => {
        console.log("el", el.id);
        const tObj: ObjType = {};
        tObj["id"] = el.id;
        tObj["totalPrice"] = el.totalPrice;
        return tObj;
      });
      let sum = 0;
      for (let i in total) {
        for (let j in checkedItems) {
          if (total[i].id == checkedItems[j]) {
            sum += total[i].totalPrice;
          } else {
            continue;
          }
        }
      }
      return sum;
    }
  }, [checkedItems]);

  const handleBuy = () => {
    let cartList = [];
    if (checkedItems.length > 0) {
      for (let i in cartData) {
        for (let j in checkedItems) {
          if (cartData[i].id == checkedItems[j]) {
            cartList.push(cartData[i]);
          }
        }
      }
    }
    // dispatch(setOrderData(cartList));
    window.location.href = "/payment";
  };

  return (
    <t.Container>
      {viewport <= 990 ? (
        <>
          <t.TxtWrap>
            <t.TxtDiv>
              <t.SmallTxt>
                상품금액(총{" "}
                <span>{checkedItems.length ? checkedItems.length : 0}</span>개)
              </t.SmallTxt>
              <t.SmallTxt>{totalAmount ? totalAmount : 0}원</t.SmallTxt>
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
              <t.SmallTxt className="total">
                {totalAmount ? totalAmount : 0}원
              </t.SmallTxt>
            </t.TxtDiv>
            <t.SmallBtnDiv>
              <MainButton
                width={"100%"}
                fontSize={theme.fc16}
                radius={"30px"}
                padding={"16px 0"}
                onClick={handleBuy}
              >
                주문하기
              </MainButton>
              <a href="/list/전체">계속 쇼핑하기</a>
            </t.SmallBtnDiv>
          </t.TxtWrap>
        </>
      ) : (
        <>
          <t.TopTxt>
            총 주문 상품{" "}
            <span>{checkedItems.length ? checkedItems.length : 0}</span>개
          </t.TopTxt>
          <t.BottomTxt>
            <t.Price>
              <>{totalAmount ? totalAmount : 0}</>원<span>상품금액</span>
            </t.Price>
            +
            <t.Price>
              0원<span>배송비</span>
            </t.Price>
            =
            <t.Price className="total">
              <>{totalAmount ? totalAmount : 0}</>원<span>총 주문금액</span>
            </t.Price>
          </t.BottomTxt>
          <t.BtnDiv>
            <MainButton
              width={"100%"}
              fontSize={theme.fc16}
              radius={"30px"}
              padding={"16px 0"}
              onClick={handleBuy}
            >
              주문하기
            </MainButton>
            <a href="/list/전체">계속 쇼핑하기</a>
          </t.BtnDiv>
        </>
      )}
    </t.Container>
  );
};

export default CartReceipt;
