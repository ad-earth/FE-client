import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { ReactComponent as Message } from "../../../assets/icons/message-circle.svg";
import * as t from "./wishCard.style";
import { theme } from "../../../style/theme";
import Card from "../../card/Card";

interface DataType {
  p_Price?: number;
  p_Color?: string;
  p_Review?: number;
  p_Like?: number;
}
const WishCard = (props: DataType) => {
  return (
    <t.WishCardBox>
      <t.Icons>
        <t.IconSpan>
          <Message
            style={{
              color: `${theme.bg09}`,
            }}
          />
          <t.Count>{props.p_Review}17</t.Count>
        </t.IconSpan>
        <t.IconSpan>
          <Heart fill={`${theme.bg16}`} stroke={`${theme.ls16}`} />
          <t.Count>{props.p_Like}10</t.Count>
        </t.IconSpan>
      </t.Icons>
    </t.WishCardBox>
  );
};

export default WishCard;
