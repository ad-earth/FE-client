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
  const data = useProdInfo(prodNo);
  const [product, setProduct] = useState(null);
  useEffect(() => {
    setProduct(data.product);
  }, [data]);

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
      {viewport <= 990 ? (
        <ProdCarousel img={product && product.p_Thumbnail} />
      ) : (
        <ProdImg img={product && product.p_Thumbnail} />
      )}
      <t.InfoWrapper>
        <ProdName
          brand={product && product.a_Brand}
          name={product && product.p_Name}
          best={product && product.p_Best}
          new={product && product.p_New}
          sale={product && product.p_Sale}
          soldout={product && product.p_Soldout}
          price={product && product.p_Cost}
          discount={product && product.p_Discount}
        />
        <ProdDesc
          desc={product && product.p_Desc}
          brand={product && product.a_Brand}
        />
        <ProdOpt
          option={product && product.p_Option}
          price={product && product.p_Cost}
          discount={product && product.p_Discount}
          like={data.userLike}
          likeCnt={product && product.p_Like}
        />
      </t.InfoWrapper>
    </t.ProdInfoContainer>
  );
};
export default ProdInfo;
