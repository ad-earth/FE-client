import * as t from "./CartList.style";
import { theme } from "../../../style/theme";
import { MainButton } from "../../../elements/Buttons";
import ItemList from "../../../components/cartPage/ItemList";
import { useAppSelector } from "../../../redux/store";

const CartList = () => {
  const cartData = useAppSelector((state) => state.cartSlice.cartData);

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
          <t.CheckBox type="checkbox" />
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
            <t.CheckBox type="checkbox" />
            상품정보
          </t.ProdInfo>
          <t.TopInfo className="mid">수량</t.TopInfo>
          <t.TopInfo className="mid">주문금액</t.TopInfo>
          <t.TopInfo className="small">배송정보</t.TopInfo>
        </t.TopWrapper>
        <t.ListWrapper>
          <ItemList />
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
