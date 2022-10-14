import { ReactComponent as Heart } from "../../../assets/icons/heart.svg";
import { ReactComponent as Message } from "../../../assets/icons/message-circle.svg";
import * as t from "./wishCard.style";
import { theme } from "../../../style/theme";
import Card from "../../card/Card";
import CardBadge from "../../listPage/cardBadge/CardBadge";
import useWishCard from "./useWishCard";

import { useNavigate } from "react-router-dom";

interface DataType {
  p_No: number;
  p_Thumbnail: string[];
  p_Category: string;
  a_Brand: string;
  p_Name: string;
  p_Cost: number;
  p_Sale: false;
  p_Discount: number;
  p_New: boolean;
  p_Best: boolean;
  p_Soldout: boolean;
  p_Review: number;
  p_Like: number;
  // p_Option: Array<string | number>[];
  p_Price: number;
  p_Cnt: number;
  o_Status: string;
}
const WishCard = ({ list }: { list: DataType }) => {
  let navigate = useNavigate();
  const { mutate } = useWishCard();

  const heartClick = () => {
    mutate(list.p_No, {
      onSuccess: () => {
        alert("isSuccess");
        navigate("/wish");
      },
    });
  };
  return (
    <t.WishCardBox>
      <Card
        type="wish"
        pThumbnail={list.p_Thumbnail}
        aBrand={list.a_Brand}
        pCost={list.p_Cost}
        pSale={list.p_Sale}
        pDiscount={list.p_Discount}
        pNew={list.p_New}
        pBest={list.p_Best}
        pSoldOut={list.p_Soldout}
        pName={list.p_Name}
        heartClick={heartClick}
      />
      <CardBadge
        pNew={list.p_New}
        pBest={list.p_Best}
        pSoldOut={list.p_Soldout}
        pSale={list.p_Sale}
      />
      <t.Icons>
        <t.IconSpan>
          <Message
            style={{
              color: `${theme.bg09}`,
            }}
          />
          <t.Count>{list.p_Review}</t.Count>
        </t.IconSpan>
        <t.IconSpan>
          <Heart
            fill={`${theme.bg16}`}
            stroke={`${theme.ls16}`}
            onClick={heartClick}
          />
          <t.Count>{list.p_Like}</t.Count>
        </t.IconSpan>
      </t.Icons>
    </t.WishCardBox>
  );
};

export default WishCard;
