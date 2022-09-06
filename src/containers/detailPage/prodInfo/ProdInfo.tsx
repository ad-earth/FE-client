import { useEffect, useState } from "react";

import * as t from "./prodInfo.style";
import ProdCarousel from "../../../components/detailPage/prodCarousel/ProdCarousel";
import ProdImg from "../../../components/detailPage/prodImg/ProdImg";
import ProdName from "../../../components/detailPage/prodName/ProdName";
import ProdDesc from "../../../components/detailPage/prodDesc/ProdDesc";
import ProdOpt from "../../../components/detailPage/prodOpt/ProdOpt";

const ProdInfo = () => {
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
        <ProdName />
        <ProdDesc />
        <ProdOpt />
      </t.InfoWrapper>
    </t.ProdInfoContainer>
  );
};
export default ProdInfo;
