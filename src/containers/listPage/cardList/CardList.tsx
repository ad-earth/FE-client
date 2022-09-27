import * as t from "./cardList.style";
//pages//
import Card from "../../../components/card/Card";
import CardBadge from "../../../components/listPage/cardBadge/CardBadge";
import CardIcon from "../../../components/listPage/cardIcon/CardIcon";
import CateDrop from "../../../components/listPage/catDrop/CateDrop";
import { CardListType } from "./cardList.type";
import { SProductsType } from "../../searchPage/searchBody/searchPage.type";

const ListPage = (props: CardListType) => {
  return (
    <t.CardArea>
      <CateDrop sort={props.sort} sortClick={props.sortClick} />
      <t.CardWrap>
        {props.products.map((val: SProductsType, i: number) => {
          return (
            <t.CardCp key={i}>
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
              <CardIcon val={val} userLike={props.userLike} />
            </t.CardCp>
          );
        })}
      </t.CardWrap>
    </t.CardArea>
  );
};

export default ListPage;
