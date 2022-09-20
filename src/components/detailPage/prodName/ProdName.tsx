import * as t from "./prodName.style";

import { Badge } from "../../../elements/Badge";
import { PropsType } from "./prodName.type";

const ProdName = (props: PropsType) => {
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
      {/* <t.Price>{props.price.toLocaleString("ko-KR")}원</t.Price> */}
      <t.Line />
    </t.MainContainer>
  );
};

export default ProdName;
