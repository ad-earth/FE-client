import * as t from "./CartList.style";
import { theme } from "../../../style/theme";
import { useState } from "react";
import { openDB } from "idb";
import { useAppSelector } from "../../../redux/store";
import { MainButton } from "../../../elements/buttons/Buttons";
import ItemList from "../../../components/cartPage/ItemList";

const token = localStorage.getItem("token");

const CartList = () => {
  const cartData = useAppSelector((state) => state.cartSlice.cartData);
  const [allChecked, setAllChecked] = useState(false);
  const checkedId = useAppSelector((state) => state.cartSlice.checkedItems);
  const handleCheck = () => {
    setAllChecked(!allChecked);
  };

  const delCart = async () => {
    let store;
    const db = await openDB("cart", 1, {
      upgrade(db) {
        store = db.createObjectStore("cart", {
          keyPath: "id",
          autoIncrement: true,
        });
      },
    });
    store = db.transaction("cart", "readwrite").objectStore("cart");
    try {
      for (let i = 0; i < checkedId.length; i++) {
        store.delete(checkedId[i]);
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  // 선택상품 삭제
  const handleDelete = () => {
    if (checkedId.length > 0) {
      delCart();
    }
  };

  if (!token) {
    window.location.href = "/";
  }

  return (
    <t.CartContainer>
      {/* viewport >= 991  */}
      <t.CartHeader>
        <span>장바구니</span>
        <t.Count>{cartData ? cartData.length : "0"}</t.Count>
      </t.CartHeader>

      {/* viewport <= 990 */}
      <t.SmallHeader>
        <t.ProdInfo>
          <t.CheckBox
            type="checkbox"
            onChange={handleCheck}
            checked={allChecked}
          />
          전체선택
        </t.ProdInfo>
        <t.BtnDiv>
          <MainButton
            width={"96px"}
            fontWeight={"normal"}
            radius={"30px"}
            border={`0.5px solid ${theme.ls03}`}
            bgColor={theme.bg01}
            color={theme.fc14}
            hBorder={`0.5px solid ${theme.ls11}`}
            hBgColor={theme.bg01}
          >
            선택상품 삭제
          </MainButton>
          <MainButton
            width={"96px"}
            fontWeight={"normal"}
            radius={"30px"}
            border={`0.5px solid ${theme.ls03}`}
            bgColor={theme.bg01}
            color={theme.fc14}
            hBorder={`0.5px solid ${theme.ls11}`}
            hBgColor={theme.bg01}
          >
            품절상품 삭제
          </MainButton>
        </t.BtnDiv>
      </t.SmallHeader>

      {/* viewport >= 991  */}
      <t.CartItemDiv>
        <t.TopWrapper>
          <t.ProdInfo>
            <t.CheckBox
              type="checkbox"
              onChange={handleCheck}
              checked={allChecked}
            />
            상품정보
          </t.ProdInfo>
          <t.TopInfo className="mid">수량</t.TopInfo>
          <t.TopInfo className="mid">주문금액</t.TopInfo>
          <t.TopInfo className="small">배송정보</t.TopInfo>
        </t.TopWrapper>
        <t.ListWrapper>
          <ItemList allChecked={allChecked} />
        </t.ListWrapper>
      </t.CartItemDiv>
      <t.BtnDiv className="max">
        <MainButton
          width={"96px"}
          fontWeight={"normal"}
          radius={"30px"}
          border={`0.5px solid ${theme.ls03}`}
          bgColor={theme.bg01}
          color={theme.fc14}
          hBorder={`0.5px solid ${theme.ls11}`}
          hBgColor={theme.bg01}
          onClick={() => handleDelete()}
        >
          선택상품 삭제
        </MainButton>
        <MainButton
          width={"96px"}
          fontWeight={"normal"}
          radius={"30px"}
          border={`0.5px solid ${theme.ls03}`}
          bgColor={theme.bg01}
          color={theme.fc14}
          hBorder={`0.5px solid ${theme.ls11}`}
          hBgColor={theme.bg01}
        >
          품절상품 삭제
        </MainButton>
      </t.BtnDiv>
    </t.CartContainer>
  );
};

export default CartList;
