import * as t from "./cartList.style";
import { theme } from "../../../style/theme";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { CartPayType } from "../../../shared/types/types";
import { MainButton } from "../../../elements/buttons/Buttons";
import ItemList from "../../../components/cartPage/ItemList";
import { getAllCartDB } from "../../../hooks/useAllCartDB";
import { delCartDB } from "../../../shared/utils/delCartDB";
import { setReplace } from "../../../redux/reducer/optionSlice";

const token = localStorage.getItem("token");

const CartList = () => {
  const dispatch = useAppDispatch();
  const [cartData, setCartData] = useState<CartPayType[]>();
  const [allChecked, setAllChecked] = useState(false);
  const checkedId = useAppSelector((state) => state.cartSlice.checkedItems);
  const replace = useAppSelector((state) => state.optionSlice.replace);

  const handleCheck = () => {
    setAllChecked(!allChecked);
  };

  useEffect(() => {
    const result = getAllCartDB();
    result.then((res) => setCartData(res));
  }, []);

  useEffect(() => {
    if (replace) {
      const result = getAllCartDB();
      result.then((res) => setCartData(res));
      dispatch(setReplace(false));
    }
  }, [replace]);

  // 선택상품 삭제
  const handleDelete = () => {
    if (checkedId.length > 0) {
      delCartDB(checkedId);
      dispatch(setReplace(true));
    }
  };

  if (!token) {
    alert("로그인 후 이용해주세요!");
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
            hBgColor={theme.bg07}
            hColor={theme.fc14}
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
            hBgColor={theme.bg07}
            hColor={theme.fc14}
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
          hBgColor={theme.bg07}
          hColor={theme.fc14}
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
          hBgColor={theme.bg07}
          hColor={theme.fc14}
        >
          품절상품 삭제
        </MainButton>
      </t.BtnDiv>
    </t.CartContainer>
  );
};

export default CartList;
