import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { ReactComponent as Message } from "../../../assets/icons/message-circle.svg";
import * as t from "./wishCard.style";
import { theme } from "../../../style/theme";
import Card from "../../card/Card";

interface DataType {
  p_No: number;
  p_Thumbnail: string[];
  p_Category: string;
  a_Brand: string;
  p_Name: string;
  p_Cost: number;
  p_Sale: false;
  p_Discount: number;
  p_Option: Array<
    [string | null, string | null, number | null, number | null, number | null]
  >;
  p_Price: number;
  p_Cnt: number;
  o_Status: string;


  p_Color?: string;
  p_Review?: number;
  p_Like?: number;
}
const WishCard = (pageData: DataType) => {
  console.log(pageData);
  return (
    <t.WishCardBox>
      <t.Icons>
        <t.IconSpan>
          <Message
            style={{
              color: `${theme.bg09}`,
            }}
          />
          <t.Count>{pageData.p_Review}17</t.Count>
        </t.IconSpan>
        <t.IconSpan>
          <Heart fill={`${theme.bg16}`} stroke={`${theme.ls16}`} />
          <t.Count>{pageData.p_Like}10</t.Count>
        </t.IconSpan>
      </t.Icons>
    </t.WishCardBox>
  );
};

export default WishCard;
