import * as t from "./prodName.style";

import { Badge } from "../../../elements/Badge";
import { PropsType } from "./prodName.type";

const ProdName = (props: PropsType) => {
  // 상품 할인가 계산
  let price = props.price * (1 - props.discount / 100);
  return (
    <t.MainContainer>
      <t.NameWrapper>
        <t.Name>
          [{props.brand}] {props.name}
        </t.Name>
        {props.best && <Badge type={"best"}>BEST</Badge>}
        {props.new && <Badge type={"new"}>NEW</Badge>}
        {props.sale && <Badge type={"sale"}>SALE</Badge>}
        {props.soldout && <Badge type={"soldout"}>SOLDOUT</Badge>}
      </t.NameWrapper>
      {props.discount !== 0 ? (
        <t.PriceWrapper>
          <t.Price>{price && price.toLocaleString()}원</t.Price>
          <t.DiscountedPrice>
            {props.price && props.price.toLocaleString()}원
          </t.DiscountedPrice>
        </t.PriceWrapper>
      ) : (
        <t.Price>{props.price && props.price.toLocaleString()}원</t.Price>
      )}
      <t.Line />
    </t.MainContainer>
  );
};

export default ProdName;
