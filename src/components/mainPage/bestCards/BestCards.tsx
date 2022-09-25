import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as t from "./bestCards.style";
import Card from "../../card/Card";
import { useBestCards } from "./useBestCards";

const BestCards = () => {
  const navigate = useNavigate();
  const bestProducts = useBestCards();
  // const [changePic, setChangePic] = useState(7);

  return (
    <t.MainContainer>
      {bestProducts.map((x, idx) => {
        return (
          <t.CardWrapper
            key={x.p_No}
            onClick={() => navigate(`/detail/main/${x.p_No}`)}
            // onMouseEnter={() => setChangePic(idx)}
            // onMouseLeave={() => setChangePic(7)}
          >
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
            />
          </t.CardWrapper>
        );
      })}
    </t.MainContainer>
  );
};

export default BestCards;
