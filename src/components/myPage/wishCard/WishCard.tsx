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
      <Card
        p_Thumbnail={
          "https://cdn.imweb.me/thumbnail/20220428/8a3716a1e9c28.jpg"
        }
        p_Brand={"지구샵"}
        p_Name={"키친클로스(체크)"}
        type={"wish"}
      />
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
