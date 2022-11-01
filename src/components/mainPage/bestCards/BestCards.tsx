import * as t from "./bestCards.style";
import { PropsType } from "../bestProducts/bestProducts.type";
import Card from "../../card/Card";

const BestCards = (props: PropsType) => {
  return (
    <t.MainContainer>
      {props.bestList?.map((best) => (
        <t.CardWrapper key={best.p_No}>
          <Card
            pThumbnail={best.p_Thumbnail}
            aBrand={best.a_Brand}
            pName={best.p_Name}
            pCost={best.p_Cost}
            pDiscount={best.p_Discount}
            pSoldOut={best.p_Soldout}
            pBest={best.p_Best}
            pNew={best.p_New}
            pSale={best.p_Sale}
            pNo={best.p_No}
          />
        </t.CardWrapper>
      ))}
    </t.MainContainer>
  );
};

export default BestCards;
