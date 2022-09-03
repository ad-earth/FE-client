import * as t from "./CartItemStyle";
import ItemList from "./ItemList";

const CartItem = () => {
  return (
    <t.CartDiv>
      <t.TopWrapper>
        <t.ProdInfo>
          <t.CheckBox type="checkbox" />
          상품정보
        </t.ProdInfo>
        <t.TopInfo className="mid">수량</t.TopInfo>
        <t.TopInfo className="mid">주문금액</t.TopInfo>
        <t.TopInfo className="small">배송 정보</t.TopInfo>
      </t.TopWrapper>
      <t.ListWrapper>
        <ItemList />
        <ItemList />
        <ItemList />
      </t.ListWrapper>
    </t.CartDiv>
  );
};

export default CartItem;
