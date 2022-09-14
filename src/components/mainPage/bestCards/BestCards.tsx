import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as t from "./bestCards.style";
import Card from "../../card/Card";
import { useBestCards } from "./useBestCards";

const BestCards = () => {
  const navigate = useNavigate();
  const bestProducts = useBestCards();
  const [changePic, setChangePic] = useState(7);

  return (
    <t.MainContainer>
      {bestProducts.map((x, idx) => {
        return (
          <t.CardWrapper
            key={x.p_No}
            onClick={() => navigate(`/detail/main/${x.p_No}`)}
            onMouseEnter={() => setChangePic(idx)}
            onMouseLeave={() => setChangePic(7)}
          >
            {changePic === idx ? (
              <Card
                p_Thumbnail={x.p_Thumbnail[1]}
                p_Brand={x.a_Brand}
                p_Name={x.p_Name}
                p_Price={x.p_Cost}
                p_Discount={x.p_Discount}
                p_Soldout={x.p_Soldout}
                p_Best={x.p_Best}
                p_New={x.p_New}
                p_Sale={x.p_Sale}
              />
            ) : (
              <Card
                p_Thumbnail={x.p_Thumbnail[0]}
                p_Brand={x.a_Brand}
                p_Name={x.p_Name}
                p_Price={x.p_Cost}
                p_Discount={x.p_Discount}
                p_Soldout={x.p_Soldout}
                p_Best={x.p_Best}
                p_New={x.p_New}
                p_Sale={x.p_Sale}
              />
            )}
          </t.CardWrapper>
        );
      })}
    </t.MainContainer>
  );
};

export default BestCards;
