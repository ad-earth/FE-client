import { useEffect, useState } from "react";
import styled from "styled-components";

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
    <ProdInfoContainer>
      {viewport <= 990 ? <ProdCarousel /> : <ProdImg />}
      <InfoWrapper>
        <ProdName />
        <ProdDesc />
        <ProdOpt />
      </InfoWrapper>
    </ProdInfoContainer>
  );
};
export default ProdInfo;

const ProdInfoContainer = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  @media (min-width: 991px) and (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 990px) {
    width: 100%;
    padding: 0px;
    flex-direction: column;
    align-items: center;
  }
`;
const InfoWrapper = styled.div`
  width: 41%;
  display: flex;
  flex-direction: column;
  padding: 0px 15px;
  box-sizing: border-box;
  @media (max-width: 990px) {
    padding: 0px;
    width: 98%;
    margin-top: 20px;
  }
`;
