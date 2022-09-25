import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as t from "./prodInfo.style";
import ProdCarousel from "../../../components/detailPage/prodCarousel/ProdCarousel";
import ProdImg from "../../../components/detailPage/prodImg/ProdImg";
import ProdName from "../../../components/detailPage/prodName/ProdName";
import ProdDesc from "../../../components/detailPage/prodDesc/ProdDesc";
import ProdOpt from "../../../components/detailPage/prodOpt/ProdOpt";
import { useProdInfo } from "./useProdInfo";

const ProdInfo = () => {
  const { prodNo } = useParams();
  const data = useProdInfo();
  //뷰포트 사이즈에 따라 상품 썸네일 carousel로 변경
  const [viewport, setViewport] = useState(visualViewport.width);

  useEffect(() => {
    const resizeListener = () => {
      setViewport(visualViewport.width);
    };
    window.addEventListener("resize", resizeListener);
  });

  return (
    <t.ProdInfoContainer>
      {viewport <= 990 ? <ProdCarousel /> : <ProdImg />}
      <t.InfoWrapper>
        <ProdName
          brand={data.a_Brand}
          name={data.p_Name}
          best={data.p_Best}
          new={data.p_New}
          sale={data.p_Sale}
          soldout={data.p_Soldout}
          price={data.p_Cost}
          discount={data.p_Discount}
        />
        <ProdDesc desc={data.p_Desc} brand={data.a_Brand} />
        <ProdOpt
          option={data.p_Option}
          price={data.p_Cost}
          discount={data.p_Discount}
          like={data.userLike}
          likeCnt={data.p_Like}
        />
      </t.InfoWrapper>
    </t.ProdInfoContainer>
  );
};
export default ProdInfo;
