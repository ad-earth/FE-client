import { useNavigate } from "react-router-dom";

import * as t from "./bestCards.style";
import Card from "../../card/Card";
import { PropsType } from "../bestProducts/bestProducts.type";

const BestCards = (props: PropsType) => {
  const navigate = useNavigate();

  return (
    <t.MainContainer>
      {props?.bestList?.map((x) => {
        return (
          <t.CardWrapper key={x.p_No}>
            <Card
              pThumbnail={x.p_Thumbnail}
              aBrand={x.a_Brand}
              pName={x.p_Name}
              pCost={x.p_Cost}
              pDiscount={x.p_Discount}
              pSoldOut={x.p_Soldout}
              pBest={x.p_Best}
              pNew={x.p_New}
              pSale={x.p_Sale}
              pNo={x.p_No}
            />
          </t.CardWrapper>
        );
      })}
    </t.MainContainer>
  );
};

export default BestCards;
