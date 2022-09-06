import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as t from "./bestCards.style";
import Card from "../../card/Card";
import { getMain } from "../../../shared/apis/api";

interface ResponseType {
  a_Brand: string;
  p_Cost: number;
  p_Discount: number;
  p_Name: string;
  p_No: number;
  p_Best: boolean;
  p_New: boolean;
  p_Sale: boolean;
  p_Soldout: boolean;
  p_Thumbnail: string[];
}

const BestCards = () => {
  const navigate = useNavigate();
  const [bestProducts, setBestProducts] = useState<ResponseType[]>([]);
  const [changePic, setChangePic] = useState(7);

  useEffect(() => {
    getMain().then((response) => setBestProducts(response.data.Best));
  }, []);

  return (
    <t.MainContainer>
      {bestProducts.map((x, idx) => {
        return (
          <t.CardWrapper
            key={x.p_No}
            onClick={() => navigate(`/detail/${x.p_No}`)}
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
