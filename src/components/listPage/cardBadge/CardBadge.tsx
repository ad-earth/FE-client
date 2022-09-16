import { Badge } from "../../../elements/Badge";
import * as t from "./CardBaged.style";
import { CardBadgeType } from "./cardBadge.type";

const CardBadge = (props: CardBadgeType) => {
  return (
    <>
      <t.Wrap>
        {props.p_New === true ? (
          <t.Div>
            <Badge type={"new"}>NEW</Badge>{" "}
          </t.Div>
        ) : null}
        {props.p_Best === true ? (
          <t.Div>
            <Badge type={"best"}>BEST</Badge>{" "}
          </t.Div>
        ) : null}
        {props.p_Soldout === true ? (
          <t.Div>
            <Badge type={"soldout"}>SOLDOUT</Badge>{" "}
          </t.Div>
        ) : null}
      </t.Wrap>
    </>
  );
};

export default CardBadge;
