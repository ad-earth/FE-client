import * as t from "./cardList.style";
//pages//
import Card from "../../../components/card/Card";
import CardBadge from "../../../components/listPage/cardBadge/CardBadge";
import CardIcon from "../../../components/listPage/cardIcon/CardIcon";
import CateDrop from "../../../components/listPage/catDrop/CateDrop";
import { useCardList } from "./useCardList";

const ListPage = () => {
  const CardListData = useCardList();

  return (
    <t.CardArea>
      <CateDrop />
      <t.CardWrap>
        {CardListData.map((val, i) => {
          return (
            <t.CardCp key={val.p_No}>
              <Card
                pNo={val.p_No}
                pThumbnail={val.p_Thumbnail}
                aBrand={val.a_Brand}
                pName={val.p_Name}
                pCost={val.p_Cost}
                pSale={val.p_Sale}
                pDiscount={val.p_Discount}
                pOption={val.p_Option}
                pNew={val.p_New}
                pBest={val.p_Best}
                pSoldOut={val.p_Soldout}
              />
              <CardBadge
                pNew={val.p_New}
                pBest={val.p_Best}
                pSoldOut={val.p_Soldout}
                pSale={val.p_Sale}
              />
              <CardIcon pReview={val.p_Review} pLike={val.p_Like} />
            </t.CardCp>
          );
        })}
      </t.CardWrap>
    </t.CardArea>
  );
};

export default ListPage;
