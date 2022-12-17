import * as t from "./cardBadge.style";
import { CardBadgeType } from "./cardBadge.type";
import { Badge } from "../../../elements/badge/Badge";

const CardBadge = (props: CardBadgeType) => {
  return (
    <>
      <t.Wrap>
        {props.pNew === true ? (
          <t.Div>
            <Badge type={"new"}>NEW</Badge>{" "}
          </t.Div>
        ) : null}
        {props.pBest === true ? (
          <t.Div>
            <Badge type={"best"}>BEST</Badge>{" "}
          </t.Div>
        ) : null}
        {props.pSoldOut === true ? (
          <t.Div>
            <Badge type={"soldout"}>SOLDOUT</Badge>{" "}
          </t.Div>
        ) : null}
        {props.pSale === true ? (
          <t.Div>
            <Badge type={"sale"}>SALE</Badge>{" "}
          </t.Div>
        ) : null}
      </t.Wrap>
    </>
  );
};

export default CardBadge;
